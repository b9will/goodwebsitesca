# Good Websites — Session Handoff (2026-07-12)

> Read alongside `CLAUDE.md` (authoritative for conventions).
> `*.md` files are assetsignored — this never deploys.

## Deploy status: LIVE ✅
- Commit `ef227ee` "Fix footer animation + remove crown doodle; bump components v22, animations v15"
- `npx wrangler deploy` → version `48315a4a-4c96-49ab-bcec-3fddb5f522e0`
- **Gotcha:** `git push` 403s when active gh account is `goodwebsitesca` — always:
  `gh auth switch -u b9will && git push origin main`

## What shipped this session

### Footer animation fix (animations.js v14 → v15, components.css v21 → v22)
**Root causes found:**
1. `back.out(1.1)` + `toggleActions: 'play none none reverse'` — GSAP reverses the
   back.out ease which overshoots in the wrong direction, briefly flashing the footer
   into view when scrolling back up past the trigger.
2. Base `.site-footer` CSS has `transform: translateY(56px)`. GSAP was inheriting this
   and stacking it on top of `yPercent:103`, so when the footer revealed (yPercent→0)
   it would still carry the 56px offset, cutting off the bottom row.

**Fixes:**
- Replaced single paused tween + `animation/toggleActions` with two separate tweens
  via `onEnter` / `onLeaveBack` callbacks:
  - Reveal: `gsap.to(footer, { yPercent:0, ease:'back.out(1.1)', duration:0.45 })`
  - Hide: `gsap.to(footer, { yPercent:103, ease:'power3.in', duration:0.3 })`
  - `gsap.killTweensOf(siteFooter, 'yPercent')` before each to prevent conflicts
- Added `transform: none` to `body.footer-fixed .site-footer` CSS — resets the base
  `translateY(56px)` so GSAP reads a clean starting transform.
- Initial hide: `gsap.set(siteFooter, { y:0, yPercent:103 })` (explicit y:0 prevents
  CSS y value from leaking into GSAP's internal state).
- Wrapped `ScrollTrigger.refresh()` in `requestAnimationFrame` so CSS is settled first.

### Crown doodle removed
`<img src="assets/accents/crown.webp">` removed from the Practice pricing card in both
`index.html` and `pricing.html`.

## Current asset versions
```
css/tokens.css?v=13
css/base.css?v=13
css/components.css?v=22
css/pages.css?v=26
js/main.js?v=13
js/animations.js?v=15
js/about.js?v=5
```

## Next steps (in rough priority)
1. Annex Naturopathic real site build → replaces the mockup screenshot on the homepage,
   becomes the first numbered case study.
2. About-page timeline redo (ghost/watermark numerals don't fit the style — same reason
   process list numbers went solid coral; see CLAUDE.md).
3. Parked: AI chat revive (`npx wrangler secret put ANTHROPIC_API_KEY`), Stripe
   link↔plan verification on signup.html, Resend domain verification, OAND badge
   wording, free audit tool.

## Notes carried forward from 2026-07-11 session
Full detail in `goodwebsites_handoff_2026-07-11.md`. Quick ref:
- work.html: cream texture, static process card list, doodles, checklist CTA card
- Nav: Lunchtype22 site-wide; buttons: white-space:nowrap
- "fast on every device" replaces "properly fast" everywhere
- saved-components/ library: drum, roller, split-flap-board (all assetsignored)
- About page → "See the full process →" button added
