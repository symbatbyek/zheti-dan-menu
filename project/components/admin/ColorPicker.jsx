import React from 'react';
import { Icon } from '../core/Icon.jsx';
const PRESETS = [
  { id: 'terracotta', label: 'Терракота', color: 'var(--terracotta-600)' },
  { id: 'steppe', label: 'Дала', color: 'var(--steppe-600)' },
  { id: 'saffron', label: 'Запыран', color: 'var(--saffron-500)', dark: true },
  { id: 'plum', label: 'Алхоры', color: 'var(--plum-600)' },
  { id: 'teal', label: 'Көгілдір', color: 'var(--teal-600)' },
  { id: 'charcoal', label: 'Графит', color: 'var(--ink-900)' },
];
export function ColorPicker({ value = 'terracotta', onChange, options = PRESETS }) {
  return (
    <div className="qm-swatches" role="radiogroup">
      {options.map(o => (
        <button key={o.id} type="button" role="radio" aria-checked={o.id === value} aria-label={o.label} title={o.label} className="qm-swatch" style={{ background: o.color, color: o.dark ? 'var(--ink-900)' : '#fff' }} onClick={() => onChange && onChange(o.id)}>
          {o.id === value && <Icon name="check" size={22} />}
        </button>
      ))}
    </div>
  );
}
