Centered icon + message for empty categories, no search results, no dishes yet.
```jsx
<EmptyState title="Бұл санатта әзірге тағам жоқ" />
<EmptyState icon="search-x" title="Ештеңе табылмады" dashed={false} />
<EmptyState icon="plus" title="Мәзір бос" action={<Button>Тағам қосу</Button>} />
```
