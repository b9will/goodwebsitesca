Soft, colour-coded chip for topics, filters and multi-select tokens.

```jsx
<Tag color="sky">Branding</Tag>
<Tag color="grass" onRemove={() => drop(id)}>SEO</Tag>
```

Colours: `neutral`, `sun`, `coral`, `grass`, `sky`, `grape`. Pass `onRemove` to render a × button. Softer than `Badge` — use Tag for user-facing categories, Badge for statuses.
