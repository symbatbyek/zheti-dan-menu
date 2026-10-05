import React from 'react';
const CODES = ['kz', 'ru', 'en', 'zh'];
export function LangTabs({ value = 'kz', onChange, status = {}, languages = CODES }) {
  return (
    <div className="qm-seg" role="tablist">
      {languages.map(c => (
        <button key={c} type="button" role="tab" aria-selected={c === value} className="qm-seg__item" onClick={() => onChange && onChange(c)}>
          {status[c] && <span className={'qm-seg__dot qm-seg__dot--' + status[c]} />}{c.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
