# Good Websites — Design System

> Good websites for good businesses. Happy, charming, easy-going, bright.

Good Websites is a small, friendly website agency (studio voice: Bristol, UK).
They build bright, fast, characterful websites and brands for good businesses —
bakeries, swim clubs, coffee roasters, the local good guys. The brand is **bold &
poppy**: big confident type, saturated colour blocks, ink outlines and hard
"sticker" shadows, all sitting on warm cream paper.

This project is the design system: tokens, fonts, brand assets, reusable React
components, a marketing-website UI kit, and a pitch/proposal slide template.

---

## Sources & provenance

This is a **from-scratch brand** — there was no existing codebase, Figma file, or
brand kit. The identity here was designed to a brief:

- **Brief:** "Good Websites, a website agency that creates good websites for good
  businesses. Happy, charming, easy going, bright."
- **Agreed direction (with the client):** Bold & poppy · sunny gold anchor ·
  Excon + Ranade typefaces · marketing website + slide-deck surfaces.
- **Reference vibes the client shared:** outseta.com, instrument.com,
  hellofunction.com, **univer.se** (the favourite), granola.ai.

Everything visual here is original work for Good Websites. If a real brand kit or
codebase exists, re-attach it and we'll reconcile.

---

## Content fundamentals — how Good Websites writes

The voice is the brand. Get this right and everything else follows.

- **Warm, plain, human.** Write like a good person talking. Short sentences. No
  jargon, no buzzwords, no "leverage / solutions / synergy."
  *e.g.* "We make good websites for good businesses."
- **"We" and "you."** First-person plural for the studio ("we build", "we'll send
  back ideas"), second person for the reader ("your good business"). Friendly and
  direct, never corporate "the client."
- **Cheerful, lightly playful.** A wink is welcome, cheese is not.
  *e.g.* "no jargon, no drama", "we keep things sunny", "the easiest, sunniest
  project we've ever run."
- **Confident, not boastful.** Claims are concrete and modest: "Live in ~3 weeks",
  "Loved by 120+ good businesses", "+42% online orders." Numbers over adjectives.
- **Sentence case everywhere.** Headlines and buttons are sentence case
  ("Start a project", "Let's make you a good one"). UPPERCASE is reserved for tiny
  eyebrow labels with wide tracking ("OUR WORK", "SERVICES").
- **The word "good" is a motif** — lean on it, but don't wear it out (one strong
  use per screen beats five weak ones).
- **Punctuation:** real apostrophes and quotes (’ “ ”), em dashes for asides,
  ampersands in short labels ("SEO & Care", "Fern & Field").
- **Emoji:** **no.** The brand expresses warmth through colour, shape and the sun
  mark — never emoji. (The one playful glyph is the ☀ sun, and that's a logo, not
  an emoji.)
- **Sun vocabulary** ("bright", "sunny", "good times", "warm") is the house
  metaphor — use it sparingly for flavour.

---

## Visual foundations

**Personality:** bold & poppy, but grounded and warm. Confident scale, generous
white(cream)space, a few saturated colour blocks, and a tactile "cut-out sticker"
quality from ink outlines + hard offset shadows.

- **Colour.** Anchored by **Sun gold** (`--sun-400 #FFC838` hero / `--sun-500`
  primary). Text and outlines are **warm ink** (`--ink-900 #1A1611`, never pure
  black). Backgrounds are **cream paper** (`--paper-50 #FDFAF3`), not white. A tight
  set of **poppy accents** — coral, grass, sky, grape — power colour blocks and
  project cards. Use **one** dominant colour per block; let the cream breathe. Ink
  reads on gold; cream/white reads on ink, coral, grass, sky, grape.
- **Type.** **Excon** (a characterful rounded grotesque) for display & headings —
  set big at Medium (500), tight tracking (`-0.02 to -0.03em`), line-height ~1.0.
  **Ranade** (a clean humanist sans) for everything else — UI, body, labels; body
  at 17px / 1.5 (Ranade 400; reserve Light 300 for large leads). Eyebrows are
  Ranade 700, 11px, UPPERCASE, `0.14em` tracking. The display/text contrast is the
  type signature — don't set headlines in Ranade. Excon Medium + Ranade Light are
  self-hosted (`assets/fonts/`); other weights load from Fontshare.
- **Spacing & layout.** 8px grid (`--space-*`). Containers max ~1200–1360px with a
  fluid gutter. Sections breathe (`--section-y`, ~4–8rem). Layouts are mostly
  honest grids; energy comes from colour and scale, not chaos. Occasional
  decorative ring/glow on hero & closing moments.
- **Backgrounds.** Solid warm fields — cream (`--paper-50`), alt cream
  (`--paper-100`), and full-bleed colour or ink blocks for emphasis. **No photographic
  hero backgrounds, no mesh gradients, no noise.** Imagery, when present, lives
  inside outlined cards. Project thumbnails are **colour blocks with the name set in
  Excon** (a deliberate, asset-free motif).
- **Corners & cards.** Friendly, generous rounding (`--radius-card 28px`, pills for
  buttons/chips). Two card styles: **sticker** (2px ink border + hard offset shadow)
  and **soft** (no border, warm soft shadow). Plus filled **ink** and **sun** blocks.
- **Bento.** The house layout motif. Compose pages and feature sections as a dense
  **bento grid** of outlined, hard-shadowed tiles (`Bento` / `BentoTile`). Fill most
  tiles with the **light tints** (`--tile-sun/coral/grass/sky/grape/cream` — soft,
  sunlit) and let **one** bold block (`ink` / `*-solid`) anchor each grid. Tiles span
  columns/rows for editorial rhythm; the cream still breathes between them.
- **Shadows.** The signature is the **hard offset shadow** — solid ink, zero blur
  (`--shadow-hard: 4px 4px 0 ink`). Soft warm shadows (`--shadow-soft*`) are for
  floating cards. Coloured hard shadows (sun/coral/sky) appear on hero CTAs.
- **Borders.** 2px solid `--ink-900` is the workhorse outline (buttons, cards,
  inputs, avatars). Hairline `--border-soft` (`--paper-300`) separates quiet
  sections.
- **Motion.** Easy-going and a little bouncy. Quick durations (120–320ms),
  `--ease-spring` overshoot for buttons/toggles, `--ease-out` for settles. Buttons
  **press**: hover lifts `translate(-1px,-1px)` & deepens the hard shadow; active
  pushes `translate(2px,2px)` & shrinks it (sticker being pressed). Checkboxes pop a
  springy tick; switches slide with overshoot. Respect `prefers-reduced-motion`
  (durations collapse to 0). No infinite/decorative loops.
- **Hover / press states.** Hover = lift + deeper hard shadow (or a `--paper-200`
  wash for ghost). Press = translate down + shrink shadow. Focus = 3px `--focus-ring`
  (sky) outline, offset 2px. Never rely on colour alone.
- **Transparency / blur.** Used sparingly — the sticky nav is cream at ~88% with a
  10px backdrop blur. Otherwise surfaces are opaque.
- **Imagery vibe (when added).** Warm, bright, natural light; real and friendly, not
  stocky or cold. Always inside an outlined/rounded frame.

---

## Iconography

- **Library:** **[Lucide](https://lucide.dev)** — clean 2px-stroke outline icons.
  It matches the brand's friendly-but-confident line weight and the 2px ink
  outlines used elsewhere. Loaded from CDN
  (`https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js`) and rendered via the
  kit's small `Icon` component (`ui_kits/website/Icon.jsx`). Stroke inherits
  `currentColor`; default size 20, stroke-width 2.
  > Substitution note: no brand icon set was supplied, so Lucide is our chosen
  > default. If you'd prefer another set, swap the CDN + `Icon` and we'll re-document.
- **Usage:** outline style only, generous touch targets, often inside a 40–52px
  outlined circle/square chip. Common glyphs: `arrow-right`, `arrow-up-right`,
  `check`, `star`, `quote`, `pen-tool`, `code-2`, `sparkles`, `heart-handshake`,
  `mail`, `phone`, `map-pin`, `send`.
- **The sun mark** (`assets/logo/gw-mark-sun*.svg`) is the one bespoke glyph — a
  geometric 8-ray sun. Use it as favicon, loader, list bullet, or avatar fallback.
- **No emoji as icons. No unicode-glyph icons.** Use Lucide or the sun mark.

---

## Index — what's in here

**Root**
- `styles.css` — the single entry point consumers link. `@import`s every token + font file.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter so this system works in Claude Code.

**`tokens/`** — CSS custom properties (all reachable from `styles.css`)
- `fonts.css` (self-hosted Excon/Ranade + Fontshare) · `colors.css` · `typography.css` · `spacing.css`
  · `radius.css` · `shadow.css` · `motion.css`

**`assets/logo/`** — `gw-mark-sun.svg` (gold), `-ink.svg`, `-cream.svg` sun marks.

**`guidelines/foundations/`** — specimen cards (Design System tab): type (display /
body / eyebrow), colour (sun / ink / paper / accents / semantic), spacing (scale /
radius), brand (logo / shadows / motifs).

**`components/`** — reusable React primitives (namespace `GoodWebsitesDesignSystem_790400`)
- `core/` — `Button`, `Badge`, `Tag`, `Card`, `Avatar`
- `layout/` — `Bento`, `BentoTile` (the house grid motif)
- `forms/` — `Input`, `Select`, `Checkbox`, `Switch`
- `brand/` — `Logo`
- Each has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`; each folder has a
  `*.card.html` demo. Mount via `const { Button } = window.GoodWebsitesDesignSystem_790400`.

**`ui_kits/website/`** — marketing-site recreation, interactive click-through
(`index.html` → Nav, Home, Services, Work, Contact, Footer; `Icon.jsx` Lucide helper).

**`ui_kits/deck/`** — pitch/proposal slide template (1280×720): cover, section
divider, content steps, big numbers, quote, closing/CTA.

---

## Quick start for designers

1. Link the tokens: `<link rel="stylesheet" href="styles.css">`.
2. Headlines in `var(--font-display)` (Excon), everything else `var(--font-sans)`
   (Ranade).
3. Reach for the **bento grid** (`Bento`/`BentoTile`) for page & section layout.
3. Cream page (`--surface-page`), ink text (`--text-strong`), gold for action.
4. Buttons & key cards get the 2px ink outline + a hard offset shadow.
5. Keep the copy warm, plain and a little sunny. Sentence case. No emoji.
