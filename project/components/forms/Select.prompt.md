Custom picker: a field (or inline value) that opens a bottom sheet of options with a check on the current one. Replaces the native select so it looks the same on every phone.
```jsx
<Select label="Санат" value={cat} onChange={setCat} options={[{value:'main',label:'Негізгі тағамдар'}]} />
<SettingRow title="Санаты" control={<Select variant="inline" title="Санат" value={cat} onChange={setCat} options={opts} />} />
```
The sheet portals into the nearest `[data-qm-root]` ancestor (put it on the phone/app frame, which must be position:relative); otherwise it covers the viewport.
