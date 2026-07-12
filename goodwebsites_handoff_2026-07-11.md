# Good Websites — Session Handoff (2026-07-11)

> Read alongside `CLAUDE.md` (authoritative for conventions). This file covers what
> shipped in the 2026-07-11 session, the current live state, and what's next.
> `*.md` files are assetsignored — this never deploys.

## Deploy status: LIVE ✅
- Commit `14ac207` "Process page redesign: simple card list, cream texture, doodles;
  site-wide polish" — 52 files, pushed to `b9will/goodwebsitesca` main.
- `npx wrangler deploy` succeeded (version `01ed6bee-dc58-4357-901d-3a4fa091dc15`).
- Verified live: goodwebsites.ca/work serves the new process list (pages.css v26),
  homepage has "See the process" + "fast on every device", flap board flips "CUSTOM",
  and `/saved-components/...` correctly 404s.
- **Gotcha found during deploy:** `git push` 403s when the active gh account is
  `goodwebsitesca` — switch first: `gh auth switch -u b9will && git push origin main`
  (then switch back). Both accounts are in the keyring.
- Note: worker serves clean URLs — `/work.html` 307-redirects to `/work`. Use `curl -L`
  when verifying.

## What shipped (work.html — the big one)
The process section went through three designs in one session; the final state is the
simplest and it's what's live:

1. ~~Dark ink-900 drum panel~~ → cream, texture stack **identical to `.hero--textured`**
   (clean-textile 320px + crissxcross 200px ::before @ 0.055) so hero and section read
   as one surface.
2. ~~Horizontal 3D drum~~ → ~~vertical roller~~ → **static `.process-list`**: six
   full-width sticker cards, title/desc left, solid coral-500 poster number right.
   - Entrance: existing GSAP process-rows fade-up in animations.js (was dormant, works again).
   - Depth hover (CSS only, `@media (hover:hover)`): hovered card pops
     (translate -3px, 8px hard shadow), siblings fade to 0.5.
   - Doodles: thumbsup in the h2 + calendar/speechbubble/hammer/laptop absolute at the
     section edges, shown ≥1200px only. Assets: `assets/images/doodle-p-*.webp`
     (480px conversions of the root `doodles/` stash; spaceship/heart converted, unused).
3. Portfolio teaser ("First client sites launching soon" — undercut trust, duplicated the
   CTA below) → **"Not ready to book? Start here."** + reused `.blog-featured` card
   promoting the free 10-out-of-10 checklist. No email gate (footer newsletter captures).
4. Copy: "Hand-coded" → "Custom" (Build step + flap board's Code card).

## saved-components/ — component library (NEW convention)
Assetsignored, never deploys. Each has README + html/css/js snapshots:
- `process-drum/` — horizontal rotateY drum (retired)
- `process-roller/` — vertical rotateX wide-card roller (retired). README documents the
  two bugs we hit: **face angles must be POSITIVE** to cancel the negative JS rotation
  (flip either sign → front card backfaces out of existence), and **snappiness belongs in
  the GSAP timeline, never in ScrollTrigger snap easing** (bouncy snap ease bounces the
  whole page).
- `split-flap-board/` — vestaboard, **still live on work.html**; if you edit the live
  one, sync this copy.
- Will wants ALL custom components archived here going forward, as built or retired.

## Site-wide changes this session
- **Nav font fix**: `.nav-tabs a` + `.nav-links.open a` now `var(--font-ui)` (Lunchtype22).
  They were silently inheriting Ranade and looked off next to the brand/buttons.
- **Buttons never wrap**: `white-space: nowrap` on `.btn`.
- **"properly fast" → "fast on every device"** everywhere (hero lead + footer tagline on
  all ~11 pages).
- **Patient-stories copy removed** from homepage solution block → website-focused
  ("services explained in plain language" / "Services pages that build confidence").
  Rationale: regulators (CONO/CNDA) restrict patient testimonials — don't promise them.
  Blog articles that *discuss* CNDA-compliant testimonials were deliberately left alone.
- Homepage hero secondary CTA → **"See the process"** (work.html); was "Book a call first".
- About page process section now ends with "See the full process →" button to work.html.
- Cache-bust: `pages.css?v=26`, `components.css?v=21` (CLAUDE.md list updated — trust
  index.html if they ever drift).

## Decisions made by Will this session
- Annex "Practice" tier screenshot on the homepage stays for now — **building the real
  Annex site is first on the todo list once major site issues are fixed.**
- The about-page timeline needs a redo: **large ghost/watermark numerals don't fit the
  style** (same reason the process list numbers went solid coral).

## Next steps (in rough priority)
1. Annex Naturopathic real site build → replaces the mockup screenshot, becomes case study.
2. About-page timeline redo (drop ghost text styling).
3. Parked from before (see CLAUDE.md / memory): AI chat revive (needs
   `npx wrangler secret put ANTHROPIC_API_KEY`), Stripe link↔plan verification on
   signup.html, Resend domain verification, OAND badge wording, free audit tool.

## Testing gotcha (for future Claude sessions)
Browser-automation tabs starve GSAP ScrollTrigger of scroll events — programmatic
`scrollTo` doesn't fire its updates, screenshots catch frozen entrance states, and
`ScrollTrigger.update()` un-sticks it. **This does not affect real users.** Verify motion
with mouse-wheel scroll actions and patience, or just eyeball it in a real browser.
