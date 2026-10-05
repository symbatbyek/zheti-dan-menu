import { useState } from 'react';
import { Button, EmptyState, Fab, ListGroup, MenuRow, SectionHeader, TextField } from '../ds';
import { asset } from '../shared/store';
import type { Dish, MenuData } from '../shared/types';
import { useSortable } from './useSortable';

interface Props { data: MenuData; setItems: (i: Dish[]) => void; onEdit: (d: Dish) => void; onAdd: () => void; onPreview: () => void }

export function AdminMenu({ data, setItems, onEdit, onAdd, onPreview }: Props) {
  const { cafe, cats, items } = data;
  const [q, setQ] = useState('');
  const toggle = (id: string, v: boolean) => setItems(items.map(i => (i.id === id ? { ...i, soldOut: !v } : i)));
  // Dishes reorder only within their own category.
  const move = (dragId: string, overId: string) => {
    const a = items.findIndex(x => x.id === dragId), b = items.findIndex(x => x.id === overId);
    if (a < 0 || b < 0 || items[a].cat !== items[b].cat) return;
    const nx = items.slice(); const [m] = nx.splice(a, 1); nx.splice(b, 0, m); setItems(nx);
  };
  const sort = useSortable(items.map(i => i.id), move);
  const match = (i: Dish) => !q || (i.name.kz + ' ' + i.name.ru).toLowerCase().includes(q.toLowerCase());
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
          <TextField icon="search" type="search" placeholder="Тағамды іздеу" value={q} onChange={e => setQ(e.target.value)} />
        </div>
        <div style={{ padding: '8px 16px 104px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          {cats.map(c => {
            const all = items.filter(i => i.cat === c.id); const list = all.filter(match);
            if (!list.length) return null;
            const off = all.filter(i => i.soldOut).length;
            return (
              <section key={c.id}>
                <SectionHeader count={all.length + ' тағам' + (off ? ' · ' + off + ' таусылды' : '')}>{c.kz}</SectionHeader>
                <ListGroup>
                  {list.map(i => (
                    <div key={i.id} ref={sort.rowRef(i.id)} style={sort.rowStyle(i.id)}>
                      <MenuRow handleProps={sort.handleProps(i.id)} draggable={!q} name={i.name.kz} price={i.price} photo={asset(i.img)} available={!i.soldOut} onToggle={v => toggle(i.id, v)} onClick={() => onEdit(i)} />
                    </div>
                  ))}
                </ListGroup>
              </section>
            );
          })}
          {!q && items.length === 0 && <EmptyState title="Мәзір әзірге бос" dashed>«Тағам қосу» батырмасын басыңыз</EmptyState>}
          {q && !items.some(match) && <EmptyState icon="search-x" title="Ештеңе табылмады" dashed={false}>«{q}» бойынша тағам жоқ</EmptyState>}
        </div>
      </div>
      <Fab onClick={onAdd} style={{ position: 'absolute', right: 16, bottom: 16 }}>Тағам қосу</Fab>
    </div>
  );
}
