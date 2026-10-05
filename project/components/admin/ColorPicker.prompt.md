Accent color swatches for the café profile; the chosen id themes the guest menu via `data-accent`.
```jsx
<ColorPicker value={accent} onChange={setAccent} />
<div data-accent={accent}>…guest menu…</div>
```
Curated presets only (no free picker) so contrast stays safe.
