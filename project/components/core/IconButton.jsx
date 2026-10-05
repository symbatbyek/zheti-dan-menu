import React from 'react';
import { Icon } from './Icon.jsx';
const cx = (...a) => a.filter(Boolean).join(' ');
export function IconButton({ icon, label, variant = 'ghost', size = 22, className, type = 'button', ...rest }) {
  return <button type={type} aria-label={label} title={label} className={cx('qm-iconbtn', 'qm-iconbtn--' + variant, className)} {...rest}><Icon name={icon} size={size} /></button>;
}
