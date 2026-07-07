Primary action button — pill-shaped with an ink outline and a hard offset shadow that presses down on click. Use for any clickable action; reach for `dark` or `coral` to add punch, `ghost` for low-emphasis.

```jsx
<Button variant="primary" size="lg" onClick={start}>Start a project</Button>
<Button variant="dark" iconRight={<ArrowIcon/>}>See our work</Button>
<Button variant="ghost" size="sm">Maybe later</Button>
```

Variants: `primary` (sun gold), `dark` (ink), `secondary` (white), `coral`, `ghost`.
Sizes: `sm`, `md`, `lg`. Pass `as="a"` + `href` to render a link. All native button/anchor props pass through.
