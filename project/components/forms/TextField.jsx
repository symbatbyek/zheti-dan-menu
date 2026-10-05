import React from 'react';
import { Icon } from '../core/Icon.jsx';
const cx = (...a) => a.filter(Boolean).join(' ');
export function TextField({ label, hint, error, prefix, suffix, icon, multiline = false, rows = 3, id, className, style, ...rest }) {
  const autoId = React.useId();
  const fid = id || autoId;
  const Ctl = multiline ? 'textarea' : 'input';
  return (
    <div className={cx('qm-field', error && 'qm-field--error', className)} style={style}>
      {label && <label className="qm-field__label" htmlFor={fid}>{label}</label>}
      <div className="qm-field__control" style={multiline ? { alignItems: 'flex-start' } : undefined}>
        {icon && <Icon name={icon} size={20} />}
        {prefix && <span className="qm-field__affix">{prefix}</span>}
        <Ctl id={fid} className="qm-field__input" rows={multiline ? rows : undefined} {...rest} />
        {suffix && <span className="qm-field__affix">{suffix}</span>}
      </div>
      {(error || hint) && <div className="qm-field__hint">{error || hint}</div>}
    </div>
  );
}
