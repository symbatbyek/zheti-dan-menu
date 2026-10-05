import { Button, CafeLogo, Icon, ListGroup, RadioList, SettingRow } from '../ds';
import { asset } from '../shared/store';
import { htmlLang, type Cafe, type Lang } from '../shared/types';
import { SETTINGS_L } from './strings';

interface Props { cafe: Cafe; phone: string; uiLang: Lang; setUiLang: (l: Lang) => void; onProfile: () => void; onLogout: () => void }

export function AdminSettings({ cafe, phone, uiLang, setUiLang, onProfile, onLogout }: Props) {
  const s = SETTINGS_L[uiLang] ?? SETTINGS_L.kz;
  return (
    <div lang={htmlLang(uiLang)} style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
      <div style={{ padding: '16px 16px 4px' }}><h1 style={{ margin: 0, font: '700 28px/1.1 var(--font-sans)', letterSpacing: '-.02em' }}>{s.title}</h1></div>
      <div style={{ padding: '12px 16px 32px', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <ListGroup inset>
          <button type="button" className="qm-setrow" onClick={onProfile} style={{ minHeight: 76 }}>
            <CafeLogo src={asset(cafe.logo)} name={cafe.name} size={48} />
            <span className="qm-setrow__text"><span className="qm-setrow__title" style={{ fontSize: 18, fontWeight: 700 }}>{cafe.name}</span><span className="qm-setrow__sub">{s.profile}</span></span>
            <Icon name="chevron-right" size={20} className="qm-setrow__chev" />
          </button>
          <SettingRow icon="smartphone" title={s.phone} control={<span style={{ font: '500 15px var(--font-sans)', color: 'var(--text-muted)', fontVariantNumeric: 'tabular-nums' }}>{phone || '—'}</span>} />
        </ListGroup>
        <section>
          <div style={{ margin: '0 4px 8px' }}>
            <div style={{ font: '600 14px/1.2 var(--font-sans)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-caps)' }}>{s.lang}</div>
            <div style={{ marginTop: 4, font: '400 14px/1.4 var(--font-sans)', color: 'var(--text-muted)' }}>{s.note}</div>
          </div>
          <ListGroup inset>
            <RadioList value={uiLang} onChange={setUiLang} options={([['kz', 'Қазақша'], ['ru', 'Русский'], ['en', 'English'], ['zh', '中文']] as [Lang, string][]).map(([v, l]) => ({ value: v, label: l, lead: v.toUpperCase() }))} />
          </ListGroup>
        </section>
        <Button variant="ghost" block icon="log-out" onClick={onLogout} style={{ color: 'var(--danger)' }}>{s.logout}</Button>
      </div>
    </div>
  );
}
