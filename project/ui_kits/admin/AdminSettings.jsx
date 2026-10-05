(() => {
const { ListGroup, SettingRow, RadioList, Button, Icon, CafeLogo } = window.QRMenuDesignSystem_af1ea9;

const SETTINGS_L = {
  kz: { title: 'Баптаулар', profile: 'Кафе профілі', profileSub: 'Атауы, логотип, түс, байланыс, уақыт', phone: 'Телефон', lang: 'Интерфейс тілі', note: 'Тек басқару панеліне әсер етеді. Қонақ мәзірі әрқашан 4 тілде.', logout: 'Шығу' },
  ru: { title: 'Настройки', profile: 'Профиль кафе', profileSub: 'Название, логотип, цвет, контакты, часы', phone: 'Телефон', lang: 'Язык интерфейса', note: 'Меняет только панель управления. Меню для гостей всегда на 4 языках.', logout: 'Выйти' },
  en: { title: 'Settings', profile: 'Café profile', profileSub: 'Name, logo, colour, contacts, hours', phone: 'Phone', lang: 'Interface language', note: 'Changes the admin panel only. The guest menu always offers all 4 languages.', logout: 'Log out' },
  zh: { title: '设置', profile: '咖啡馆资料', profileSub: '名称、标志、颜色、联系方式、营业时间', phone: '电话', lang: '界面语言', note: '仅更改管理面板。顾客菜单始终提供 4 种语言。', logout: '退出登录' }
};
const NAV_L = {
  kz: ['Мәзір', 'Санаттар', 'QR', 'Баптаулар'], ru: ['Меню', 'Категории', 'QR', 'Настройки'],
  en: ['Menu', 'Categories', 'QR', 'Settings'], zh: ['菜单', '分类', '二维码', '设置']
};

function AdminSettings({ uiLang, setUiLang, onProfile, onLogout }) {
  const s = SETTINGS_L[uiLang];
  return (
    <div lang={uiLang === 'kz' ? 'kk' : uiLang} style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
      <div style={{ padding: '16px 16px 4px' }}><h1 style={{ margin: 0, font: '700 28px/1.1 var(--font-sans)', letterSpacing: '-.02em' }}>{s.title}</h1></div>
      <div style={{ padding: '12px 16px 32px', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <ListGroup inset>
          <button type="button" className="qm-setrow" onClick={onProfile} style={{ minHeight: 76 }}>
            <CafeLogo name={window.QM_DATA.cafe.name} size={48} />
            <span className="qm-setrow__text"><span className="qm-setrow__title" style={{ fontSize: 18, fontWeight: 700 }}>{window.QM_DATA.cafe.name}</span><span className="qm-setrow__sub">{s.profile}</span></span>
            <Icon name="chevron-right" size={20} className="qm-setrow__chev" />
          </button>
          <SettingRow icon="smartphone" title={s.phone} control={<span style={{ font: '500 15px var(--font-sans)', color: 'var(--text-muted)', fontVariantNumeric: 'tabular-nums' }}>+7 701 234 56 78</span>} />
        </ListGroup>
        <section>
          <div style={{ margin: '0 4px 8px' }}>
            <div style={{ font: '600 14px/1.2 var(--font-sans)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-caps)' }}>{s.lang}</div>
            <div style={{ marginTop: 4, font: '400 14px/1.4 var(--font-sans)', color: 'var(--text-muted)' }}>{s.note}</div>
          </div>
          <ListGroup inset>
            <RadioList value={uiLang} onChange={setUiLang} options={[['kz', 'Қазақша'], ['ru', 'Русский'], ['en', 'English'], ['zh', '中文']].map(([v, l]) => ({ value: v, label: l, lead: v.toUpperCase() }))} />
          </ListGroup>
        </section>
        <Button variant="ghost" block icon="log-out" onClick={onLogout} style={{ color: 'var(--danger)' }}>{s.logout}</Button>
      </div>
    </div>
  );
}

Object.assign(window, { AdminSettings, NAV_L });
})();
