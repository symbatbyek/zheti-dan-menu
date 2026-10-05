import React from 'react';
export function Skeleton({ width = '100%', height = 16, radius, style }) {
  return <span className="qm-skel" aria-hidden="true" style={{ width, height, borderRadius: radius, ...style }} />;
}
