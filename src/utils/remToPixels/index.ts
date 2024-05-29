import typography from '../../theme/typography';

export default function remToPixels(rem: number | string) {
  const fontSize = parseInt(typography.baseFontSize.replace('px', ''), 10);
  const remInt = parseFloat(`${rem}`.replace('rem', ''));
  return remInt * fontSize;
}
