Tap-friendly button; one primary per screen, accent-filled, everything else quieter.
```jsx
<Button size="lg" block>Сохранить</Button>
<Button variant="soft" icon="languages">Автоперевод</Button>
<Button variant="secondary" icon="map-pin">Открыть в 2GIS</Button>
<Button variant="danger" icon="trash-2">Удалить блюдо</Button>
```
Admin primary actions use `size="lg"` (52px). Guest UI uses md (44px). Never go below 44px.
