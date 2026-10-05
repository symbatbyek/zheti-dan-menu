import React from 'react';
export function HoursTable({ days = [], today }) {
  return (
    <div className="qm-hours">
      {days.map((d, i) => (
        <div key={i} className={'qm-hours__row' + (i === today ? ' qm-hours__row--today' : '')}>
          <span>{d.label}{i === today && d.todayLabel && <span className="qm-hours__today">{d.todayLabel}</span>}</span>
          <span className="qm-hours__time">{d.closed ? d.closedLabel || 'Демалыс' : d.from + '–' + d.to}</span>
        </div>
      ))}
    </div>
  );
}
