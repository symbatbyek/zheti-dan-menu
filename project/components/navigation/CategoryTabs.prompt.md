Horizontal, scrollable category tabs with an accent underline; sticks to the top of the guest menu.
```jsx
<CategoryTabs sticky value={cat} onChange={scrollToSection}
  items={[{id:'all',label:'Все'},{id:'drinks',label:'Напитки'},{id:'main',label:'Основные блюда'}]} />
```
Pair with scroll-spy: update `value` as sections pass the bar.
