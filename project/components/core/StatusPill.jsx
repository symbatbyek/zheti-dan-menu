import React from 'react';
const cx = (...a) => a.filter(Boolean).join(' ');
export function StatusPill({ open = true, label, hours }) {
  return (
    <span className={cx('qm-status', !open && 'qm-status--closed')}>
      <span className="qm-status__dot" />
      <span className="qm-status__label">{label || (open ? 'Ашық' : 'Жабық')}</span>
      {hours && <span>· {hours}</span>}
    </span>
  );
}
