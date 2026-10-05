import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Fab({ icon = 'plus', children, style, ...rest }) {
  return <button type="button" className="qm-fab" style={style} {...rest}><Icon name={icon} size={24} />{children}</button>;
}
