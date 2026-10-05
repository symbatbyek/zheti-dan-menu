import React from 'react';
import { IconButton } from '../core/IconButton.jsx';
export function AppBar({ title, onBack, backLabel = 'Артқа', actions, center = false, style }) {
  return (
    <header className="qm-appbar" style={style}>
      {onBack ? <IconButton icon="chevron-left" label={backLabel} size={24} onClick={onBack} /> : <span style={{ width: 6 }} />}
      <div className="qm-appbar__title" style={center ? { textAlign: 'center' } : undefined}>{title}</div>
      {actions ? <div className="qm-appbar__actions">{actions}</div> : center && <span style={{ width: onBack ? 44 : 6, flex: 'none' }} />}
    </header>
  );
}
