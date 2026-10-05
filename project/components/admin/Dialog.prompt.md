Centered confirmation dialog with stacked full-width actions (delete dish, delete category). Fills nearest `position:relative` ancestor.
```jsx
<Dialog open title="Удалить блюдо?" actions={<><Button variant="danger" block size="lg">Удалить</Button><Button variant="ghost" block>Отмена</Button></>}>
  «Лагман» исчезнет из меню.
</Dialog>
```
