import React from 'react';
export function QrCode({ value = 'menu', size = 168, color = 'var(--ink-900)' }) {
  const N = 25;
  let seed = 0; for (let i = 0; i < value.length; i++) seed = (seed * 31 + value.charCodeAt(i)) % 233280;
  const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  const finder = (x, y) => {
    for (const [fx, fy] of [[0, 0], [N - 7, 0], [0, N - 7]]) {
      const dx = x - fx, dy = y - fy;
      if (dx >= 0 && dx < 7 && dy >= 0 && dy < 7) return (dx === 0 || dx === 6 || dy === 0 || dy === 6 || (dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4)) ? 1 : 0;
      if (dx >= -1 && dx <= 7 && dy >= -1 && dy <= 7) return 0;
    }
    return null;
  };
  const cells = [];
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) { const f = finder(x, y); cells.push(f === null ? (y === 6 || x === 6 ? (x + y) % 2 === 0 : rnd() > .5) : !!f); }
  return (
    <div className="qm-qr" role="img" aria-label="QR" style={{ width: size, height: size, gridTemplateColumns: 'repeat(' + N + ',1fr)' }}>
      {cells.map((on, i) => <i key={i} style={{ background: on ? color : 'transparent' }} />)}
    </div>
  );
}
