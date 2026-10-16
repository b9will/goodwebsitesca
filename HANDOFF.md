# Good Websites — Session Handoff (2026-10-16)

> Read alongside `CLAUDE.md` (authoritative for conventions). `*.md` files are assetsignored.

## 2026-10-16 session (SEO hygiene + www)
- **Deployed** `npx wrangler deploy` -> version 5c3f49c0-736e-4f32-a4a4-8cb57f77f776. Site had been stale since 2026-07-31.
- **www fixed:** `wrangler.toml` now declares `routes` (custom domains `goodwebsites.ca` + `www.goodwebsites.ca`); www previously had no DNS and did not load. (Mac DNS may cache the negative answer; verify with `dig @1.1.1.1` / `curl --resolve`.)
- **Canonical/URL normalisation:** Cloudflare 307s `/x.html` -> `/x`, but canonicals, og:url, JSON-LD and sitemap pointed at `.html`. All absolute `https://goodwebsites.ca/...html` refs (42 files) now use clean extensionless URLs (dir index -> trailing slash). **Convention going forward: absolute URLs in meta/JSON-LD/sitemap are extensionless.** ~855 relative internal `href="...html"` links were NOT changed (they work via redirect; optional cleanup, but local `python -m http.server` needs the `.html`).
- **Sitemap:** added `/resources/` + 14 resource pages (were missing). All 38 URLs return a clean 200.
- `workers_dev = false`, `preview_urls = false` set explicitly (workers.dev URL is off; use the live domain).
- **Still open:** the Cloudflare dashboard "deployment issue" (error text not yet seen; if it is a red Workers Build, GitHub integration token probably needs reconnecting, same as good-websites-os in July). Untracked: `assets/images/default.jpg`, `assets/images/wnbf_canada_blk_copy_480x480.webp`.
- **Plan agreed:** (1) lead->call pipeline on the existing Good Websites OS (Supabase + Worker), NOT Airtable/n8n/Webflow; (2) Fox Fitness + Ranger Films case studies (get Robin/Megan OK first; both sites already carry a "This is a good website" backlink credit); (3) no site redesign.

---

> Read alongside `CLAUDE.md` (authoritative for conventions).
> `*.md` files are assetsignored — this never deploys.

## Deploy status: LIVE ✅
- Deployed: `npx wrangler deploy` — 0f832e49-b89b-45a2-bdbe-79ab6ca1de9e (2026-07-29)
- **Gotcha:** `git push` 403s when active gh account is `goodwebsitesca` — always:
  `gh auth switch -u b9will && git push origin main`

## Asset versions (current)
```
css/tokens.css?v=13
css/base.css?v=15
css/components.css?v=28
css/pages.css?v=34
js/main.js?v=14
js/animations.js?v=21
js/about.js?v=15
js/vendor/lenis.min.js?v=1
```

---

## What shipped this session (2026-07-29 — resource library integration)

### Resource library — full rebuild
- `resources/index.html` rebuilt as proper library hub with 14 resource cards grouped by category
- 8 new Phase Two HTML pages created:
  - `resources/connect-your-website-to-jane.html` (PDF 06, badge--sky)
  - `resources/jane-account-structure-online-booking.html` (PDF 07, badge--sky)
  - `resources/analytics-search-console-sitemap-setup.html` (PDF 08, badge--ink)
  - `resources/website-data-interpretation.html` (PDF 09, badge--ink)
  - `resources/patient-question-content-research.html` (PDF 10, badge--grass)
  - `resources/seo-aeo-content-writing.html` (PDF 11, badge--grass)
  - `resources/website-photography-personal-brand.html` (PDF 12, badge--coral)
  - `resources/traffic-google-ads-fundamentals.html` (PDF 13, badge--grass)
- 6 existing pages updated: PDF paths → `assets/downloads/resources/[NN]-[slug].pdf`, resource fields updated to v1.1
- All 16 PDFs + 2 bundles at `assets/downloads/resources/`, 13 PNGs at `assets/images/resources/`
- PDF gate uses Formspree `mrenebnk` on all 14 resource pages
- `pages.css` v33 → v34: added `.section-label-row`, `.eyebrow-rule`, `.blog-grid--2`, `.bundle-grid`, `.bundle-card` classes
- Problem section aspect ratio: `3/4` → `3/2` (matches native 1536×1024 image dimensions)

---

## What shipped this session (2026-07-27 — logo set implementation)

### 1. New logo set — `assets/logos/`
- 6 SVGs copied from Downloads with professional naming convention:
  - `gw-lockup-black.svg` — icon + wordmark (navbar primary)
  - `gw-lockup-white.svg` — white variant (dark bg / future dark mode nav)
  - `gw-wordmark-black.svg` — wordmark only, light bg
  - `gw-wordmark-white.svg` — wordmark only, white
  - `gw-icon-black.svg` — icon only (favicon + footer)
  - `gw-icon-white.svg` — icon only, white (for dark fills)
- All HTML pages updated: navbar uses `gw-lockup-black.svg` (text node removed, wordmark in SVG); footer uses `gw-icon-black.svg`; `<link rel="icon">` updated sitewide
- JSON-LD `"logo"` in index.html updated to `assets/logos/gw-icon-black.svg`
- `components.css` v26 → v27: added `.nav-logo { height: 28px; width: auto; display: block; }`
- Dark mode: assessed at 1–2 days effort, deferred post-OAND launch; plan as dedicated session

### 2. Problem section redesign — sticky preview panel
- Replaced cursor-following `position:fixed` card with a `position:sticky` right-column panel
- `.problems-layout` two-column grid (1fr 300px), sticky panel at `top: clamp(5rem, 12vh, 7rem)`
- 5 images pre-loaded stacked in DOM as `.preview-img` elements — crossfade via CSS opacity (0.15s), no src-swapping
- Entrance transition: 0.2s (snappier); `--preview-shift` CSS var drives ±6px parallax from mousemove
- Row hover: fills correct color, white text on dark fills (sky-500/grass-500), dark text on light fills
- Mobile: `display: block` layout, preview panel hidden via `display: none`
- pages.css v31 → v32, main.js v13 → v14

---

## What shipped previously (2026-07-27 — pre-OAND launch polish)

### 1. OAND section live on homepage
- Removed `style="display:none"` from `.oand-partner-section`
- Fixed CTA link: `oand.html` → `oand/`

### 2. Font fixes
- `oand/oand.css` line 13: `--ff-h: 'Excon'` → `'Lunchtype22'` (Excon was removed months ago; deck headings were falling back to system-ui)
- `css/pages.css` line ~1712: `var(--font-body)` → `var(--font-sans)` (undefined token)
- pages.css bumped v=30 → v=31 across all HTML files

### 3. SEO blog — reviews section rewrite
- `blog/naturopath-seo-google-first-page.html`: Section now leads with CONO prohibition on soliciting patient reviews, explains the standard digital marketing advice doesn't apply to Ontario NDs, redirects to compliant trust signals (credentials, designations, directory listings), and covers unsolicited review response guidance

### 4. signup.html — PageSpeed language softened
- `PageSpeed 95+ guaranteed` → `PageSpeed 95+ score`

### 5. Em dash sweep — sitewide
- Removed all prose em dashes from user-facing body copy across:
  - `oand/index.html` (3 fixes in slide body + chat mock)
  - `resources/google-business-profile-checklist.html` (6 fixes)
  - `resources/technical-seo-checklist.html` (3 fixes)
  - `resources/service-page-seo-checklist.html` (4 fixes)
  - `resources/ai-citation-checklist.html` (4 fixes)
  - `resources/eeat-content-checklist.html` (4 fixes)
  - `Dr. Rucha Rege, ND.html` (2 fixes — em→en dash in fee listing)
- Left intact: CSS/HTML comments, `<title>`/`<meta>` tags, `pricing.html` table `<span class="dash">` separators

---

## What shipped previously

### 1. About page — vertical timeline (full redesign)
Replaced horizontal GSAP-pinned scroll with a vertical scroll layout.

- `.tl-list` is a flex column with `gap: clamp(7rem, 11vw, 10rem)` between eras
- `.tl-era` is a 2-column grid `clamp(180px, 28vw, 340px) 1fr` — even eras flip columns
- GIFs are natural rectangle shape (not circles) inside `.tl-gif-wrap` with `border-radius: var(--radius-xl)`
- Year badges (`.tl-year`) float above GIF with CSS `badge-float` keyframe animation, staggered delays
- GSAP in `js/about.js` (v15): per-gif `y: -70` parallax over scroll + depth doodle parallax at -90/-60
- `gsap.set(wrap, { rotation: rot })` owns the transform so GSAP parallax doesn't conflict with CSS rotation
- Natural-paper texture on `#tl-section::before` at `opacity: 0.07`
- "Since 2007." heading is centered (`text-align: center` on `.tl-intro`)

**7 eras: 2007, 2014, 2016, 2019, 2020, 2023, 2025**
- 2007: `aladdin-mclovin2007gif.gif` (McLovin/Superbad), coral badge
- 2014: `hoda-kotb-ice-bucket-challenge_2014.gif`, sky badge
- 2016: `pokemon)gif.gif`, grass badge
- 2019: `kawhi-kawhi-leonard_shot-gif.gif`, coral badge
- 2020: `billie_gif2020.gif`, sky badge
- 2023: `barbienheimer-barbie_gif.gif`, grass badge
- 2025: `katy-perry-katy-perry-space_gif.gif`, coral badge

All copy is Will's personal voice ("I was there"). Em-dashes removed from body copy throughout about.html (replaced with colons or commas).

### 2. About page hero stamps
- 2007 stamp: yellow (`--sun-400`) → green (`--grass-500`)
- All 4 stamps now use `var(--paper-50)` text

### 3. Mission & Vision layout
- Gap between cards: `clamp(2rem, 5vw, 4rem)` (wider)
- Vision card desktop push: `margin-top: clamp(5rem, 10vw, 8rem)` (much more offset than before)

### 4. Team section doodles
Added 6 doodles scattered around `.team-section`:
balloon, peace-sign, speech-bubble, sparkle, star, crown
- Team cards remain white (color experiment reverted)

### 5. Principles section doodles
Added sparkle, zigzag-arrow, star accents around the principles section.

### 6. Step numbers — green
`pages.css` (v30): `.step-number` background `--surface-sun` (yellow) → `--grass-500`, color → `var(--paper-50)`

### 7. PSI / accessibility fixes (from previous session, now live)
- Mobile `.reveal` disabled at ≤900px → FCP/LCP fix (`css/base.css` v15)
- `aria-label="Email address"` on all footer + PDF-gate inputs → agentic browsing fix
- `checklist.png` → `checklist.webp` (3.4MB → 460KB, 87% reduction)

### 8. OAND Official Partner section (homepage)
**Currently hidden** — `style="display:none"` on the section.
Remove `style="display:none"` when OAND links to goodwebsites.ca from their member portal.

Structure:
- White OAND logo on grass-500 green badge block (`assets/images/OAND-white-Logo.png`)
- Stardust-2 texture via `::before` pseudo-element at `opacity: 0.18` (`assets/textures/stardust-2.png`)
- CSS in `components.css` under `/* ---- OAND Partner Section ---- */`
- "Member resources" CTA → `oand.html` (page not yet built)
- "Visit OAND" CTA → `https://oand.org`

---

## Next steps (in rough priority)

1. **OAND section go-live**: Remove `style="display:none"` from `index.html` `.oand-partner-section` once OAND portal links live
2. **`/oand` page**: Build the dedicated page (resource library listing, slideshow, member pricing, CTA)
3. **Pricing page — "Already have a website?" section**: Route existing-site owners to subscription; route custom/dev work to B9 Digital
4. **Google Workspace add-on**: Near pricing, small — setup fee TBD, billed as one-time or spread across months
5. **Pricing price numbers**: Use `var(--font-poster)` on the large dollar amounts
6. **Terms of Service page**: Who owns design/source code, cancellation policy, hosting/domain responsibilities
7. **Privacy policy update**: Newsletter, resource downloads, email platform, consent records
8. **Rylan headshot**: `assets/images/rylan_headshot.webp` not loading on about page — check filename/path
9. **Summerhill/Annex clinic portfolio proof**: Third example for homepage proof showcase
10. **Annex Naturopathic real site**: Replace mockup screenshot on homepage when live

## Content brief (from this session — do not lose)
Full brief in conversation history. Key items:
- **OAND page** (`/oand`): partnership depth, resource library, member pricing, slideshow, CTA to book
- **"Already have a website?" section** (pricing page only): subscription vs B9 Digital routing. No hourly rate published. Everything starts with an estimate.
- **Google Workspace add-on**: professional email on own domain, setup fee TBD, flexible billing
- **Good Branding** (future page, scope not locked): $250 starts for 3 directions, website-first is default path
- **Blog post backlog**: "Why Your Naturopathic Website Shouldn't Be Too Different" (Jakob's Law)
- **Style quiz** (backlog, do not build yet): 10 base styles, visual preference intake

## Notes
- git push: `gh auth switch -u b9will && git push origin main`
- All fonts: Getai Grotesk Black / Lunchtype22 / Ranade (Excon gone)
- STRONG COLORS ONLY — 100/200 tint tokens deleted
- `saved-components/` library: drum, roller, split-flap-board (assetsignored)
- contact.html: AI chat parked (ANTHROPIC_API_KEY not set on worker)
- Calendly: calendly.com/hello-goodwebsites/30min
- Local dev port 8812
- Live: https://goodwebsites.ca | Preview: https://goodwebsitesca.will-69d.workers.dev
