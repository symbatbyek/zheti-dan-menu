import { useEffect, useRef, useState } from 'react';

/** Fixed 4:3 crop: drag to move, pinch (or wheel) to zoom. Returns a 1200×900 JPEG data URL. */
export function CropOverlay({ src, onDone, onCancel }: { src: string; onDone: (dataUrl: string) => void; onCancel: () => void }) {
  const box = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [nat, setNat] = useState<{ w: number; h: number } | null>(null);
  const [W, setW] = useState(0);
  const [view, setView] = useState({ z: 1, x: 0, y: 0 }); // z = zoom over "cover", x/y = image top-left in box px
  const pts = useRef(new Map<number, { x: number; y: number }>());
  const pinch = useRef<{ d: number; z: number } | null>(null);
  const H = (W * 3) / 4;
  const base = nat && W ? Math.max(W / nat.w, H / nat.h) : 1;

  useEffect(() => {
    const el = box.current; if (!el) return;
    const ro = new ResizeObserver(() => setW(el.clientWidth));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const clamp = (v: { z: number; x: number; y: number }) => {
    if (!nat) return v;
    const z = Math.min(4, Math.max(1, v.z));
    const dw = nat.w * base * z, dh = nat.h * base * z;
    return { z, x: Math.min(0, Math.max(W - dw, v.x)), y: Math.min(0, Math.max(H - dh, v.y)) };
  };
  // Centre the image whenever the box or image size becomes known.
  useEffect(() => {
    if (!nat || !W) return;
    setView({ z: 1, x: (W - nat.w * base) / 2, y: (H - nat.h * base) / 2 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nat, W]);

  const zoomTo = (z: number) => setView(v => {
    const cx = W / 2, cy = H / 2; const k = Math.min(4, Math.max(1, z)) / v.z;
    return clamp({ z: v.z * k, x: cx - (cx - v.x) * k, y: cy - (cy - v.y) * k });
  });
  const onDown = (e: React.PointerEvent) => { (e.target as Element).setPointerCapture(e.pointerId); pts.current.set(e.pointerId, { x: e.clientX, y: e.clientY }); };
  const onMove = (e: React.PointerEvent) => {
    const prev = pts.current.get(e.pointerId); if (!prev) return;
    pts.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pts.current.size === 2) {
      const [a, b] = [...pts.current.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (!pinch.current) pinch.current = { d, z: view.z };
      zoomTo(pinch.current.z * (d / pinch.current.d));
    } else {
      setView(v => clamp({ ...v, x: v.x + e.clientX - prev.x, y: v.y + e.clientY - prev.y }));
    }
  };
  const onUp = (e: React.PointerEvent) => { pts.current.delete(e.pointerId); if (pts.current.size < 2) pinch.current = null; };

  const finish = () => {
    const img = imgRef.current;
    if (!img || !nat) return onDone(src);
    const k = base * view.z;
    const c = document.createElement('canvas'); c.width = 1200; c.height = 900;
    c.getContext('2d')!.drawImage(img, -view.x / k, -view.y / k, W / k, H / k, 0, 0, 1200, 900);
    onDone(c.toDataURL('image/jpeg', 0.82));
  };

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 60, background: 'var(--ink-900)', color: 'var(--paper-50)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative', zIndex: 2, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', font: '600 17px var(--font-sans)' }}>Кадрлау</div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, padding: 16, overflow: 'hidden' }}>
        <div ref={box} onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}
          onWheel={e => zoomTo(view.z * (e.deltaY < 0 ? 1.08 : 1 / 1.08))}
          style={{ position: 'relative', width: '100%', aspectRatio: '4/3', outline: '2px solid #fff', boxShadow: '0 0 0 999px oklch(0% 0 0 / .55)', touchAction: 'none', cursor: 'grab' }}>
          <img ref={imgRef} src={src} alt="" draggable={false} onLoad={e => setNat({ w: e.currentTarget.naturalWidth, h: e.currentTarget.naturalHeight })}
            style={{ position: 'absolute', left: view.x, top: view.y, width: nat ? nat.w * base * view.z : '100%', maxWidth: 'none', userSelect: 'none', pointerEvents: 'none', zIndex: -1 }} />
          {[1, 2].map(n => <i key={'v' + n} style={{ position: 'absolute', top: 0, bottom: 0, left: n * 33.33 + '%', width: 1, background: 'oklch(100% 0 0 / .5)' }} />)}
          {[1, 2].map(n => <i key={'h' + n} style={{ position: 'absolute', left: 0, right: 0, top: n * 33.33 + '%', height: 1, background: 'oklch(100% 0 0 / .5)' }} />)}
        </div>
        <div style={{ position: 'relative', zIndex: 2, font: '600 15px var(--font-sans)' }}>Карточка 4:3</div>
        <div style={{ position: 'relative', zIndex: 2, font: '400 14px var(--font-sans)', color: 'var(--ink-400)' }}>Саусақпен жылжытып, үлкейтіңіз</div>
      </div>
      <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, padding: '0 16px 20px' }}>
        <button onClick={onCancel} className="qm-btn qm-btn--lg" style={{ background: 'oklch(100% 0 0 / .1)', color: 'var(--paper-50)' }}>Қайта түсіру</button>
        <button onClick={finish} className="qm-btn qm-btn--lg qm-btn--primary">Дайын</button>
      </div>
    </div>
  );
}
