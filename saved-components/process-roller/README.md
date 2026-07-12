# Process roller — wide card, vertical roll (archived 2026-07-11)

Scroll-scrubbed 6-face cylinder rotating on the X axis: one wide card
(min(760px,100%) × 280px) that rolls over vertically between steps, dwelling on
each one and snapping over with a mechanical back.out overshoot. Replaced on
work.html by the simple process list (the page needed to be calmer between the
hero and the split-flap board), but the component is solid — pull it out anywhere.

## Files
- `process-roller-section.html` — drum-track > drum-stage > drum > 6 drum-faces (doodle imgs included; strip if unwanted)
- `process-roller.css` — all `.drum-*` rules incl. the `.is-3d` rotateX geometry
- `process-roller.js.html` — inline `<script>` (GSAP + ScrollTrigger timeline)

## To revive
1. Paste the section markup; keep ids `drum` and `drum-track`.
2. Add the CSS; add the script before `</body>` (needs gsap.min.js + ScrollTrigger.min.js).
3. Parent section must NOT have `overflow: hidden` (kills the sticky stage).
4. **Sign rule (bug we hit): face CSS angles must be POSITIVE** (`rotateX(60deg * n)`)
   so they cancel the negative JS rotation (`rotationX: -300`). Flip either sign and
   the front card backfaces out of existence.
5. Geometry: 280px-tall faces, 6 × 60°, translateZ 242px = seamless, 260px = ~20px gap.
6. Snappiness lives in the timeline (dwell 0.6 + roll 0.4, back.out(2)); ScrollTrigger
   snap is to labels with a plain ease — putting bouncy easing on scroll snap makes the
   PAGE bounce, don't.
7. Face fade: onUpdate sets each face's opacity to cos²(angle from front).
8. Mobile / reduced-motion fallback: default (non-.is-3d) static card stack.
