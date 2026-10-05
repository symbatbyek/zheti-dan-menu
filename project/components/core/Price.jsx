import React from 'react';
export function formatTenge(v) { return Number(v || 0).toLocaleString('ru-RU').replace(/\s/g, '\u00a0') + '\u00a0₸'; }
export function Price({ value, size, strike = false, className, style }) {
  return <span className={'qm-price' + (strike ? ' qm-price--strike' : '') + (className ? ' ' + className : '')} style={{ fontSize: size, ...style }}>{formatTenge(value)}</span>;
}
