import React from 'react';
export function CafeLogo({ src, name = '', size = 48 }) {
  return (
    <span className="qm-logo" style={{ width: size, height: size, fontSize: Math.round(size * 0.42), borderRadius: size >= 64 ? 'var(--radius-lg)' : 'var(--radius-md)' }}>
      {src ? <img src={src} alt={name} /> : (name.trim()[0] || '·').toUpperCase()}
    </span>
  );
}
