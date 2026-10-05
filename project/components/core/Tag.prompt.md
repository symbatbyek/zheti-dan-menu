Small pill marking dish attributes (Spicy, Vegetarian, New, Popular) or sold-out state; becomes a toggle chip in the admin.
```jsx
<Tag kind="spicy">Острое</Tag>
<Tag kind="soldout">Нет в наличии</Tag>
<Tag kind="veg" pressed onClick={toggle}>Вегетарианское</Tag>
```
Max 2 tags on a card; all on the detail sheet.
