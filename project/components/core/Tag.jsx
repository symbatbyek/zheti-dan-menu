import React from 'react';
import { Icon } from './Icon.jsx';
const ICONS = { spicy: 'flame', veg: 'leaf', new: 'sparkles', popular: 'star' };
export function Tag({ kind = 'neutral', icon, children, pressed, onClick }) {
  const glyph = icon === false ? null : (onClick && pressed ? 'check' : (icon || ICONS[kind]));
  const inner = <>{glyph && <Icon name={glyph} size={onClick && pressed ? 18 : 12} style={onClick && pressed ? { margin: '0 -2px' } : undefined} />}{children}</>;
  if (onClick) return <button type="button" className={'qm-tag qm-tag--' + kind} aria-pressed={!!pressed} onClick={onClick}>{inner}</button>;
  return <span className={'qm-tag qm-tag--' + kind}>{inner}</span>;
}
