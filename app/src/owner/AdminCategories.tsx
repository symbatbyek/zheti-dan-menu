import { useState } from 'react';
import { AppBar, Button, Dialog, Icon, ListGroup, RadioList, TextField } from '../ds';
import { translateText } from '../shared/translate';
import { LANGS, htmlLang, type Category, type Dish, type Lang } from '../shared/types';

const LANG_LABEL: Record<Lang, string> = { kz: 'Қазақша', ru: 'Русский', en: 'English', zh: '中文' };

function CategoryEdit({ cat, isNew, onBack, onSave, onDelete }: { cat: Category; isNew: boolean; onBack: () => void; onSave: (c: Category) => void; onDelete: () => void }) {
  const [c, setC] = useState(cat);
  const [ai, setAi] = useState<Partial<Record<Lang, boolean>>>({});
  const translate = () => { setC({ ...c, ...translateText(c.kz, 'kz') }); setAi({ ru: true, en: true, zh: true }); };
  const full = LANGS.every(l => c[l].trim());
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 30, display: 'flex', flexDirection: 'column', background: 'var(--surface-page)' }}>
      <AppBar center title={isNew ? 'Жаңа санат' : 'Санат'} onBack={onBack} style={{ background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)' }}
        actions={<Button variant="ghost" disabled={!full} onClick={() => onSave(c)} style={{ color: 'var(--accent-ink)' }}>Дайын</Button>} />
      <div style={{ flex: 1, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div className="qm-group" style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
          {LANGS.map(l => (
            <div key={l} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="qm-field__label">{LANG_LABEL[l]}</span>
                {l === 'kz' ? <span className="qm-tag qm-tag--neutral">Бастапқы</span> : ai[l] ? <span className="qm-tag" style={{ background: 'var(--warning-soft)', color: 'var(--warning)' }}>AI</span> : null}
              </div>
              <TextField lang={htmlLang(l)} aria-label={LANG_LABEL[l]} value={c[l]} onChange={e => { setC({ ...c, [l]: e.target.value }); setAi({ ...ai, [l]: false }); }} />
            </div>
          ))}
          <Button variant="soft" icon="languages" block disabled={!c.kz.trim()} onClick={translate}>Қазақшадан аудару</Button>
        </div>
        <div style={{ font: '400 14px/1.45 var(--font-sans)', color: 'var(--text-muted)', padding: '0 4px' }}>«Негізгі тағамдар» сияқты ұзын атаулар қысқартылмайды: қонақ мәзіріндегі қойынды кеңейеді.</div>
        {!isNew && <Button variant="ghost" block onClick={onDelete} style={{ color: 'var(--danger)', marginTop: 'auto' }}>Санатты жою</Button>}
      </div>
    </div>
  );
}

interface Props { cats: Category[]; setCats: (c: Category[]) => void; items: Dish[]; setItems: (i: Dish[]) => void }

export function AdminCategories({ cats, setCats, items, setItems }: Props) {
  const [edit, setEdit] = useState<{ cat: Category; isNew: boolean } | null>(null);
  const [del, setDel] = useState<Category | null>(null);
  const [moveTo, setMoveTo] = useState('');
  const [drag, setDrag] = useState<string | null>(null);
  const count = (id: string) => items.filter(i => i.cat === id).length;
  const others = del ? cats.filter(c => c.id !== del.id) : [];
  const n = del ? count(del.id) : 0;
  const askDelete = (c: Category) => { setMoveTo(cats.find(x => x.id !== c.id)?.id ?? ''); setDel(c); };
  const doDelete = () => {
    if (!del) return;
    if (n) setItems(items.map(i => (i.cat === del.id ? { ...i, cat: moveTo } : i)));
    setCats(cats.filter(c => c.id !== del.id)); setDel(null); setEdit(null);
  };
  const save = (c: Category) => { setCats(cats.some(x => x.id === c.id) ? cats.map(x => (x.id === c.id ? c : x)) : [...cats, c]); setEdit(null); };
  const drop = (target: string) => {
    if (drag && drag !== target) { const nx = cats.slice(); const a = nx.findIndex(c => c.id === drag), b = nx.findIndex(c => c.id === target); const [m] = nx.splice(a, 1); nx.splice(b, 0, m); setCats(nx); }
    setDrag(null);
  };
  return (
    <div style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
      <div style={{ padding: '16px 16px 4px' }}>
        <h1 style={{ margin: 0, font: '700 28px/1.1 var(--font-sans)', letterSpacing: '-.02em' }}>Санаттар</h1>
        <p style={{ margin: '6px 0 0', font: '400 15px/1.45 var(--font-sans)', color: 'var(--text-muted)' }}>Осы рет қонақ мәзіріндегі қойындылар ретімен бірдей</p>
      </div>
      <div style={{ padding: '12px 16px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {cats.length > 0 && (
          <ListGroup>
            {cats.map(c => (
              <div key={c.id} draggable onDragStart={() => setDrag(c.id)} onDragOver={e => e.preventDefault()} onDrop={() => drop(c.id)} onDragEnd={() => setDrag(null)} style={{ display: 'flex', alignItems: 'center', gap: 6, minHeight: 68, padding: '6px 12px 6px 0', opacity: drag === c.id ? 0.5 : 1 }}>
                <span className="qm-row__handle"><Icon name="grip-vertical" size={20} /></span>
                <button onClick={() => setEdit({ cat: { ...c }, isNew: false })} style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', gap: 8, textAlign: 'left', border: 0, background: 'none', padding: 0, cursor: 'pointer', color: 'inherit' }}>
                  <span style={{ flex: 1, minWidth: 0, display: 'block', font: '600 16px/1.3 var(--font-sans)' }}>{c.kz}</span>
                  <span style={{ font: '500 15px var(--font-sans)', color: 'var(--text-muted)', fontVariantNumeric: 'tabular-nums' }}>{count(c.id)}</span>
                  <Icon name="chevron-right" size={20} style={{ color: 'var(--ink-400)' }} />
                </button>
              </div>
            ))}
          </ListGroup>
        )}
        <Button variant="secondary" size="lg" block icon="plus" onClick={() => setEdit({ cat: { id: 'c' + Date.now(), kz: '', ru: '', en: '', zh: '' }, isNew: true })}>Жаңа санат</Button>
        <div style={{ font: '400 14px/1.45 var(--font-sans)', color: 'var(--text-muted)', textAlign: 'center' }}>«Барлығы» қойындысы автоматты түрде қосылады.</div>
      </div>
      {edit && <CategoryEdit cat={edit.cat} isNew={edit.isNew} onBack={() => setEdit(null)} onSave={save} onDelete={() => askDelete(edit.cat)} />}
      <Dialog open={!!del} onClose={() => setDel(null)}
        title={del ? (n ? `«${del.kz}» санатында ${n} тағам бар` : `«${del.kz}» жойылсын ба?`) : ''}
        actions={<>
          {n > 0 && others.length === 0
            ? <Button variant="ghost" block onClick={() => setDel(null)}>Түсінікті</Button>
            : <><Button variant="danger" size="lg" block onClick={doDelete}>{n ? 'Ауыстырып, санатты жою' : 'Санатты жою'}</Button><Button variant="ghost" block onClick={() => setDel(null)}>Болдырмау</Button></>}
        </>}>
        {n ? (others.length ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span>Жоймас бұрын оларды қай санатқа ауыстырамыз?</span>
            <RadioList value={moveTo} onChange={setMoveTo} options={others.map(c => ({ value: c.id, label: c.kz }))} />
          </div>
        ) : 'Бұл жалғыз санат. Алдымен жаңа санат қосып, тағамдарды соған ауыстырыңыз.') : 'Санат бос. Тағамдар жойылмайды.'}
      </Dialog>
    </div>
  );
}
