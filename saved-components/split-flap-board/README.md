# Split-flap departure board (copied to library 2026-07-11 — still LIVE on work.html)

Scroll-driven vestaboard: a sticky card whose letter cells flip like an airport
departure board as you scroll through 9 features. This copy exists so the component
can be reused elsewhere; the original remains in production on work.html — if you
update one, update both.

## Files
- `split-flap-section.html` — the section (header + flap-track > flap-stage > flap-card)
- `split-flap.css` — all `.flap-*` rules
- `split-flap.js.html` — inline `<script defer>` (vanilla JS, no GSAP needed for the flips;
  scroll position maps to feature index; card bg/fg set per feature from the strong tokens)

## To revive elsewhere
1. Paste the section markup; keep ids `flap-track`, `flap-card`, `flap-tag`,
   `flap-counter`, `flap-board`, `flap-desc`, `flap-dots`.
2. Add the CSS and the script (script is self-contained vanilla JS).
3. Track height is set in JS: 9 features × 62vh — adjust both together.
4. Feature data lives in the script's `features` array ({tag, lines[3], bg, fg, desc}).
   Lines are max ~14 chars to fit the board.
5. Reduced motion: letters swap instantly (no leaf animation) — handled in-script.
