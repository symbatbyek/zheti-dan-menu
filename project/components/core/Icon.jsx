import React from 'react';
const CDN = 'https://unpkg.com/lucide-static@0.460.0/icons/';
const BRAND = 'https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/';
export function Icon({ name, size = 20, label, className, style }) {
  return <span className={'qm-icon' + (className ? ' ' + className : '')} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true} style={{ width: size, height: size, '--qm-icon': 'url(' + (name.startsWith('brand:') ? BRAND + name.slice(6) : CDN + name) + '.svg)', ...style }} />;
}
