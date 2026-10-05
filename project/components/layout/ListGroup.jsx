import React from 'react';
export function ListGroup({ children, inset = false }) {
  const kids = React.Children.toArray(children).filter(Boolean);
  return <div className={'qm-group' + (inset ? ' qm-group--inset' : '')}>{kids.map((c, i) => <div key={i} className="qm-group__item">{c}</div>)}</div>;
}
