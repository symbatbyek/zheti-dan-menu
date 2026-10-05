import { useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { AppBar, Button, CafeLogo, CategoryTabs, ColorPicker, Icon, ListGroup, Switch, TextField } from '../ds';
import { asset, readImageFile } from '../shared/store';
import type { Accent, Cafe, DayHours } from '../shared/types';

const DAYS = ['Дүйсенбі', 'Сейсенбі', 'Сәрсенбі', 'Бейсенбі', 'Жұма', 'Сенбі', 'Жексенбі'];
const CONTRAST: Record<Accent, string> = { terracotta: '5.6', steppe: '6.1', saffron: '9.8', plum: '7.4', teal: '6.0', charcoal: '15.2' };
const tf: CSSProperties = { height: 40, width: 64, border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-sm)', background: 'var(--surface-card)', textAlign: 'center', font: '500 15px var(--font-sans)', fontVariantNumeric: 'tabular-nums', color: 'var(--text-primary)' };
const strip7 = (v: string) => v.replace(/^\+7\s?/, '');
const validTime = (v: string) => /^([01]\d|2[0-3]):[0-5]\d$/.test(v);

function Group({ title, note, children }: { title: string; note?: string; children: ReactNode }) {
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

interface Props { cafe: Cafe; accent: Accent; setAccent: (a: Accent) => void; onPreview: () => void; onBack: () => void; onSave: (c: Cafe) => void }

export function AdminProfile({ cafe, accent, setAccent, onPreview, onBack, onSave }: Props) {
  const [days, setDays] = useState<DayHours[]>(cafe.hours);
  const [tab, setTab] = useState('drinks');
  const [cover, setCover] = useState(cafe.cover);
  const [logo, setLogo] = useState(cafe.logo);
  const coverRef = useRef<HTMLInputElement>(null);
  const logoRef = useRef<HTMLInputElement>(null);
  const [f, setF] = useState({ name: cafe.name, address: cafe.address.kz, gis: cafe.gis, phone: strip7(cafe.phone), whatsapp: strip7(cafe.whatsapp), instagram: cafe.instagram });
  const fld = (k: keyof typeof f) => ({ value: f[k], onChange: (e: React.ChangeEvent<HTMLInputElement>) => setF({ ...f, [k]: e.target.value }) });
  const setDay = (i: number, k: keyof DayHours, v: string | boolean) => setDays(days.map((x, j) => (j === i ? { ...x, [k]: v } : x)));
  const copyAll = () => setDays(days.map(() => ({ ...days[0] })));
  const badTime = days.some(d => d.on && !(validTime(d.from) && validTime(d.to)));
  const pick = (set: (v: string) => void, max: number) => async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; e.target.value = '';
    if (file) set(await readImageFile(file, max));
  };

  const save = () => {
    if (badTime || !f.name.trim()) return;
    // Address is typed once (Kazakh) and shown to every language; other languages keep their text if the Kazakh one didn't change.
    const address = f.address === cafe.address.kz ? cafe.address : { kz: f.address, ru: f.address, en: f.address, zh: f.address };
    const gis = f.gis.trim();
    onSave({
      ...cafe, name: f.name.trim(), cover, logo, address, hours: days,
      gis: !gis || /^https?:\/\//.test(gis) ? gis : 'https://' + gis,
      phone: f.phone.trim() ? '+7 ' + f.phone.trim() : '',
      whatsapp: f.whatsapp.trim() ? '+7 ' + f.whatsapp.trim() : '',
      instagram: f.instagram.trim().replace(/^@/, '').replace(/^https?:\/\/(www\.)?instagram\.com\//, '').replace(/\/$/, ''),
    });
  };

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 30, display: 'flex', flexDirection: 'column', background: 'var(--surface-page)' }}>
      <AppBar center title="Кафе профілі" onBack={onBack} style={{ background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)' }}
        actions={<Button variant="ghost" disabled={badTime || !f.name.trim()} onClick={save} style={{ color: 'var(--accent-ink)' }}>Сақтау</Button>} />
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 16px 32px', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <Group title="Безендіру">
          <div style={{ position: 'relative', height: 140, borderRadius: 'var(--radius-lg)', overflow: 'hidden', flexShrink: 0, background: 'var(--surface-sunken)' }}>
            {cover && <img src={asset(cover)} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />}
            <button onClick={() => coverRef.current?.click()} style={{ position: 'absolute', right: 10, bottom: 10, background: 'var(--surface-overlay)' }} className="qm-btn qm-btn--secondary"><Icon name="camera" size={18} />Мұқаба</button>
            <input ref={coverRef} type="file" accept="image/*" hidden onChange={pick(setCover, 1600)} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <CafeLogo src={asset(logo)} name={f.name} size={64} />
            <Button variant="secondary" icon="upload" onClick={() => logoRef.current?.click()}>Логотипті ауыстыру</Button>
            <input ref={logoRef} type="file" accept="image/*" hidden onChange={pick(setLogo, 256)} />
          </div>
          <TextField label="Кафе атауы" {...fld('name')} />
        </Group>
        <Group title="Акцент түсі" note="Қонақ мәзіріндегі белсенді қойынды мен батырмалардың түсі">
          <ColorPicker value={accent} onChange={setAccent} />
          <div data-accent={accent} className="qm-group" style={{ overflow: 'hidden' }}>
            <div style={{ padding: '10px 14px 0', font: '600 12px var(--font-sans)', letterSpacing: 'var(--tracking-caps)', color: 'var(--text-muted)' }}>ҚОНАҚҚА ҚАЛАЙ КӨРІНЕДІ</div>
            <CategoryTabs value={tab} onChange={setTab} items={[{ id: 'all', label: 'Барлығы' }, { id: 'drinks', label: 'Сусындар' }, { id: 'main', label: 'Негізгі' }]} />
            <div style={{ padding: 14 }}><Button block icon="map" onClick={() => f.gis && window.open(f.gis, '_blank', 'noopener')}>2GIS-те ашу</Button></div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, font: '500 14px var(--font-sans)', color: 'var(--status-open)' }}><Icon name="circle-check" size={16} />Мәтін контрасты {CONTRAST[accent]}:1, оқуға ыңғайлы</div>
        </Group>
        <Group title="Байланыс">
          <TextField label="Мекенжай" icon="map-pin" placeholder="Көше, үй, қала" {...fld('address')} />
          <TextField label="2GIS сілтемесі" icon="map" inputMode="url" {...fld('gis')} />
          <TextField label="Телефон" prefix="+7" inputMode="tel" {...fld('phone')} />
          <TextField label="WhatsApp" icon="brand:whatsapp" prefix="+7" inputMode="tel" placeholder="700 000 00 00" {...fld('whatsapp')} />
          <TextField label="Instagram" prefix="@" {...fld('instagram')} />
        </Group>
        <Group title="Жұмыс уақыты">
          <ListGroup inset>
            {DAYS.map((d, i) => (
              <div key={d} style={{ display: 'flex', alignItems: 'center', gap: 8, minHeight: 60 }}>
                <span style={{ flex: 1, minWidth: 0, font: '500 16px var(--font-sans)', color: days[i].on ? 'var(--text-primary)' : 'var(--text-muted)' }}>{d}</span>
                {days[i].on
                  ? <>
                      <input style={{ ...tf, borderColor: validTime(days[i].from) ? undefined : 'var(--danger)' }} inputMode="numeric" aria-label={d + ' басталуы'} value={days[i].from} onChange={e => setDay(i, 'from', e.target.value)} />
                      <span style={{ color: 'var(--text-muted)' }}>–</span>
                      <input style={{ ...tf, borderColor: validTime(days[i].to) ? undefined : 'var(--danger)' }} inputMode="numeric" aria-label={d + ' аяқталуы'} value={days[i].to} onChange={e => setDay(i, 'to', e.target.value)} />
                    </>
                  : <span style={{ font: '500 15px var(--font-sans)', color: 'var(--text-muted)', marginRight: 8 }}>Демалыс</span>}
                <Switch checked={days[i].on} onChange={v => setDay(i, 'on', v)} ariaLabel={d} />
              </div>
            ))}
          </ListGroup>
          {badTime && <div style={{ margin: '0 4px', font: '500 14px var(--font-sans)', color: 'var(--danger)' }}>Уақытты СС:ММ түрінде жазыңыз, мысалы 08:00</div>}
          <Button variant="ghost" icon="copy" onClick={copyAll} style={{ alignSelf: 'flex-start', color: 'var(--accent-ink)' }}>Дүйсенбіні барлық күнге көшіру</Button>
        </Group>
        <Button size="lg" variant="secondary" block iconRight="arrow-up-right" onClick={onPreview}>Қонақ мәзірін ашу</Button>
      </div>
    </div>
  );
}
