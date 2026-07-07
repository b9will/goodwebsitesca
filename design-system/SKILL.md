---
name: good-websites-design
description: Use this skill to generate well-branded interfaces and assets for Good Websites (a happy, charming, easy-going website agency — bold & poppy, sunny gold, Excon + Ranade, bento layouts), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets
out and create static HTML files for the user to view. If working on production code,
you can copy assets and read the rules here to become an expert in designing with this
brand.

If the user invokes this skill without any other guidance, ask them what they want to
build or design, ask some questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.

## Map
- `readme.md` — full design guide: voice/content rules, visual foundations, iconography, file index.
- `styles.css` — single CSS entry point; `@import`s all tokens + fonts. Link this first.
- `tokens/` — colors, typography, spacing, radius, shadow, motion (CSS custom properties).
- `assets/logo/` — sun mark SVGs (gold / ink / cream).
- `components/` — React primitives (Button, Badge, Tag, Card, Avatar, Bento/BentoTile, Input, Select, Checkbox, Switch, Logo). Each has a `.prompt.md` with usage.
- `ui_kits/website/` — full marketing-site recreation (reference for layouts).
- `ui_kits/deck/` — pitch/proposal slide templates (1280×720).

## Essentials
- **Fonts:** Excon (display/headings, Medium 500) + Ranade (everything else); Excon Medium + Ranade Light self-hosted, other weights from Fontshare.
- **Colour:** sunny gold `#FFC838` (action), warm ink `#1A1611` (text/outlines), bright cream `#FEFCF7` (page), poppy accents (coral/grass/sky/grape) for blocks, plus soft `--tile-*` tints for bento cells.
- **Signature:** 2px ink outlines + hard offset shadows ("sticker"), pill buttons that press down, generous rounding, big Excon headlines, **bento grids** as the house layout.
- **Voice:** warm, plain, human; "we"/"you"; sentence case; the word "good"; **no emoji**.
- **Icons:** Lucide (outline, 2px), via CDN. Plus the bespoke sun mark.
