(() => {
const { AppBar, CafeLogo, StatusPill, Button, Icon, HoursTable } = window.QRMenuDesignSystem_af1ea9;

function CafeInfoScreen({ lang, closed, onBack }) {
  const { cafe, t } = window.QM_DATA; const s = t[lang];
  const today = 4;
  const block = { background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: 16, boxShadow: 'var(--shadow-card)' };
  const label = { font: '600 14px/1.2 var(--font-sans)', color: 'var(--text-muted)', margin: '0 0 10px' };
  return (
    <div lang={lang === 'kz' ? 'kk' : lang} style={{ position: 'absolute', inset: 0, overflowY: 'auto', background: 'var(--surface-page)' }}>
      <AppBar title={s.info} onBack={onBack} />
      <div style={{ padding: '8px 16px 32px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <CafeLogo name={cafe.name} size={64} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ font: '700 24px/1.2 var(--font-sans)' }}>{cafe.name}</div>
            <StatusPill open={!closed} label={closed ? s.closed : s.open} hours={closed ? s.opensAt : cafe.hours} />
          </div>
        </div>
        <div style={block}>
          <p style={label}>{s.address}</p>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', font: '500 16px/1.4 var(--font-sans)', marginBottom: 14 }}><Icon name="map-pin" size={20} style={{ color: 'var(--accent)', marginTop: 1 }} />{cafe.address[lang]}</div>
          <Button variant="secondary" block icon="map" onClick={() => window.open(cafe.gis, '_blank')}>{s.open2gis}</Button>
        </div>
        <div style={block}>
          <p style={label}>{s.hours}</p>
          <HoursTable today={today} days={s.days.map((d, i) => ({ label: d, from: i === 6 ? '09:00' : '08:00', to: i === 6 ? '22:00' : '23:00', todayLabel: s.today }))} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Button size="lg" block icon="phone" onClick={() => { location.href = 'tel:' + cafe.phone.replace(/\s/g, ''); }}>{s.call}</Button>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            <Button variant="secondary" onClick={() => window.open(cafe.whatsapp, '_blank')}><Icon name="brand:whatsapp" size={20} style={{ color: '#25D366' }} />WhatsApp</Button>
            <Button variant="secondary" icon="instagram" onClick={() => window.open(cafe.instagram, '_blank')}>Instagram</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { CafeInfoScreen });
})();
