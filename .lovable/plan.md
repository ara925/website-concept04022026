

# Rebrand to Decker Healthcare Group

## Changes

1. **Copy logo** to `src/assets/decker-logo.png`

2. **Navbar** — Replace "HELIOS HCA" text with the Decker logo image (sized appropriately ~h-10) as the home link

3. **Footer** — Replace "Helios HCA" brand name with Decker logo + "Decker Healthcare Group" text; update copyright to "Decker Healthcare Group"

4. **All pages** — Find-and-replace all instances of "Helios" with "Decker Healthcare Group" or "Decker" as contextually appropriate:
   - Index.tsx: hero subtitle, "The Helios Difference" → "The Decker Difference", newsletter section
   - About.tsx: hero, "Why Helios" → "Why Decker", philosophy text, team member bios (replace "Helios Healthcare Advisory" with "Decker Healthcare Group")
   - Services.tsx: no direct Helios references expected
   - TrackRecord.tsx: deal summaries mentioning "Helios"
   - DealDetail.tsx: deal descriptions mentioning "Helios"
   - Careers.tsx: "Why Helios" → "Why Decker", culture text
   - Contact.tsx: office info "Helios Healthcare Advisory" → "Decker Healthcare Group"

5. **Footer email** — Update `info@helioshca.com` → `info@deckerhealthcare.com`

6. **Update memory** — Reflect the new company name

## Technical notes
- Logo is dark/black on transparent — works well on dark backgrounds with a CSS `invert` + `brightness` filter, or we can leave it as-is if the dark shield icon looks good on navy. Will add `filter: brightness(0) invert(1)` to make it white on dark nav.
- All text changes are string replacements across ~8 files

