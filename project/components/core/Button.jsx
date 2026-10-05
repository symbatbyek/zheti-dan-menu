import React from 'react';
import { Icon } from './Icon.jsx';
const cx = (...a) => a.filter(Boolean).join(' ');
export function Button({ variant = 'primary', size = 'md', block = false, icon, iconRight, children, className, type = 'button', ...rest }) {
  const s = size === 'lg' ? 22 : 20;
  return (
    <button type={type} className={cx('qm-btn', 'qm-btn--' + variant, size === 'lg' && 'qm-btn--lg', block && 'qm-btn--block', className)} {...rest}>
      {icon && <Icon name={icon} size={s} />}
      {children}
      {iconRight && <Icon name={iconRight} size={s} />}
    </button>
  );
}
