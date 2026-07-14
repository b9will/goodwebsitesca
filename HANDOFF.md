# Good Websites — Session Handoff (2026-07-13)

> Read alongside `CLAUDE.md` (authoritative for conventions).
> `*.md` files are assetsignored — this never deploys.

## Deploy status: READY TO DEPLOY ✅
- Changes staged and committed (see below)
- Run `npx wrangler deploy` to go live
- **Gotcha:** `git push` 403s when active gh account is `goodwebsitesca` — always:
  `gh auth switch -u b9will && git push origin main`

## What shipped this session (OAND compliance review fixes)

### 1. Testimonials and reviews advice — CONO-compliant rewrite (7 files)
- **resources/website-checklist.html** — Item 6 completely rewritten: "Display patient testimonials" + "Google review badge is a bonus" removed. Replaced with "Verifiable professional trust signals" covering name, ND designation, education, registration, years in practice, associations, fees, areas of focus, and what to expect at an appointment.
- **blog/naturopath-google-business-profile-guide.html** — "Getting more reviews" section rewritten: removed "ask directly / send them a link." Replaced with note to check provincial college advertising guidelines before taking any action. FAQ schema Q&A updated to match.
- **blog/high-converting-naturopath-website-2026.html** — Section 6 rewritten from "Patient testimonials (CNDA-compliant)" to "Verifiable professional trust signals." CONO advertising rule noted explicitly.
- **blog/naturopath-seo-google-first-page.html** — "Get reviews — and respond to them" section rewritten to advise checking provincial college rules; removed "ask your satisfied patients directly" and "respond to every review."
- **blog/why-naturopath-website-not-getting-patients.html** — Removed "If you have patient testimonials... use them." Trust-building fix now emphasises credentials and associations.
- JSON-LD schema in high-converting article updated: "patient testimonials" replaced with "verifiable professional credentials."

### 2. "Specialty" and "specialization" replaced sitewide
Replaced with: "area of focus," "areas of clinical focus," "health concerns you commonly work with," "main areas of focus"
Files: checklist, GBP guide (description example), chatgpt article, jane-app article, SEO article, vancouver city page, why-not-getting-patients.

### 3. AI-search guarantees softened
- **index.html** — "your site gets cited" → "your structured content gives your practice the strongest available foundation to appear." Problem row tooltip softened. "Content built for AI citation" → "AI-search foundations."
- **pricing.html** — "AI search visibility" → "AI-search foundations."
- **work.html** — Schema markup description softened; removed "knows exactly who you are."
- **blog/chatgpt-recommending-other-naturopaths.html** — "can extract exact Q&A pairs for citation" → "gives your pages a stronger foundation." "already be in the citation pool" → "better positioned when AI search becomes the norm. No one can guarantee placement."
- **blog/high-converting-naturopath-website-2026.html** — FAQ schema citation claim removed; replaced with "can surface your answers in rich results."

### 4. Unsourced benchmark claims removed
- **resources/website-checklist.html** — Item 4 heading changed from "95+ on Google PageSpeed" to "Passes Core Web Vitals — fast on mobile"; body rewritten to reference PageSpeed Insights + Search Console, prioritizing real-world metrics. "Anything below 80 is actively costing you patients" removed.
- Blockquote "The average ND website scores between 2 and 4..." removed; replaced with a plain-language note labelling the scorecard as a "Good Websites self-assessment framework."
- "Four posts is the minimum floor for Google to take your site seriously" removed.
- "top percentile" claim softened to "well ahead of most."
- **blog/high-converting-naturopath-website-2026.html** — "Anything below 70 on mobile is actively costing you patients" removed; replaced with softer framing.

### 5. About page date fixed
- **about.html** — "18 years on the web." → "Building websites since 2007."

### 6. Work.html timeline — meta descriptions updated
- Removed "under 4 weeks" from meta description, og:description, and twitter:description.
- Updated to reflect actual plan-specific timelines (consistent with pricing table: ~1 wk / 2–3 wks / 4–6 wks).

## Current asset versions (unchanged)
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
1. **Terms of Service page** — reviewer flagged missing ToS covering: who owns design/source code, what client receives after cancellation, hosting/domain responsibilities, included edits, payment/cancellation terms, content and regulatory responsibility. This is a new page that needs to be drafted.
2. **Privacy policy update** — current policy doesn't cover newsletter subscriptions, resource-download forms, which email platform receives addresses, educational/promotional follow-up, or consent record retention. Update before gating any resources.
3. **Launch timeline consistency** — pricing table already correct (~1 wk / 2–3 wks / 4–6 wks). work.html meta updated. Index FAQ ("most sites two to three weeks, Launch page under a week") is close enough.
4. Annex Naturopathic real site build → replaces the mockup screenshot on the homepage.
5. About-page timeline redo (ghost/watermark numerals don't fit the style).
6. Parked: AI chat revive, Stripe link verification, Resend domain verification, OAND badge wording, free audit tool.

## Notes carried forward
- git push uses: `gh auth switch -u b9will && git push origin main`
- All fonts final: Getai Grotesk Black / Lunchtype22 / Ranade (Excon gone)
- STRONG COLORS ONLY — 100/200 tint tokens deleted
- saved-components/ library: drum, roller, split-flap-board (assetsignored)
- contact.html: AI chat parked (ANTHROPIC_API_KEY not set on worker)
- Calendly: calendly.com/hello-goodwebsites/30min
