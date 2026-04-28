import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const PROFILE_DIR = path.resolve(".squarespace", "profile");
const ADMIN_URL =
  "https://kazoo-dalmatian-g9t3.squarespace.com/config/pages/website-tools";
const TEAM_COLLECTION_ID = "69d7876c03b8bf69f5679377";
const TEAM_SECTION_ID = "69d789b2fe5ac426223b1d95";
const TEAM_BLOCK_ID = "yui_3_17_2_1_1775732590002_737";
const PAYLOAD_PATH = path.resolve("squarespace", "team-page-code-block.html");
const MARKER = 'data-decker-team-gallery-page="true"';

function clone(value) {
  return JSON.parse(JSON.stringify(value));
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

function buildUpdatedSections(record, html) {
  const sections = clone(record.sections);
  const section = sections.find((entry) => entry.id === TEAM_SECTION_ID);

  if (!section) {
    throw new Error(`Could not find team section ${TEAM_SECTION_ID}.`);
  }

  const block = section.fluidEngineContext?.gridContents?.find(
    (item) => item?.content?.value?.id === TEAM_BLOCK_ID,
  );

  if (!block) {
    throw new Error(`Could not find team code block ${TEAM_BLOCK_ID}.`);
  }

  block.content.value.value = {
    html,
    wysiwyg: {
      engine: "code",
      isSource: false,
      mode: "htmlmixed",
      source: html,
    },
  };

  return sections;
}

async function savePageSections(page, csrfToken, record, sections) {
  return page.evaluate(
    async ({ pageSectionsId, collectionId, updatedOn, nextSections, csrf }) => {
      const response = await fetch(
        `/api/page-sections/${pageSectionsId}/collection/${collectionId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrf,
          },
          body: JSON.stringify({
            sections: nextSections,
            updatedOn,
          }),
        },
      );

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

const html = await fs.readFile(PAYLOAD_PATH, "utf8");
if (!html.includes(MARKER)) {
  throw new Error(`Payload file does not include marker ${MARKER}.`);
}

const context = await launchSession();
const page = await context.newPage();

try {
  await page.goto(ADMIN_URL, { waitUntil: "networkidle", timeout: 60000 });

  const csrfToken = await getCsrfToken(page);
  if (!csrfToken) {
    throw new Error("Could not find Squarespace CSRF token in the admin session.");
  }

  const record = await fetchPageRecord(page, csrfToken, TEAM_COLLECTION_ID);
  if (!record) {
    throw new Error(`No page-sections record found for ${TEAM_COLLECTION_ID}.`);
  }

  const nextSections = buildUpdatedSections(record, html);
  const saveResult = await savePageSections(page, csrfToken, record, nextSections);

  if (!saveResult.ok) {
    throw new Error(
      `Squarespace save failed with status ${saveResult.status}: ${JSON.stringify(saveResult.data)}`,
    );
  }

  console.log(
    JSON.stringify(
      {
        collectionId: TEAM_COLLECTION_ID,
        pageSectionsId: record.id,
        sectionCount: nextSections.length,
        status: saveResult.status,
      },
      null,
      2,
    ),
  );
} finally {
  await context.close();
}
