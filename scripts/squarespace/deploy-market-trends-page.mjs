import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const PROFILE_DIR = path.resolve(".squarespace", "profile");
const ADMIN_URL = "https://kazoo-dalmatian-g9t3.squarespace.com/config/pages";
const TEMPLATE_COLLECTION_ID = "69d7876c03b8bf69f5679377";
const TEMPLATE_SECTION_ID = "69d789b2fe5ac426223b1d95";
const TEMPLATE_BLOCK_ID = "yui_3_17_2_1_1775732590002_737";
const PAGE_TITLE = "Market Trends";
const PAYLOAD_PATH = path.resolve("squarespace", "market-trends-page.html");

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function hexId(length = 24) {
  let value = "";
  while (value.length < length) {
    value += Math.floor(Math.random() * 16).toString(16);
  }
  return value.slice(0, length);
}

function codeBlockId() {
  return `yui_3_17_2_1_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
}

async function launchSession() {
  return chromium.launchPersistentContext(PROFILE_DIR, {
    headless: true,
    viewport: { width: 1440, height: 960 },
  });
}

async function getCsrfToken(page) {
  for (let attempt = 0; attempt < 6; attempt += 1) {
    if (attempt > 0) {
      await page.waitForTimeout(1000);
    }
    const token = await page.evaluate(() => {
      return (
        window.Static?.SQUARESPACE_CONTEXT?.csrfToken ||
        window.SQUARESPACE_CONTEXT?.csrfToken ||
        document.querySelector('meta[name="csrf-token"]')?.content ||
        null
      );
    });
    if (token) {
      return token;
    }
  }
  return null;
}

async function fetchPageRecord(page, csrfToken, collectionId) {
  return page.evaluate(
    async ({ id, csrf }) => {
      const response = await fetch(`/api/page-sections/by-collection-ids?collectionIds=${id}`, {
        headers: { "X-CSRF-Token": csrf },
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch page sections for ${id}: ${response.status}`);
      }
      const records = await response.json();
      return records[0] ?? null;
    },
    { id: collectionId, csrf: csrfToken },
  );
}

function buildSectionFromTemplate(templateSection, html) {
  const section = clone(templateSection);
  const templateGridItem = section.fluidEngineContext.gridContents.find(
    (item) => item?.content?.value?.id === TEMPLATE_BLOCK_ID,
  );
  const templateChild = section.childrenEstimatedLayouts.find((item) => item.refId === TEMPLATE_BLOCK_ID);

  if (!templateGridItem || !templateChild) {
    throw new Error("Could not find template code block.");
  }

  const nextSectionId = hexId(24);
  const nextContextId = hexId(24);
  const nextBlockId = codeBlockId();
  const nextItem = clone(templateGridItem);
  const nextChild = clone(templateChild);

  section.id = nextSectionId;
  section.sourceType = "blank";
  delete section.sourceSectionId;
  section.fluidEngineContext.id = nextContextId;
  section.fluidEngineContext.gridContents = [nextItem];
  nextItem.content.value.id = nextBlockId;
  nextItem.content.value.value = {
    html,
    wysiwyg: {
      engine: "code",
      isSource: false,
      mode: "htmlmixed",
      source: html,
    },
  };
  nextChild.refId = nextBlockId;
  section.childrenEstimatedLayouts = [nextChild];

  return section;
}

async function savePageSections(page, csrfToken, record, sections) {
  return page.evaluate(
    async ({ pageSectionsId, collectionId, updatedOn, nextSections, csrf }) => {
      const response = await fetch(`/api/page-sections/${pageSectionsId}/collection/${collectionId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrf,
        },
        body: JSON.stringify({
          sections: nextSections,
          updatedOn,
        }),
      });

      const text = await response.text();
      let data = null;
      try {
        data = text ? JSON.parse(text) : null;
      } catch {
        data = { raw: text };
      }
      return { ok: response.ok, status: response.status, data };
    },
    {
      pageSectionsId: record.id,
      collectionId: record.collectionId,
      updatedOn: record.updatedOn,
      nextSections: sections,
      csrf: csrfToken,
    },
  );
}

async function getExistingPageCollectionId(page, title) {
  const row = page.locator('[data-test="pages-panel-item"]', { hasText: title }).first();
  if (!(await row.count())) {
    return null;
  }

  const requestPromise = page.waitForRequest((request) =>
    request.url().includes("/api/commondata/GetCollectionSettings?collectionId="),
  );

  await row.locator('[data-test="collection-settings"]').click();
  const request = await requestPromise;
  return new URL(request.url()).searchParams.get("collectionId");
}

async function createPage(page, title) {
  await page.locator('[title="Add a new page to the \\"Main Navigation\\" group"]').click({ force: true });
  await page.waitForTimeout(600);
  await page.getByText("Add Blank", { exact: true }).click();
  await page.waitForTimeout(400);
  await page.getByText("Page", { exact: true }).click();

  const titleInput = page.locator('input[type="text"]:visible').last();
  await titleInput.waitFor({ state: "visible", timeout: 10000 });

  const requestPromise = page.waitForRequest(
    (request) => request.url().includes("/api/widget/UpdateNavigation") && request.method() === "POST",
  );

  await titleInput.fill(title);
  await titleInput.press("Enter");

  const request = await requestPromise;
  const payload = request.postDataJSON();
  const item = payload?.navigation?.items?.find((entry) => entry?.title === title);
  if (!item?.collectionId) {
    throw new Error(`Could not determine collection ID for ${title}.`);
  }
  await page.waitForTimeout(1200);
  return item.collectionId;
}

async function ensurePage(page, title) {
  const existingId = await getExistingPageCollectionId(page, title);
  if (existingId) {
    return existingId;
  }
  return createPage(page, title);
}

const html = await fs.readFile(PAYLOAD_PATH, "utf8");
const context = await launchSession();
const page = context.pages()[0] ?? (await context.newPage());

try {
  await page.goto(ADMIN_URL, { waitUntil: "networkidle", timeout: 60000 });

  const csrfToken = await getCsrfToken(page);
  if (!csrfToken) {
    throw new Error("Could not find Squarespace CSRF token in the admin session.");
  }

  const templateRecord = await fetchPageRecord(page, csrfToken, TEMPLATE_COLLECTION_ID);
  if (!templateRecord) {
    throw new Error(`No page-sections record found for ${TEMPLATE_COLLECTION_ID}.`);
  }

  const templateSection = templateRecord.sections.find((section) => section.id === TEMPLATE_SECTION_ID);
  if (!templateSection) {
    throw new Error("Could not find the template section.");
  }

  const collectionId = await ensurePage(page, PAGE_TITLE);
  const record = await fetchPageRecord(page, csrfToken, collectionId);
  if (!record) {
    throw new Error(`No page-sections record found for ${collectionId}.`);
  }

  const nextSections = [buildSectionFromTemplate(templateSection, html)];
  const saveResult = await savePageSections(page, csrfToken, record, nextSections);
  if (!saveResult.ok) {
    throw new Error(
      `Squarespace save failed for ${PAGE_TITLE} with status ${saveResult.status}: ${JSON.stringify(saveResult.data)}`,
    );
  }

  console.log(JSON.stringify({ title: PAGE_TITLE, collectionId, status: saveResult.status }, null, 2));
} finally {
  await context.close();
}
