52px labelled input with prefix/suffix/icon, hint and error; multiline for descriptions.
```jsx
<TextField label="Номер телефона" prefix="+7" inputMode="tel" placeholder="700 000 00 00" />
<TextField label="Цена" suffix="₸" inputMode="numeric" value="2 500" />
<TextField icon="search" placeholder="Поиск блюда" />
<TextField label="Описание" multiline rows={3} />
```
