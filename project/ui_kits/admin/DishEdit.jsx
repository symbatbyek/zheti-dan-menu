(() => {
const { AppBar, Button, TextField, Switch, Tag, LangTabs, PhotoPlaceholder, Dialog, Icon, Banner, ListGroup, SettingRow, Segmented, Select } = window.QRMenuDesignSystem_af1ea9;
const LANGS = ['kz', 'ru', 'en', 'zh'];
const TAGS = [['spicy', 'Ащы'], ['veg', 'Вегетариандық'], ['new', 'Жаңа'], ['popular', 'Танымал']];
const fmtPrice = v => { const d = String(v).replace(/\D/g, ''); return d ? Number(d).toLocaleString('ru-RU').replace(/\s/g, '\u00a0') : ''; };
const FAKE = { name: { kz: 'Самса', ru: 'Самса', en: 'Samsa', zh: '烤包子' }, desc: { kz: 'Сиыр еті мен пияз салынған тандыр самсасы', ru: 'Тандырная самса с говядиной и луком', en: 'Tandoor-baked pastry with beef and onion', zh: '馕坑烤制的牛肉洋葱包子' } };
const IMG = { width: '100%', height: '100%', objectFit: 'cover', display: 'block' };
const rowInput = { width: 110, border: 0, outline: 0, background: 'none', textAlign: 'right', font: '700 22px var(--font-sans)', fontVariantNumeric: 'tabular-nums', color: 'var(--text-primary)' };

function CropOverlay({ img, onDone, onCancel }) {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 60, background: 'var(--ink-900)', color: 'var(--paper-50)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative', zIndex: 2, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', font: '600 17px var(--font-sans)' }}>Кадрлау</div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, padding: 16, overflow: 'hidden' }}>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', outline: '2px solid #fff', boxShadow: '0 0 0 999px oklch(0% 0 0 / .55)' }}>
          {img ? <img src={img} alt="" style={IMG} /> : <PhotoPlaceholder icon="move" iconSize={28} />}
          {[1, 2].map(n => <i key={'v' + n} style={{ position: 'absolute', top: 0, bottom: 0, left: (n * 33.33) + '%', width: 1, background: 'oklch(100% 0 0 / .5)' }} />)}
          {[1, 2].map(n => <i key={'h' + n} style={{ position: 'absolute', left: 0, right: 0, top: (n * 33.33) + '%', height: 1, background: 'oklch(100% 0 0 / .5)' }} />)}
        </div>
        <div style={{ position: 'relative', zIndex: 2, font: '600 15px var(--font-sans)' }}>Карточка 4:3</div>
        <div style={{ position: 'relative', zIndex: 2, font: '400 14px var(--font-sans)', color: 'var(--ink-400)' }}>Саусақпен жылжытып, үлкейтіңіз</div>
      </div>
      <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, padding: '0 16px 20px' }}>
        <button onClick={onCancel} className="qm-btn qm-btn--lg" style={{ background: 'oklch(100% 0 0 / .1)', color: 'var(--paper-50)' }}>Қайта түсіру</button>
        <button onClick={onDone} className="qm-btn qm-btn--lg qm-btn--primary">Дайын</button>
      </div>
    </div>
  );
}

function DishEdit({ item, onBack, onSave, onDelete }) {
  const { categories } = window.QM_DATA;
  const isNew = !item;
  const [d, setD] = React.useState(() => item ? JSON.parse(JSON.stringify(item)) : { id: 'n' + Date.now(), cat: 'main', price: '', size: '', unit: 'g', photo: false, tags: [], soldOut: false, name: { kz: '', ru: '', en: '', zh: '' }, desc: { kz: '', ru: '', en: '', zh: '' } });
  const [status, setStatus] = React.useState(() => Object.fromEntries(LANGS.map(l => [l, item ? 'filled' : 'empty'])));
  const [source, setSource] = React.useState('kz');
  const [lang, setLangS] = React.useState('kz');
  const [busy, setBusy] = React.useState(false);
  const [crop, setCrop] = React.useState(false);
  const [pending, setPending] = React.useState(null);
  const camRef = React.useRef(null); const galRef = React.useRef(null);
  const onFile = e => { const f = e.target.files && e.target.files[0]; e.target.value = ''; if (!f) return; const r = new FileReader(); r.onload = () => { setPending(r.result); setCrop(true); }; r.readAsDataURL(f); };
  const [confirm, setConfirm] = React.useState(false);
  const setLang = l => { setStatus(s => s[lang] === 'auto' ? { ...s, [lang]: 'filled' } : s); setLangS(l); };
  const set = (k, v) => setD(x => ({ ...x, [k]: v }));
  const setText = (k, v) => { setD(x => ({ ...x, [k]: { ...x[k], [lang]: v } })); setStatus(s => ({ ...s, [lang]: v ? 'filled' : 'empty' })); };
  const others = LANGS.filter(l => l !== source);
  const missing = others.filter(l => status[l] === 'empty');
  const translate = () => {
    const src = lang; setSource(src); setBusy(true);
    setTimeout(() => {
      setD(x => { const n = { ...x, name: { ...x.name }, desc: { ...x.desc } }; LANGS.filter(l => l !== src).forEach(l => { n.name[l] = (item && item.name[l]) || FAKE.name[l]; n.desc[l] = (item && item.desc[l]) || FAKE.desc[l]; }); return n; });
      setStatus(Object.fromEntries(LANGS.map(l => [l, l === src ? 'filled' : 'auto'])));
      setBusy(false);
    }, 1100);
  };
  const ok = !!d.name.kz;
  const save = () => ok && onSave({ ...d, price: Number(d.price) || 0 });
  const L = lang.toUpperCase();
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', background: 'var(--surface-page)', zIndex: 30 }}>
      <AppBar center title={isNew ? 'Жаңа тағам' : d.name.kz} onBack={onBack} style={{ background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)' }} />
      <div style={{ flex: 1, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '4/3', position: 'relative', flexShrink: 0, background: 'var(--surface-card)', border: d.img || d.photo ? 0 : '2px dashed var(--border-strong)' }}>
          {d.img ? <img src={d.img} alt="" style={IMG} /> : d.photo ? <PhotoPlaceholder iconSize={36} /> : (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
              <Icon name="image-plus" size={32} style={{ color: 'var(--ink-400)' }} />
              <div style={{ font: '600 16px var(--font-sans)' }}>Тағам суреті</div>
              <div style={{ display: 'flex', gap: 8, marginTop: 12 }}><Button icon="camera" onClick={() => camRef.current.click()}>Камера</Button><Button variant="secondary" icon="image" onClick={() => galRef.current.click()}>Галерея</Button></div>
            </div>
          )}
          <input ref={camRef} type="file" accept="image/*" capture="environment" hidden onChange={onFile} /><input ref={galRef} type="file" accept="image/*" hidden onChange={onFile} />
          {(d.img || d.photo) && <button onClick={() => galRef.current.click()} className="qm-btn qm-btn--secondary" style={{ position: 'absolute', right: 10, bottom: 10, background: 'var(--surface-overlay)' }}><Icon name="camera" size={18} />Ауыстыру</button>}
        </div>

        <div className="qm-group" style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <LangTabs value={lang} onChange={setLang} status={status} />
          {status[lang] === 'auto' && <Banner tone="warning">AI аудармасы. Тексеріп, қажет болса түзетіңіз.</Banner>}
          <TextField label={'Атауы · ' + L} lang={lang === 'kz' ? 'kk' : lang} value={d.name[lang]} onChange={e => setText('name', e.target.value)} placeholder="Мысалы, Палау" />
          <TextField label={'Сипаттамасы · ' + L} multiline rows={3} lang={lang === 'kz' ? 'kk' : lang} value={d.desc[lang]} onChange={e => setText('desc', e.target.value)} placeholder="Құрамы 1–2 жолда" />
          {lang !== source && status[lang] !== 'empty' && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 4px' }}>
              <span style={{ font: '500 14px var(--font-sans)', color: 'var(--text-muted)' }}>Бастапқы мәтін: {source.toUpperCase()}</span>
              <Button variant="ghost" icon="refresh-cw" onClick={() => { setLangS(source); setTimeout(translate, 0); }} style={{ color: 'var(--accent-ink)', paddingRight: 4 }}>Қайта аудару</Button>
            </div>
          )}
        </div>

        {missing.length > 0 && d.name[lang] && (
          <div style={{ flexShrink: 0, borderRadius: 'var(--radius-lg)', background: 'var(--surface-inverse)', padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ font: '400 14px/1.4 var(--font-sans)', color: 'var(--text-on-inverse)' }}>{({ kz: 'Қазақша', ru: 'Орысша', en: 'Ағылшынша', zh: 'Қытайша' })[lang]} толтырылды. Басқа {missing.length} тіл әзірге бос.</div>
            <button className="qm-btn qm-btn--block" disabled={busy} onClick={translate} style={{ background: 'var(--paper-0)', color: 'var(--ink-900)', fontSize: 15, whiteSpace: 'nowrap', gap: 6 }}>
              <Icon name={busy ? 'loader' : 'languages'} size={18} />{busy ? 'Аударылуда…' : 'Автоаударма: ' + LANGS.filter(l => l !== lang).map(l => l.toUpperCase()).join(' · ')}
            </button>
          </div>
        )}

        <ListGroup inset>
          <SettingRow title="Бағасы" control={<span style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}><input inputMode="numeric" placeholder="0" value={fmtPrice(d.price)} onChange={e => set('price', e.target.value.replace(/\D/g, ''))} style={rowInput} /><span style={{ font: '700 22px var(--font-sans)' }}>₸</span></span>} />
          <SettingRow title="Санаты" control={<Select variant="inline" title="Санат" value={d.cat} onChange={v => set('cat', v)} options={categories.filter(c => c.id !== 'all').map(c => ({ value: c.id, label: c.kz }))} />} />
          <SettingRow title="Салмағы / көлемі" control={<span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><input inputMode="numeric" placeholder="—" value={d.size} onChange={e => set('size', e.target.value.replace(/\D/g, ''))} style={{ ...rowInput, width: 56, font: '600 17px var(--font-sans)' }} /><Segmented inline value={d.unit} onChange={v => set('unit', v)} options={[{ value: 'g', label: 'г' }, { value: 'ml', label: 'мл' }]} /></span>} />
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
      {crop && <CropOverlay img={pending || d.img} onCancel={() => { setCrop(false); setPending(null); galRef.current.click(); }} onDone={() => { setD(x => ({ ...x, photo: true, img: pending || x.img })); setPending(null); setCrop(false); }} />}
      <Dialog open={confirm} onClose={() => setConfirm(false)} title={'«' + d.name.kz + '» жойылсын ба?'}
        actions={<><Button variant="danger" size="lg" block onClick={() => onDelete(d.id)}>Жою</Button><Button variant="secondary" block onClick={() => { setConfirm(false); onSave({ ...d, soldOut: true, price: Number(d.price) || 0 }); }}>«Таусылды» деп белгілеу</Button><Button variant="ghost" block onClick={() => setConfirm(false)}>Болдырмау</Button></>}>
        Тағам мәзірден барлық тілде жойылады. Егер ол жай ғана таусылса, «Таусылды» деп белгілеген дұрыс.
      </Dialog>
    </div>
  );
}

Object.assign(window, { DishEdit });
})();
