# Good Websites — Session Handoff (2026-07-16)

> Read alongside `CLAUDE.md` (authoritative for conventions).
> `*.md` files are assetsignored — this never deploys.

## Deploy status: READY TO DEPLOY ✅
- Changes complete — run `npx wrangler deploy` to go live
- **Gotcha:** `git push` 403s when active gh account is `goodwebsites ca` — always:
  `gh auth switch -u b9will && git push origin main`

## What shipped this session (PSI + accessibility improvements)

### 1. Mobile `.reveal` animations disabled → FCP/LCP fix
- `css/base.css` (v15): added `@media (max-width: 900px) { .reveal { opacity: 1 !important; transform: none !important; } }`
- Elements are now immediately visible on mobile — no IntersectionObserver delay blocking FCP

### 2. `aria-label` on all footer email inputs → agentic browsing fix
- Added `aria-label="Email address"` to ALL footer newsletter inputs and PDF-gate inputs across every HTML file
- Fixes "accessibility tree not well formed" that was causing 1/2 agentic browsing score

### 3. `checklist.png` → `checklist.webp` → image delivery fix
- Converted 3.4MB PNG to 460KB WebP (~87% reduction) with `cwebp -q 72`
- Updated all HTML references (work.html, resources/*.html) from `checklist.png` → `checklist.webp`
- Original PNG preserved at `assets/checklist.png` (not referenced)

### 4. About page timeline — lower entry opacity
- `js/about.js` (v14): entry `autoAlpha` dropped from 0.72 → 0.08 (nearly invisible entering)
- Exit `autoAlpha` 0.72 → 0.55 (stays readable as card exits)
- Y-drift increased from ±20px → ±30px for more dynamism
- Cards now "pop" fully visible only when centred; legible throughout exit

## Asset versions (current — trust index.html over this file)
```
css/tokens.css?v=13
css/base.css?v=15
css/components.css?v=23
css/pages.css?v=29
js/main.js?v=13
js/animations.js?v=21
js/about.js?v=14
js/vendor/lenis.min.js?v=1
```

## Timeline copy — current state
- 7 eras: **2007, 2014, 2016, 2019, 2020, 2023, 2025** (dropped 2012, added 2020)
- All copy now tells Will's personal story — "I was there" voice
- 2020 era uses `billie_gif2020.gif` ✓
- 2007 era still uses `tobey-dans-2007.gif` — **swap to Superbad gif once downloaded** (drop in `assets/timeline_images/` and update `src` in about.html:521)
- `padding-left: 40vw` on `.tl-track` — 2007 card starts centred on screen

## Remaining PSI issues (still open)
- **Force reflow 5.3s**: Likely GSAP ScrollTrigger reading layout on init (ScrollWidth/clientWidth in about.js). Gated to desktop-only — not a mobile blocker. May improve once tested post-deploy.
- **Network dependency tree**: Long JS chain (gsap → ScrollTrigger → animations.js → about.js). Consider `preload` hints if still slow after deploy.

## Previous session work (carried forward)

### About page — current state
- Horizontal GSAP-pinned timeline, 7 eras (2007–2025)
- `padding-left: 20vw` on `.tl-track` (first card visible quickly)
- `--tl-y` values set per-era (nth-child 1–7: 20/38/18/40/22/20/34 vh)
- No section dividers (border-bottom removed from ab-hero, tl-section, mv-section, team-section)
- Principles cards: all white (no fills)
- "Get in touch" CTA: yellow (btn--primary)
- Team bios: Will + Rylan origin story
- Rylan headshot: `assets/images/rylan_headshot.webp` (71K)
- Parallax depth doodles inside `.tl-track`
- Lenis smooth scroll (site-wide)

### Global design changes
- All eyebrow text: coral (`var(--coral-500)`) — `css/base.css`
- PDF download buttons: green (`btn--grass`)
- Pricing "every plan includes" cards: coral/grass/sky backgrounds, white text
- `btn--grass` variant added to components.css
- `.price-was` strikethrough on pricing page (yearly toggle shows/hides)

## Next steps (in rough priority)
1. **Run PSI again** post-deploy — should see LCP/FCP/Speed Index improvement from mobile reveal fix
2. **Agentic browsing re-test** — aria-label fix should get to 2/2
3. **Pricing price numbers** — use Getai/poster font (var(--font-poster)) on the big dollar amounts
4. **Terms of Service page** — covers: who owns design/source code, what client receives after cancellation, hosting/domain responsibilities, included edits, payment/cancellation terms
5. **Privacy policy update** — newsletter subscriptions, resource-download forms, email platform, consent records
6. Annex Naturopathic real site build → replaces mockup screenshot on homepage
7. Parked: AI chat revive, Stripe link verification, OAND badge, free audit tool

## Notes
- git push: `gh auth switch -u b9will && git push origin main`
- All fonts: Getai Grotesk Black / Lunchtype22 / Ranade (Excon gone)
- STRONG COLORS ONLY — 100/200 tint tokens deleted
- saved-components/ library: drum, roller, split-flap-board (assetsignored)
- contact.html: AI chat parked (ANTHROPIC_API_KEY not set on worker)
- Calendly: calendly.com/hello-goodwebsites/30min
- Local dev port 8812
