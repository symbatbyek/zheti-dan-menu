import React from 'react';
import { Price } from '../core/Price.jsx';
import { Tag } from '../core/Tag.jsx';
import { PhotoPlaceholder } from './PhotoPlaceholder.jsx';
const cx = (...a) => a.filter(Boolean).join(' ');
export function ItemCard({ name, description, price, photo, placeholder = false, tags = [], soldOut = false, soldOutLabel = 'Таусылды', layout = 'row', onClick, lang }) {
  const hasMedia = !!photo || placeholder;
  return (
    <button type="button" lang={lang} onClick={onClick} className={cx('qm-item', layout === 'feature' && hasMedia && 'qm-item--feature', !hasMedia && 'qm-item--text', soldOut && 'qm-item--soldout')}>
      {hasMedia && layout === 'feature' && <div className="qm-item__media">{photo ? <img src={photo} alt="" /> : <PhotoPlaceholder iconSize={32} />}</div>}
      <div className="qm-item__body">
        <h3 className="qm-item__name">{name}</h3>
        {description && <p className="qm-item__desc">{description}</p>}
        <div className="qm-item__foot">
          <Price value={price} />
          {soldOut ? <Tag kind="soldout" icon={false}>{soldOutLabel}</Tag> : tags.slice(0, 2).map((t, i) => <Tag key={i} kind={t.kind}>{t.label}</Tag>)}
        </div>
      </div>
      {hasMedia && layout !== 'feature' && <div className="qm-item__media">{photo ? <img src={photo} alt="" /> : <PhotoPlaceholder />}</div>}
    </button>
  );
}
