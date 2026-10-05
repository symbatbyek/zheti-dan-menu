import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Price } from '../core/Price.jsx';
import { Switch } from '../forms/Switch.jsx';
import { PhotoPlaceholder } from '../menu/PhotoPlaceholder.jsx';
export function MenuRow({ name, price, photo, available = true, onToggle, onClick, draggable = true, soldOutLabel = 'Таусылды', availableLabel = 'Қолжетімді' }) {
  return (
    <div className={'qm-row' + (available ? '' : ' qm-row--soldout')}>
      {draggable ? <span className="qm-row__handle" aria-label="Сүйреу"><Icon name="grip-vertical" size={20} /></span> : <span style={{ width: 12 }} />}
      <span className="qm-row__thumb">{photo ? <img src={photo} alt="" /> : <PhotoPlaceholder iconSize={18} />}</span>
      <button type="button" className="qm-row__main" onClick={onClick}>
        <span className="qm-row__name">{name}</span>
        <span className="qm-row__meta">{available ? <Price value={price} /> : <span className="qm-row__sold">{soldOutLabel}</span>}</span>
      </button>
      <Switch checked={available} onChange={onToggle} ariaLabel={availableLabel} />
    </div>
  );
}
