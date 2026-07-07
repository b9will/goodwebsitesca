Styled native select with a custom chevron.

```jsx
<Select label="Budget" options={["Under £5k", "£5k–£15k", "£15k+"]} />
<Select options={[{value:"web",label:"Website"},{value:"brand",label:"Branding"}]} />
```

Props: `label`, `options` (strings or `{value,label}`), or pass `<option>` children. Plus native select attrs.
