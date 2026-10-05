import { useRef, useState, type CSSProperties } from 'react';
import { AppBar, Banner, Button, Dialog, Icon, LangTabs, ListGroup, Segmented, Select, SettingRow, Switch, Tag, TextField } from '../ds';
import { uploadImage } from '../shared/api';
import { asset, readImageFile } from '../shared/store';
import { translateAsync } from '../shared/translate';
import { LANGS, htmlLang, type Category, type Dish, type DishTag, type Lang, type TransStatus } from '../shared/types';
import { CropOverlay } from './CropOverlay';

const TAGS: [DishTag, string][] = [['spicy', 'Ащы'], ['veg', 'Вегетариандық'], ['new', 'Жаңа'], ['popular', 'Танымал']];
const LANG_NAME: Record<Lang, string> = { kz: 'Қазақша', ru: 'Орысша', en: 'Ағылшынша', zh: 'Қытайша' };
const fmtPrice = (v: string | number) => { const d = String(v).replace(/\D/g, ''); return d ? Number(d).toLocaleString('ru-RU').replace(/\s/g, ' ') : ''; };
const IMG: CSSProperties = { width: '100%', height: '100%', objectFit: 'cover', display: 'block' };
const rowInput: CSSProperties = { width: 110, border: 0, outline: 0, background: 'none', textAlign: 'right', font: '700 22px var(--font-sans)', fontVariantNumeric: 'tabular-nums', color: 'var(--text-primary)' };
const empty = () => ({ kz: '', ru: '', en: '', zh: '' });

interface Draft extends Omit<Dish, 'price' | 'size'> { price: string; size: string }
interface Props { item: Dish | null; cats: Category[]; onBack: () => void; onSave: (d: Dish) => void; onDelete: (id: string) => void; onError: (msg: string) => void }

export function DishEdit({ item, cats, onBack, onSave, onDelete, onError }: Props) {
  const isNew = !item;
  const [d, setD] = useState<Draft>(() => item
    ? { ...structuredClone(item), price: String(item.price || ''), size: item.size ? String(item.size) : '' }
    : { id: 'n' + Date.now(), cat: cats[0]?.id ?? '', price: '', size: '', unit: 'g', tags: [], soldOut: false, name: empty(), desc: empty() });
  const [status, setStatus] = useState<Record<Lang, TransStatus>>(() =>
    item?.trans ?? (Object.fromEntries(LANGS.map(l => [l, item ? (item.name[l] ? 'filled' : 'empty') : 'empty'])) as Record<Lang, TransStatus>));
  const [source, setSource] = useState<Lang>('kz');
  const [lang, setLangS] = useState<Lang>('kz');
  const [busy, setBusy] = useState(false);
  const [pending, setPending] = useState<string | null>(null);
  const [confirm, setConfirm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const onCropped = async (img: string) => {
    setPending(null); setUploading(true);
    try { set('img', await uploadImage(img)); } catch { onError('Сурет жүктелмеді. Қайталап көріңіз'); }
    finally { setUploading(false); }
  };
  const camRef = useRef<HTMLInputElement>(null);
  const galRef = useRef<HTMLInputElement>(null);

  const onFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]; e.target.value = '';
    if (f) setPending(await readImageFile(f, 2000));
  };
  // Opening a machine-translated tab counts as reviewing it.
  const setLang = (l: Lang) => { setStatus(s => (s[lang] === 'auto' ? { ...s, [lang]: 'filled' } : s)); setLangS(l); };
  const set = <K extends keyof Draft>(k: K, v: Draft[K]) => setD(x => ({ ...x, [k]: v }));
  const setText = (k: 'name' | 'desc', v: string) => {
    setD(x => ({ ...x, [k]: { ...x[k], [lang]: v } }));
    if (k === 'name') setStatus(s => ({ ...s, [lang]: v ? 'filled' : 'empty' }));
    else if (v && status[lang] === 'empty') setStatus(s => ({ ...s, [lang]: 'filled' }));
  };
  const missing = LANGS.filter(l => l !== lang && status[l] === 'empty');
  const translate = async (src: Lang) => {
    setSource(src); setLangS(src); setBusy(true);
    const [name, desc] = await Promise.all([translateAsync(d.name[src], src), translateAsync(d.desc[src], src)]);
    setD(x => ({ ...x, name: { ...x.name, ...name }, desc: { ...x.desc, ...desc } }));
    setStatus(Object.fromEntries(LANGS.map(l => [l, l === src ? 'filled' : 'auto'])) as Record<Lang, TransStatus>);
    setBusy(false);
  };
  const toDish = (x: Draft): Dish => ({ ...x, price: Number(x.price) || 0, size: Number(x.size) || undefined, trans: status });
  const ok = !!d.name.kz.trim() && !!d.cat && !uploading;
  const save = () => { if (ok) onSave(toDish(d)); };
  const L = lang.toUpperCase();

  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', background: 'var(--surface-page)', zIndex: 30 }}>
      <AppBar center title={isNew ? 'Жаңа тағам' : d.name.kz} onBack={onBack} style={{ background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)' }} />
      <div style={{ flex: 1, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '4/3', position: 'relative', flexShrink: 0, background: 'var(--surface-card)', border: d.img ? 0 : '2px dashed var(--border-strong)' }}>
          {uploading ? <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, font: '600 16px var(--font-sans)', color: 'var(--text-muted)' }}><Icon name="loader" size={22} />Жүктелуде…</div> : d.img ? <img src={asset(d.img)} alt="" style={IMG} /> : (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
              <Icon name="image-plus" size={32} style={{ color: 'var(--ink-400)' }} />
              <div style={{ font: '600 16px var(--font-sans)' }}>Тағам суреті</div>
              <div style={{ display: 'flex', gap: 8, marginTop: 12 }}><Button icon="camera" onClick={() => camRef.current?.click()}>Камера</Button><Button variant="secondary" icon="image" onClick={() => galRef.current?.click()}>Галерея</Button></div>
            </div>
          )}
          <input ref={camRef} type="file" accept="image/*" capture="environment" hidden onChange={onFile} />
          <input ref={galRef} type="file" accept="image/*" hidden onChange={onFile} />
          {d.img && !uploading && <button onClick={() => galRef.current?.click()} className="qm-btn qm-btn--secondary" style={{ position: 'absolute', right: 10, bottom: 10, background: 'var(--surface-overlay)' }}><Icon name="camera" size={18} />Ауыстыру</button>}
        </div>

        <div className="qm-group" style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <LangTabs value={lang} onChange={setLang} status={status} />
          {status[lang] === 'auto' && <Banner tone="warning">AI аудармасы. Тексеріп, қажет болса түзетіңіз.</Banner>}
          <TextField label={'Атауы · ' + L} lang={htmlLang(lang)} value={d.name[lang]} onChange={e => setText('name', e.target.value)} placeholder="Мысалы, Палау" />
          <TextField label={'Сипаттамасы · ' + L} multiline rows={3} lang={htmlLang(lang)} value={d.desc[lang]} onChange={e => setText('desc', e.target.value)} placeholder="Құрамы 1–2 жолда" />
          {lang !== source && status[lang] !== 'empty' && d.name[source] && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 4px' }}>
              <span style={{ font: '500 14px var(--font-sans)', color: 'var(--text-muted)' }}>Бастапқы мәтін: {source.toUpperCase()}</span>
              <Button variant="ghost" icon="refresh-cw" disabled={busy} onClick={() => translate(source)} style={{ color: 'var(--accent-ink)', paddingRight: 4 }}>Қайта аудару</Button>
            </div>
          )}
        </div>

        {missing.length > 0 && d.name[lang] && (
          <div style={{ flexShrink: 0, borderRadius: 'var(--radius-lg)', background: 'var(--surface-inverse)', padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ font: '400 14px/1.4 var(--font-sans)', color: 'var(--text-on-inverse)' }}>{LANG_NAME[lang]} толтырылды. Басқа {missing.length} тіл әзірге бос.</div>
            <button className="qm-btn qm-btn--block" disabled={busy} onClick={() => translate(lang)} style={{ background: 'var(--paper-0)', color: 'var(--ink-900)', fontSize: 15, whiteSpace: 'nowrap', gap: 6 }}>
              <Icon name={busy ? 'loader' : 'languages'} size={18} />{busy ? 'Аударылуда…' : 'Автоаударма: ' + LANGS.filter(l => l !== lang).map(l => l.toUpperCase()).join(' · ')}
            </button>
          </div>
        )}

        <ListGroup inset>
          <SettingRow title="Бағасы" control={<span style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}><input inputMode="numeric" placeholder="0" aria-label="Бағасы" value={fmtPrice(d.price)} onChange={e => set('price', e.target.value.replace(/\D/g, ''))} style={rowInput} /><span style={{ font: '700 22px var(--font-sans)' }}>₸</span></span>} />
          <SettingRow title="Санаты" control={<Select variant="inline" title="Санат" value={d.cat} onChange={v => set('cat', v)} options={cats.map(c => ({ value: c.id, label: c.kz }))} />} />
          <SettingRow title="Салмағы / көлемі" control={<span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><input inputMode="numeric" placeholder="—" aria-label="Салмағы / көлемі" value={d.size} onChange={e => set('size', e.target.value.replace(/\D/g, ''))} style={{ ...rowInput, width: 56, font: '600 17px var(--font-sans)' }} /><Segmented inline value={d.unit} onChange={v => set('unit', v)} options={[{ value: 'g', label: 'г' }, { value: 'ml', label: 'мл' }]} /></span>} />
        </ListGroup>

        <div className="qm-group" style={{ padding: 16 }}>
          <div className="qm-field__label" style={{ marginBottom: 10 }}>Белгілер</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {TAGS.map(([k, l]) => <Tag key={k} kind={k} pressed={d.tags.includes(k)} onClick={() => set('tags', d.tags.includes(k) ? d.tags.filter(t => t !== k) : [...d.tags, k])}>{l}</Tag>)}
          </div>
        </div>

        <ListGroup inset>
          <SettingRow title={d.soldOut ? 'Таусылды' : 'Қолжетімді'} subtitle={d.soldOut ? 'Қонақтар тағамды сұр түсте көреді' : 'Тағам таусылғанда өшіріңіз'} control={<Switch checked={!d.soldOut} onChange={v => set('soldOut', !v)} ariaLabel="Қолжетімді" />} />
        </ListGroup>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 4, flexShrink: 0 }}>
          <Button size="lg" block disabled={!ok} onClick={save}>Сақтау</Button>
          {!isNew && <Button variant="ghost" block onClick={() => setConfirm(true)} style={{ color: 'var(--danger)' }}>Тағамды жою</Button>}
        </div>
      </div>
      {pending && <CropOverlay src={pending} onCancel={() => { setPending(null); galRef.current?.click(); }} onDone={onCropped} />}
      <Dialog open={confirm} onClose={() => setConfirm(false)} title={'«' + d.name.kz + '» жойылсын ба?'}
        actions={<>
          <Button variant="danger" size="lg" block onClick={() => onDelete(d.id)}>Жою</Button>
          <Button variant="secondary" block onClick={() => { setConfirm(false); onSave(toDish({ ...d, soldOut: true })); }}>«Таусылды» деп белгілеу</Button>
          <Button variant="ghost" block onClick={() => setConfirm(false)}>Болдырмау</Button>
        </>}>
        Тағам мәзірден барлық тілде жойылады. Егер ол жай ғана таусылса, «Таусылды» деп белгілеген дұрыс.
      </Dialog>
    </div>
  );
}
