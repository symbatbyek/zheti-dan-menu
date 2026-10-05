(() => {
const { CafeHeader, Banner, EmptyState, SectionHeader, LangSwitcher, CategoryTabs, ItemCard, Skeleton, Icon } = window.QRMenuDesignSystem_af1ea9;

function GuestHeader({ lang, setLang, closed, onInfo }) {
  const { cafe, t } = window.QM_DATA; const s = t[lang];
  return (
    <div>
      <CafeHeader name={cafe.name} cover={cafe.cover || null} open={!closed} statusLabel={closed ? s.closed : s.open} hours={closed ? s.opensAt : cafe.hours} onInfo={onInfo} trailing={<LangSwitcher value={lang} onChange={setLang} />} />
      {closed && <div style={{ margin: '0 16px 12px' }}><Banner tone="closed">{s.closedNote}</Banner></div>}
    </div>
  );
}

function MenuSkeleton() {
  return (
    <div>
      <Skeleton height={152} radius={0} />
      <div style={{ display: 'flex', gap: 12, padding: 16, alignItems: 'center' }}>
        <Skeleton width={52} height={52} radius="var(--radius-md)" />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}><Skeleton width="55%" height={20} /><Skeleton width="40%" height={14} /></div>
      </div>
      <div style={{ display: 'flex', gap: 16, padding: '12px 16px', borderBottom: '1px solid var(--border-subtle)' }}>{[40, 70, 110, 60].map((w, i) => <Skeleton key={i} width={w} height={16} />)}</div>
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Skeleton width={120} height={22} />
        {[0, 1, 2].map(i => (
          <div key={i} className="qm-item" style={{ cursor: 'default' }}>
            <div className="qm-item__body" style={{ gap: 8 }}><Skeleton width="70%" height={18} /><Skeleton width="95%" height={12} /><Skeleton width="60%" height={12} /><Skeleton width="35%" height={16} style={{ marginTop: 'auto' }} /></div>
            <Skeleton width={104} height={104} radius="var(--radius-md)" />
          </div>
        ))}
      </div>
    </div>
  );
}

function MenuScreen({ lang, setLang, closed, emptyCat, onItem, onInfo }) {
  const { categories, items, t } = window.QM_DATA; const s = t[lang];
  const [active, setActive] = React.useState('all');
  const scroller = React.useRef(null); const tabsRef = React.useRef(null); const secs = React.useRef({});
  const sections = categories.filter(c => c.id !== 'all');
  const onScroll = () => {
    const el = scroller.current; const tabH = tabsRef.current.offsetHeight;
    let cur = 'all';
    sections.forEach(c => { const n = secs.current[c.id]; if (n && n.offsetTop - tabH - 8 <= el.scrollTop) cur = c.id; });
    setActive(cur);
  };
  const go = id => {
    const el = scroller.current; const tabH = tabsRef.current.offsetHeight;
    const top = id === 'all' ? tabsRef.current.offsetTop : secs.current[id].offsetTop - tabH;
    el.scrollTo({ top: Math.max(0, top) + 1, behavior: 'smooth' });
    setActive(id);
  };
  const tagLabel = k => ({ kind: k, label: s[k] });
  return (
    <div ref={scroller} onScroll={onScroll} lang={lang === 'kz' ? 'kk' : lang} style={{ position: 'absolute', inset: 0, overflowY: 'auto', background: 'var(--surface-page)' }}>
      <GuestHeader lang={lang} setLang={setLang} closed={closed} onInfo={onInfo} />
      <div ref={tabsRef} style={{ position: 'sticky', top: 0, zIndex: 10 }}>
        <CategoryTabs value={active} onChange={go} items={categories.map(c => ({ id: c.id, label: c[lang] }))} />
      </div>
      <div style={{ padding: '4px 16px 40px' }}>
        {sections.map(c => {
          const list = emptyCat && c.id === 'salads' ? [] : items.filter(i => i.cat === c.id);
          return (
            <section key={c.id} ref={n => (secs.current[c.id] = n)} style={{ paddingTop: 20 }}>
              <SectionHeader variant="title">{c[lang]}</SectionHeader>
              {list.length === 0 ? (
                <EmptyState title={s.empty} />
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {list.map(i => <ItemCard key={i.id} name={i.name[lang]} description={i.desc[lang]} price={i.price} photo={i.img} placeholder={i.photo} soldOut={i.soldOut} soldOutLabel={s.soldOut} tags={i.tags.map(tagLabel)} onClick={() => onItem(i)} />)}
                </div>
              )}
            </section>
          );
        })}
        <button onClick={onInfo} style={{ marginTop: 28, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, minHeight: 44, border: 0, background: 'none', color: 'var(--text-muted)', font: '500 14px var(--font-sans)', cursor: 'pointer' }}>
          <Icon name="info" size={18} />{s.info}
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { MenuScreen, MenuSkeleton });
})();
