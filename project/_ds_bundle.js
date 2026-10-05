/* @ds-bundle: {"format":4,"namespace":"QRMenuDesignSystem_af1ea9","components":[{"name":"ColorPicker","sourcePath":"components/admin/ColorPicker.jsx"},{"name":"Dialog","sourcePath":"components/admin/Dialog.jsx"},{"name":"Fab","sourcePath":"components/admin/Fab.jsx"},{"name":"MenuRow","sourcePath":"components/admin/MenuRow.jsx"},{"name":"QrCode","sourcePath":"components/admin/QrCode.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CafeLogo","sourcePath":"components/core/CafeLogo.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Price","sourcePath":"components/core/Price.jsx"},{"name":"StatusPill","sourcePath":"components/core/StatusPill.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"CodeInput","sourcePath":"components/forms/CodeInput.jsx"},{"name":"RadioList","sourcePath":"components/forms/RadioList.jsx"},{"name":"Segmented","sourcePath":"components/forms/Segmented.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"ListGroup","sourcePath":"components/layout/ListGroup.jsx"},{"name":"SectionHeader","sourcePath":"components/layout/SectionHeader.jsx"},{"name":"SettingRow","sourcePath":"components/layout/SettingRow.jsx"},{"name":"BottomSheet","sourcePath":"components/menu/BottomSheet.jsx"},{"name":"CafeHeader","sourcePath":"components/menu/CafeHeader.jsx"},{"name":"HoursTable","sourcePath":"components/menu/HoursTable.jsx"},{"name":"ItemCard","sourcePath":"components/menu/ItemCard.jsx"},{"name":"PhotoPlaceholder","sourcePath":"components/menu/PhotoPlaceholder.jsx"},{"name":"Skeleton","sourcePath":"components/menu/Skeleton.jsx"},{"name":"AppBar","sourcePath":"components/navigation/AppBar.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"},{"name":"CategoryTabs","sourcePath":"components/navigation/CategoryTabs.jsx"},{"name":"LangSwitcher","sourcePath":"components/navigation/LangSwitcher.jsx"},{"name":"LangTabs","sourcePath":"components/navigation/LangTabs.jsx"}],"sourceHashes":{"components/admin/ColorPicker.jsx":"0c9b4fa1d2e1","components/admin/Dialog.jsx":"85e3cd56c867","components/admin/Fab.jsx":"71d7cfc94556","components/admin/MenuRow.jsx":"665eb7cea751","components/admin/QrCode.jsx":"023104317267","components/core/Button.jsx":"86532d86455a","components/core/CafeLogo.jsx":"ff90374a1332","components/core/Icon.jsx":"cd69bb798a26","components/core/IconButton.jsx":"046b336c6e12","components/core/Price.jsx":"f83b56a8104e","components/core/StatusPill.jsx":"89fc3363a694","components/core/Tag.jsx":"29b7a6bdac3b","components/feedback/Banner.jsx":"30bc2ebd3b0a","components/feedback/EmptyState.jsx":"a3d620a5ea3c","components/feedback/Toast.jsx":"62b122344969","components/forms/CodeInput.jsx":"c69317b97d74","components/forms/RadioList.jsx":"92edb6767d11","components/forms/Segmented.jsx":"40a6adfabb57","components/forms/Select.jsx":"fa8e611d152f","components/forms/Switch.jsx":"402dce579bc3","components/forms/TextField.jsx":"49aa3be700a3","components/layout/ListGroup.jsx":"4480a1469372","components/layout/SectionHeader.jsx":"de225d74aa8c","components/layout/SettingRow.jsx":"3b017cf172d4","components/menu/BottomSheet.jsx":"1cbd9ff9a89b","components/menu/CafeHeader.jsx":"51f2e7f91b7b","components/menu/HoursTable.jsx":"0d5106efefc5","components/menu/ItemCard.jsx":"3a7236a124e7","components/menu/PhotoPlaceholder.jsx":"107e5184f432","components/menu/Skeleton.jsx":"97ad42bf0399","components/navigation/AppBar.jsx":"6d52cad4f4ba","components/navigation/BottomNav.jsx":"34c13a94e54e","components/navigation/CategoryTabs.jsx":"30dd6d82bdb9","components/navigation/LangSwitcher.jsx":"2c8546943ff5","components/navigation/LangTabs.jsx":"c140e343c021","ui_kits/admin/AdminCategories.jsx":"9692254f722b","ui_kits/admin/AdminLogin.jsx":"70ecc0545436","ui_kits/admin/AdminMenu.jsx":"761b472b5a5e","ui_kits/admin/AdminProfile.jsx":"21bbc65e1363","ui_kits/admin/AdminQr.jsx":"65a90c0fd5e9","ui_kits/admin/AdminSettings.jsx":"a9b063458a07","ui_kits/admin/DishEdit.jsx":"0969c9ba3b60","ui_kits/admin/OwnerApp.jsx":"9d7fa969f1db","ui_kits/guest-menu/CafeInfoScreen.jsx":"02eb26861fe6","ui_kits/guest-menu/ItemSheet.jsx":"fe19938de005","ui_kits/guest-menu/MenuScreen.jsx":"2f99b21dce8f","ui_kits/guest-menu/data.js":"4c05794e1e74","ui_kits/guest-menu/store.js":"3aec0feec640"},"inlinedExternals":[],"unexposedExports":[{"name":"formatTenge","sourcePath":"components/core/Price.jsx"}]} */

(() => {

const __ds_ns = (window.QRMenuDesignSystem_af1ea9 = window.QRMenuDesignSystem_af1ea9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/admin/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  actions,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "qm-dialog",
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "qm-dialog__panel",
    role: "alertdialog",
    "aria-modal": "true"
  }, title && /*#__PURE__*/React.createElement("h2", {
    className: "qm-dialog__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "qm-dialog__body"
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    className: "qm-dialog__actions"
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/admin/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/admin/QrCode.jsx
try { (() => {
function QrCode({
  value = 'menu',
  size = 168,
  color = 'var(--ink-900)'
}) {
  const N = 25;
  let seed = 0;
  for (let i = 0; i < value.length; i++) seed = (seed * 31 + value.charCodeAt(i)) % 233280;
  const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  const finder = (x, y) => {
    for (const [fx, fy] of [[0, 0], [N - 7, 0], [0, N - 7]]) {
      const dx = x - fx,
        dy = y - fy;
      if (dx >= 0 && dx < 7 && dy >= 0 && dy < 7) return dx === 0 || dx === 6 || dy === 0 || dy === 6 || dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4 ? 1 : 0;
      if (dx >= -1 && dx <= 7 && dy >= -1 && dy <= 7) return 0;
    }
    return null;
  };
  const cells = [];
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const f = finder(x, y);
    cells.push(f === null ? y === 6 || x === 6 ? (x + y) % 2 === 0 : rnd() > .5 : !!f);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "qm-qr",
    role: "img",
    "aria-label": "QR",
    style: {
      width: size,
      height: size,
      gridTemplateColumns: 'repeat(' + N + ',1fr)'
    }
  }, cells.map((on, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    style: {
      background: on ? color : 'transparent'
    }
  })));
}
Object.assign(__ds_scope, { QrCode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/admin/QrCode.jsx", error: String((e && e.message) || e) }); }

// components/core/CafeLogo.jsx
try { (() => {
function CafeLogo({
  src,
  name = '',
  size = 48
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "qm-logo",
    style: {
      width: size,
      height: size,
      fontSize: Math.round(size * 0.42),
      borderRadius: size >= 64 ? 'var(--radius-lg)' : 'var(--radius-md)'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : (name.trim()[0] || '·').toUpperCase());
}
Object.assign(__ds_scope, { CafeLogo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CafeLogo.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const CDN = 'https://unpkg.com/lucide-static@0.460.0/icons/';
const BRAND = 'https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/';
function Icon({
  name,
  size = 20,
  label,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'qm-icon' + (className ? ' ' + className : ''),
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      width: size,
      height: size,
      '--qm-icon': 'url(' + (name.startsWith('brand:') ? BRAND + name.slice(6) : CDN + name) + '.svg)',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/admin/ColorPicker.jsx
try { (() => {
const PRESETS = [{
  id: 'terracotta',
  label: 'Терракота',
  color: 'var(--terracotta-600)'
}, {
  id: 'steppe',
  label: 'Дала',
  color: 'var(--steppe-600)'
}, {
  id: 'saffron',
  label: 'Запыран',
  color: 'var(--saffron-500)',
  dark: true
}, {
  id: 'plum',
  label: 'Алхоры',
  color: 'var(--plum-600)'
}, {
  id: 'teal',
  label: 'Көгілдір',
  color: 'var(--teal-600)'
}, {
  id: 'charcoal',
  label: 'Графит',
  color: 'var(--ink-900)'
}];
function ColorPicker({
  value = 'terracotta',
  onChange,
  options = PRESETS
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "qm-swatches",
    role: "radiogroup"
  }, options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.id,
    type: "button",
    role: "radio",
    "aria-checked": o.id === value,
    "aria-label": o.label,
    title: o.label,
    className: "qm-swatch",
    style: {
      background: o.color,
      color: o.dark ? 'var(--ink-900)' : '#fff'
    },
    onClick: () => onChange && onChange(o.id)
  }, o.id === value && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 22
  }))));
}
Object.assign(__ds_scope, { ColorPicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/admin/ColorPicker.jsx", error: String((e && e.message) || e) }); }

// components/admin/Fab.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Fab({
  icon = 'plus',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: "qm-fab",
    style: style
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24
  }), children);
}
Object.assign(__ds_scope, { Fab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/admin/Fab.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  icon,
  iconRight,
  children,
  className,
  type = 'button',
  ...rest
}) {
  const s = size === 'lg' ? 22 : 20;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cx('qm-btn', 'qm-btn--' + variant, size === 'lg' && 'qm-btn--lg', block && 'qm-btn--block', className)
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 22,
  className,
  type = 'button',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    "aria-label": label,
    title: label,
    className: cx('qm-iconbtn', 'qm-iconbtn--' + variant, className)
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Price.jsx
try { (() => {
function formatTenge(v) {
  return Number(v || 0).toLocaleString('ru-RU').replace(/\s/g, '\u00a0') + '\u00a0₸';
}
function Price({
  value,
  size,
  strike = false,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'qm-price' + (strike ? ' qm-price--strike' : '') + (className ? ' ' + className : ''),
    style: {
      fontSize: size,
      ...style
    }
  }, formatTenge(value));
}
Object.assign(__ds_scope, { formatTenge, Price });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Price.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusPill.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function StatusPill({
  open = true,
  label,
  hours
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: cx('qm-status', !open && 'qm-status--closed')
  }, /*#__PURE__*/React.createElement("span", {
    className: "qm-status__dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "qm-status__label"
  }, label || (open ? 'Ашық' : 'Жабық')), hours && /*#__PURE__*/React.createElement("span", null, "\xB7 ", hours));
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
const ICONS = {
  spicy: 'flame',
  veg: 'leaf',
  new: 'sparkles',
  popular: 'star'
};
function Tag({
  kind = 'neutral',
  icon,
  children,
  pressed,
  onClick
}) {
  const glyph = icon === false ? null : onClick && pressed ? 'check' : icon || ICONS[kind];
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, glyph && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    size: onClick && pressed ? 18 : 12,
    style: onClick && pressed ? {
      margin: '0 -2px'
    } : undefined
  }), children);
  if (onClick) return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: 'qm-tag qm-tag--' + kind,
    "aria-pressed": !!pressed,
    onClick: onClick
  }, inner);
  return /*#__PURE__*/React.createElement("span", {
    className: 'qm-tag qm-tag--' + kind
  }, inner);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
const ICON = {
  info: 'info',
  accent: 'sparkles',
  closed: 'clock',
  danger: 'circle-alert',
  success: 'circle-check',
  warning: 'sparkles'
};
function Banner({
  tone = 'info',
  icon,
  children,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'qm-banner qm-banner--' + tone,
    role: "status"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || ICON[tone],
    size: 20,
    className: "qm-banner__icon"
  }), /*#__PURE__*/React.createElement("div", {
    className: "qm-banner__text"
  }, children), action);
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function EmptyState({
  icon = 'utensils-crossed',
  title,
  children,
  action,
  dashed = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'qm-empty' + (dashed ? ' qm-empty--dashed' : '')
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 28
  }), title && /*#__PURE__*/React.createElement("div", {
    className: "qm-empty__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "qm-empty__body"
  }, children), action);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  open,
  children,
  icon = 'circle-check',
  onDone,
  duration = 2200
}) {
  React.useEffect(() => {
    if (!open || !onDone) return;
    const t = setTimeout(onDone, duration);
    return () => clearTimeout(t);
  }, [open]);
  return /*#__PURE__*/React.createElement("div", {
    className: 'qm-toast' + (open ? ' qm-toast--open' : ''),
    role: "status",
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  }), children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/CodeInput.jsx
try { (() => {
function CodeInput({
  length = 4,
  value = '',
  onChange,
  autoFocus
}) {
  const [focus, setFocus] = React.useState(false);
  const cells = Array.from({
    length
  }, (_, i) => value[i] || '');
  return /*#__PURE__*/React.createElement("div", {
    className: "qm-code"
  }, cells.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: 'qm-code__cell' + (focus && i === Math.min(value.length, length - 1) ? ' qm-code__cell--active' : '')
  }, c)), /*#__PURE__*/React.createElement("input", {
    className: "qm-code__input",
    inputMode: "numeric",
    autoComplete: "one-time-code",
    maxLength: length,
    value: value,
    autoFocus: autoFocus,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onChange: e => onChange && onChange(e.target.value.replace(/\D/g, '').slice(0, length)),
    "aria-label": "SMS \u043A\u043E\u0434\u044B"
  }));
}
Object.assign(__ds_scope, { CodeInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/CodeInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioList.jsx
try { (() => {
function RadioList({
  options = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "qm-radios",
    role: "radiogroup"
  }, options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value,
    className: "qm-radio",
    onClick: () => onChange && onChange(o.value)
  }, /*#__PURE__*/React.createElement("span", {
    className: "qm-radio__dot"
  }), o.lead && /*#__PURE__*/React.createElement("span", {
    className: "qm-radio__lead"
  }, o.lead), /*#__PURE__*/React.createElement("span", {
    className: "qm-radio__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "qm-radio__label"
  }, o.label), o.sub && /*#__PURE__*/React.createElement("span", {
    className: "qm-radio__sub"
  }, o.sub)))));
}
Object.assign(__ds_scope, { RadioList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioList.jsx", error: String((e && e.message) || e) }); }

// components/forms/Segmented.jsx
try { (() => {
function Segmented({
  options = [],
  value,
  onChange,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'qm-seg' + (inline ? ' qm-seg--inline' : ''),
    role: "radiogroup"
  }, options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value,
    "aria-selected": o.value === value,
    className: "qm-seg__item",
    onClick: () => onChange && onChange(o.value)
  }, o.label)));
}
Object.assign(__ds_scope, { Segmented });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Segmented.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  label,
  disabled,
  ariaLabel
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": checked,
    "aria-label": ariaLabel,
    disabled: disabled,
    className: "qm-switch",
    onClick: e => {
      e.stopPropagation();
      onChange && onChange(!checked);
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "qm-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "qm-switch__thumb"
  })));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function TextField({
  label,
  hint,
  error,
  prefix,
  suffix,
  icon,
  multiline = false,
  rows = 3,
  id,
  className,
  style,
  ...rest
}) {
  const autoId = React.useId();
  const fid = id || autoId;
  const Ctl = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    className: cx('qm-field', error && 'qm-field--error', className),
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "qm-field__label",
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "qm-field__control",
    style: multiline ? {
      alignItems: 'flex-start'
    } : undefined
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  }), prefix && /*#__PURE__*/React.createElement("span", {
    className: "qm-field__affix"
  }, prefix), /*#__PURE__*/React.createElement(Ctl, _extends({
    id: fid,
    className: "qm-field__input",
    rows: multiline ? rows : undefined
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    className: "qm-field__affix"
  }, suffix)), (error || hint) && /*#__PURE__*/React.createElement("div", {
    className: "qm-field__hint"
  }, error || hint));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/layout/ListGroup.jsx
try { (() => {
function ListGroup({
  children,
  inset = false
}) {
  const kids = React.Children.toArray(children).filter(Boolean);
  return /*#__PURE__*/React.createElement("div", {
    className: 'qm-group' + (inset ? ' qm-group--inset' : '')
  }, kids.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "qm-group__item"
  }, c)));
}
Object.assign(__ds_scope, { ListGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/ListGroup.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionHeader.jsx
try { (() => {
function SectionHeader({
  children,
  count,
  action,
  variant = 'caps'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'qm-sechead qm-sechead--' + variant
  }, /*#__PURE__*/React.createElement("h2", {
    className: "qm-sechead__title"
  }, children), count != null && /*#__PURE__*/React.createElement("span", {
    className: "qm-sechead__count"
  }, count), action);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/layout/SettingRow.jsx
try { (() => {
function SettingRow({
  icon,
  title,
  subtitle,
  control,
  onClick,
  chevron
}) {
  const Tag = onClick ? 'button' : 'div';
  return /*#__PURE__*/React.createElement(Tag, {
    type: onClick ? 'button' : undefined,
    className: "qm-setrow",
    onClick: onClick
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    className: "qm-setrow__icon"
  }), /*#__PURE__*/React.createElement("span", {
    className: "qm-setrow__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "qm-setrow__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    className: "qm-setrow__sub"
  }, subtitle)), control, (chevron || onClick && !control) && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 20,
    className: "qm-setrow__chev"
  }));
}
Object.assign(__ds_scope, { SettingRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SettingRow.jsx", error: String((e && e.message) || e) }); }

// components/menu/BottomSheet.jsx
try { (() => {
function BottomSheet({
  open,
  onClose,
  children,
  showClose = true,
  closeLabel = 'Жабу'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'qm-sheet' + (open ? ' qm-sheet--open' : ''),
    "aria-hidden": !open
  }, /*#__PURE__*/React.createElement("div", {
    className: "qm-sheet__scrim",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: "qm-sheet__panel",
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "qm-sheet__grip"
  }), showClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    className: "qm-sheet__close",
    icon: "x",
    label: closeLabel,
    variant: "overlay",
    onClick: onClose
  }), children));
}
Object.assign(__ds_scope, { BottomSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/BottomSheet.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  hint,
  value,
  onChange,
  options = [],
  placeholder = 'Таңдаңыз',
  title,
  variant = 'field',
  id
}) {
  const [open, setOpen] = React.useState(false);
  const [root, setRoot] = React.useState(null);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) setRoot(ref.current.closest('[data-qm-root]') || document.body);
  }, []);
  const cur = options.find(o => o.value === value);
  const pick = v => {
    setOpen(false);
    if (onChange && v !== value) onChange(v);
  };
  const RD = typeof window !== 'undefined' ? window.ReactDOM : null;
  const sheet = /*#__PURE__*/React.createElement("div", {
    className: root === document.body ? 'qm-picker-host qm-picker-host--fixed' : 'qm-picker-host'
  }, /*#__PURE__*/React.createElement(__ds_scope.BottomSheet, {
    open: open,
    onClose: () => setOpen(false),
    showClose: false
  }, /*#__PURE__*/React.createElement("div", {
    className: "qm-picker"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qm-picker__title"
  }, title || label), /*#__PURE__*/React.createElement("div", {
    role: "listbox"
  }, options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "option",
    "aria-selected": o.value === value,
    className: "qm-picker__opt",
    onClick: () => pick(o.value)
  }, /*#__PURE__*/React.createElement("span", {
    className: "qm-picker__text"
  }, /*#__PURE__*/React.createElement("span", null, o.label), o.sub && /*#__PURE__*/React.createElement("span", {
    className: "qm-picker__sub"
  }, o.sub)), o.value === value && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 22
  })))))));
  const trigger = variant === 'inline' ? /*#__PURE__*/React.createElement("button", {
    ref: ref,
    id: id,
    type: "button",
    className: "qm-select-inline",
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    onClick: () => setOpen(true)
  }, /*#__PURE__*/React.createElement("span", null, cur ? cur.label : placeholder), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 20
  })) : /*#__PURE__*/React.createElement("div", {
    className: "qm-field",
    ref: ref
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "qm-field__label",
    htmlFor: id
  }, label), /*#__PURE__*/React.createElement("button", {
    id: id,
    type: "button",
    className: "qm-field__control qm-select",
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    onClick: () => setOpen(true)
  }, /*#__PURE__*/React.createElement("span", {
    className: cur ? 'qm-select__value' : 'qm-select__value qm-select__value--empty'
  }, cur ? cur.label : placeholder), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 20
  })), hint && /*#__PURE__*/React.createElement("div", {
    className: "qm-field__hint"
  }, hint));
  return /*#__PURE__*/React.createElement(React.Fragment, null, trigger, root && RD && RD.createPortal ? RD.createPortal(sheet, root) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/menu/CafeHeader.jsx
try { (() => {
function CafeHeader({
  name,
  logo,
  cover,
  open = true,
  statusLabel,
  hours,
  onInfo,
  trailing
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "qm-cafehead"
  }, cover !== undefined && /*#__PURE__*/React.createElement("div", {
    className: "qm-cafehead__cover"
  }, cover ? /*#__PURE__*/React.createElement("img", {
    src: cover,
    alt: ""
  }) : null), /*#__PURE__*/React.createElement("div", {
    className: "qm-cafehead__row"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "qm-cafehead__id",
    onClick: onInfo
  }, /*#__PURE__*/React.createElement(__ds_scope.CafeLogo, {
    src: logo,
    name: name,
    size: 52
  }), /*#__PURE__*/React.createElement("span", {
    className: "qm-cafehead__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "qm-cafehead__name"
  }, name, onInfo && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 20,
    style: {
      color: 'var(--text-muted)'
    }
  })), /*#__PURE__*/React.createElement(__ds_scope.StatusPill, {
    open: open,
    label: statusLabel,
    hours: hours
  }))), trailing));
}
Object.assign(__ds_scope, { CafeHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/CafeHeader.jsx", error: String((e && e.message) || e) }); }

// components/menu/HoursTable.jsx
try { (() => {
function HoursTable({
  days = [],
  today
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "qm-hours"
  }, days.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: 'qm-hours__row' + (i === today ? ' qm-hours__row--today' : '')
  }, /*#__PURE__*/React.createElement("span", null, d.label, i === today && d.todayLabel && /*#__PURE__*/React.createElement("span", {
    className: "qm-hours__today"
  }, d.todayLabel)), /*#__PURE__*/React.createElement("span", {
    className: "qm-hours__time"
  }, d.closed ? d.closedLabel || 'Демалыс' : d.from + '–' + d.to))));
}
Object.assign(__ds_scope, { HoursTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/HoursTable.jsx", error: String((e && e.message) || e) }); }

// components/menu/PhotoPlaceholder.jsx
try { (() => {
function PhotoPlaceholder({
  label,
  icon = 'utensils',
  iconSize = 24
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "qm-photo-ph"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { PhotoPlaceholder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/PhotoPlaceholder.jsx", error: String((e && e.message) || e) }); }

// components/admin/MenuRow.jsx
try { (() => {
function MenuRow({
  name,
  price,
  photo,
  available = true,
  onToggle,
  onClick,
  draggable = true,
  soldOutLabel = 'Таусылды',
  availableLabel = 'Қолжетімді'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'qm-row' + (available ? '' : ' qm-row--soldout')
  }, draggable ? /*#__PURE__*/React.createElement("span", {
    className: "qm-row__handle",
    "aria-label": "\u0421\u04AF\u0439\u0440\u0435\u0443"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "grip-vertical",
    size: 20
  })) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "qm-row__thumb"
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: ""
  }) : /*#__PURE__*/React.createElement(__ds_scope.PhotoPlaceholder, {
    iconSize: 18
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "qm-row__main",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "qm-row__name"
  }, name), /*#__PURE__*/React.createElement("span", {
    className: "qm-row__meta"
  }, available ? /*#__PURE__*/React.createElement(__ds_scope.Price, {
    value: price
  }) : /*#__PURE__*/React.createElement("span", {
    className: "qm-row__sold"
  }, soldOutLabel))), /*#__PURE__*/React.createElement(__ds_scope.Switch, {
    checked: available,
    onChange: onToggle,
    ariaLabel: availableLabel
  }));
}
Object.assign(__ds_scope, { MenuRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/admin/MenuRow.jsx", error: String((e && e.message) || e) }); }

// components/menu/ItemCard.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function ItemCard({
  name,
  description,
  price,
  photo,
  placeholder = false,
  tags = [],
  soldOut = false,
  soldOutLabel = 'Таусылды',
  layout = 'row',
  onClick,
  lang
}) {
  const hasMedia = !!photo || placeholder;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    lang: lang,
    onClick: onClick,
    className: cx('qm-item', layout === 'feature' && hasMedia && 'qm-item--feature', !hasMedia && 'qm-item--text', soldOut && 'qm-item--soldout')
  }, hasMedia && layout === 'feature' && /*#__PURE__*/React.createElement("div", {
    className: "qm-item__media"
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: ""
  }) : /*#__PURE__*/React.createElement(__ds_scope.PhotoPlaceholder, {
    iconSize: 32
  })), /*#__PURE__*/React.createElement("div", {
    className: "qm-item__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "qm-item__name"
  }, name), description && /*#__PURE__*/React.createElement("p", {
    className: "qm-item__desc"
  }, description), /*#__PURE__*/React.createElement("div", {
    className: "qm-item__foot"
  }, /*#__PURE__*/React.createElement(__ds_scope.Price, {
    value: price
  }), soldOut ? /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    kind: "soldout",
    icon: false
  }, soldOutLabel) : tags.slice(0, 2).map((t, i) => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: i,
    kind: t.kind
  }, t.label)))), hasMedia && layout !== 'feature' && /*#__PURE__*/React.createElement("div", {
    className: "qm-item__media"
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: ""
  }) : /*#__PURE__*/React.createElement(__ds_scope.PhotoPlaceholder, null)));
}
Object.assign(__ds_scope, { ItemCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/ItemCard.jsx", error: String((e && e.message) || e) }); }

// components/menu/Skeleton.jsx
try { (() => {
function Skeleton({
  width = '100%',
  height = 16,
  radius,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "qm-skel",
    "aria-hidden": "true",
    style: {
      width,
      height,
      borderRadius: radius,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AppBar.jsx
try { (() => {
function AppBar({
  title,
  onBack,
  backLabel = 'Артқа',
  actions,
  center = false,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "qm-appbar",
    style: style
  }, onBack ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "chevron-left",
    label: backLabel,
    size: 24,
    onClick: onBack
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "qm-appbar__title",
    style: center ? {
      textAlign: 'center'
    } : undefined
  }, title), actions ? /*#__PURE__*/React.createElement("div", {
    className: "qm-appbar__actions"
  }, actions) : center && /*#__PURE__*/React.createElement("span", {
    style: {
      width: onBack ? 44 : 6,
      flex: 'none'
    }
  }));
}
Object.assign(__ds_scope, { AppBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AppBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
function BottomNav({
  items = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "qm-bnav"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    type: "button",
    className: "qm-bnav__item",
    "aria-current": it.id === value ? 'page' : undefined,
    onClick: () => onChange && onChange(it.id)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 24
  }), it.label)));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/CategoryTabs.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function CategoryTabs({
  items = [],
  value,
  onChange,
  sticky = false
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current && ref.current.querySelector('[aria-selected="true"]');
    if (!el) return;
    const bar = ref.current;
    const target = el.offsetLeft - (bar.clientWidth - el.offsetWidth) / 2;
    bar.scrollTo({
      left: Math.max(0, target),
      behavior: 'smooth'
    });
  }, [value]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    role: "tablist",
    className: cx('qm-cattabs', sticky && 'qm-cattabs--sticky')
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    role: "tab",
    type: "button",
    "aria-selected": it.id === value,
    className: "qm-cattab",
    onClick: () => onChange && onChange(it.id)
  }, it.label)));
}
Object.assign(__ds_scope, { CategoryTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/CategoryTabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/LangSwitcher.jsx
try { (() => {
const LANGS = [{
  code: 'kz',
  label: 'Қазақша'
}, {
  code: 'ru',
  label: 'Русский'
}, {
  code: 'en',
  label: 'English'
}, {
  code: 'zh',
  label: '中文'
}];
function LangSwitcher({
  value = 'kz',
  onChange,
  languages = LANGS
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('pointerdown', h);
    return () => document.removeEventListener('pointerdown', h);
  }, [open]);
  return /*#__PURE__*/React.createElement("div", {
    className: "qm-lang",
    ref: ref
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "qm-lang__btn",
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "globe",
    size: 18
  }), value.toUpperCase()), open && /*#__PURE__*/React.createElement("div", {
    className: "qm-lang__menu",
    role: "listbox"
  }, languages.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.code,
    type: "button",
    role: "option",
    "aria-selected": l.code === value,
    className: "qm-lang__opt",
    lang: l.code === 'kz' ? 'kk' : l.code,
    onClick: () => {
      setOpen(false);
      onChange && onChange(l.code);
    }
  }, /*#__PURE__*/React.createElement("span", null, l.label), l.code === value ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 18
  }) : /*#__PURE__*/React.createElement("span", {
    className: "qm-lang__code"
  }, l.code.toUpperCase())))));
}
Object.assign(__ds_scope, { LangSwitcher });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/LangSwitcher.jsx", error: String((e && e.message) || e) }); }

// components/navigation/LangTabs.jsx
try { (() => {
const CODES = ['kz', 'ru', 'en', 'zh'];
function LangTabs({
  value = 'kz',
  onChange,
  status = {},
  languages = CODES
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "qm-seg",
    role: "tablist"
  }, languages.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    type: "button",
    role: "tab",
    "aria-selected": c === value,
    className: "qm-seg__item",
    onClick: () => onChange && onChange(c)
  }, status[c] && /*#__PURE__*/React.createElement("span", {
    className: 'qm-seg__dot qm-seg__dot--' + status[c]
  }), c.toUpperCase())));
}
Object.assign(__ds_scope, { LangTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/LangTabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/AdminCategories.jsx
try { (() => {
(() => {
  const {
    Icon,
    IconButton,
    AppBar,
    Button,
    TextField,
    Dialog,
    ListGroup,
    RadioList,
    Banner
  } = window.QRMenuDesignSystem_af1ea9;
  const LANG_LABEL = {
    kz: 'Қазақша',
    ru: 'Русский',
    en: 'English',
    zh: '中文'
  };
  const DICT = {
    'Тоқаштар': {
      ru: 'Выпечка',
      en: 'Pastry',
      zh: '烘焙'
    },
    'Қуырдақ': {
      ru: 'Куырдак',
      en: 'Kuyrdak',
      zh: '炒肉'
    },
    'Сорпалар': {
      ru: 'Супы',
      en: 'Soups',
      zh: '汤'
    },
    'Таңғы ас': {
      ru: 'Завтраки',
      en: 'Breakfast',
      zh: '早餐'
    },
    'Кофе': {
      ru: 'Кофе',
      en: 'Coffee',
      zh: '咖啡'
    },
    'Шай': {
      ru: 'Чай',
      en: 'Tea',
      zh: '茶'
    },
    'Балалар мәзірі': {
      ru: 'Детское меню',
      en: 'Kids menu',
      zh: '儿童菜单'
    }
  };
  function CategoryEdit({
    cat,
    isNew,
    count,
    onBack,
    onSave,
    onDelete
  }) {
    const [c, setC] = React.useState(cat);
    const [ai, setAi] = React.useState({});
    const translate = () => {
      const hit = DICT[c.kz.trim()] || {};
      const n = {
        ...c
      };
      const a = {};
      ['ru', 'en', 'zh'].forEach(l => {
        n[l] = hit[l] || c.kz.trim();
        a[l] = true;
      });
      setC(n);
      setAi(a);
    };
    const full = ['kz', 'ru', 'en', 'zh'].every(l => c[l]);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 30,
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--surface-page)'
      }
    }, /*#__PURE__*/React.createElement(AppBar, {
      center: true,
      title: isNew ? 'Жаңа санат' : 'Санат',
      onBack: onBack,
      style: {
        background: 'var(--surface-card)',
        borderBottom: '1px solid var(--border-subtle)'
      },
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        disabled: !full,
        onClick: () => onSave(c),
        style: {
          color: 'var(--accent-ink)'
        }
      }, "\u0414\u0430\u0439\u044B\u043D")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "qm-group",
      style: {
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, ['kz', 'ru', 'en', 'zh'].map(l => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "qm-field__label"
    }, LANG_LABEL[l]), l === 'kz' ? /*#__PURE__*/React.createElement("span", {
      className: "qm-tag qm-tag--neutral"
    }, "\u0411\u0430\u0441\u0442\u0430\u043F\u049B\u044B") : ai[l] ? /*#__PURE__*/React.createElement("span", {
      className: "qm-tag",
      style: {
        background: 'var(--warning-soft)',
        color: 'var(--warning)'
      }
    }, "AI") : null), /*#__PURE__*/React.createElement(TextField, {
      lang: l === 'kz' ? 'kk' : l,
      value: c[l],
      onChange: e => {
        setC({
          ...c,
          [l]: e.target.value
        });
        setAi({
          ...ai,
          [l]: false
        });
      }
    }))), /*#__PURE__*/React.createElement(Button, {
      variant: "soft",
      icon: "languages",
      block: true,
      disabled: !c.kz,
      onClick: translate
    }, "\u049A\u0430\u0437\u0430\u049B\u0448\u0430\u0434\u0430\u043D \u0430\u0443\u0434\u0430\u0440\u0443")), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 14px/1.45 var(--font-sans)',
        color: 'var(--text-muted)',
        padding: '0 4px'
      }
    }, "\xAB\u041D\u0435\u0433\u0456\u0437\u0433\u0456 \u0442\u0430\u0493\u0430\u043C\u0434\u0430\u0440\xBB \u0441\u0438\u044F\u049B\u0442\u044B \u04B1\u0437\u044B\u043D \u0430\u0442\u0430\u0443\u043B\u0430\u0440 \u049B\u044B\u0441\u049B\u0430\u0440\u0442\u044B\u043B\u043C\u0430\u0439\u0434\u044B: \u049B\u043E\u043D\u0430\u049B \u043C\u04D9\u0437\u0456\u0440\u0456\u043D\u0434\u0435\u0433\u0456 \u049B\u043E\u0439\u044B\u043D\u0434\u044B \u043A\u0435\u04A3\u0435\u0439\u0435\u0434\u0456."), !isNew && /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      block: true,
      onClick: onDelete,
      style: {
        color: 'var(--danger)',
        marginTop: 'auto'
      }
    }, "\u0421\u0430\u043D\u0430\u0442\u0442\u044B \u0436\u043E\u044E")));
  }
  function AdminCategories({
    cats,
    setCats,
    items,
    setItems
  }) {
    const [edit, setEdit] = React.useState(null);
    const [del, setDel] = React.useState(null);
    const [moveTo, setMoveTo] = React.useState('');
    const [drag, setDrag] = React.useState(null);
    const count = id => items.filter(i => i.cat === id).length;
    const askDelete = c => {
      setMoveTo((cats.find(x => x.id !== c.id) || {}).id || '');
      setDel(c);
    };
    const doDelete = () => {
      if (count(del.id)) setItems(items.map(i => i.cat === del.id ? {
        ...i,
        cat: moveTo
      } : i));
      setCats(cats.filter(c => c.id !== del.id));
      setDel(null);
      setEdit(null);
    };
    const save = c => {
      setCats(cats.some(x => x.id === c.id) ? cats.map(x => x.id === c.id ? c : x) : [...cats, c]);
      setEdit(null);
    };
    const drop = target => {
      if (drag && drag !== target) {
        const n = cats.slice();
        const a = n.findIndex(c => c.id === drag),
          b = n.findIndex(c => c.id === target);
        const [m] = n.splice(a, 1);
        n.splice(b, 0, m);
        setCats(n);
      }
      setDrag(null);
    };
    const n = del ? count(del.id) : 0;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        overflowY: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px 16px 4px'
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        font: '700 28px/1.1 var(--font-sans)',
        letterSpacing: '-.02em'
      }
    }, "\u0421\u0430\u043D\u0430\u0442\u0442\u0430\u0440"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '6px 0 0',
        font: '400 15px/1.45 var(--font-sans)',
        color: 'var(--text-muted)'
      }
    }, "\u041E\u0441\u044B \u0440\u0435\u0442 \u049B\u043E\u043D\u0430\u049B \u043C\u04D9\u0437\u0456\u0440\u0456\u043D\u0434\u0435\u0433\u0456 \u049B\u043E\u0439\u044B\u043D\u0434\u044B\u043B\u0430\u0440 \u0440\u0435\u0442\u0456\u043C\u0435\u043D \u0431\u0456\u0440\u0434\u0435\u0439")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 16px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(ListGroup, null, cats.map(c => /*#__PURE__*/React.createElement("div", {
      key: c.id,
      draggable: true,
      onDragStart: () => setDrag(c.id),
      onDragOver: e => e.preventDefault(),
      onDrop: () => drop(c.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        minHeight: 68,
        padding: '6px 12px 6px 0',
        opacity: drag === c.id ? .5 : 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "qm-row__handle"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "grip-vertical",
      size: 20
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => setEdit({
        cat: {
          ...c
        },
        isNew: false
      }),
      style: {
        flex: 1,
        minWidth: 0,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        textAlign: 'left',
        border: 0,
        background: 'none',
        padding: 0,
        cursor: 'pointer',
        color: 'inherit'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        font: '600 16px/1.3 var(--font-sans)'
      }
    }, c.kz)), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 15px var(--font-sans)',
        color: 'var(--text-muted)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, count(c.id)), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 20,
      style: {
        color: 'var(--ink-400)'
      }
    }))))), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      block: true,
      icon: "plus",
      onClick: () => setEdit({
        cat: {
          id: 'c' + Date.now(),
          kz: '',
          ru: '',
          en: '',
          zh: ''
        },
        isNew: true
      })
    }, "\u0416\u0430\u04A3\u0430 \u0441\u0430\u043D\u0430\u0442"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 14px/1.45 var(--font-sans)',
        color: 'var(--text-muted)',
        textAlign: 'center'
      }
    }, "\xAB\u0411\u0430\u0440\u043B\u044B\u0493\u044B\xBB \u049B\u043E\u0439\u044B\u043D\u0434\u044B\u0441\u044B \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0442\u044B \u0442\u04AF\u0440\u0434\u0435 \u049B\u043E\u0441\u044B\u043B\u0430\u0434\u044B.")), edit && /*#__PURE__*/React.createElement(CategoryEdit, {
      cat: edit.cat,
      isNew: edit.isNew,
      count: count(edit.cat.id),
      onBack: () => setEdit(null),
      onSave: save,
      onDelete: () => askDelete(edit.cat)
    }), /*#__PURE__*/React.createElement(Dialog, {
      open: !!del,
      onClose: () => setDel(null),
      title: del ? n ? '«' + del.kz + '» санатында ' + n + ' тағам бар' : '«' + del.kz + '» жойылсын ба?' : '',
      actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "danger",
        size: "lg",
        block: true,
        onClick: doDelete
      }, n ? 'Ауыстырып, санатты жою' : 'Санатты жою'), /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        block: true,
        onClick: () => setDel(null)
      }, "\u0411\u043E\u043B\u0434\u044B\u0440\u043C\u0430\u0443"))
    }, n ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", null, "\u0416\u043E\u0439\u043C\u0430\u0441 \u0431\u04B1\u0440\u044B\u043D \u043E\u043B\u0430\u0440\u0434\u044B \u049B\u0430\u0439 \u0441\u0430\u043D\u0430\u0442\u049B\u0430 \u0430\u0443\u044B\u0441\u0442\u044B\u0440\u0430\u043C\u044B\u0437?"), /*#__PURE__*/React.createElement(RadioList, {
      value: moveTo,
      onChange: setMoveTo,
      options: cats.filter(c => c.id !== del.id).map(c => ({
        value: c.id,
        label: c.kz
      }))
    })) : 'Санат бос. Тағамдар жойылмайды.'));
  }
  Object.assign(window, {
    AdminCategories
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/AdminCategories.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/AdminLogin.jsx
try { (() => {
(() => {
  const {
    TextField,
    Button,
    CodeInput,
    Icon,
    IconButton,
    LangSwitcher
  } = window.QRMenuDesignSystem_af1ea9;
  function AdminLogin({
    onDone,
    uiLang = 'kz',
    setUiLang
  }) {
    const [step, setStep] = React.useState('phone');
    const [phone, setPhone] = React.useState('');
    const [code, setCode] = React.useState('');
    const fmt = v => {
      const d = v.replace(/\D/g, '').slice(0, 10);
      return [d.slice(0, 3), d.slice(3, 6), d.slice(6, 8), d.slice(8, 10)].filter(Boolean).join(' ');
    };
    React.useEffect(() => {
      if (code.length === 4) {
        const t = setTimeout(onDone, 400);
        return () => clearTimeout(t);
      }
    }, [code]);
    const h1 = {
      margin: '0 0 8px',
      font: '700 30px/1.15 var(--font-sans)',
      letterSpacing: '-.02em'
    };
    const p = {
      margin: '0 0 28px',
      font: '400 16px/1.5 var(--font-sans)',
      color: 'var(--text-secondary)'
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        padding: '12px 20px 20px',
        background: 'var(--surface-page)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 56
      }
    }, step === 'phone' ? /*#__PURE__*/React.createElement("div", {
      style: {
        font: '700 20px/1 var(--font-sans)',
        letterSpacing: '-.02em'
      }
    }, "QR Menu") : /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron-left",
      label: "\u0410\u0440\u0442\u049B\u0430",
      size: 24,
      onClick: () => {
        setStep('phone');
        setCode('');
      },
      style: {
        marginLeft: -10
      }
    }), step === 'phone' && /*#__PURE__*/React.createElement(LangSwitcher, {
      value: uiLang,
      onChange: setUiLang
    })), step === 'phone' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 44
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: h1
    }, "\u041A\u0430\u0444\u0435 \u0438\u0435\u0441\u0456 \u0440\u0435\u0442\u0456\u043D\u0434\u0435 \u043A\u0456\u0440\u0443"), /*#__PURE__*/React.createElement("p", {
      style: p
    }, "SMS \u0430\u0440\u049B\u044B\u043B\u044B \u043A\u043E\u0434 \u0436\u0456\u0431\u0435\u0440\u0435\u043C\u0456\u0437. \u049A\u04B1\u043F\u0438\u044F\u0441\u04E9\u0437 \u049B\u0430\u0436\u0435\u0442 \u0435\u043C\u0435\u0441."), /*#__PURE__*/React.createElement(TextField, {
      label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u04E9\u043C\u0456\u0440\u0456",
      prefix: "+7",
      inputMode: "tel",
      placeholder: "700 000 00 00",
      value: phone,
      onChange: e => setPhone(fmt(e.target.value)),
      autoFocus: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'auto'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      block: true,
      disabled: phone.replace(/\D/g, '').length < 10,
      onClick: () => setStep('code')
    }, "\u041A\u043E\u0434 \u0430\u043B\u0443"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: h1
    }, "\u041A\u043E\u0434\u0442\u044B \u0435\u043D\u0433\u0456\u0437\u0456\u04A3\u0456\u0437"), /*#__PURE__*/React.createElement("p", {
      style: p
    }, "+7 ", phone, " \u043D\u04E9\u043C\u0456\u0440\u0456\u043D\u0435 \u0436\u0456\u0431\u0435\u0440\u0434\u0456\u043A. ", /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setStep('phone');
        setCode('');
      },
      style: {
        border: 0,
        background: 'none',
        padding: 0,
        font: 'inherit',
        fontWeight: 600,
        color: 'var(--accent-ink)',
        cursor: 'pointer'
      }
    }, "\u04E8\u0437\u0433\u0435\u0440\u0442\u0443")), /*#__PURE__*/React.createElement(CodeInput, {
      value: code,
      onChange: setCode,
      autoFocus: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        marginTop: 20,
        font: '500 15px var(--font-sans)',
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 16
    }), "\u049A\u0430\u0439\u0442\u0430 \u0436\u0456\u0431\u0435\u0440\u0443 ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--text-primary)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, "0:42"), " \u043A\u0435\u0439\u0456\u043D"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        font: '400 14px/1.5 var(--font-sans)',
        color: 'var(--text-muted)'
      }
    }, "\u041A\u043E\u0434 \u043E\u0441\u044B \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0493\u0430 \u043A\u0435\u043B\u0441\u0435, \u04E9\u0437\u0456 \u0442\u043E\u043B\u0442\u044B\u0440\u044B\u043B\u0430\u0434\u044B.")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'auto'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      block: true,
      disabled: code.length < 4,
      onClick: onDone
    }, "\u041A\u0456\u0440\u0443"))));
  }
  Object.assign(window, {
    AdminLogin
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/AdminLogin.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/AdminMenu.jsx
try { (() => {
(() => {
  const {
    TextField,
    MenuRow,
    Fab,
    Button,
    SectionHeader,
    EmptyState,
    ListGroup
  } = window.QRMenuDesignSystem_af1ea9;
  function AdminMenu({
    items,
    setItems,
    onEdit,
    onAdd,
    onPreview
  }) {
    const {
      categories,
      cafe
    } = window.QM_DATA;
    const [q, setQ] = React.useState('');
    const [drag, setDrag] = React.useState(null);
    const toggle = (id, v) => setItems(items.map(i => i.id === id ? {
      ...i,
      soldOut: !v
    } : i));
    const drop = target => {
      if (drag && drag !== target.id) {
        const a = items.findIndex(x => x.id === drag),
          b = items.findIndex(x => x.id === target.id);
        if (items[a].cat === items[b].cat) {
          const nx = items.slice();
          const [m] = nx.splice(a, 1);
          nx.splice(b, 0, m);
          setItems(nx);
        }
      }
      setDrag(null);
    };
    const match = i => !q || (i.name.kz + ' ' + i.name.ru).toLowerCase().includes(q.toLowerCase());
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        overflowY: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 16px 10px',
        position: 'sticky',
        top: 0,
        background: 'var(--surface-page)',
        zIndex: 5,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 14px var(--font-sans)',
        color: 'var(--text-muted)'
      }
    }, cafe.name), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        font: '700 28px/1.1 var(--font-sans)',
        letterSpacing: '-.02em'
      }
    }, "\u041C\u04D9\u0437\u0456\u0440")), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconRight: "arrow-up-right",
      onClick: onPreview
    }, "\u049A\u043E\u043D\u0430\u049B \u043A\u04E9\u0437\u0456\u043C\u0435\u043D")), /*#__PURE__*/React.createElement(TextField, {
      icon: "search",
      placeholder: "\u0422\u0430\u0493\u0430\u043C\u0434\u044B \u0456\u0437\u0434\u0435\u0443",
      value: q,
      onChange: e => setQ(e.target.value)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 16px 104px',
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, categories.filter(c => c.id !== 'all').map(c => {
      const all = items.filter(i => i.cat === c.id);
      const list = all.filter(match);
      if (!list.length) return null;
      const off = all.filter(i => i.soldOut).length;
      return /*#__PURE__*/React.createElement("section", {
        key: c.id
      }, /*#__PURE__*/React.createElement(SectionHeader, {
        count: all.length + ' тағам' + (off ? ' · ' + off + ' таусылды' : '')
      }, c.kz), /*#__PURE__*/React.createElement(ListGroup, null, list.map(i => /*#__PURE__*/React.createElement("div", {
        key: i.id,
        draggable: true,
        onDragStart: () => setDrag(i.id),
        onDragOver: e => e.preventDefault(),
        onDrop: () => drop(i),
        style: {
          opacity: drag === i.id ? .5 : 1
        }
      }, /*#__PURE__*/React.createElement(MenuRow, {
        name: i.name.kz,
        price: i.price,
        photo: i.img,
        available: !i.soldOut,
        onToggle: v => toggle(i.id, v),
        onClick: () => onEdit(i),
        soldOutLabel: "\u0422\u0430\u0443\u0441\u044B\u043B\u0434\u044B",
        availableLabel: "\u049A\u043E\u043B\u0436\u0435\u0442\u0456\u043C\u0434\u0456"
      })))));
    }), q && !items.some(match) && /*#__PURE__*/React.createElement(EmptyState, {
      icon: "search-x",
      title: "\u0415\u0448\u0442\u0435\u04A3\u0435 \u0442\u0430\u0431\u044B\u043B\u043C\u0430\u0434\u044B",
      dashed: false
    }, "\xAB", q, "\xBB \u0431\u043E\u0439\u044B\u043D\u0448\u0430 \u0442\u0430\u0493\u0430\u043C \u0436\u043E\u049B"))), /*#__PURE__*/React.createElement(Fab, {
      onClick: onAdd,
      style: {
        position: 'absolute',
        right: 16,
        bottom: 16
      }
    }, "\u0422\u0430\u0493\u0430\u043C \u049B\u043E\u0441\u0443"));
  }
  Object.assign(window, {
    AdminMenu
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/AdminMenu.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/AdminProfile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const {
    AppBar,
    TextField,
    Button,
    Switch,
    ColorPicker,
    CafeLogo,
    CategoryTabs,
    Icon,
    ListGroup
  } = window.QRMenuDesignSystem_af1ea9;
  const DAYS = ['Дүйсенбі', 'Сейсенбі', 'Сәрсенбі', 'Бейсенбі', 'Жұма', 'Сенбі', 'Жексенбі'];
  const CONTRAST = {
    terracotta: '5.6',
    steppe: '6.1',
    saffron: '9.8',
    plum: '7.4',
    teal: '6.0',
    charcoal: '15.2'
  };
  function Group({
    title,
    note,
    children
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '0 4px'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        font: '600 14px/1.2 var(--font-sans)',
        color: 'var(--text-muted)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-caps)'
      }
    }, title), note && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4,
        font: '400 14px/1.4 var(--font-sans)',
        color: 'var(--text-muted)'
      }
    }, note)), children);
  }
  function AdminProfile({
    accent,
    setAccent,
    onPreview,
    onBack,
    onSaved
  }) {
    const [days, setDays] = React.useState(DAYS.map((d, i) => ({
      on: i !== 6,
      from: '08:00',
      to: '23:00'
    })));
    const [tab, setTab] = React.useState('drinks');
    const C0 = window.QM_DATA.cafe;
    const [f, setF] = React.useState({
      name: C0.name,
      address: C0.address.kz,
      gis: C0.gis,
      phone: C0.phone.replace('+7', '').trim(),
      whatsapp: (C0.whatsappNum || '').replace('+7', '').trim(),
      instagram: (C0.instagram || '').replace('https://instagram.com/', '')
    });
    const fld = k => ({
      value: f[k],
      onChange: e => setF({
        ...f,
        [k]: e.target.value
      })
    });
    const saveAll = () => {
      const wa = '+7 ' + f.whatsapp;
      const cafe = {
        name: f.name,
        address: {
          kz: f.address,
          ru: f.address,
          en: f.address,
          zh: f.address
        },
        gis: f.gis.startsWith('http') ? f.gis : 'https://' + f.gis,
        phone: '+7 ' + f.phone,
        whatsappNum: wa,
        whatsapp: 'https://wa.me/' + wa.replace(/\D/g, ''),
        instagram: 'https://instagram.com/' + f.instagram.replace('@', '')
      };
      Object.assign(window.QM_DATA.cafe, cafe);
      if (window.QM_STORE) window.QM_STORE.save({
        cafe
      });
      onSaved();
    };
    const tf = {
      height: 40,
      width: 64,
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-card)',
      textAlign: 'center',
      font: '500 15px var(--font-sans)',
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--text-primary)'
    };
    const setDay = (i, k, v) => setDays(days.map((x, j) => j === i ? {
      ...x,
      [k]: v
    } : x));
    const copyAll = () => setDays(days.map(x => ({
      ...x,
      on: days[0].on,
      from: days[0].from,
      to: days[0].to
    })));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 30,
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--surface-page)'
      }
    }, /*#__PURE__*/React.createElement(AppBar, {
      center: true,
      title: "\u041A\u0430\u0444\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u0456",
      onBack: onBack,
      style: {
        background: 'var(--surface-card)',
        borderBottom: '1px solid var(--border-subtle)'
      },
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: saveAll,
        style: {
          color: 'var(--accent-ink)'
        }
      }, "\u0421\u0430\u049B\u0442\u0430\u0443")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '16px 16px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 28
      }
    }, /*#__PURE__*/React.createElement(Group, {
      title: "\u0411\u0435\u0437\u0435\u043D\u0434\u0456\u0440\u0443"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height: 140,
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: (window.QM_BASE || '../../') + 'assets/photos/plov.jpg',
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    }), /*#__PURE__*/React.createElement("button", {
      style: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        background: 'var(--surface-overlay)'
      },
      className: "qm-btn qm-btn--secondary"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "camera",
      size: 18
    }), "\u041C\u04B1\u049B\u0430\u0431\u0430")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(CafeLogo, {
      name: "\u0416\u0435\u0442\u0456 \u0414\u04D9\u043D",
      size: 64
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: "upload"
    }, "\u041B\u043E\u0433\u043E\u0442\u0438\u043F\u0442\u0456 \u0430\u0443\u044B\u0441\u0442\u044B\u0440\u0443")), /*#__PURE__*/React.createElement(TextField, _extends({
      label: "\u041A\u0430\u0444\u0435 \u0430\u0442\u0430\u0443\u044B"
    }, fld('name')))), /*#__PURE__*/React.createElement(Group, {
      title: "\u0410\u043A\u0446\u0435\u043D\u0442 \u0442\u04AF\u0441\u0456",
      note: "\u049A\u043E\u043D\u0430\u049B \u043C\u04D9\u0437\u0456\u0440\u0456\u043D\u0434\u0435\u0433\u0456 \u0431\u0435\u043B\u0441\u0435\u043D\u0434\u0456 \u049B\u043E\u0439\u044B\u043D\u0434\u044B \u043C\u0435\u043D \u0431\u0430\u0442\u044B\u0440\u043C\u0430\u043B\u0430\u0440\u0434\u044B\u04A3 \u0442\u04AF\u0441\u0456"
    }, /*#__PURE__*/React.createElement(ColorPicker, {
      value: accent,
      onChange: setAccent
    }), /*#__PURE__*/React.createElement("div", {
      "data-accent": accent,
      className: "qm-group",
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '10px 14px 0',
        font: '600 12px var(--font-sans)',
        letterSpacing: 'var(--tracking-caps)',
        color: 'var(--text-muted)'
      }
    }, "\u049A\u041E\u041D\u0410\u049A\u049A\u0410 \u049A\u0410\u041B\u0410\u0419 \u041A\u04E8\u0420\u0406\u041D\u0415\u0414\u0406"), /*#__PURE__*/React.createElement(CategoryTabs, {
      value: tab,
      onChange: setTab,
      items: [{
        id: 'all',
        label: 'Барлығы'
      }, {
        id: 'drinks',
        label: 'Сусындар'
      }, {
        id: 'main',
        label: 'Негізгі'
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 14
      }
    }, /*#__PURE__*/React.createElement(Button, {
      block: true,
      icon: "map",
      onClick: () => window.open(window.QM_DATA.cafe.gis, '_blank')
    }, "2GIS-\u0442\u0435 \u0430\u0448\u0443"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        font: '500 14px var(--font-sans)',
        color: 'var(--status-open)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "circle-check",
      size: 16
    }), "\u041C\u04D9\u0442\u0456\u043D \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442\u044B ", CONTRAST[accent], ":1, \u043E\u049B\u0443\u0493\u0430 \u044B\u04A3\u0493\u0430\u0439\u043B\u044B")), /*#__PURE__*/React.createElement(Group, {
      title: "\u0411\u0430\u0439\u043B\u0430\u043D\u044B\u0441"
    }, /*#__PURE__*/React.createElement(TextField, _extends({
      label: "\u041C\u0435\u043A\u0435\u043D\u0436\u0430\u0439",
      icon: "map-pin",
      placeholder: "\u041A\u04E9\u0448\u0435, \u04AF\u0439, \u049B\u0430\u043B\u0430"
    }, fld('address'))), /*#__PURE__*/React.createElement(TextField, _extends({
      label: "2GIS \u0441\u0456\u043B\u0442\u0435\u043C\u0435\u0441\u0456",
      icon: "map"
    }, fld('gis'))), /*#__PURE__*/React.createElement(TextField, _extends({
      label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
      prefix: "+7",
      inputMode: "tel"
    }, fld('phone'))), /*#__PURE__*/React.createElement(TextField, _extends({
      label: "WhatsApp",
      icon: "brand:whatsapp",
      prefix: "+7",
      inputMode: "tel"
    }, fld('whatsapp'), {
      placeholder: "700 000 00 00"
    })), /*#__PURE__*/React.createElement(TextField, _extends({
      label: "Instagram",
      prefix: "@"
    }, fld('instagram')))), /*#__PURE__*/React.createElement(Group, {
      title: "\u0416\u04B1\u043C\u044B\u0441 \u0443\u0430\u049B\u044B\u0442\u044B"
    }, /*#__PURE__*/React.createElement(ListGroup, {
      inset: true
    }, DAYS.map((d, i) => /*#__PURE__*/React.createElement("div", {
      key: d,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        minHeight: 60
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0,
        font: '500 16px var(--font-sans)',
        color: days[i].on ? 'var(--text-primary)' : 'var(--text-muted)'
      }
    }, d), days[i].on ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
      style: tf,
      value: days[i].from,
      onChange: e => setDay(i, 'from', e.target.value)
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)'
      }
    }, "\u2013"), /*#__PURE__*/React.createElement("input", {
      style: tf,
      value: days[i].to,
      onChange: e => setDay(i, 'to', e.target.value)
    })) : /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 15px var(--font-sans)',
        color: 'var(--text-muted)',
        marginRight: 8
      }
    }, "\u0414\u0435\u043C\u0430\u043B\u044B\u0441"), /*#__PURE__*/React.createElement(Switch, {
      checked: days[i].on,
      onChange: v => setDay(i, 'on', v),
      ariaLabel: d
    })))), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      icon: "copy",
      onClick: copyAll,
      style: {
        alignSelf: 'flex-start',
        color: 'var(--accent-ink)'
      }
    }, "\u0414\u04AF\u0439\u0441\u0435\u043D\u0431\u0456\u043D\u0456 \u0431\u0430\u0440\u043B\u044B\u049B \u043A\u04AF\u043D\u0433\u0435 \u043A\u04E9\u0448\u0456\u0440\u0443")), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "secondary",
      block: true,
      iconRight: "arrow-up-right",
      onClick: onPreview
    }, "\u049A\u043E\u043D\u0430\u049B \u043C\u04D9\u0437\u0456\u0440\u0456\u043D \u0430\u0448\u0443")));
  }
  Object.assign(window, {
    AdminProfile
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/AdminProfile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/AdminQr.jsx
try { (() => {
(() => {
  const {
    Button,
    Switch,
    TextField,
    CafeLogo,
    SettingRow,
    ListGroup,
    RadioList,
    QrCode,
    Banner
  } = window.QRMenuDesignSystem_af1ea9;
  const guestUrl = () => new URL(window.QM_GUEST_URL || '../guest-menu/index.html', location.href).href;
  const qrSrc = px => 'https://api.qrserver.com/v1/create-qr-code/?margin=0&format=png&size=' + px + 'x' + px + '&data=' + encodeURIComponent(guestUrl());
  function RealQr({
    size
  }) {
    const [err, setErr] = React.useState(false);
    return err ? /*#__PURE__*/React.createElement(QrCode, {
      value: "zheti-dan/menu",
      size: size
    }) : /*#__PURE__*/React.createElement("img", {
      src: qrSrc(size * 2),
      width: size,
      height: size,
      alt: "QR",
      onError: () => setErr(true),
      style: {
        display: 'block'
      }
    });
  }
  function QrSticker() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        borderRadius: 'var(--radius-lg)',
        padding: '22px 20px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14,
        boxShadow: 'var(--shadow-card)',
        border: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '700 20px var(--font-sans)'
      }
    }, "\u0416\u0435\u0442\u0456 \u0414\u04D9\u043D"), /*#__PURE__*/React.createElement(RealQr, {
      size: 220
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '600 16px/1.3 var(--font-sans)',
        textAlign: 'center'
      }
    }, "\u041C\u04D9\u0437\u0456\u0440 \xB7 \u041C\u0435\u043D\u044E \xB7 Menu \xB7 \u83DC\u5355"));
  }
  function AdminQr() {
    const [size, setSize] = React.useState('sticker');
    const [done, setDone] = React.useState('');
    const [copies, setCopies] = React.useState(6);
    const n = copies;
    const pages = Math.ceil(n / (size === 'sticker' ? 6 : 4));
    const dl = f => {
      const name = window.QM_DATA.cafe.name;
      if (f === 'png') window.open(qrSrc(1000), '_blank');else {
        const per = size === 'sticker' ? 6 : 4;
        const w = size === 'sticker' ? '8cm' : '10.5cm';
        const h = size === 'sticker' ? '8cm' : '14.8cm';
        const cell = '<div style="width:' + w + ';height:' + h + ';border:1px dashed #ccc;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4mm;font-family:sans-serif"><b style="font-size:16pt">' + name + '</b><img src="' + qrSrc(600) + '" style="width:5.5cm;height:5.5cm"><div style="font-size:11pt;font-weight:600">Мәзір · Меню · Menu · 菜单</div></div>';
        const win = window.open('', '_blank');
        if (win) {
          win.document.write('<html><head><title>' + name + ' QR</title><style>@page{size:A4;margin:10mm}body{margin:0;display:flex;flex-wrap:wrap;gap:4mm}</style></head><body>' + cell.repeat(per) + '<script>setTimeout(()=>print(),800)<\/script></body></html>');
          win.document.close();
        }
      }
      setDone(f);
      setTimeout(() => setDone(''), 1800);
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        overflowY: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px 16px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-sunken)',
        borderRadius: 'var(--radius-xl)',
        padding: '24px 16px',
        display: 'flex',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 290
      }
    }, /*#__PURE__*/React.createElement(QrSticker, null))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "qm-field__label",
      style: {
        margin: '0 4px 8px'
      }
    }, "\u04E8\u043B\u0448\u0435\u043C\u0456"), /*#__PURE__*/React.createElement(ListGroup, {
      inset: true
    }, /*#__PURE__*/React.createElement(RadioList, {
      value: size,
      onChange: setSize,
      options: [{
        value: 'sticker',
        label: 'Стикер',
        sub: '8 × 8 см · A4-те 6'
      }, {
        value: 'stand',
        label: 'Тұғыр',
        sub: 'A6 · A4-те 4'
      }]
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      icon: done === 'pdf' ? 'check' : 'file-down',
      onClick: () => dl('pdf'),
      style: {
        fontSize: 15,
        whiteSpace: 'nowrap',
        padding: '0 12px',
        gap: 6
      }
    }, done === 'pdf' ? 'Дайын' : 'PDF · ' + pages + ' бет'), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "secondary",
      icon: done === 'png' ? 'check' : 'image-down',
      onClick: () => dl('png'),
      style: {
        fontSize: 15,
        whiteSpace: 'nowrap',
        padding: '0 12px',
        gap: 6
      }
    }, done === 'png' ? 'Дайын' : 'PNG')), /*#__PURE__*/React.createElement(Banner, {
      icon: "link"
    }, "\u041A\u043E\u0434\u0442\u044B\u04A3 \u0441\u0456\u043B\u0442\u0435\u043C\u0435\u0441\u0456 \u0442\u04B1\u0440\u0430\u049B\u0442\u044B: \u043C\u04D9\u0437\u0456\u0440\u0434\u0456 \u04E9\u0437\u0433\u0435\u0440\u0442\u043A\u0435\u043D\u0434\u0435 \u049B\u0430\u0439\u0442\u0430 \u0431\u0430\u0441\u044B\u043F \u0448\u044B\u0493\u0430\u0440\u0443\u0434\u044B\u04A3 \u049B\u0430\u0436\u0435\u0442\u0456 \u0436\u043E\u049B."), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 13px/1.4 var(--font-sans)',
        color: 'var(--text-muted)',
        wordBreak: 'break-all',
        textAlign: 'center'
      }
    }, guestUrl())));
  }
  Object.assign(window, {
    AdminQr
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/AdminQr.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/AdminSettings.jsx
try { (() => {
(() => {
  const {
    ListGroup,
    SettingRow,
    RadioList,
    Button,
    Icon,
    CafeLogo
  } = window.QRMenuDesignSystem_af1ea9;
  const SETTINGS_L = {
    kz: {
      title: 'Баптаулар',
      profile: 'Кафе профілі',
      profileSub: 'Атауы, логотип, түс, байланыс, уақыт',
      phone: 'Телефон',
      lang: 'Интерфейс тілі',
      note: 'Тек басқару панеліне әсер етеді. Қонақ мәзірі әрқашан 4 тілде.',
      logout: 'Шығу'
    },
    ru: {
      title: 'Настройки',
      profile: 'Профиль кафе',
      profileSub: 'Название, логотип, цвет, контакты, часы',
      phone: 'Телефон',
      lang: 'Язык интерфейса',
      note: 'Меняет только панель управления. Меню для гостей всегда на 4 языках.',
      logout: 'Выйти'
    },
    en: {
      title: 'Settings',
      profile: 'Café profile',
      profileSub: 'Name, logo, colour, contacts, hours',
      phone: 'Phone',
      lang: 'Interface language',
      note: 'Changes the admin panel only. The guest menu always offers all 4 languages.',
      logout: 'Log out'
    },
    zh: {
      title: '设置',
      profile: '咖啡馆资料',
      profileSub: '名称、标志、颜色、联系方式、营业时间',
      phone: '电话',
      lang: '界面语言',
      note: '仅更改管理面板。顾客菜单始终提供 4 种语言。',
      logout: '退出登录'
    }
  };
  const NAV_L = {
    kz: ['Мәзір', 'Санаттар', 'QR', 'Баптаулар'],
    ru: ['Меню', 'Категории', 'QR', 'Настройки'],
    en: ['Menu', 'Categories', 'QR', 'Settings'],
    zh: ['菜单', '分类', '二维码', '设置']
  };
  function AdminSettings({
    uiLang,
    setUiLang,
    onProfile,
    onLogout
  }) {
    const s = SETTINGS_L[uiLang];
    return /*#__PURE__*/React.createElement("div", {
      lang: uiLang === 'kz' ? 'kk' : uiLang,
      style: {
        flex: 1,
        minHeight: 0,
        overflowY: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px 16px 4px'
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        font: '700 28px/1.1 var(--font-sans)',
        letterSpacing: '-.02em'
      }
    }, s.title)), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 16px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(ListGroup, {
      inset: true
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "qm-setrow",
      onClick: onProfile,
      style: {
        minHeight: 76
      }
    }, /*#__PURE__*/React.createElement(CafeLogo, {
      name: window.QM_DATA.cafe.name,
      size: 48
    }), /*#__PURE__*/React.createElement("span", {
      className: "qm-setrow__text"
    }, /*#__PURE__*/React.createElement("span", {
      className: "qm-setrow__title",
      style: {
        fontSize: 18,
        fontWeight: 700
      }
    }, window.QM_DATA.cafe.name), /*#__PURE__*/React.createElement("span", {
      className: "qm-setrow__sub"
    }, s.profile)), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 20,
      className: "qm-setrow__chev"
    })), /*#__PURE__*/React.createElement(SettingRow, {
      icon: "smartphone",
      title: s.phone,
      control: /*#__PURE__*/React.createElement("span", {
        style: {
          font: '500 15px var(--font-sans)',
          color: 'var(--text-muted)',
          fontVariantNumeric: 'tabular-nums'
        }
      }, "+7 701 234 56 78")
    })), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '0 4px 8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '600 14px/1.2 var(--font-sans)',
        color: 'var(--text-muted)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-caps)'
      }
    }, s.lang), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4,
        font: '400 14px/1.4 var(--font-sans)',
        color: 'var(--text-muted)'
      }
    }, s.note)), /*#__PURE__*/React.createElement(ListGroup, {
      inset: true
    }, /*#__PURE__*/React.createElement(RadioList, {
      value: uiLang,
      onChange: setUiLang,
      options: [['kz', 'Қазақша'], ['ru', 'Русский'], ['en', 'English'], ['zh', '中文']].map(([v, l]) => ({
        value: v,
        label: l,
        lead: v.toUpperCase()
      }))
    }))), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      block: true,
      icon: "log-out",
      onClick: onLogout,
      style: {
        color: 'var(--danger)'
      }
    }, s.logout)));
  }
  Object.assign(window, {
    AdminSettings,
    NAV_L
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/AdminSettings.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/DishEdit.jsx
try { (() => {
(() => {
  const {
    AppBar,
    Button,
    TextField,
    Switch,
    Tag,
    LangTabs,
    PhotoPlaceholder,
    Dialog,
    Icon,
    Banner,
    ListGroup,
    SettingRow,
    Segmented,
    Select
  } = window.QRMenuDesignSystem_af1ea9;
  const LANGS = ['kz', 'ru', 'en', 'zh'];
  const TAGS = [['spicy', 'Ащы'], ['veg', 'Вегетариандық'], ['new', 'Жаңа'], ['popular', 'Танымал']];
  const fmtPrice = v => {
    const d = String(v).replace(/\D/g, '');
    return d ? Number(d).toLocaleString('ru-RU').replace(/\s/g, '\u00a0') : '';
  };
  const FAKE = {
    name: {
      kz: 'Самса',
      ru: 'Самса',
      en: 'Samsa',
      zh: '烤包子'
    },
    desc: {
      kz: 'Сиыр еті мен пияз салынған тандыр самсасы',
      ru: 'Тандырная самса с говядиной и луком',
      en: 'Tandoor-baked pastry with beef and onion',
      zh: '馕坑烤制的牛肉洋葱包子'
    }
  };
  const IMG = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  };
  const rowInput = {
    width: 110,
    border: 0,
    outline: 0,
    background: 'none',
    textAlign: 'right',
    font: '700 22px var(--font-sans)',
    fontVariantNumeric: 'tabular-nums',
    color: 'var(--text-primary)'
  };
  function CropOverlay({
    img,
    onDone,
    onCancel
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 60,
        background: 'var(--ink-900)',
        color: 'var(--paper-50)',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        zIndex: 2,
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        font: '600 17px var(--font-sans)'
      }
    }, "\u041A\u0430\u0434\u0440\u043B\u0430\u0443"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 14,
        padding: 16,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: '100%',
        aspectRatio: '4/3',
        outline: '2px solid #fff',
        boxShadow: '0 0 0 999px oklch(0% 0 0 / .55)'
      }
    }, img ? /*#__PURE__*/React.createElement("img", {
      src: img,
      alt: "",
      style: IMG
    }) : /*#__PURE__*/React.createElement(PhotoPlaceholder, {
      icon: "move",
      iconSize: 28
    }), [1, 2].map(n => /*#__PURE__*/React.createElement("i", {
      key: 'v' + n,
      style: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: n * 33.33 + '%',
        width: 1,
        background: 'oklch(100% 0 0 / .5)'
      }
    })), [1, 2].map(n => /*#__PURE__*/React.createElement("i", {
      key: 'h' + n,
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: n * 33.33 + '%',
        height: 1,
        background: 'oklch(100% 0 0 / .5)'
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        zIndex: 2,
        font: '600 15px var(--font-sans)'
      }
    }, "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 4:3"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        zIndex: 2,
        font: '400 14px var(--font-sans)',
        color: 'var(--ink-400)'
      }
    }, "\u0421\u0430\u0443\u0441\u0430\u049B\u043F\u0435\u043D \u0436\u044B\u043B\u0436\u044B\u0442\u044B\u043F, \u04AF\u043B\u043A\u0435\u0439\u0442\u0456\u04A3\u0456\u0437")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        zIndex: 2,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 8,
        padding: '0 16px 20px'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onCancel,
      className: "qm-btn qm-btn--lg",
      style: {
        background: 'oklch(100% 0 0 / .1)',
        color: 'var(--paper-50)'
      }
    }, "\u049A\u0430\u0439\u0442\u0430 \u0442\u04AF\u0441\u0456\u0440\u0443"), /*#__PURE__*/React.createElement("button", {
      onClick: onDone,
      className: "qm-btn qm-btn--lg qm-btn--primary"
    }, "\u0414\u0430\u0439\u044B\u043D")));
  }
  function DishEdit({
    item,
    onBack,
    onSave,
    onDelete
  }) {
    const {
      categories
    } = window.QM_DATA;
    const isNew = !item;
    const [d, setD] = React.useState(() => item ? JSON.parse(JSON.stringify(item)) : {
      id: 'n' + Date.now(),
      cat: 'main',
      price: '',
      size: '',
      unit: 'g',
      photo: false,
      tags: [],
      soldOut: false,
      name: {
        kz: '',
        ru: '',
        en: '',
        zh: ''
      },
      desc: {
        kz: '',
        ru: '',
        en: '',
        zh: ''
      }
    });
    const [status, setStatus] = React.useState(() => Object.fromEntries(LANGS.map(l => [l, item ? 'filled' : 'empty'])));
    const [source, setSource] = React.useState('kz');
    const [lang, setLangS] = React.useState('kz');
    const [busy, setBusy] = React.useState(false);
    const [crop, setCrop] = React.useState(false);
    const [pending, setPending] = React.useState(null);
    const camRef = React.useRef(null);
    const galRef = React.useRef(null);
    const onFile = e => {
      const f = e.target.files && e.target.files[0];
      e.target.value = '';
      if (!f) return;
      const r = new FileReader();
      r.onload = () => {
        setPending(r.result);
        setCrop(true);
      };
      r.readAsDataURL(f);
    };
    const [confirm, setConfirm] = React.useState(false);
    const setLang = l => {
      setStatus(s => s[lang] === 'auto' ? {
        ...s,
        [lang]: 'filled'
      } : s);
      setLangS(l);
    };
    const set = (k, v) => setD(x => ({
      ...x,
      [k]: v
    }));
    const setText = (k, v) => {
      setD(x => ({
        ...x,
        [k]: {
          ...x[k],
          [lang]: v
        }
      }));
      setStatus(s => ({
        ...s,
        [lang]: v ? 'filled' : 'empty'
      }));
    };
    const others = LANGS.filter(l => l !== source);
    const missing = others.filter(l => status[l] === 'empty');
    const translate = () => {
      const src = lang;
      setSource(src);
      setBusy(true);
      setTimeout(() => {
        setD(x => {
          const n = {
            ...x,
            name: {
              ...x.name
            },
            desc: {
              ...x.desc
            }
          };
          LANGS.filter(l => l !== src).forEach(l => {
            n.name[l] = item && item.name[l] || FAKE.name[l];
            n.desc[l] = item && item.desc[l] || FAKE.desc[l];
          });
          return n;
        });
        setStatus(Object.fromEntries(LANGS.map(l => [l, l === src ? 'filled' : 'auto'])));
        setBusy(false);
      }, 1100);
    };
    const ok = !!d.name.kz;
    const save = () => ok && onSave({
      ...d,
      price: Number(d.price) || 0
    });
    const L = lang.toUpperCase();
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--surface-page)',
        zIndex: 30
      }
    }, /*#__PURE__*/React.createElement(AppBar, {
      center: true,
      title: isNew ? 'Жаңа тағам' : d.name.kz,
      onBack: onBack,
      style: {
        background: 'var(--surface-card)',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        aspectRatio: '4/3',
        position: 'relative',
        flexShrink: 0,
        background: 'var(--surface-card)',
        border: d.img || d.photo ? 0 : '2px dashed var(--border-strong)'
      }
    }, d.img ? /*#__PURE__*/React.createElement("img", {
      src: d.img,
      alt: "",
      style: IMG
    }) : d.photo ? /*#__PURE__*/React.createElement(PhotoPlaceholder, {
      iconSize: 36
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "image-plus",
      size: 32,
      style: {
        color: 'var(--ink-400)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '600 16px var(--font-sans)'
      }
    }, "\u0422\u0430\u0493\u0430\u043C \u0441\u0443\u0440\u0435\u0442\u0456"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      icon: "camera",
      onClick: () => camRef.current.click()
    }, "\u041A\u0430\u043C\u0435\u0440\u0430"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: "image",
      onClick: () => galRef.current.click()
    }, "\u0413\u0430\u043B\u0435\u0440\u0435\u044F"))), /*#__PURE__*/React.createElement("input", {
      ref: camRef,
      type: "file",
      accept: "image/*",
      capture: "environment",
      hidden: true,
      onChange: onFile
    }), /*#__PURE__*/React.createElement("input", {
      ref: galRef,
      type: "file",
      accept: "image/*",
      hidden: true,
      onChange: onFile
    }), (d.img || d.photo) && /*#__PURE__*/React.createElement("button", {
      onClick: () => galRef.current.click(),
      className: "qm-btn qm-btn--secondary",
      style: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        background: 'var(--surface-overlay)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "camera",
      size: 18
    }), "\u0410\u0443\u044B\u0441\u0442\u044B\u0440\u0443")), /*#__PURE__*/React.createElement("div", {
      className: "qm-group",
      style: {
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(LangTabs, {
      value: lang,
      onChange: setLang,
      status: status
    }), status[lang] === 'auto' && /*#__PURE__*/React.createElement(Banner, {
      tone: "warning"
    }, "AI \u0430\u0443\u0434\u0430\u0440\u043C\u0430\u0441\u044B. \u0422\u0435\u043A\u0441\u0435\u0440\u0456\u043F, \u049B\u0430\u0436\u0435\u0442 \u0431\u043E\u043B\u0441\u0430 \u0442\u04AF\u0437\u0435\u0442\u0456\u04A3\u0456\u0437."), /*#__PURE__*/React.createElement(TextField, {
      label: 'Атауы · ' + L,
      lang: lang === 'kz' ? 'kk' : lang,
      value: d.name[lang],
      onChange: e => setText('name', e.target.value),
      placeholder: "\u041C\u044B\u0441\u0430\u043B\u044B, \u041F\u0430\u043B\u0430\u0443"
    }), /*#__PURE__*/React.createElement(TextField, {
      label: 'Сипаттамасы · ' + L,
      multiline: true,
      rows: 3,
      lang: lang === 'kz' ? 'kk' : lang,
      value: d.desc[lang],
      onChange: e => setText('desc', e.target.value),
      placeholder: "\u049A\u04B1\u0440\u0430\u043C\u044B 1\u20132 \u0436\u043E\u043B\u0434\u0430"
    }), lang !== source && status[lang] !== 'empty' && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 4px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 14px var(--font-sans)',
        color: 'var(--text-muted)'
      }
    }, "\u0411\u0430\u0441\u0442\u0430\u043F\u049B\u044B \u043C\u04D9\u0442\u0456\u043D: ", source.toUpperCase()), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      icon: "refresh-cw",
      onClick: () => {
        setLangS(source);
        setTimeout(translate, 0);
      },
      style: {
        color: 'var(--accent-ink)',
        paddingRight: 4
      }
    }, "\u049A\u0430\u0439\u0442\u0430 \u0430\u0443\u0434\u0430\u0440\u0443"))), missing.length > 0 && d.name[lang] && /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--surface-inverse)',
        padding: 14,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 14px/1.4 var(--font-sans)',
        color: 'var(--text-on-inverse)'
      }
    }, {
      kz: 'Қазақша',
      ru: 'Орысша',
      en: 'Ағылшынша',
      zh: 'Қытайша'
    }[lang], " \u0442\u043E\u043B\u0442\u044B\u0440\u044B\u043B\u0434\u044B. \u0411\u0430\u0441\u049B\u0430 ", missing.length, " \u0442\u0456\u043B \u04D9\u0437\u0456\u0440\u0433\u0435 \u0431\u043E\u0441."), /*#__PURE__*/React.createElement("button", {
      className: "qm-btn qm-btn--block",
      disabled: busy,
      onClick: translate,
      style: {
        background: 'var(--paper-0)',
        color: 'var(--ink-900)',
        fontSize: 15,
        whiteSpace: 'nowrap',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: busy ? 'loader' : 'languages',
      size: 18
    }), busy ? 'Аударылуда…' : 'Автоаударма: ' + LANGS.filter(l => l !== lang).map(l => l.toUpperCase()).join(' · '))), /*#__PURE__*/React.createElement(ListGroup, {
      inset: true
    }, /*#__PURE__*/React.createElement(SettingRow, {
      title: "\u0411\u0430\u0493\u0430\u0441\u044B",
      control: /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          alignItems: 'baseline',
          gap: 4
        }
      }, /*#__PURE__*/React.createElement("input", {
        inputMode: "numeric",
        placeholder: "0",
        value: fmtPrice(d.price),
        onChange: e => set('price', e.target.value.replace(/\D/g, '')),
        style: rowInput
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          font: '700 22px var(--font-sans)'
        }
      }, "\u20B8"))
    }), /*#__PURE__*/React.createElement(SettingRow, {
      title: "\u0421\u0430\u043D\u0430\u0442\u044B",
      control: /*#__PURE__*/React.createElement(Select, {
        variant: "inline",
        title: "\u0421\u0430\u043D\u0430\u0442",
        value: d.cat,
        onChange: v => set('cat', v),
        options: categories.filter(c => c.id !== 'all').map(c => ({
          value: c.id,
          label: c.kz
        }))
      })
    }), /*#__PURE__*/React.createElement(SettingRow, {
      title: "\u0421\u0430\u043B\u043C\u0430\u0493\u044B / \u043A\u04E9\u043B\u0435\u043C\u0456",
      control: /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("input", {
        inputMode: "numeric",
        placeholder: "\u2014",
        value: d.size,
        onChange: e => set('size', e.target.value.replace(/\D/g, '')),
        style: {
          ...rowInput,
          width: 56,
          font: '600 17px var(--font-sans)'
        }
      }), /*#__PURE__*/React.createElement(Segmented, {
        inline: true,
        value: d.unit,
        onChange: v => set('unit', v),
        options: [{
          value: 'g',
          label: 'г'
        }, {
          value: 'ml',
          label: 'мл'
        }]
      }))
    })), /*#__PURE__*/React.createElement("div", {
      className: "qm-group",
      style: {
        padding: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "qm-field__label",
      style: {
        marginBottom: 10
      }
    }, "\u0411\u0435\u043B\u0433\u0456\u043B\u0435\u0440"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }
    }, TAGS.map(([k, l]) => /*#__PURE__*/React.createElement(Tag, {
      key: k,
      kind: k,
      pressed: d.tags.includes(k),
      onClick: () => set('tags', d.tags.includes(k) ? d.tags.filter(t => t !== k) : [...d.tags, k])
    }, l)))), /*#__PURE__*/React.createElement(ListGroup, {
      inset: true
    }, /*#__PURE__*/React.createElement(SettingRow, {
      title: d.soldOut ? 'Таусылды' : 'Қолжетімді',
      subtitle: d.soldOut ? 'Қонақтар тағамды сұр түсте көреді' : 'Тағам таусылғанда өшіріңіз',
      control: /*#__PURE__*/React.createElement(Switch, {
        checked: !d.soldOut,
        onChange: v => set('soldOut', !v),
        ariaLabel: "\u049A\u043E\u043B\u0436\u0435\u0442\u0456\u043C\u0434\u0456"
      })
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        marginTop: 4,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      block: true,
      disabled: !ok,
      onClick: save
    }, "\u0421\u0430\u049B\u0442\u0430\u0443"), !isNew && /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      block: true,
      onClick: () => setConfirm(true),
      style: {
        color: 'var(--danger)'
      }
    }, "\u0422\u0430\u0493\u0430\u043C\u0434\u044B \u0436\u043E\u044E"))), crop && /*#__PURE__*/React.createElement(CropOverlay, {
      img: pending || d.img,
      onCancel: () => {
        setCrop(false);
        setPending(null);
        galRef.current.click();
      },
      onDone: () => {
        setD(x => ({
          ...x,
          photo: true,
          img: pending || x.img
        }));
        setPending(null);
        setCrop(false);
      }
    }), /*#__PURE__*/React.createElement(Dialog, {
      open: confirm,
      onClose: () => setConfirm(false),
      title: '«' + d.name.kz + '» жойылсын ба?',
      actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "danger",
        size: "lg",
        block: true,
        onClick: () => onDelete(d.id)
      }, "\u0416\u043E\u044E"), /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        block: true,
        onClick: () => {
          setConfirm(false);
          onSave({
            ...d,
            soldOut: true,
            price: Number(d.price) || 0
          });
        }
      }, "\xAB\u0422\u0430\u0443\u0441\u044B\u043B\u0434\u044B\xBB \u0434\u0435\u043F \u0431\u0435\u043B\u0433\u0456\u043B\u0435\u0443"), /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        block: true,
        onClick: () => setConfirm(false)
      }, "\u0411\u043E\u043B\u0434\u044B\u0440\u043C\u0430\u0443"))
    }, "\u0422\u0430\u0493\u0430\u043C \u043C\u04D9\u0437\u0456\u0440\u0434\u0435\u043D \u0431\u0430\u0440\u043B\u044B\u049B \u0442\u0456\u043B\u0434\u0435 \u0436\u043E\u0439\u044B\u043B\u0430\u0434\u044B. \u0415\u0433\u0435\u0440 \u043E\u043B \u0436\u0430\u0439 \u0493\u0430\u043D\u0430 \u0442\u0430\u0443\u0441\u044B\u043B\u0441\u0430, \xAB\u0422\u0430\u0443\u0441\u044B\u043B\u0434\u044B\xBB \u0434\u0435\u043F \u0431\u0435\u043B\u0433\u0456\u043B\u0435\u0433\u0435\u043D \u0434\u04B1\u0440\u044B\u0441."));
  }
  Object.assign(window, {
    DishEdit
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/DishEdit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/OwnerApp.jsx
try { (() => {
(() => {
  const {
    BottomNav,
    Toast
  } = window.QRMenuDesignSystem_af1ea9;
  function OwnerApp({
    persist = false,
    start
  }) {
    const D = window.QM_DATA;
    const ls = (k, d) => persist ? localStorage.getItem(k) ?? d : d;
    const put = (k, v) => persist && localStorage.setItem(k, v);
    const [authed, setAuthedS] = React.useState(() => start ? start !== 'login' : ls('qm-owner-authed', '0') === '1');
    const setAuthed = v => {
      setAuthedS(v);
      put('qm-owner-authed', v ? '1' : '0');
    };
    const [uiLang, setUiLangS] = React.useState(() => ls('qm-owner-lang', 'kz'));
    const setUiLang = l => {
      setUiLangS(l);
      put('qm-owner-lang', l);
    };
    const [tab, setTab] = React.useState(start && start !== 'login' && start !== 'edit' && start !== 'profile' ? start : 'menu');
    const [items, setItems] = React.useState(D.items);
    const [cats, setCats] = React.useState(D.categories.filter(c => c.id !== 'all'));
    const [editing, setEditing] = React.useState(start === 'edit' ? D.items[3] : undefined);
    const [profile, setProfile] = React.useState(start === 'profile');
    const [toast, setToast] = React.useState('');
    const [accent, setAccentS] = React.useState(() => ls('qm-accent', 'terracotta'));
    const setAccent = a => {
      setAccentS(a);
      put('qm-accent', a);
    };
    D.categories = [D.categories[0], ...cats];
    React.useEffect(() => {
      if (persist && window.QM_STORE) window.QM_STORE.save({
        items,
        cats
      });
    }, [items, cats]);
    const preview = () => window.open(window.QM_GUEST_URL || '../guest-menu/index.html', '_blank');
    const save = d => {
      setItems(items.some(i => i.id === d.id) ? items.map(i => i.id === d.id ? d : i) : [...items, d]);
      setEditing(undefined);
      setToast(d.soldOut && editing && !editing.soldOut ? 'Таусылды деп белгіленді' : 'Сақталды');
    };
    const nav = window.NAV_L[uiLang];
    return /*#__PURE__*/React.createElement("div", {
      className: "phone",
      "data-qm-root": "",
      "data-accent": accent,
      "data-screen-label": "Owner"
    }, !authed ? /*#__PURE__*/React.createElement(AdminLogin, {
      uiLang: uiLang,
      setUiLang: setUiLang,
      onDone: () => setAuthed(true)
    }) : /*#__PURE__*/React.createElement(React.Fragment, null, tab === 'menu' && /*#__PURE__*/React.createElement(AdminMenu, {
      items: items,
      setItems: setItems,
      onEdit: setEditing,
      onAdd: () => setEditing(null),
      onPreview: preview
    }), tab === 'cats' && /*#__PURE__*/React.createElement(AdminCategories, {
      cats: cats,
      setCats: setCats,
      items: items,
      setItems: setItems
    }), tab === 'qr' && /*#__PURE__*/React.createElement(AdminQr, null), tab === 'settings' && /*#__PURE__*/React.createElement(AdminSettings, {
      uiLang: uiLang,
      setUiLang: setUiLang,
      onProfile: () => setProfile(true),
      onLogout: () => {
        setAuthed(false);
        setTab('menu');
      }
    }), /*#__PURE__*/React.createElement(BottomNav, {
      value: tab,
      onChange: t => {
        setTab(t);
        setEditing(undefined);
        setProfile(false);
      },
      items: [{
        id: 'menu',
        label: nav[0],
        icon: 'utensils'
      }, {
        id: 'cats',
        label: nav[1],
        icon: 'layout-list'
      }, {
        id: 'qr',
        label: nav[2],
        icon: 'qr-code'
      }, {
        id: 'settings',
        label: nav[3],
        icon: 'settings'
      }]
    }), profile && /*#__PURE__*/React.createElement(AdminProfile, {
      accent: accent,
      setAccent: setAccent,
      onPreview: preview,
      onBack: () => setProfile(false),
      onSaved: () => {
        setProfile(false);
        setToast('Сақталды');
      }
    }), editing !== undefined && /*#__PURE__*/React.createElement(DishEdit, {
      key: editing ? editing.id : 'new',
      item: editing,
      onBack: () => setEditing(undefined),
      onSave: save,
      onDelete: id => {
        setItems(items.filter(i => i.id !== id));
        setEditing(undefined);
        setToast('Тағам жойылды');
      }
    }), /*#__PURE__*/React.createElement(Toast, {
      open: !!toast,
      icon: toast === 'Тағам жойылды' ? 'trash-2' : 'circle-check',
      onDone: () => setToast('')
    }, toast)));
  }
  Object.assign(window, {
    OwnerApp
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/OwnerApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/guest-menu/CafeInfoScreen.jsx
try { (() => {
(() => {
  const {
    AppBar,
    CafeLogo,
    StatusPill,
    Button,
    Icon,
    HoursTable
  } = window.QRMenuDesignSystem_af1ea9;
  function CafeInfoScreen({
    lang,
    closed,
    onBack
  }) {
    const {
      cafe,
      t
    } = window.QM_DATA;
    const s = t[lang];
    const today = 4;
    const block = {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding: 16,
      boxShadow: 'var(--shadow-card)'
    };
    const label = {
      font: '600 14px/1.2 var(--font-sans)',
      color: 'var(--text-muted)',
      margin: '0 0 10px'
    };
    return /*#__PURE__*/React.createElement("div", {
      lang: lang === 'kz' ? 'kk' : lang,
      style: {
        position: 'absolute',
        inset: 0,
        overflowY: 'auto',
        background: 'var(--surface-page)'
      }
    }, /*#__PURE__*/React.createElement(AppBar, {
      title: s.info,
      onBack: onBack
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 16px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(CafeLogo, {
      name: cafe.name,
      size: 64
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '700 24px/1.2 var(--font-sans)'
      }
    }, cafe.name), /*#__PURE__*/React.createElement(StatusPill, {
      open: !closed,
      label: closed ? s.closed : s.open,
      hours: closed ? s.opensAt : cafe.hours
    }))), /*#__PURE__*/React.createElement("div", {
      style: block
    }, /*#__PURE__*/React.createElement("p", {
      style: label
    }, s.address), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start',
        font: '500 16px/1.4 var(--font-sans)',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 20,
      style: {
        color: 'var(--accent)',
        marginTop: 1
      }
    }), cafe.address[lang]), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      block: true,
      icon: "map",
      onClick: () => window.open(cafe.gis, '_blank')
    }, s.open2gis)), /*#__PURE__*/React.createElement("div", {
      style: block
    }, /*#__PURE__*/React.createElement("p", {
      style: label
    }, s.hours), /*#__PURE__*/React.createElement(HoursTable, {
      today: today,
      days: s.days.map((d, i) => ({
        label: d,
        from: i === 6 ? '09:00' : '08:00',
        to: i === 6 ? '22:00' : '23:00',
        todayLabel: s.today
      }))
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      block: true,
      icon: "phone",
      onClick: () => {
        location.href = 'tel:' + cafe.phone.replace(/\s/g, '');
      }
    }, s.call), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => window.open(cafe.whatsapp, '_blank')
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "brand:whatsapp",
      size: 20,
      style: {
        color: '#25D366'
      }
    }), "WhatsApp"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: "instagram",
      onClick: () => window.open(cafe.instagram, '_blank')
    }, "Instagram")))));
  }
  Object.assign(window, {
    CafeInfoScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/guest-menu/CafeInfoScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/guest-menu/ItemSheet.jsx
try { (() => {
(() => {
  const {
    BottomSheet,
    PhotoPlaceholder,
    Price,
    Tag
  } = window.QRMenuDesignSystem_af1ea9;
  function ItemSheet({
    item,
    lang,
    onClose
  }) {
    const [last, setLast] = React.useState(item);
    React.useEffect(() => {
      if (item) setLast(item);
    }, [item]);
    const i = item || last;
    const s = window.QM_DATA.t[lang];
    return /*#__PURE__*/React.createElement(BottomSheet, {
      open: !!item,
      onClose: onClose
    }, i && /*#__PURE__*/React.createElement("div", {
      lang: lang === 'kz' ? 'kk' : lang
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: '4/3',
        filter: i.soldOut ? 'grayscale(1)' : 'none',
        opacity: i.soldOut ? .6 : 1
      }
    }, i.img ? /*#__PURE__*/React.createElement("img", {
      src: i.img,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    }) : /*#__PURE__*/React.createElement(PhotoPlaceholder, {
      icon: i.photo ? 'utensils' : 'image-off',
      iconSize: 40
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '20px 20px 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        font: '700 24px/var(--lh-tight) var(--font-sans)',
        textWrap: 'pretty'
      }
    }, i.name[lang]), (i.tags.length > 0 || i.soldOut) && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 6
      }
    }, i.soldOut && /*#__PURE__*/React.createElement(Tag, {
      kind: "soldout",
      icon: false
    }, s.soldOut), i.tags.map(k => /*#__PURE__*/React.createElement(Tag, {
      key: k,
      kind: k
    }, s[k]))), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        font: '400 16px/var(--lh-body) var(--font-sans)',
        color: 'var(--text-secondary)'
      }
    }, i.desc[lang]), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        marginTop: 8,
        paddingTop: 16,
        borderTop: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 16px var(--font-sans)',
        color: 'var(--text-muted)'
      }
    }, i.size, " ", s[i.unit]), /*#__PURE__*/React.createElement(Price, {
      value: i.price,
      size: 26,
      style: i.soldOut ? {
        color: 'var(--text-muted)'
      } : undefined
    })))));
  }
  Object.assign(window, {
    ItemSheet
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/guest-menu/ItemSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/guest-menu/MenuScreen.jsx
try { (() => {
(() => {
  const {
    CafeHeader,
    Banner,
    EmptyState,
    SectionHeader,
    LangSwitcher,
    CategoryTabs,
    ItemCard,
    Skeleton,
    Icon
  } = window.QRMenuDesignSystem_af1ea9;
  function GuestHeader({
    lang,
    setLang,
    closed,
    onInfo
  }) {
    const {
      cafe,
      t
    } = window.QM_DATA;
    const s = t[lang];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CafeHeader, {
      name: cafe.name,
      cover: cafe.cover || null,
      open: !closed,
      statusLabel: closed ? s.closed : s.open,
      hours: closed ? s.opensAt : cafe.hours,
      onInfo: onInfo,
      trailing: /*#__PURE__*/React.createElement(LangSwitcher, {
        value: lang,
        onChange: setLang
      })
    }), closed && /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '0 16px 12px'
      }
    }, /*#__PURE__*/React.createElement(Banner, {
      tone: "closed"
    }, s.closedNote)));
  }
  function MenuSkeleton() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Skeleton, {
      height: 152,
      radius: 0
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        padding: 16,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Skeleton, {
      width: 52,
      height: 52,
      radius: "var(--radius-md)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Skeleton, {
      width: "55%",
      height: 20
    }), /*#__PURE__*/React.createElement(Skeleton, {
      width: "40%",
      height: 14
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 16,
        padding: '12px 16px',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, [40, 70, 110, 60].map((w, i) => /*#__PURE__*/React.createElement(Skeleton, {
      key: i,
      width: w,
      height: 16
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Skeleton, {
      width: 120,
      height: 22
    }), [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "qm-item",
      style: {
        cursor: 'default'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "qm-item__body",
      style: {
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Skeleton, {
      width: "70%",
      height: 18
    }), /*#__PURE__*/React.createElement(Skeleton, {
      width: "95%",
      height: 12
    }), /*#__PURE__*/React.createElement(Skeleton, {
      width: "60%",
      height: 12
    }), /*#__PURE__*/React.createElement(Skeleton, {
      width: "35%",
      height: 16,
      style: {
        marginTop: 'auto'
      }
    })), /*#__PURE__*/React.createElement(Skeleton, {
      width: 104,
      height: 104,
      radius: "var(--radius-md)"
    })))));
  }
  function MenuScreen({
    lang,
    setLang,
    closed,
    emptyCat,
    onItem,
    onInfo
  }) {
    const {
      categories,
      items,
      t
    } = window.QM_DATA;
    const s = t[lang];
    const [active, setActive] = React.useState('all');
    const scroller = React.useRef(null);
    const tabsRef = React.useRef(null);
    const secs = React.useRef({});
    const sections = categories.filter(c => c.id !== 'all');
    const onScroll = () => {
      const el = scroller.current;
      const tabH = tabsRef.current.offsetHeight;
      let cur = 'all';
      sections.forEach(c => {
        const n = secs.current[c.id];
        if (n && n.offsetTop - tabH - 8 <= el.scrollTop) cur = c.id;
      });
      setActive(cur);
    };
    const go = id => {
      const el = scroller.current;
      const tabH = tabsRef.current.offsetHeight;
      const top = id === 'all' ? tabsRef.current.offsetTop : secs.current[id].offsetTop - tabH;
      el.scrollTo({
        top: Math.max(0, top) + 1,
        behavior: 'smooth'
      });
      setActive(id);
    };
    const tagLabel = k => ({
      kind: k,
      label: s[k]
    });
    return /*#__PURE__*/React.createElement("div", {
      ref: scroller,
      onScroll: onScroll,
      lang: lang === 'kz' ? 'kk' : lang,
      style: {
        position: 'absolute',
        inset: 0,
        overflowY: 'auto',
        background: 'var(--surface-page)'
      }
    }, /*#__PURE__*/React.createElement(GuestHeader, {
      lang: lang,
      setLang: setLang,
      closed: closed,
      onInfo: onInfo
    }), /*#__PURE__*/React.createElement("div", {
      ref: tabsRef,
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 10
      }
    }, /*#__PURE__*/React.createElement(CategoryTabs, {
      value: active,
      onChange: go,
      items: categories.map(c => ({
        id: c.id,
        label: c[lang]
      }))
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '4px 16px 40px'
      }
    }, sections.map(c => {
      const list = emptyCat && c.id === 'salads' ? [] : items.filter(i => i.cat === c.id);
      return /*#__PURE__*/React.createElement("section", {
        key: c.id,
        ref: n => secs.current[c.id] = n,
        style: {
          paddingTop: 20
        }
      }, /*#__PURE__*/React.createElement(SectionHeader, {
        variant: "title"
      }, c[lang]), list.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, {
        title: s.empty
      }) : /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 12
        }
      }, list.map(i => /*#__PURE__*/React.createElement(ItemCard, {
        key: i.id,
        name: i.name[lang],
        description: i.desc[lang],
        price: i.price,
        photo: i.img,
        placeholder: i.photo,
        soldOut: i.soldOut,
        soldOutLabel: s.soldOut,
        tags: i.tags.map(tagLabel),
        onClick: () => onItem(i)
      }))));
    }), /*#__PURE__*/React.createElement("button", {
      onClick: onInfo,
      style: {
        marginTop: 28,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        minHeight: 44,
        border: 0,
        background: 'none',
        color: 'var(--text-muted)',
        font: '500 14px var(--font-sans)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "info",
      size: 18
    }), s.info)));
  }
  Object.assign(window, {
    MenuScreen,
    MenuSkeleton
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/guest-menu/MenuScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/guest-menu/data.js
try { (() => {
window.QM_DATA = {
  cafe: {
    name: 'Жеті Дән',
    cover: (window.QM_BASE || '../../') + 'assets/photos/plov.jpg',
    hours: '08:00–23:00',
    phone: '+7 727 000 00 00',
    gis: 'https://go.2gis.com/uaLr6',
    whatsapp: 'https://wa.me/77000000000',
    whatsappNum: '+7 700 000 00 00',
    instagram: 'https://instagram.com/zheti.dan',
    address: {
      ru: 'пр. Абая, 52, Алматы',
      kz: 'Абай даңғылы, 52, Алматы',
      en: 'Abay Ave 52, Almaty',
      zh: '阿拜大街52号，阿拉木图'
    }
  },
  categories: [{
    id: 'all',
    kz: 'Барлығы',
    ru: 'Все',
    en: 'All',
    zh: '全部'
  }, {
    id: 'drinks',
    kz: 'Сусындар',
    ru: 'Напитки',
    en: 'Drinks',
    zh: '饮品'
  }, {
    id: 'main',
    kz: 'Негізгі тағамдар',
    ru: 'Основные блюда',
    en: 'Main dishes',
    zh: '主菜'
  }, {
    id: 'salads',
    kz: 'Салаттар',
    ru: 'Салаты',
    en: 'Salads',
    zh: '沙拉'
  }, {
    id: 'desserts',
    kz: 'Десерттер',
    ru: 'Десерты',
    en: 'Desserts',
    zh: '甜点'
  }],
  items: [{
    id: 'cap',
    cat: 'drinks',
    price: 1200,
    size: 300,
    unit: 'ml',
    photo: true,
    img: (window.QM_BASE || '../../') + 'assets/photos/cappuccino.jpg',
    tags: [],
    name: {
      kz: 'Капучино',
      ru: 'Капучино',
      en: 'Cappuccino',
      zh: '卡布奇诺'
    },
    desc: {
      kz: 'Эспрессо, сүт, қою көбік',
      ru: 'Эспрессо, молоко, плотная пенка',
      en: 'Espresso, steamed milk, thick foam',
      zh: '浓缩咖啡、蒸奶、绵密奶泡'
    }
  }, {
    id: 'tea',
    cat: 'drinks',
    price: 800,
    size: 500,
    unit: 'ml',
    photo: true,
    img: (window.QM_BASE || '../../') + 'assets/photos/tea-milk.jpg',
    tags: ['veg'],
    name: {
      kz: 'Сүтті шай',
      ru: 'Чай с молоком',
      en: 'Tea with milk',
      zh: '奶茶'
    },
    desc: {
      kz: 'Қаймақ қосылған қара шай',
      ru: 'Чёрный чай по-казахски со сливками',
      en: 'Kazakh-style black tea with cream',
      zh: '哈萨克式红茶配奶油'
    }
  }, {
    id: 'plov',
    cat: 'main',
    price: 2900,
    size: 350,
    unit: 'g',
    photo: true,
    img: (window.QM_BASE || '../../') + 'assets/photos/plov.jpg',
    tags: ['popular'],
    name: {
      kz: 'Палау',
      ru: 'Плов',
      en: 'Plov',
      zh: '抓饭'
    },
    desc: {
      kz: 'Күріш, сиыр еті, сәбіз, ноқат, зира',
      ru: 'Рис, говядина, морковь, нут, зира',
      en: 'Rice, beef, carrot, chickpeas, cumin',
      zh: '米饭、牛肉、胡萝卜、鹰嘴豆、孜然'
    }
  }, {
    id: 'besh',
    cat: 'main',
    price: 4500,
    size: 450,
    unit: 'g',
    photo: true,
    img: (window.QM_BASE || '../../') + 'assets/photos/beshbarmak.jpeg',
    tags: ['popular'],
    name: {
      kz: 'Бешбармақ',
      ru: 'Бешбармак',
      en: 'Beshbarmak',
      zh: '别什巴尔马克'
    },
    desc: {
      kz: 'Қайнатылған ет, үй кеспесі, пияз, сорпа',
      ru: 'Отварное мясо, домашняя лапша, лук, сорпа',
      en: 'Boiled meat, hand-cut noodles, onion, broth',
      zh: '炖肉、手工面片、洋葱、肉汤'
    }
  }, {
    id: 'lag',
    cat: 'main',
    price: 2700,
    size: 400,
    unit: 'g',
    photo: true,
    img: (window.QM_BASE || '../../') + 'assets/photos/lagman.webp',
    tags: ['spicy'],
    soldOut: true,
    name: {
      kz: 'Лағман',
      ru: 'Лагман',
      en: 'Lagman',
      zh: '拌面'
    },
    desc: {
      kz: 'Созылған кеспе, сиыр еті, көкөністер',
      ru: 'Тянутая лапша, говядина, овощи',
      en: 'Hand-pulled noodles, beef, vegetables',
      zh: '手拉面、牛肉、蔬菜'
    }
  }, {
    id: 'shurpa',
    cat: 'main',
    price: 2400,
    size: 400,
    unit: 'ml',
    photo: true,
    img: (window.QM_BASE || '../../') + 'assets/photos/shurpa.jpg',
    tags: ['new'],
    name: {
      kz: 'Сорпа',
      ru: 'Шурпа',
      en: 'Shurpa',
      zh: '羊肉汤'
    },
    desc: {
      kz: 'Қой етінің сорпасы, картоп, бұрыш, көк',
      ru: 'Бульон из баранины, картофель, перец, зелень',
      en: 'Lamb broth, potato, pepper, herbs',
      zh: '羊肉清汤、土豆、甜椒、香草'
    }
  }, {
    id: 'dapanji',
    cat: 'main',
    price: 3800,
    size: 450,
    unit: 'g',
    photo: true,
    img: (window.QM_BASE || '../../') + 'assets/photos/dapanji.jpg',
    tags: ['spicy'],
    name: {
      kz: 'Дапанжи',
      ru: 'Дапанджи с курицей',
      en: 'Dapanji chicken',
      zh: '大盘鸡'
    },
    desc: {
      kz: 'Тауық, бұрыш, ащы бұрыш, жалпақ кеспе',
      ru: 'Курица, болгарский и острый перец, широкая лапша',
      en: 'Chicken, bell and chili peppers, flat noodles',
      zh: '鸡肉、青椒、干辣椒、宽面'
    }
  }, {
    id: 'caesar',
    cat: 'salads',
    price: 2600,
    size: 250,
    unit: 'g',
    photo: true,
    img: (window.QM_BASE || '../../') + 'assets/photos/caesar.jpg',
    tags: [],
    name: {
      kz: 'Цезарь салаты',
      ru: 'Салат «Цезарь»',
      en: 'Caesar salad',
      zh: '凯撒沙拉'
    },
    desc: {
      kz: 'Романо, гриль тауық, пармезан, крутон',
      ru: 'Романо, курица гриль, пармезан, гренки',
      en: 'Romaine, grilled chicken, parmesan, croutons',
      zh: '罗马生菜、烤鸡、帕玛森、面包丁'
    }
  }, {
    id: 'cheese',
    cat: 'desserts',
    price: 1900,
    size: 150,
    unit: 'g',
    photo: true,
    img: (window.QM_BASE || '../../') + 'assets/photos/cheesecake.webp',
    tags: ['new', 'veg'],
    name: {
      kz: 'Чизкейк',
      ru: 'Чизкейк',
      en: 'Cheesecake',
      zh: '芝士蛋糕'
    },
    desc: {
      kz: 'Кілегейлі ірімшік, құмды негіз, жидек тұздығы',
      ru: 'Сливочный сыр, песочная основа, ягодный соус',
      en: 'Cream cheese, shortbread base, berry sauce',
      zh: '奶油奶酪、酥饼底、莓果酱'
    }
  }],
  t: {
    kz: {
      menu: 'Мәзір',
      soldOut: 'Таусылды',
      open: 'Ашық',
      closed: 'Жабық',
      opensAt: '08:00-де ашылады',
      closedNote: 'Қазір жабық. Мәзірді қарауға болады.',
      info: 'Кафе туралы',
      address: 'Мекенжай',
      open2gis: '2GIS-те ашу',
      hours: 'Жұмыс уақыты',
      today: 'бүгін',
      call: 'Қоңырау шалу',
      empty: 'Бұл санатта әзірге тағам жоқ',
      g: 'г',
      ml: 'мл',
      spicy: 'Ащы',
      veg: 'Вегетариандық',
      new: 'Жаңа',
      popular: 'Танымал',
      days: ['Дс', 'Сс', 'Ср', 'Бс', 'Жм', 'Сн', 'Жс']
    },
    ru: {
      menu: 'Меню',
      soldOut: 'Нет в наличии',
      open: 'Открыто',
      closed: 'Закрыто',
      opensAt: 'откроется в 08:00',
      closedNote: 'Сейчас закрыто. Меню можно посмотреть.',
      info: 'О кафе',
      address: 'Адрес',
      open2gis: 'Открыть в 2GIS',
      hours: 'Часы работы',
      today: 'сегодня',
      call: 'Позвонить',
      empty: 'В этой категории пока нет блюд',
      g: 'г',
      ml: 'мл',
      spicy: 'Острое',
      veg: 'Вегетарианское',
      new: 'Новинка',
      popular: 'Популярное',
      days: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
    },
    en: {
      menu: 'Menu',
      soldOut: 'Sold out',
      open: 'Open',
      closed: 'Closed',
      opensAt: 'opens at 08:00',
      closedNote: 'Closed now. You can still browse the menu.',
      info: 'About the café',
      address: 'Address',
      open2gis: 'Open in 2GIS',
      hours: 'Opening hours',
      today: 'today',
      call: 'Call',
      empty: 'No dishes in this category yet',
      g: 'g',
      ml: 'ml',
      spicy: 'Spicy',
      veg: 'Vegetarian',
      new: 'New',
      popular: 'Popular',
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    zh: {
      menu: '菜单',
      soldOut: '已售罄',
      open: '营业中',
      closed: '已打烊',
      opensAt: '08:00 开始营业',
      closedNote: '现已打烊，仍可浏览菜单。',
      info: '餐厅信息',
      address: '地址',
      open2gis: '在 2GIS 中打开',
      hours: '营业时间',
      today: '今天',
      call: '致电',
      empty: '该分类暂无菜品',
      g: '克',
      ml: '毫升',
      spicy: '辣',
      veg: '素食',
      new: '新品',
      popular: '人气',
      days: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/guest-menu/data.js", error: String((e && e.message) || e) }); }

// ui_kits/guest-menu/store.js
try { (() => {
(() => {
  const KEY = 'qm-data-v1';
  const D = window.QM_DATA;
  try {
    const s = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (s) {
      if (s.items) D.items = s.items;
      if (s.cats) D.categories = [D.categories[0], ...s.cats];
      if (s.cafe) D.cafe = {
        ...D.cafe,
        ...s.cafe
      };
    }
  } catch (e) {}
  window.QM_STORE = {
    save(patch) {
      let s = {};
      try {
        s = JSON.parse(localStorage.getItem(KEY) || '{}');
      } catch (e) {}
      const next = {
        ...s,
        ...patch
      };
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
        return true;
      } catch (e) {
        if (next.items) next.items = next.items.map(i => i.img && i.img.startsWith('data:') ? {
          ...i,
          img: undefined
        } : i);
        try {
          localStorage.setItem(KEY, JSON.stringify(next));
        } catch (e2) {}
        return false;
      }
    }
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/guest-menu/store.js", error: String((e && e.message) || e) }); }

__ds_ns.ColorPicker = __ds_scope.ColorPicker;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Fab = __ds_scope.Fab;

__ds_ns.MenuRow = __ds_scope.MenuRow;

__ds_ns.QrCode = __ds_scope.QrCode;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CafeLogo = __ds_scope.CafeLogo;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Price = __ds_scope.Price;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.CodeInput = __ds_scope.CodeInput;

__ds_ns.RadioList = __ds_scope.RadioList;

__ds_ns.Segmented = __ds_scope.Segmented;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.ListGroup = __ds_scope.ListGroup;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.SettingRow = __ds_scope.SettingRow;

__ds_ns.BottomSheet = __ds_scope.BottomSheet;

__ds_ns.CafeHeader = __ds_scope.CafeHeader;

__ds_ns.HoursTable = __ds_scope.HoursTable;

__ds_ns.ItemCard = __ds_scope.ItemCard;

__ds_ns.PhotoPlaceholder = __ds_scope.PhotoPlaceholder;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.AppBar = __ds_scope.AppBar;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.CategoryTabs = __ds_scope.CategoryTabs;

__ds_ns.LangSwitcher = __ds_scope.LangSwitcher;

__ds_ns.LangTabs = __ds_scope.LangTabs;

})();
