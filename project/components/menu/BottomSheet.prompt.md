Slide-up sheet with scrim, grip and frosted close button; used for item detail. Fills the nearest `position:relative` ancestor.
```jsx
<div style={{position:'relative',height:'100%'}}>
  <BottomSheet open={!!item} onClose={() => setItem(null)}>…</BottomSheet>
</div>
```
