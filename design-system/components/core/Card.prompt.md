Surface container for grouping content. Five looks plus an interactive hover-lift.

```jsx
<Card variant="sticker" interactive onClick={open}>
  <h3>Bright Bakery</h3>
  <p>A cheerful site for a neighbourhood bakery.</p>
</Card>
<Card variant="ink">Dark feature block</Card>
```

Variants: `soft` (warm floating), `outline`, `sticker` (ink outline + hard shadow), `flat`, `ink`, `sun`. Set `interactive` for a hover lift. Default padding is `--space-6`; override via `style`/`className`.
