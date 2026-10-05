import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function BottomNav({ items = [], value, onChange }) {
  return (
    <nav className="qm-bnav">
      {items.map(it => (
        <button key={it.id} type="button" className="qm-bnav__item" aria-current={it.id === value ? 'page' : undefined} onClick={() => onChange && onChange(it.id)}>
          <Icon name={it.icon} size={24} />{it.label}
        </button>
      ))}
    </nav>
  );
}
