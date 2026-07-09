# Good Websites — Handoff Doc
**Date:** 2026-07-09  
**Project:** goodwebsites.ca  
**Repo:** github.com/b9will/goodwebsitesca (private)  
**Live:** Cloudflare Pages, auto-deploys from `main` branch  
**Local dev:** `python3 -m http.server 8812` → http://localhost:8812/

---

## What's Live and Shipped

| Page | Status | Notes |
|------|--------|-------|
| index.html | ✅ Live | Hero doodles fixed (hero-balloon.webp, hero-flower.webp in assets/images/) |
| work.html | ✅ Live | 2 case studies: Village Naturopathy + Whole Woman Reset |
| about.html | ✅ Live | Will's AVIF headshot (Clear Space), Rylan's photo, emoji polaroids, rounded corners |
| pricing.html | ✅ Live | 3 tiers |
| book.html | ✅ Live | Booking flow |
| /oand/ | ✅ Live | 13-slide partner deck for OAND, noindex, Good Websites branding, 15%/+15% discount |
| blog/ | ✅ Live | Exists |
| signup.html | ✅ Live | Stripe Buy Buttons (not yet verified per plan) |

### Cloudflare Pages config
- Build command: (blank)
- Output dir: `/`
- Functions dir: `functions/` (auto-detected)
- Secrets set in Cloudflare dashboard: `ANTHROPIC_API_KEY`, `RESEND_API_KEY`

---

## work.html — Current State

Two case studies, both using real screenshots, no external "Visit site" links:

1. **Village Naturopathy** — spec/design concept, virtual women's health clinic (Ontario + UK)
   - Screenshot: `assets/images/screenshot-village.jpg` (216KB)
   - Source PNG (dropped by Will): `village_hero.png` in project root — safe to delete

2. **Whole Woman Reset** — real client (UK women's wellness programme)
   - Screenshot: `assets/images/screenshot-wholewomanreset.jpg` (268KB, re-compressed from wholewomanreset.png)
   - Source PNG (dropped by Will): `wholewomanreset.png` in project root — safe to delete
   - Live site: wholewomanreset.co.uk (not linked from portfolio)

### Dropped screenshots NOT yet used (in project root — safe to delete or archive)
- `margotscreenshot.png` — Dr. Margot ND (doctormargotnd.com), hormone ND, Junction/Bloor West Village
- `michellehero.png` — Michelle McKee ND (drmichellemckeend.com), Bracebridge
- `vistaswellness.png` — Vistas Wellness, therapy practice, Toronto/Ottawa (client modified after delivery)

These were considered for an "Experience" section but deferred. They're B9 Digital past work, not yet attributed on the Good Websites portfolio.

---

## Next Big Project: Summerhill Naturopathic Rebuild

**Goal:** Rebuild summerhillnaturopathic.com using the ditto.sites clone as source content. Modernize the design with Good Websites standards. Makes a strong "before/after" case study for the work.html growth section.

### Source material (already cloned)
```
~/Downloads/ditto.site/runs/summerhillnaturopathic.com/20260707-145834/
  source/screenshots/
    375.png   (731 KB)  — mobile view of current site
    768.png   (894 KB)  — tablet
    1280.png  (1.5 MB)  — desktop (use as "before" screenshot)
    1920.png  (1.7 MB)  — wide desktop
  source/assets-store/  — cloned images
  generated/app/public/assets/cloned/images/  — processed images
```

### How to start (next session)
1. `ls ~/Downloads/ditto.site/runs/summerhillnaturopathic.com/20260707-145834/source/` to explore content
2. Look at the generated HTML in `generated/` for scraped text/structure
3. New project dir: `~/Good Website Builds/SummerhillNaturopathic/`
4. Copy `css/tokens.css` from GoodWebsitesca as design foundation
5. Build page by page: home → services → about → contact
6. Before/after on work.html once live (could be Cloudflare Pages subdomain or client's own domain)

### Design direction
- Keep their brand (teal/nature palette, naturopathic identity)
- Upgrade: custom fonts (Excon/Ranade or similar), proper section hierarchy, Jane App booking
- PageSpeed target: 95+
- Mobile-first, semantic HTML

---

## Remaining Backlog (not yet started)

### Intake automation (Phase 1 — welcome + wizard)
- Replace Stripe Buy Buttons on `signup.html` with Payment Links (redirect to `/welcome.html?session_id=...`)
- New `welcome.html` — "You're in. Here's what happens next."
- New `/intake/` wizard — 10 sections, localStorage autosave → POST to `functions/api/intake/complete.js` → email to hello@goodwebsites.ca
- Pattern already exists: see `functions/api/chat.js` for the email/Resend pattern

### Stripe
- Create `OAND15` coupon (15% off recurring) in Stripe dashboard
- Enable promo codes on Payment Links (not Buy Buttons — requires Payment Links)
- Map which Stripe link = which plan (TODO comments still in signup.html)

### Resend domain verification
- Currently sandbox only — can only send to hello@goodwebsites.ca
- Verify goodwebsites.ca domain in Resend dashboard to unlock client-facing email
- Required before intake wizard can email clients their confirmation

### CONO compliance
- Review current CONO advertising rules for testimonials before adding patient-results copy

---

## Design System Quick Reference

**Fonts:** Excon (display/headings), Ranade (body) — from api.fontshare.com  
**Local font files:** `assets/fonts/Excon-Medium.woff2`, `Ranade-Light.woff2`  
**Tokens:** `css/tokens.css` — `--paper-*`, `--ink-*`, `--sun-*`, `--shadow-soft`, `--radius-*`, `--space-*`  
**Components:** `css/components.css` — `.btn`, `.badge`, `.card`, `.case-study`, `.reveal`  
**AI chat widget:** `functions/api/chat.js` (Cloudflare Pages Function, Anthropic API, SSE)

---

## Security Notes (never commit)
- `ANTHROPIC_API_KEY` — set in Cloudflare Pages env vars
- `RESEND_API_KEY` — set in Cloudflare Pages env vars
- `.wrangler/` is gitignored
- Repo must stay private: b9will/goodwebsitesca

---

## Team
- Will Robinson — strategy, design direction, client relationships
- Rylan Shaver — development partner
- Claude Code — build assistant (this session: claude-sonnet-4-6)
