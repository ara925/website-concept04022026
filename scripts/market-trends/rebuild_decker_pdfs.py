from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
import re
import unicodedata

import fitz
from pypdf import PdfReader
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.platypus import (
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)


ROOT = Path(__file__).resolve().parents[2]
SOURCE_DIR = ROOT / "Market Trends" / "Completed Market Trends Reports"
OUTPUT_DIR = ROOT / "public" / "market-trends" / "pdfs"


@dataclass
class ReportDef:
    source_name: str
    output_slug: str
    issue_label: str
    title: str
    category: str
    intro: str
    parser: str


REPORTS = [
    ReportDef(
        "Market Trends August 2023.pdf",
        "decker-market-trends-august-2023",
        "August 2023",
        "Market Trends",
        "Market Update",
        "As active brokers and capital facilitators, we constantly engage with investors, operators, and lenders to stay abreast of the seniors housing and long-term care market. This brief report highlights key insights gathered from recent conversations with industry stakeholders of all types.",
        "bullets",
    ),
    ReportDef(
        "Market Trends October 2023.pdf",
        "decker-market-trends-october-2023",
        "October 2023",
        "Market Trends",
        "Market Update",
        "As active brokers and capital facilitators, we constantly engage with investors, operators, and lenders to stay abreast of the seniors housing and long-term care market. This brief report highlights key insights gathered from recent conversations with industry stakeholders of all types.",
        "bullets",
    ),
    ReportDef(
        "Market Trends Update January 2024.pdf",
        "decker-market-trends-update-january-2024",
        "January 2024",
        "Market Trends Update",
        "Market Update",
        "As active brokers and capital facilitators, we constantly engage with investors, operators, and lenders to stay abreast of the seniors housing and long-term care market. This brief report highlights key insights gathered from recent conversations with industry stakeholders of all types.",
        "bullets",
    ),
    ReportDef(
        "Market Trends Update April 2024.pdf",
        "decker-market-trends-update-april-2024",
        "April 2024",
        "Market Trends Update",
        "Market Update",
        "As active brokers and capital facilitators, we constantly engage with investors, operators, and lenders to stay abreast of the seniors housing and long-term care market. This brief report highlights key insights gathered from recent conversations with industry stakeholders of all types.",
        "bullets",
    ),
    ReportDef(
        "Market Trends Update July 2024.pdf",
        "decker-market-trends-update-july-2024",
        "July 2024",
        "Market Trends Update",
        "Market Update",
        "As active brokers and capital facilitators, we constantly engage with investors, operators, and lenders to stay abreast of the seniors housing and long-term care market. This brief report highlights key insights gathered from recent conversations with industry stakeholders of all types.",
        "bullets",
    ),
    ReportDef(
        "Market Trends Update November 2024.pdf",
        "decker-market-trends-update-november-2024",
        "November 2024",
        "Market Trends Update",
        "Market Update",
        "As active brokers and capital facilitators, we constantly engage with investors, operators, and lenders to stay abreast of the seniors housing and long-term care market. This brief report highlights key insights gathered from recent conversations with industry stakeholders of all types.",
        "bullets",
    ),
    ReportDef(
        "Market Trends Report February 2025.pdf",
        "decker-market-trends-report-february-2025",
        "February 2025",
        "Market Trends Report",
        "Quarterly Report",
        "As active brokers and capital facilitators, we constantly engage with investors, operators, and lenders to stay abreast of the seniors housing and long-term care market. This brief report highlights key insights gathered from recent conversations with industry stakeholders of all types.",
        "bullets",
    ),
    ReportDef(
        "Market Trends Report May 2025.pdf",
        "decker-market-trends-report-may-2025",
        "May 2025",
        "Market Trends Report",
        "Quarterly Report",
        "As active brokers and capital facilitators, we constantly engage with investors, operators, and lenders to stay abreast of the seniors housing and long-term care market. This brief report highlights key insights gathered from recent conversations with industry stakeholders of all types.",
        "bullets",
    ),
    ReportDef(
        "Market Trends Report August 2025.pdf",
        "decker-market-trends-report-august-2025",
        "August 2025",
        "Market Trends Report",
        "Quarterly Report",
        "As active brokers and capital facilitators, we constantly engage with investors, operators, and lenders to stay abreast of the seniors housing and long-term care market. This brief report highlights key insights gathered from recent conversations with industry stakeholders of all types.",
        "bullets",
    ),
    ReportDef(
        "Market Trends Report February 2026.pdf",
        "decker-market-trends-report-february-2026",
        "February 2026",
        "Market Trends Report",
        "Quarterly Report",
        "As active brokers and capital facilitators, we constantly engage with investors, operators, and lenders to stay abreast of the seniors housing and long-term care market. This brief report highlights key insights gathered from recent conversations with industry stakeholders of all types.",
        "bullets",
    ),
    ReportDef(
        "Market Trends Report April 2026.pdf",
        "decker-market-trends-report-april-2026",
        "April 2026",
        "Market Trends Report",
        "Quarterly Report",
        "As active brokers and capital facilitators, we regularly engage with investors, operators, and lenders to stay current on the seniors housing and long-term care market. This brief highlights twelve signals drawn from recent conversations with industry stakeholders of all types.",
        "numbered",
    ),
]


def normalize(text: str) -> str:
    text = unicodedata.normalize("NFKC", text)
    replacements = {
        "\u2018": "'",
        "\u2019": "'",
        "\u201c": '"',
        "\u201d": '"',
        "\u2013": "-",
        "\u2014": "-",
        "\u00a0": " ",
        "\u202f": " ",
        "\ufb00": "ff",
        "\ufb01": "fi",
        "\ufb02": "fl",
        "\ufb03": "ffi",
        "\ufb04": "ffl",
    }
    for src, dst in replacements.items():
        text = text.replace(src, dst)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def stop_trim(text: str) -> str:
    stops = [
        "55 E. Monroe",
        "55 E Monroe",
        "Helios Healthcare Advisors",
        "THE DECKER TEAM",
        "YOUR COMMUNITY. OUR COMMITMENT.",
        "© 2026 DECKER HEALTHCARE GROUP",
    ]
    cut = len(text)
    for marker in stops:
        idx = text.find(marker)
        if idx != -1:
            cut = min(cut, idx)
    return text[:cut].strip(" -;,.")


def read_first_page_text(pdf_path: Path) -> str:
    reader = PdfReader(str(pdf_path))
    text = reader.pages[0].extract_text() or ""
    return normalize(text)


def read_fitz_page_text(pdf_path: Path, page_index: int = 0) -> str:
    doc = fitz.open(pdf_path)
    try:
        text = doc.load_page(page_index).get_text("text")
        return normalize(text)
    finally:
        doc.close()


def extract_bullets(pdf_path: Path, issue_label: str) -> list[str]:
    text = read_first_page_text(pdf_path)
    anchor = text.find(issue_label)
    if anchor != -1:
        text = text[anchor + len(issue_label) :]
    parts = [normalize(part) for part in text.split("•")]
    bullets: list[str] = []
    for part in parts[1:]:
        item = stop_trim(part)
        if not item:
            continue
        bullets.append(item)
    return bullets


def extract_numbered_april_2026(pdf_path: Path) -> list[str]:
    text = read_fitz_page_text(pdf_path, 0)
    # Remove the cover and footer scaffolding.
    start = text.find("0 1")
    if start == -1:
        raise ValueError("Could not find numbered section start in April 2026 report.")
    end = text.find("©")
    if end == -1:
        end = len(text)
    text = text[start:end].strip()
    matches = list(re.finditer(r"(0 ?[1-9]|1 ?[0-2]) ", text))
    bullets: list[str] = []
    for i, match in enumerate(matches):
        s = match.end()
        e = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        item = normalize(text[s:e])
        if item:
            bullets.append(item)
    return bullets


def parse_bullets(report: ReportDef) -> list[str]:
    pdf_path = SOURCE_DIR / report.source_name
    if report.parser == "numbered":
        return extract_numbered_april_2026(pdf_path)
    return extract_bullets(pdf_path, report.issue_label)


def build_styles():
    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="MTKicker",
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=12,
            textColor=colors.HexColor("#3b82f6"),
            spaceAfter=12,
            uppercase=True,
            tracking=1.4,
        )
    )
    styles.add(
        ParagraphStyle(
            name="MTIssue",
            fontName="Helvetica-Bold",
            fontSize=14,
            leading=18,
            textColor=colors.HexColor("#3b82f6"),
            spaceAfter=8,
            uppercase=True,
            tracking=1.2,
        )
    )
    styles.add(
        ParagraphStyle(
            name="MTTitle",
            fontName="Helvetica-Bold",
            fontSize=28,
            leading=30,
            textColor=colors.white,
            spaceAfter=18,
            uppercase=True,
        )
    )
    styles.add(
        ParagraphStyle(
            name="MTIntro",
            fontName="Helvetica",
            fontSize=10.6,
            leading=16,
            textColor=colors.HexColor("#d9e3f3"),
            spaceAfter=18,
        )
    )
    styles.add(
        ParagraphStyle(
            name="MTBullet",
            fontName="Helvetica",
            fontSize=9.4,
            leading=14,
            textColor=colors.HexColor("#112033"),
            leftIndent=18,
            firstLineIndent=-18,
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            name="MTPageHeading",
            fontName="Helvetica-Bold",
            fontSize=16,
            leading=18,
            textColor=colors.HexColor("#09111f"),
            spaceAfter=10,
        )
    )
    return styles


STYLES = build_styles()


def draw_brand_wordmark(canvas, x: float, y: float, white: bool) -> None:
    color = colors.white if white else colors.HexColor("#09111f")
    muted = colors.HexColor("#d7e1f2") if white else colors.HexColor("#41516a")
    canvas.saveState()
    canvas.setFillColor(color)
    canvas.setFont("Helvetica-Bold", 17)
    canvas.drawString(x, y, "DECKER")
    canvas.setFont("Helvetica", 6.8)
    canvas.setFillColor(muted)
    canvas.drawString(x, y - 9, "HEALTHCARE GROUP")
    canvas.restoreState()


def draw_cover(canvas, doc, report: ReportDef) -> None:
    width, height = letter
    canvas.saveState()
    canvas.setFillColor(colors.HexColor("#060d19"))
    canvas.rect(0, 0, width, height, stroke=0, fill=1)
    canvas.setStrokeColor(colors.HexColor("#16345f"))
    canvas.setLineWidth(0.7)
    for x in range(36, int(width), 62):
        canvas.line(x, 0, x, height)
    for y in range(40, int(height), 62):
        canvas.line(0, y, width, y)
    canvas.setFillColor(colors.HexColor("#0d1f37"))
    canvas.circle(width - 86, height - 88, 110, stroke=0, fill=1)

    draw_brand_wordmark(canvas, 52, height - 58, white=True)

    canvas.setFillColor(colors.HexColor("#3b82f6"))
    canvas.setFont("Helvetica-Bold", 9)
    canvas.drawString(52, height - 132, "SENIORS HOUSING AND LONG-TERM CARE")

    issue_width = stringWidth(report.issue_label.upper(), "Helvetica-Bold", 10)
    canvas.setFillColor(colors.HexColor("#9fb0c9"))
    canvas.setFont("Helvetica-Bold", 10)
    canvas.drawString(width - 52 - issue_width, height - 58, report.issue_label.upper())
    category_width = stringWidth(report.category.upper(), "Helvetica-Bold", 8.5)
    canvas.setFillColor(colors.HexColor("#3b82f6"))
    canvas.setFont("Helvetica-Bold", 8.5)
    canvas.drawString(width - 52 - category_width, height - 76, report.category.upper())

    canvas.setStrokeColor(colors.HexColor("#3b82f6"))
    canvas.setLineWidth(2)
    canvas.line(52, height - 170, 92, height - 170)

    canvas.setFillColor(colors.white)
    canvas.setFont("Helvetica-Bold", 34)
    canvas.drawString(52, height - 230, "MARKET")
    canvas.drawString(52, height - 268, "TRENDS")

    canvas.setFillColor(colors.HexColor("#dce7f8"))
    canvas.setFont("Helvetica-Bold", 18)
    canvas.drawString(52, height - 304, report.issue_label.upper())

    canvas.setFillColor(colors.HexColor("#d7e1f2"))
    intro_lines = report.intro.split(". ")
    text = canvas.beginText(52, height - 350)
    text.setFont("Helvetica", 11)
    text.setLeading(17)
    max_width = width - 104
    intro = report.intro
    words = intro.split()
    line = ""
    for word in words:
        test = f"{line} {word}".strip()
        if stringWidth(test, "Helvetica", 11) > max_width:
            text.textLine(line)
            line = word
        else:
            line = test
    if line:
        text.textLine(line)
    canvas.drawText(text)

    canvas.setFillColor(colors.HexColor("#99abc6"))
    canvas.setFont("Helvetica-Bold", 8)
    canvas.drawString(52, 28, "DECKERHEALTHCARE.COM  |  INFO@DECKERHEALTHCARE.COM")
    canvas.drawRightString(width - 52, 28, "01")
    canvas.restoreState()


def draw_inner_page(canvas, doc, report: ReportDef) -> None:
    width, height = letter
    canvas.saveState()
    canvas.setFillColor(colors.white)
    canvas.rect(0, 0, width, height, stroke=0, fill=1)
    canvas.setFillColor(colors.HexColor("#09111f"))
    canvas.rect(0, height - 62, width, 62, stroke=0, fill=1)
    draw_brand_wordmark(canvas, 44, height - 26, white=True)
    canvas.setFillColor(colors.HexColor("#8ea7c9"))
    canvas.setFont("Helvetica-Bold", 8.5)
    canvas.drawRightString(width - 44, height - 26, report.issue_label.upper())
    canvas.setFillColor(colors.HexColor("#3b82f6"))
    canvas.setFont("Helvetica-Bold", 7.5)
    canvas.drawRightString(width - 44, height - 38, report.category.upper())
    canvas.setFillColor(colors.HexColor("#09111f"))
    canvas.rect(0, 0, width, 28, stroke=0, fill=1)
    canvas.setFillColor(colors.HexColor("#a8bdd7"))
    canvas.setFont("Helvetica-Bold", 7.8)
    canvas.drawString(44, 10, "DECKER HEALTHCARE GROUP  |  INFO@DECKERHEALTHCARE.COM  |  DECKERHEALTHCARE.COM")
    canvas.drawRightString(width - 44, 10, f"{canvas.getPageNumber():02d}")
    canvas.restoreState()


def build_story(report: ReportDef, bullets: list[str]) -> list:
    story: list = []
    story.append(Spacer(1, 8.6 * inch))
    story.append(PageBreak())
    story.append(Paragraph("Market Signals", STYLES["MTPageHeading"]))
    for index, bullet in enumerate(bullets, 1):
        safe = (
            bullet.replace("&", "&amp;")
            .replace("<", "&lt;")
            .replace(">", "&gt;")
        )
        story.append(Paragraph(f"<b>{index:02d}.</b> {safe}", STYLES["MTBullet"]))
    return story


def build_pdf(report: ReportDef, bullets: list[str]) -> int:
    output_path = OUTPUT_DIR / f"{report.output_slug}.pdf"
    output_path.parent.mkdir(parents=True, exist_ok=True)

    doc = SimpleDocTemplate(
        str(output_path),
        pagesize=letter,
        leftMargin=0.7 * inch,
        rightMargin=0.7 * inch,
        topMargin=0.95 * inch,
        bottomMargin=0.58 * inch,
        title=f"{report.title} - {report.issue_label}",
        author="Decker Healthcare Group",
    )
    story = build_story(report, bullets)
    doc.build(
        story,
        onFirstPage=lambda c, d: draw_cover(c, d, report),
        onLaterPages=lambda c, d: draw_inner_page(c, d, report),
    )
    return len(PdfReader(str(output_path)).pages)


def main() -> None:
    results = []
    for report in REPORTS:
        bullets = parse_bullets(report)
        if not bullets:
            raise RuntimeError(f"No bullets extracted for {report.source_name}")
        page_count = build_pdf(report, bullets)
        results.append((report.output_slug, len(bullets), page_count))

    for slug, bullet_count, page_count in results:
        print(f"{slug}: {bullet_count} items, {page_count} pages")


if __name__ == "__main__":
    main()
