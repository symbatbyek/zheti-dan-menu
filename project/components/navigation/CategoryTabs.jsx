import React from 'react';
const cx = (...a) => a.filter(Boolean).join(' ');
export function CategoryTabs({ items = [], value, onChange, sticky = false }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current && ref.current.querySelector('[aria-selected="true"]');
    if (!el) return;
    const bar = ref.current;
    const target = el.offsetLeft - (bar.clientWidth - el.offsetWidth) / 2;
    bar.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
  }, [value]);
  return (
    <div ref={ref} role="tablist" className={cx('qm-cattabs', sticky && 'qm-cattabs--sticky')}>
      {items.map(it => <button key={it.id} role="tab" type="button" aria-selected={it.id === value} className="qm-cattab" onClick={() => onChange && onChange(it.id)}>{it.label}</button>)}
    </div>
  );
}
