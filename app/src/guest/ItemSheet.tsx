import { useEffect, useState } from 'react';
import { BottomSheet, PhotoPlaceholder, Price, Tag } from '../ds';
import { T } from '../shared/i18n';
import { asset } from '../shared/store';
import { htmlLang, type Dish, type Lang } from '../shared/types';

export function ItemSheet({ item, lang, onClose }: { item: Dish | null; lang: Lang; onClose: () => void }) {
  // Keep the last item rendered while the sheet animates closed.
  const [last, setLast] = useState(item);
  useEffect(() => { if (item) setLast(item); }, [item]);
  const i = item || last;
  const s = T[lang];
  return (
    <BottomSheet open={!!item} onClose={onClose} closeLabel={s.close}>
      {i && (
        <div lang={htmlLang(lang)}>
          <div style={{ aspectRatio: '4/3', filter: i.soldOut ? 'grayscale(1)' : 'none', opacity: i.soldOut ? 0.6 : 1 }}>
            {i.img ? <img src={asset(i.img)} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> : <PhotoPlaceholder icon="image-off" iconSize={40} />}
          </div>
          <div style={{ padding: '20px 20px 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h2 style={{ margin: 0, font: '700 24px/var(--lh-tight) var(--font-sans)', textWrap: 'pretty' }}>{i.name[lang] || i.name.kz}</h2>
            {(i.tags.length > 0 || i.soldOut) && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {i.soldOut && <Tag kind="soldout" icon={false}>{s.soldOut}</Tag>}
                {i.tags.map(k => <Tag key={k} kind={k}>{s[k]}</Tag>)}
              </div>
            )}
            {(i.desc[lang] || i.desc.kz) && <p style={{ margin: 0, font: '400 16px/var(--lh-body) var(--font-sans)', color: 'var(--text-secondary)' }}>{i.desc[lang] || i.desc.kz}</p>}
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 8, paddingTop: 16, borderTop: '1px solid var(--border-subtle)' }}>
              <span style={{ font: '500 16px var(--font-sans)', color: 'var(--text-muted)' }}>{i.size ? `${i.size} ${s[i.unit]}` : ''}</span>
              <Price value={i.price} size={26} style={i.soldOut ? { color: 'var(--text-muted)' } : undefined} />
            </div>
          </div>
        </div>
      )}
    </BottomSheet>
  );
}
