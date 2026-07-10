# Good Websites — Claude Project Brief

## What this is
**goodwebsites.ca** — subscription web design business targeting naturopathic doctors in Canada. 3 tiers, done-for-you model. Owner: Will Robinson (will@b9.digital).

## Tech stack
- Pure static HTML/CSS/JS — no framework, no build step
- Deploy: **`npx wrangler deploy`** (Cloudflare Worker with assets — NOT Pages, git push alone does NOT deploy; the 2026-07-09 handoff doc was wrong about this). Push to `main` (b9will/goodwebsitesca, private) for backup/history, then run wrangler to go live.
- Local dev: `python3 -m http.server 8812` → http://localhost:8812/
- GSAP + ScrollTrigger loaded via `js/vendor/gsap.min.js` + `js/vendor/ScrollTrigger.min.js`
- Newsletter: Formspree `https://formspree.io/f/xwvdgedv`
- Calendly booking: `https://calendly.com/goodwebsites/discovery-call`

## Asset versions (bump on every CSS/JS change, apply to ALL html files)
```
css/tokens.css?v=11
css/base.css?v=11
css/components.css?v=14
css/pages.css?v=14
js/main.js?v=11
js/animations.js?v=8
js/about.js?v=5
```
Version bump command pattern:
```bash
find . -name "*.html" | while read f; do
  sed -i '' 's/components\.css?v=13/components.css?v=14/g' "$f"
done
```
**Always use `while read` loop — `xargs sed` breaks on the space in "Good Website Builds" directory name.**

## Animation — one-owner rule
Every element is animated by exactly ONE system:
- CSS `.reveal` + IntersectionObserver (main.js) → simple fade-ups
- GSAP (animations.js / about.js) → anything scrubbed, pinned, staggered, or sequenced
Never put `.reveal` on an element GSAP animates (this caused the old process-section flicker).
Cross-page fades use the MPA View Transitions API in base.css — there is NO JS page-transition
overlay anymore (the old one delayed every navigation by 430ms). Do not reintroduce it.
GSAP defaults: `power4.out` / 0.55s (matches CSS `--ease-out` / `--dur-slower`).
All motion goes inside `gsap.matchMedia()` (see animations.js) — reduced-motion returns early,
hero parallax + testimonial drift are desktop-only.

## Fonts
- Live: Excon (display) + Ranade (body) from Fontshare CDN + local woff2 (known double-load — candidate for self-hosting cleanup)
- `--font-poster` token (tokens.css) drives `.display` poster headlines; defaults to `--font-display`
- Candidate replacement faces in `assets/fonts/` (woff2, subsetted): Getai Grotesk Display Black (OFL, license file alongside), Milkman (⚠️ license UNVERIFIED — do not ship live), Lunchtype22 Regular/Medium
- Compare at `/font-test.html` (noindex, combo switcher; `?combo=getai|milkman|lunch|getai-lunch`)

## Design system

### Neo-brutalist "sticker card" pattern
```css
border: 2px solid var(--ink-900);
box-shadow: 4px 4px 0 0 var(--ink-900);  /* var(--shadow-hard) */
border-radius: var(--radius-2xl);  /* 40px — for big panels */
/* or var(--radius-xl) / var(--radius-lg) for smaller cards */
```

### Key tokens
- `--paper-50: #FEFCF7` — warmest cream, main page bg
- `--ink-900` — near-black, all borders/text
- `--sun-400` — primary yellow accent
- `--coral-100 / --coral-600` — coral tones (newsletter pill)
- `--radius-2xl: 40px`, `--shadow-hard: 4px 4px 0 0 var(--ink-900)`
- `--container-max: 1200px`, `--gutter: clamp(1.25rem, 4vw, 4rem)`
- `--section-y: clamp(4rem, 8vw, 8rem)` — standard section padding

### Textures
- `assets/textures/clean-textile.webp` — bg repeat at 320px, opacity ~0.045–0.06
- `assets/textures/crissxcross.webp` — overlay, opacity ~0.04

### Badge variants
```css
.badge--sun    /* sun-200 bg, sun-700 text */
.badge--coral  /* coral tint bg, coral-600 text */
.badge--sky    /* sky tint bg, sky-600 text */
.badge--grass  /* grass tint bg, grass-600 text */
.badge--ink    /* ink-900 bg, paper-50 text */
```

## File structure
```
/
├── index.html
├── work.html          (Process page — how it works)
├── pricing.html
├── about.html         (Has horizontal scroll timeline)
├── book.html          (Calendly CTA — no newsletter in footer)
├── privacy.html
├── signup.html / start.html
├── blog/              (index.html + 6 posts)
├── resources/         (index.html + website-checklist.html)
├── naturopath-websites/  (index.html + 10 city pages)
├── css/
│   ├── tokens.css     (design tokens — edit first)
│   ├── base.css       (resets, typography, layout primitives)
│   ├── components.css (buttons, cards, nav, footer)
│   └── pages.css      (page-specific: hero, process, blog, timeline)
├── js/
│   ├── main.js        (nav scroll hide, IntersectionObserver reveals, toast)
│   ├── animations.js  (GSAP: process rows, footer reveal, homepage parallax)
│   └── vendor/        (gsap.min.js, ScrollTrigger.min.js)
└── assets/
    ├── images/        (hero-doctor.webp, doodles, screenshots)
    ├── timeline_images/ (GIFs for about.html timeline polaroids)
    ├── textures/
    ├── accents/       (sparkle, star, crown, etc. webp accents)
    └── checklist.png  (robot illustration for resources page)
```

## Key components

### Footer
- Sticker card style: rounded top corners, border, shadow, textile texture
- `margin-top: -48px` — overlaps the section above
- `z-index: 10` — sits on top of content
- Slide-up animation: CSS transition (`translateY(56px)` → 0) triggered by ScrollTrigger adding `.footer--visible` class
- **book.html** is the only page WITHOUT the newsletter block in the footer (conversion page)
- Footer "Learn" column must include: Blog, Free resources, Naturopath websites
- Footer "Connect" column must include: hello@goodwebsites.ca, Instagram

### Process section (work.html)
- Dark `var(--ink-900)` panel with textile texture
- Each `.process-row` is a white sticker card (border + `box-shadow: 5px 5px 0 0 var(--ink-900)` + `border-radius: var(--radius-xl)`)
- GSAP animates each card: `y:40, opacity:0` → natural position, triggered at `top 90%`
- **Known issue as of last session:** process section "acting up" — needs investigation

### Blog cards
- `.blog-card-img-wrap` aspect ratio: 1/1 (square)
- Newsletter pill: `badge--coral` style

### About page timeline
- Horizontal scroll timeline in `#tl-section`
- Each era is `.tl-era` with a `.tl-polaroid` (absolute-positioned photo frame, 180×180px)
- Timeline GIFs in `assets/timeline_images/`:
  - 2007: `tobey-dans-2007.gif` (Spider-Man 3 dance)
  - 2012: `lightning-bolt-pose-usain-bolt_2012.gif` (Usain Bolt)
  - 2014: `hoda-kotb-ice-bucket-challenge_2014.gif`
  - 2016: `pokemon)gif.gif` (Pokémon GO)
  - 2019: `kawhi-kawhi-leonard_shot-gif.gif` (Raptors)
  - 2023: `barbienheimer-barbie_gif.gif`
  - 2025: `katy-perry-katy-perry-space_gif.gif`

### animations.js structure
```
1. Guard: gsap/ScrollTrigger undefined → return; register plugin; gsap.defaults
2. Class toggles, run for everyone (CSS owns + disables the motion):
   - footer slide-up (adds .footer--visible, once)
   - solution nav active/done tracking (ScrollTrigger per .solution-block)
3. gsap.matchMedia({ isDesktop ≥900px, isMobile, reduceMotion }):
   - reduceMotion → return (content stays visible; no from-states applied)
   - process rows (work.html): one timeline per row, autoAlpha, once
   - hero parallax (desktop only, scrub 0.8, single timeline)
   - testimonial drift (desktop only; GSAP drives y, CSS nth-child owns rotateY/baseY —
     baseY arrays in animations.js must match pages.css)
```

### Other motion facts
- Testimonials: 2 real cards (Dr. Margot Lattanzi, Dr. Michelle McKee — real names/clinics,
  written with permission). Avatars: assets/images/testimonial-*.jpg
- Problem-card cursor follower (main.js) positions via CSS vars --card-x/--card-y →
  transform translate; never left/top
- work.html is a pure PROCESS page (no portfolio); homepage proof showcase is the only
  portfolio surface (Village = concept, Annex = in build, WWR = live client)
- og:image share card on every page: assets/images/og-card.jpg (1200×630)

## nav labels (all pages)
Process | Blog | Pricing | About | Book a call

## Deployment
```bash
cd "/Users/williamrobinson/Good Website Builds/GoodWebsitesca"
git add -A && git commit -m "..." && git push origin main   # backup/history only
npx wrangler deploy                                         # this is what goes live
```
Live at: https://goodwebsites.ca (worker preview: https://goodwebsitesca.will-69d.workers.dev)
Edge cache can serve stale HTML for a few minutes after deploy — verify with a cache-busted
curl or hard refresh. Secrets: `npx wrangler secret put ANTHROPIC_API_KEY` / `RESEND_API_KEY`.
