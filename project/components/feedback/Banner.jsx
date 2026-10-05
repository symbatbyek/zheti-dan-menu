import React from 'react';
import { Icon } from '../core/Icon.jsx';
const ICON = { info: 'info', accent: 'sparkles', closed: 'clock', danger: 'circle-alert', success: 'circle-check', warning: 'sparkles' };
export function Banner({ tone = 'info', icon, children, action }) {
  return (
    <div className={'qm-banner qm-banner--' + tone} role="status">
      <Icon name={icon || ICON[tone]} size={20} className="qm-banner__icon" />
      <div className="qm-banner__text">{children}</div>
      {action}
    </div>
  );
}
