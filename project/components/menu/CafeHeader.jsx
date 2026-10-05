import React from 'react';
import { CafeLogo } from '../core/CafeLogo.jsx';
import { StatusPill } from '../core/StatusPill.jsx';
import { Icon } from '../core/Icon.jsx';
export function CafeHeader({ name, logo, cover, open = true, statusLabel, hours, onInfo, trailing }) {
  return (
    <div className="qm-cafehead">
      {cover !== undefined && <div className="qm-cafehead__cover">{cover ? <img src={cover} alt="" /> : null}</div>}
      <div className="qm-cafehead__row">
        <button type="button" className="qm-cafehead__id" onClick={onInfo}>
          <CafeLogo src={logo} name={name} size={52} />
          <span className="qm-cafehead__text">
            <span className="qm-cafehead__name">{name}{onInfo && <Icon name="chevron-right" size={20} style={{ color: 'var(--text-muted)' }} />}</span>
            <StatusPill open={open} label={statusLabel} hours={hours} />
          </span>
        </button>
        {trailing}
      </div>
    </div>
  );
}
