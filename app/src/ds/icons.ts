// Only the glyphs the app uses are bundled (small SVGs inline as data URIs).
// Lucide 0.460 matches the design system; brand logos come from Simple Icons with a `brand:` prefix.
const lucide = import.meta.glob(
  '/node_modules/lucide-static/icons/{arrow-up-right,camera,check,chevron-down,chevron-left,chevron-right,circle-alert,circle-check,clock,copy,file-down,flame,globe,grip-vertical,image,image-down,image-off,image-plus,info,instagram,languages,layout-list,leaf,link,loader,log-out,map,map-pin,move,phone,plus,qr-code,refresh-cw,search,search-x,settings,smartphone,sparkles,star,trash-2,upload,utensils,utensils-crossed,x}.svg',
  { query: '?url', import: 'default', eager: true },
) as Record<string, string>;
const brands = import.meta.glob('/node_modules/simple-icons/icons/{whatsapp}.svg', {
  query: '?url', import: 'default', eager: true,
}) as Record<string, string>;

export function iconUrl(name: string): string | undefined {
  return name.startsWith('brand:')
    ? brands[`/node_modules/simple-icons/icons/${name.slice(6)}.svg`]
    : lucide[`/node_modules/lucide-static/icons/${name}.svg`];
}
