(() => {
const { AppBar, TextField, Button, Switch, ColorPicker, CafeLogo, CategoryTabs, Icon, ListGroup } = window.QRMenuDesignSystem_af1ea9;
const DAYS = ['Дүйсенбі', 'Сейсенбі', 'Сәрсенбі', 'Бейсенбі', 'Жұма', 'Сенбі', 'Жексенбі'];
const CONTRAST = { terracotta: '5.6', steppe: '6.1', saffron: '9.8', plum: '7.4', teal: '6.0', charcoal: '15.2' };

function Group({ title, note, children }) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ margin: '0 4px' }}>
        <h2 style={{ margin: 0, font: '600 14px/1.2 var(--font-sans)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-caps)' }}>{title}</h2>
        {note && <div style={{ marginTop: 4, font: '400 14px/1.4 var(--font-sans)', color: 'var(--text-muted)' }}>{note}</div>}
      </div>
      {children}
    </section>
  );
}

function AdminProfile({ accent, setAccent, onPreview, onBack, onSaved }) {
  const [days, setDays] = React.useState(DAYS.map((d, i) => ({ on: i !== 6, from: '08:00', to: '23:00' })));
  const [tab, setTab] = React.useState('drinks');
  const C0 = window.QM_DATA.cafe;
  const [f, setF] = React.useState({ name: C0.name, address: C0.address.kz, gis: C0.gis, phone: C0.phone.replace('+7', '').trim(), whatsapp: (C0.whatsappNum || '').replace('+7', '').trim(), instagram: (C0.instagram || '').replace('https://instagram.com/', '') });
  const fld = k => ({ value: f[k], onChange: e => setF({ ...f, [k]: e.target.value }) });
  const saveAll = () => {
    const wa = '+7 ' + f.whatsapp;
    const cafe = { name: f.name, address: { kz: f.address, ru: f.address, en: f.address, zh: f.address }, gis: f.gis.startsWith('http') ? f.gis : 'https://' + f.gis, phone: '+7 ' + f.phone, whatsappNum: wa, whatsapp: 'https://wa.me/' + wa.replace(/\D/g, ''), instagram: 'https://instagram.com/' + f.instagram.replace('@', '') };
    Object.assign(window.QM_DATA.cafe, cafe);
    if (window.QM_STORE) window.QM_STORE.save({ cafe });
    onSaved();
  };
  const tf = { height: 40, width: 64, border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-sm)', background: 'var(--surface-card)', textAlign: 'center', font: '500 15px var(--font-sans)', fontVariantNumeric: 'tabular-nums', color: 'var(--text-primary)' };
  const setDay = (i, k, v) => setDays(days.map((x, j) => j === i ? { ...x, [k]: v } : x));
  const copyAll = () => setDays(days.map(x => ({ ...x, on: days[0].on, from: days[0].from, to: days[0].to })));
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 30, display: 'flex', flexDirection: 'column', background: 'var(--surface-page)' }}>
      <AppBar center title="Кафе профилі" onBack={onBack} style={{ background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)' }}
        actions={<Button variant="ghost" onClick={saveAll} style={{ color: 'var(--accent-ink)' }}>Сақтау</Button>} />
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 16px 32px', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <Group title="Безендіру">
          <div style={{ position: 'relative', height: 140, borderRadius: 'var(--radius-lg)', overflow: 'hidden', flexShrink: 0 }}>
            <img src={(window.QM_BASE || '../../') + 'assets/photos/plov.jpg'} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <button style={{ position: 'absolute', right: 10, bottom: 10, background: 'var(--surface-overlay)' }} className="qm-btn qm-btn--secondary"><Icon name="camera" size={18} />Мұқаба</button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <CafeLogo name="Жеті Дән" size={64} />
            <Button variant="secondary" icon="upload">Логотипті ауыстыру</Button>
          </div>
          <TextField label="Кафе атауы" {...fld('name')} />
        </Group>
        <Group title="Акцент түсі" note="Қонақ мәзіріндегі белсенді қойынды мен батырмалардың түсі">
          <ColorPicker value={accent} onChange={setAccent} />
          <div data-accent={accent} className="qm-group" style={{ overflow: 'hidden' }}>
            <div style={{ padding: '10px 14px 0', font: '600 12px var(--font-sans)', letterSpacing: 'var(--tracking-caps)', color: 'var(--text-muted)' }}>ҚОНАҚҚА ҚАЛАЙ КӨРІНЕДІ</div>
            <CategoryTabs value={tab} onChange={setTab} items={[{ id: 'all', label: 'Барлығы' }, { id: 'drinks', label: 'Сусындар' }, { id: 'main', label: 'Негізгі' }]} />
            <div style={{ padding: 14 }}><Button block icon="map" onClick={() => window.open(window.QM_DATA.cafe.gis, '_blank')}>2GIS-те ашу</Button></div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, font: '500 14px var(--font-sans)', color: 'var(--status-open)' }}><Icon name="circle-check" size={16} />Мәтін контрасты {CONTRAST[accent]}:1, оқуға ыңғайлы</div>
        </Group>
        <Group title="Байланыс">
          <TextField label="Мекенжай" icon="map-pin" placeholder="Көше, үй, қала" {...fld('address')} />
          <TextField label="2GIS сілтемесі" icon="map" {...fld('gis')} />
          <TextField label="Телефон" prefix="+7" inputMode="tel" {...fld('phone')} />
          <TextField label="WhatsApp" icon="brand:whatsapp" prefix="+7" inputMode="tel" {...fld('whatsapp')} placeholder="700 000 00 00" />
          <TextField label="Instagram" prefix="@" {...fld('instagram')} />
        </Group>
        <Group title="Жұмыс уақыты">
          <ListGroup inset>
            {DAYS.map((d, i) => (
              <div key={d} style={{ display: 'flex', alignItems: 'center', gap: 8, minHeight: 60 }}>
                <span style={{ flex: 1, minWidth: 0, font: '500 16px var(--font-sans)', color: days[i].on ? 'var(--text-primary)' : 'var(--text-muted)' }}>{d}</span>
                {days[i].on ? <><input style={tf} value={days[i].from} onChange={e => setDay(i, 'from', e.target.value)} /><span style={{ color: 'var(--text-muted)' }}>–</span><input style={tf} value={days[i].to} onChange={e => setDay(i, 'to', e.target.value)} /></> : <span style={{ font: '500 15px var(--font-sans)', color: 'var(--text-muted)', marginRight: 8 }}>Демалыс</span>}
                <Switch checked={days[i].on} onChange={v => setDay(i, 'on', v)} ariaLabel={d} />
              </div>
            ))}
          </ListGroup>
          <Button variant="ghost" icon="copy" onClick={copyAll} style={{ alignSelf: 'flex-start', color: 'var(--accent-ink)' }}>Дүйсенбіні барлық күнге көшіру</Button>
        </Group>
        <Button size="lg" variant="secondary" block iconRight="arrow-up-right" onClick={onPreview}>Қонақ мәзірін ашу</Button>
      </div>
    </div>
  );
}

Object.assign(window, { AdminProfile });
})();
