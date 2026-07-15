# Good Websites — Session Handoff (2026-07-15 v2)

> Read alongside `CLAUDE.md` (authoritative for conventions).
> `*.md` files are assetsignored — this never deploys.

## Deploy status: READY TO DEPLOY ✅
- Changes complete — run `npx wrangler deploy` to go live
- **Gotcha:** `git push` 403s when active gh account is `goodwebsites ca` — always:
  `gh auth switch -u b9will && git push origin main`

## What shipped this session (Cinematic upgrade — Lenis + parallax depth)

### 1. Lenis smooth scroll (site-wide)
- `js/vendor/lenis.min.js` (v1.0.42, ~11 KB) — self-hosted, no CDN dependency
- Script tag added to all 27 GSAP-using HTML files, before gsap.min.js
- Initialized in `animations.js` (after gsap.registerPlugin, before matchMedia):
  ```js
  var lenis = new Lenis({ lerp: 0.12, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
  gsap.ticker.lagSmoothing(0);
  ```
- Guarded with `if (typeof Lenis !== 'undefined')` so it degrades gracefully
- `lerp: 0.12` = very subtle, slightly snappier than default (0.1), fast response, natural ease-out feel
- Avoid `duration + easing` mode — duration: 0.9 made every scroll feel 0.9s long (laggy)

### 2. Rack-focus blur on timeline eras (about.js)
- Each `.tl-era-inner` now animates `filter: blur(10px) → blur(0px)` in sync with scale-in
- Exit: blur returns as circle shrinks out
- Effect: cinematic "rack focus" as each era comes into view — the depth-of-field trick from film

### 3. Parallax depth doodles (about.html + about.js)
- 4 `.tl-depth-doodle` images (sparkle/star alternating) placed absolutely inside `.tl-track`
  - Positioned at left: 580px / 1350px / 2300px / 3100px, distributed across the track length
  - Opacity 0.15–0.22 so they're subtle atmospheric background elements
- GSAP moves them at +30% of track width in X — they drift slower than era content → background depth layer
- `invalidateOnRefresh: true` so they recalculate on resize

### 4. Rylan headshot updated
- `~/Downloads/rylanprotrait.jpg` → `assets/images/rylan_headshot.jpg` (overwrite)
- No HTML change needed — reference was already `rylan_headshot.jpg`

## Asset versions (current)
```
css/tokens.css?v=13
css/base.css?v=13
css/components.css?v=22
css/pages.css?v=26
js/main.js?v=13
js/animations.js?v=17
js/about.js?v=8
js/vendor/lenis.min.js?v=1
```
Note: about-page timeline + mission/vision CSS is ALL INLINE in about.html `<style>` block — pages.css was NOT modified.

## Previous session work (carried forward)
### Timeline — horizontal GSAP-pinned scroll
- `.tl-intro` header scrolls out before pin takes effect (separate div above `.tl-outer`)
- Single GSAP timeline per era: scale 0.28→1→0.28 with hold phase (no glitch from two overlapping tweens)
- 7 eras (2007–2025): web evolution narrative, circular GIFs, year badges, text cards
- Footer fix: `invalidateOnRefresh: true` on footer ScrollTrigger + `requestAnimationFrame(ScrollTrigger.refresh)` in about.js

### Mission/Vision — two floating sticker cards
- coral-500 (-1.5deg) + sky-500 (+1.5deg), poster blockquotes, hard box-shadow

### Team section — Rylan photo (updated again this session)

## Next steps (in rough priority)
1. **Terms of Service page** — reviewer flagged missing ToS covering: who owns design/source code, what client receives after cancellation, hosting/domain responsibilities, included edits, payment/cancellation terms, content and regulatory responsibility.
2. **Privacy policy update** — current policy doesn't cover newsletter subscriptions, resource-download forms, which email platform receives addresses, educational/promotional follow-up, or consent record retention.
3. **Launch timeline consistency** — pricing table already correct (~1 wk / 2–3 wks / 4–6 wks). Index FAQ close enough.
4. Annex Naturopathic real site build → replaces mockup screenshot on homepage.
5. Parked: AI chat revive, Stripe link verification, Resend domain verification, OAND badge wording, free audit tool.

## Notes carried forward
- git push uses: `gh auth switch -u b9will && git push origin main`
- All fonts final: Getai Grotesk Black / Lunchtype22 / Ranade (Excon gone)
- STRONG COLORS ONLY — 100/200 tint tokens deleted
- saved-components/ library: drum, roller, split-flap-board (assetsignored)
- contact.html: AI chat parked (ANTHROPIC_API_KEY not set on worker)
- Calendly: calendly.com/hello-goodwebsites/30min
- Local dev port 8812
