# Good Websites — Session Handoff (2026-07-12)

> Read alongside `CLAUDE.md` (authoritative for conventions). This file covers what
> shipped in the 2026-07-11 session, the current working-tree state, and what's next.
> `*.md` files are assetsignored — this never deploys.

## Deploy status: LIVE ✅ (as of end of 2026-07-11 session)
- Commit `14ac207` "Process page redesign: simple card list, cream texture, doodles;
  site-wide polish" — 52 files, pushed to `b9will/goodwebsitesca` main.
- `npx wrangler deploy` succeeded (version `01ed6bee-dc58-4357-901d-3a4fa091dc15`).
- **Gotcha:** `git push` 403s when active gh account is `goodwebsitesca` — switch first:
  `gh auth switch -u b9will && git push origin main` (then switch back if needed).

## Working tree — NOT YET COMMITTED/DEPLOYED
Two files modified locally (`git diff --name-only` shows index.html + pricing.html):

### 1. Crown doodle removed ✅
`sed -i '' '/crown.webp/d' index.html pricing.html` — the `<img src="assets/accents/crown.webp">` 
sticker that was sitting above the Practice pricing card is gone from both files.
Confirmed: `grep -r "crown" index.html pricing.html` returns zero matches.

### 2. Footer animation bug — NOT YET FIXED ⚠️
User flagged something weird happening with the footer animation (visible/triggering at
the pricing section mid-page, not just at the very bottom). Investigation started but
cut off before a fix landed.

**What we know:**
- Footer uses `body.footer-fixed` class (added by JS on desktop ≥900px, motion OK)
- Footer is `position: fixed`, GSAP owns its transform — never set transform on it in CSS
- Tween: `gsap.fromTo(siteFooter, {y:0, yPercent:103}, {yPercent:0, ease:'back.out(1.1)', duration:0.45, paused:true})`
- ScrollTrigger: `trigger: mainEl, start: 'bottom bottom+=2', toggleActions: 'play none none reverse'`
- At page load, footer correctly sits at `transform: matrix(1,0,0,1,0,769.458)` (offscreen)
- Hypothesis: the `padding-bottom: clamp(16rem, 45vh, 28rem)` runway added to `main` 
  when `body.footer-fixed` is active may be making the page's `bottom` reach `bottom+=2`
  earlier than expected (e.g. at pricing section), causing the footer to slide up too soon.
  Check `animations.js` + `components.css` footer section for the runway/trigger logic.

## Next steps (in rough priority)

### Immediate (these changes are sitting in the working tree)
1. **Fix footer animation bug** — diagnose why footer reveals mid-page at pricing section.
   Check: runway padding, ScrollTrigger start value, whether `main` height is being 
   measured before or after padding-bottom is applied. Fix, then commit + deploy both
   the crown removal and footer fix together.

### After that
2. Annex Naturopathic real site build → replaces the mockup screenshot, becomes case study.
3. About-page timeline redo (drop ghost/watermark numerals — same reason process list 
   numbers went solid coral).
4. Parked: AI chat revive (`npx wrangler secret put ANTHROPIC_API_KEY`), Stripe 
   link↔plan verification on signup.html, Resend domain verification, OAND badge wording,
   free audit tool.

## What shipped last session (2026-07-11) — quick reference
Full detail in `goodwebsites_handoff_2026-07-11.md`. Summary:
- work.html process section: black drum → cream texture + static card list + doodles
- Portfolio teaser → "Not ready to book? Start here." + checklist card
- Nav font fixed site-wide (Lunchtype22, was inheriting Ranade)
- Buttons: `white-space: nowrap`
- "properly fast" → "fast on every device" everywhere
- Patient-stories copy → website-focused on homepage
- Hero secondary CTA → "See the process"
- About page → "See the full process →" link
- saved-components/ library created (drum, roller, split-flap-board archived)
- "Hand-coded" → "Custom HTML, CSS, and JS" everywhere

## Local dev
`python3 -m http.server 8812` → http://localhost:8812/
