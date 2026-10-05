Guest menu dish card: name (up to 3 lines), 2-line description, price, tags, photo; sold-out and text-only variants.
```jsx
<ItemCard name="Плов" description="Рис, говядина, морковь, нут" price={2900} photo={url} tags={[{kind:'popular',label:'Популярное'}]} />
<ItemCard name="Лагман" price={2700} photo={url} soldOut />
<ItemCard layout="feature" name="Бешбармак" price={4500} photo={url} />
```
Tap opens the item detail BottomSheet. Long KZ/RU names wrap to 3 lines; layout never breaks.
