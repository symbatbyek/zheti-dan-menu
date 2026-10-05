(() => {
const { TextField, MenuRow, Fab, Button, SectionHeader, EmptyState, ListGroup } = window.QRMenuDesignSystem_af1ea9;

function AdminMenu({ items, setItems, onEdit, onAdd, onPreview }) {
  const { categories, cafe } = window.QM_DATA;
  const [q, setQ] = React.useState('');
  const [drag, setDrag] = React.useState(null);
  const toggle = (id, v) => setItems(items.map(i => i.id === id ? { ...i, soldOut: !v } : i));
  const drop = target => {
    if (drag && drag !== target.id) {
      const a = items.findIndex(x => x.id === drag), b = items.findIndex(x => x.id === target.id);
      if (items[a].cat === items[b].cat) { const nx = items.slice(); const [m] = nx.splice(a, 1); nx.splice(b, 0, m); setItems(nx); }
    }
    setDrag(null);
  };
  const match = i => !q || (i.name.kz + ' ' + i.name.ru).toLowerCase().includes(q.toLowerCase());
  return (
    <div style={{ flex: 1, minHeight: 0, position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, overflowY: 'auto' }}>
        <div style={{ padding: '12px 16px 10px', position: 'sticky', top: 0, background: 'var(--surface-page)', zIndex: 5, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ font: '500 14px var(--font-sans)', color: 'var(--text-muted)' }}>{cafe.name}</div>
              <h1 style={{ margin: 0, font: '700 28px/1.1 var(--font-sans)', letterSpacing: '-.02em' }}>Мәзір</h1>
            </div>
            <Button variant="secondary" iconRight="arrow-up-right" onClick={onPreview}>Қонақ көзімен</Button>
          </div>
          <TextField icon="search" placeholder="Тағамды іздеу" value={q} onChange={e => setQ(e.target.value)} />
        </div>
        <div style={{ padding: '8px 16px 104px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          {categories.filter(c => c.id !== 'all').map(c => {
            const all = items.filter(i => i.cat === c.id); const list = all.filter(match);
            if (!list.length) return null;
            const off = all.filter(i => i.soldOut).length;
            return (
              <section key={c.id}>
                <SectionHeader count={all.length + ' тағам' + (off ? ' · ' + off + ' таусылды' : '')}>{c.kz}</SectionHeader>
                <ListGroup>
                  {list.map(i => (
                    <div key={i.id} draggable onDragStart={() => setDrag(i.id)} onDragOver={e => e.preventDefault()} onDrop={() => drop(i)} style={{ opacity: drag === i.id ? .5 : 1 }}>
                      <MenuRow name={i.name.kz} price={i.price} photo={i.img} available={!i.soldOut} onToggle={v => toggle(i.id, v)} onClick={() => onEdit(i)} soldOutLabel="Таусылды" availableLabel="Қолжетімді" />
                    </div>
                  ))}
                </ListGroup>
              </section>
            );
          })}
          {q && !items.some(match) && <EmptyState icon="search-x" title="Ештеңе табылмады" dashed={false}>«{q}» бойынша тағам жоқ</EmptyState>}
        </div>
      </div>
      <Fab onClick={onAdd} style={{ position: 'absolute', right: 16, bottom: 16 }}>Тағам қосу</Fab>
    </div>
  );
}

Object.assign(window, { AdminMenu });
})();
