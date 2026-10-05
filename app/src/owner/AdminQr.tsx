import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { Banner, Button, ListGroup, RadioList } from '../ds';
import { guestUrl } from './strings';

// QR is generated locally and encodes the Guest page next to this one.
// Once the menu has its permanent domain, codes printed from there stay valid.
const useQr = (url: string, px: number) => {
  const [src, setSrc] = useState('');
  useEffect(() => { QRCode.toDataURL(url, { width: px, margin: 0, errorCorrectionLevel: 'M' }).then(setSrc).catch(() => setSrc('')); }, [url, px]);
  return src;
};

const SIZES = { sticker: { per: 6, w: '8cm', h: '8cm', qr: '5.5cm' }, stand: { per: 4, w: '10.5cm', h: '14.8cm', qr: '7cm' } } as const;
type Size = keyof typeof SIZES;
const esc = (s: string) => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

export function AdminQr({ cafeName }: { cafeName: string }) {
  const url = guestUrl();
  const preview = useQr(url, 440);
  const [size, setSize] = useState<Size>('sticker');
  const [done, setDone] = useState('');
  const flash = (f: string) => { setDone(f); setTimeout(() => setDone(''), 1800); };

  const png = async () => {
    const a = document.createElement('a');
    a.href = await QRCode.toDataURL(url, { width: 1000, margin: 2 });
    a.download = `${cafeName} QR.png`;
    a.click();
    flash('png');
  };
  const pdf = async () => {
    const s = SIZES[size];
    const qr = await QRCode.toDataURL(url, { width: 800, margin: 0 });
    const cell = `<div class="c"><b>${esc(cafeName)}</b><img src="${qr}"><div>Мәзір · Меню · Menu · 菜单</div></div>`;
    const win = window.open('', '_blank');
    if (!win) return;
    win.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${esc(cafeName)} QR</title><style>@page{size:A4;margin:10mm}body{margin:0;display:flex;flex-wrap:wrap;gap:4mm;font-family:Onest,system-ui,sans-serif}.c{width:${s.w};height:${s.h};border:1px dashed #ccc;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4mm;box-sizing:border-box}.c b{font-size:16pt}.c img{width:${s.qr};height:${s.qr}}.c div{font-size:11pt;font-weight:600}</style></head><body>${cell.repeat(s.per)}<script>onload=()=>setTimeout(()=>print(),300)<\/script></body></html>`);
    win.document.close();
    flash('pdf');
  };

  const btn = { fontSize: 15, whiteSpace: 'nowrap', padding: '0 12px', gap: 6 } as const;
  return (
    <div style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
      <div style={{ padding: '16px 16px 32px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ background: 'var(--surface-sunken)', borderRadius: 'var(--radius-xl)', padding: '24px 16px', display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
          <div style={{ width: 290, maxWidth: '100%', background: '#fff', borderRadius: 'var(--radius-lg)', padding: '22px 20px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, boxShadow: 'var(--shadow-card)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ font: '700 20px var(--font-sans)', textAlign: 'center' }}>{cafeName}</div>
            <div style={{ width: 220, maxWidth: '100%', aspectRatio: '1' }}>{preview && <img src={preview} alt="QR" style={{ width: '100%', height: '100%', display: 'block' }} />}</div>
            <div style={{ font: '600 16px/1.3 var(--font-sans)', textAlign: 'center' }}>Мәзір · Меню · Menu · 菜单</div>
          </div>
        </div>
        <div>
          <div className="qm-field__label" style={{ margin: '0 4px 8px' }}>Өлшемі</div>
          <ListGroup inset><RadioList value={size} onChange={setSize} options={[{ value: 'sticker', label: 'Стикер', sub: '8 × 8 см · A4-те 6' }, { value: 'stand', label: 'Тұғыр', sub: 'A6 · A4-те 4' }]} /></ListGroup>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 8 }}>
          <Button size="lg" icon={done === 'pdf' ? 'check' : 'file-down'} onClick={pdf} style={btn}>{done === 'pdf' ? 'Дайын' : 'PDF · 1 бет'}</Button>
          <Button size="lg" variant="secondary" icon={done === 'png' ? 'check' : 'image-down'} onClick={png} style={btn}>{done === 'png' ? 'Дайын' : 'PNG'}</Button>
        </div>
        <Banner icon="link">Кодтың сілтемесі тұрақты: мәзірді өзгерткенде қайта басып шығарудың қажеті жоқ.</Banner>
        <div style={{ font: '400 13px/1.4 var(--font-sans)', color: 'var(--text-muted)', wordBreak: 'break-all', textAlign: 'center' }}>{url}</div>
      </div>
    </div>
  );
}
