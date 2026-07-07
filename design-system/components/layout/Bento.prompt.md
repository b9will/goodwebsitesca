Bento grid — the Good Websites layout signature. Outlined, hard-shadowed tiles in soft sunlit tints, spanning columns and rows for an editorial rhythm.

```jsx
<Bento columns={4} rowHeight={180}>
  <BentoTile tone="sun" colSpan={2} rowSpan={2}>
    <h3 style={{ fontFamily: "var(--font-display)" }}>Good businesses need good websites</h3>
  </BentoTile>
  <BentoTile tone="sky">One monthly price</BentoTile>
  <BentoTile tone="coral" interactive onClick={open}>See plans →</BentoTile>
  <BentoTile tone="ink" colSpan={2}>Dark feature block</BentoTile>
  <BentoTile tone="grass">Fast & handled</BentoTile>
</Bento>
```

- `Bento`: `columns` 2/3/4/6, `gap`, `rowHeight`. Dense auto-flow; collapses to one column under 640px.
- `BentoTile`: `tone` (light tints `cream`/`white`/`sun`/`coral`/`grass`/`sky`/`grape`, bold blocks `ink`/`sun-solid`/`coral-solid`), `colSpan`, `rowSpan`, `interactive`.
- Mix mostly light tints with **one** bold block per grid; keep the cream breathing. Every tile keeps the 2px ink outline + hard shadow.
