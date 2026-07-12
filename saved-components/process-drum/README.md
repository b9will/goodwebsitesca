# Process drum — 3D horizontal cylinder (archived 2026-07-11)

Scroll-scrubbed 6-face 3D drum that rotated horizontally (rotateY) through the
process steps. Lived on work.html until it was replaced by the vertical roller
card (felt like too much motion directly above the split-flap board).

## Files
- `process-drum-section.html` — the section markup (drum-track > drum-stage > drum > 6 drum-faces, plus floating doodles)
- `process-drum.css` — all `.drum-*` rules including the `.is-3d` rotateY geometry
- `process-drum.js.html` — the inline `<script>` block (GSAP + ScrollTrigger scrub)

## To revive
1. Paste the section markup into a page; keep ids `drum` and `drum-track`.
2. Add the CSS to pages.css (or inline).
3. Add the script before `</body>`; requires `js/vendor/gsap.min.js` + `ScrollTrigger.min.js` already loaded.
4. The parent section must NOT have `overflow: hidden` — it kills the sticky stage.
5. Geometry: 300×340px faces, 6 × 60°, `translateZ` radius 260px = seamless,
   280px = ~23px gap between faces. JS rotates to `rotationY: -300` (rests on face 6).
6. Mobile / reduced-motion fallback is the default (non-`.is-3d`) static card stack.
