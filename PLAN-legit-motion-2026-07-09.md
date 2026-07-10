# Legitimacy + Motion Plan — STATUS (executed 2026-07-09/10)

Original plan superseded by the revised approved plan; this file now tracks outcomes.

## ✅ Done
- **Testimonials (truth pass):** 2 real cards — Dr. Margot Lattanzi, ND (Doctor Margot · Toronto) and Dr. Michelle McKee, ND (Bracebridge) — written with their permission, real headshot avatars (`assets/images/testimonial-*.jpg`). Fake "Heather Robinson / Bloom Naturopathic" card removed. No patient-volume claims.
- **Proof showcase:** Annex panel now shows the real mockup (`assets/images/screenshot-annex.jpg`); honest tags (Village = design concept, Annex = in build, WWR = live client). Hero ★★★★★ sticker replaced with verifiable "Launch 2–3 weeks".
- **Pricing:** investigated — the `price-was` strikethrough only appears on the yearly toggle (honest comparison). Left as is.
- **og:image:** `assets/images/og-card.jpg` (1200×630) + og/twitter meta on all public pages. Validate at opengraph.xyz after deploy.
- **Fonts:** Getai Black / Milkman / Lunchtype22 converted to subsetted woff2 in `assets/fonts/`; `--font-poster` token added; compare at `/font-test.html` (noindex). Milkman is caps-only; license unverified — do not ship.
- **Motion refactor:** 430ms page-transition click-hijack deleted (overlay divs + CSS removed from all pages) → MPA View Transitions in base.css. Process-row double-animation fixed (GSAP sole owner, one timeline per row). about.js `.reveal` double-animation removed. Scroll listeners consolidated (testimonial drift + solution nav → ScrollTrigger; nav hide rAF-guarded). Problem-card follower → transform vars. Hero scrub 1.4→0.8, will-change on stickers. Everything in gsap.matchMedia (reduced-motion safe, parallax desktop-only).
- **Housekeeping:** CLAUDE.md updated (Pages deploy, port 8812, one-owner rule, fonts); dead `css/styles.css` deleted; asset versions bumped (tokens/base v11, components/pages v14, main v11, animations v8, about v5).

## ⏭ Remaining / parked
- **Font decision:** Will picks a combo on /font-test.html → wire into tokens.css, add preload, re-tune retro-text offsets. Then self-host Excon/Ranade (or drop Excon) to fix the Fontshare double-load.
- **Real-browser QA pass** (headless couldn't verify IntersectionObserver reveals): index, work rows, about timeline, reduced-motion, mobile, cmd+click nav.
- **OAND badge** — awaiting permission.
- **Annex rebuild** (next up) → becomes numbers-backed case study; then Summerhill before/after.
- Stripe link↔plan verification on signup.html; Resend domain verification; CONO review; free audit tool; Google reviews.
