(() => {
const { Button, Switch, TextField, CafeLogo, SettingRow, ListGroup, RadioList, QrCode, Banner } = window.QRMenuDesignSystem_af1ea9;

const guestUrl = () => new URL(window.QM_GUEST_URL || '../guest-menu/index.html', location.href).href;
const qrSrc = (px) => 'https://api.qrserver.com/v1/create-qr-code/?margin=0&format=png&size=' + px + 'x' + px + '&data=' + encodeURIComponent(guestUrl());
function RealQr({ size }) {
  const [err, setErr] = React.useState(false);
  return err ? <QrCode value="zheti-dan/menu" size={size} /> : <img src={qrSrc(size * 2)} width={size} height={size} alt="QR" onError={() => setErr(true)} style={{ display: 'block' }} />;
}
function QrSticker() {
  return (
    <div style={{ background: '#fff', borderRadius: 'var(--radius-lg)', padding: '22px 20px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, boxShadow: 'var(--shadow-card)', border: '1px solid var(--border-subtle)' }}>
      <div style={{ font: '700 20px var(--font-sans)' }}>Жеті Дән</div>
      <RealQr size={220} />
      <div style={{ font: '600 16px/1.3 var(--font-sans)', textAlign: 'center' }}>Мәзір · Меню · Menu · 菜单</div>
    </div>
  );
}

function AdminQr() {
  const [size, setSize] = React.useState('sticker');
  const [done, setDone] = React.useState('');
  const [copies, setCopies] = React.useState(6);
  const n = copies;
  const pages = Math.ceil(n / (size === 'sticker' ? 6 : 4));
  const dl = f => {
    const name = window.QM_DATA.cafe.name;
    if (f === 'png') window.open(qrSrc(1000), '_blank');
    else {
      const per = size === 'sticker' ? 6 : 4; const w = size === 'sticker' ? '8cm' : '10.5cm'; const h = size === 'sticker' ? '8cm' : '14.8cm';
      const cell = '<div style="width:' + w + ';height:' + h + ';border:1px dashed #ccc;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4mm;font-family:sans-serif"><b style="font-size:16pt">' + name + '</b><img src="' + qrSrc(600) + '" style="width:5.5cm;height:5.5cm"><div style="font-size:11pt;font-weight:600">Мәзір · Меню · Menu · 菜单</div></div>';
      const win = window.open('', '_blank');
      if (win) { win.document.write('<html><head><title>' + name + ' QR</title><style>@page{size:A4;margin:10mm}body{margin:0;display:flex;flex-wrap:wrap;gap:4mm}</style></head><body>' + cell.repeat(per) + '<script>setTimeout(()=>print(),800)<\/script></body></html>'); win.document.close(); }
    }
    setDone(f); setTimeout(() => setDone(''), 1800);
  };
  return (
    <div style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
      <div style={{ padding: '16px 16px 32px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ background: 'var(--surface-sunken)', borderRadius: 'var(--radius-xl)', padding: '24px 16px', display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
          <div style={{ width: 290 }}><QrSticker /></div>
        </div>
        <div>
          <div className="qm-field__label" style={{ margin: '0 4px 8px' }}>Өлшемі</div>
          <ListGroup inset><RadioList value={size} onChange={setSize} options={[{ value: 'sticker', label: 'Стикер', sub: '8 × 8 см · A4-те 6' }, { value: 'stand', label: 'Тұғыр', sub: 'A6 · A4-те 4' }]} /></ListGroup>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 8 }}>
          <Button size="lg" icon={done === 'pdf' ? 'check' : 'file-down'} onClick={() => dl('pdf')} style={{ fontSize: 15, whiteSpace: 'nowrap', padding: '0 12px', gap: 6 }}>{done === 'pdf' ? 'Дайын' : 'PDF · ' + pages + ' бет'}</Button>
          <Button size="lg" variant="secondary" icon={done === 'png' ? 'check' : 'image-down'} onClick={() => dl('png')} style={{ fontSize: 15, whiteSpace: 'nowrap', padding: '0 12px', gap: 6 }}>{done === 'png' ? 'Дайын' : 'PNG'}</Button>
        </div>
        <Banner icon="link">Кодтың сілтемесі тұрақты: мәзірді өзгерткенде қайта басып шығарудың қажеті жоқ.</Banner>
        <div style={{ font: '400 13px/1.4 var(--font-sans)', color: 'var(--text-muted)', wordBreak: 'break-all', textAlign: 'center' }}>{guestUrl()}</div>
      </div>
    </div>
  );
}

Object.assign(window, { AdminQr });
})();
