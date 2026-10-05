import type { CSSProperties } from 'react';
import { AppBar, Button, CafeLogo, HoursTable, Icon, StatusPill } from '../ds';
import { T } from '../shared/i18n';
import { asset } from '../shared/store';
import type { OpenState } from '../shared/hours';
import { htmlLang, type Cafe, type Lang } from '../shared/types';
import { statusHours } from './status';

const block: CSSProperties = { background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: 16, boxShadow: 'var(--shadow-card)' };
const label: CSSProperties = { font: '600 14px/1.2 var(--font-sans)', color: 'var(--text-muted)', margin: '0 0 10px' };
const open = (url: string) => window.open(url, '_blank', 'noopener');

export function CafeInfoScreen({ cafe, lang, status, onBack }: { cafe: Cafe; lang: Lang; status: OpenState; onBack: () => void }) {
  const s = T[lang];
  const digits = (v: string) => v.replace(/\D/g, '');
  return (
    <div lang={htmlLang(lang)} style={{ position: 'absolute', inset: 0, overflowY: 'auto', background: 'var(--surface-page)' }}>
      <AppBar title={s.info} onBack={onBack} backLabel={s.back} />
      <div style={{ padding: '8px 16px 32px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <CafeLogo src={asset(cafe.logo)} name={cafe.name} size={64} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ font: '700 24px/1.2 var(--font-sans)' }}>{cafe.name}</div>
            <StatusPill open={status.open} label={status.open ? s.open : s.closed} hours={statusHours(status, s)} />
          </div>
        </div>
        <div style={block}>
          <p style={label}>{s.address}</p>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', font: '500 16px/1.4 var(--font-sans)', marginBottom: 14 }}><Icon name="map-pin" size={20} style={{ color: 'var(--accent)', marginTop: 1 }} />{cafe.address[lang] || cafe.address.kz}</div>
          {cafe.gis && <Button variant="secondary" block icon="map" onClick={() => open(cafe.gis)}>{s.open2gis}</Button>}
        </div>
        <div style={block}>
          <p style={label}>{s.hours}</p>
          <HoursTable today={status.today} days={s.days.map((d, i) => ({ label: d, from: cafe.hours[i]?.from, to: cafe.hours[i]?.to, closed: !cafe.hours[i]?.on, closedLabel: s.dayOff, todayLabel: s.today }))} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {cafe.phone && <Button size="lg" block icon="phone" onClick={() => { location.href = 'tel:+' + digits(cafe.phone); }}>{s.call}</Button>}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {cafe.whatsapp && <Button variant="secondary" onClick={() => open('https://wa.me/' + digits(cafe.whatsapp))}><Icon name="brand:whatsapp" size={20} style={{ color: '#25D366' }} />WhatsApp</Button>}
            {cafe.instagram && <Button variant="secondary" icon="instagram" onClick={() => open('https://instagram.com/' + cafe.instagram.replace(/^@/, ''))}>Instagram</Button>}
          </div>
        </div>
      </div>
    </div>
  );
}
