import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { Banner, Button, ListGroup, RadioList } from '../ds';
import { guestUrl } from './strings';
import { deliver, stickerPdf, stickerPng, type QrSize } from './qrSheet';

// The QR encodes the Guest page next to this one. Open this screen on the final domain
// (menu.symbatbyek.com) so printed codes point there.
export function AdminQr({ cafeName }: { cafeName: string }) {
  const url = guestUrl();
  const [preview, setPreview] = useState('');
  const [size, setSize] = useState<QrSize>('sticker');
  // Files are prepared ahead of time: phones only allow sharing/downloading right after a tap.
  const [files, setFiles] = useState<{ pdf?: File; png?: File }>({});
  const [done, setDone] = useState('');
  const [failed, setFailed] = useState(false);

  useEffect(() => { QRCode.toDataURL(url, { width: 440, margin: 0 }).then(setPreview).catch(() => setPreview('')); }, [url]);
  useEffect(() => {
    let alive = true;
    setFiles({}); setFailed(false);
    Promise.all([stickerPdf(url, cafeName, size), stickerPng(url, cafeName, size)])
      .then(([pdf, png]) => alive && setFiles({ pdf, png }))
      .catch(() => alive && setFailed(true));
    return () => { alive = false; };
  }, [url, cafeName, size]);

  const get = async (kind: 'pdf' | 'png') => {
    const file = files[kind];
    if (!file) return;
    await deliver(file);
    setDone(kind); setTimeout(() => setDone(''), 1800);
  };
  const ready = !!files.pdf && !!files.png;
  const btn = { fontSize: 15, whiteSpace: 'nowrap', padding: '0 12px', gap: 6 } as const;
  const icon = (kind: 'pdf' | 'png', base: string) => (done === kind ? 'check' : ready ? base : 'loader');

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
          <Button size="lg" icon={icon('pdf', 'file-down')} disabled={!ready} onClick={() => get('pdf')} style={btn}>{done === 'pdf' ? 'Дайын' : 'PDF · 1 бет'}</Button>
          <Button size="lg" variant="secondary" icon={icon('png', 'image-down')} disabled={!ready} onClick={() => get('png')} style={btn}>{done === 'png' ? 'Дайын' : 'PNG'}</Button>
        </div>
        {failed && <Banner tone="danger">Файл жасалмады. Бетті жаңартып көріңіз.</Banner>}
        <Banner icon="link">Кодтың сілтемесі тұрақты: мәзірді өзгерткенде қайта басып шығарудың қажеті жоқ.</Banner>
        <div style={{ font: '400 13px/1.4 var(--font-sans)', color: 'var(--text-muted)', wordBreak: 'break-all', textAlign: 'center' }}>{url}</div>
      </div>
    </div>
  );
}
