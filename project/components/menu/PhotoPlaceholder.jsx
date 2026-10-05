import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function PhotoPlaceholder({ label, icon = 'utensils', iconSize = 24 }) {
  return <div className="qm-photo-ph"><Icon name={icon} size={iconSize} />{label && <span>{label}</span>}</div>;
}
