import QRCode from 'qrcode';

/*
 * Printable QR stickers drawn on a canvas, so PNG and PDF match the on-screen sticker:
 * café name, QR code, "Мәзір · Меню · Menu · 菜单".
 */
export type QrSize = 'sticker' | 'stand';
const SUBTITLE = 'Мәзір · Меню · Menu · 菜单';
const FONT = '"Onest", "Noto Sans SC", system-ui, sans-serif';

// Sticker 8×8 cm, six per A4. Stand A6 (10.5×14.8 cm), four per A4.
export const SIZES: Record<QrSize, { wMm: number; hMm: number; cols: number; rows: number; px: [number, number] }> = {
  sticker: { wMm: 80, hMm: 80, cols: 2, rows: 3, px: [1200, 1200] },
  stand: { wMm: 105, hMm: 148, cols: 2, rows: 2, px: [1050, 1480] },
};

async function fonts() {
  try { await Promise.all([document.fonts.load(`700 40px ${FONT}`), document.fonts.load(`600 40px ${FONT}`), document.fonts.load(`600 40px "Noto Sans SC"`, '菜单')]); } catch { /* fall back to system fonts */ }
}

function fitText(ctx: CanvasRenderingContext2D, text: string, weight: number, size: number, maxW: number) {
  let s = size;
  do { ctx.font = `${weight} ${s}px ${FONT}`; s -= 2; } while (ctx.measureText(text).width > maxW && s > 12);
}

/** One sticker as a canvas (white card, name, QR, subtitle). */
export async function drawSticker(url: string, name: string, size: QrSize): Promise<HTMLCanvasElement> {
  await fonts();
  const [W, H] = SIZES[size].px;
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#1f1a17'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';

  const qrSide = Math.round(W * 0.68);
  const nameSize = Math.round(W * 0.075), subSize = Math.round(W * 0.05);
  const gap = Math.round(W * 0.05);
  const block = nameSize + gap + qrSide + gap + subSize;
  let y = (H - block) / 2;

  fitText(ctx, name, 700, nameSize, W * 0.86);
  ctx.fillText(name, W / 2, y + nameSize / 2);
  y += nameSize + gap;

  const qr = document.createElement('canvas');
  await QRCode.toCanvas(qr, url, { width: qrSide, margin: 0, errorCorrectionLevel: 'M', color: { dark: '#1f1a17', light: '#ffffff' } });
  ctx.drawImage(qr, (W - qrSide) / 2, y, qrSide, qrSide);
  y += qrSide + gap;

  fitText(ctx, SUBTITLE, 600, subSize, W * 0.9);
  ctx.fillText(SUBTITLE, W / 2, y + subSize / 2);
  return c;
}

const toBlob = (c: HTMLCanvasElement) => new Promise<Blob>((res, rej) => c.toBlob(b => (b ? res(b) : rej(new Error('PNG failed'))), 'image/png'));

export async function stickerPng(url: string, name: string, size: QrSize): Promise<File> {
  return new File([await toBlob(await drawSticker(url, name, size))], `${slug(name)}-qr-${size}.png`, { type: 'image/png' });
}

/** A4 sheet with the stickers laid out in a grid and dashed cut lines. */
export async function stickerPdf(url: string, name: string, size: QrSize): Promise<File> {
  const [{ jsPDF }, canvas] = await Promise.all([import('jspdf'), drawSticker(url, name, size)]);
  const s = SIZES[size];
  const doc = new jsPDF({ unit: 'mm', format: 'a4', compress: true });
  const img = canvas.toDataURL('image/png');
  const gx = (210 - s.cols * s.wMm) / (s.cols + 1), gy = (297 - s.rows * s.hMm) / (s.rows + 1);
  doc.setDrawColor(190); doc.setLineWidth(0.2); doc.setLineDashPattern([2, 2], 0);
  for (let r = 0; r < s.rows; r++) for (let col = 0; col < s.cols; col++) {
    const x = gx + col * (s.wMm + gx), y = gy + r * (s.hMm + gy);
    doc.addImage(img, 'PNG', x, y, s.wMm, s.hMm, 'sticker', 'FAST'); // same alias = embedded once
    doc.rect(x, y, s.wMm, s.hMm);
  }
  return new File([doc.output('blob')], `${slug(name)}-qr-${size}.pdf`, { type: 'application/pdf' });
}

// ASCII file names: some phones and browsers mangle Cyrillic ones.
const slug = (s: string) => s.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'menu';

/** Phone: share sheet (Save to Photos/Files, print, send). Desktop: normal download. */
export async function deliver(file: File) {
  const nav = navigator as Navigator & { canShare?: (d: ShareData) => boolean };
  if (matchMedia('(pointer: coarse)').matches && nav.canShare?.({ files: [file] })) {
    try { await nav.share({ files: [file], title: file.name }); return; } catch (e) { if ((e as Error).name === 'AbortError') return; }
  }
  const a = document.createElement('a');
  a.href = URL.createObjectURL(file); a.download = file.name;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 10_000);
}
