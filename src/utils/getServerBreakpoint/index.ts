import UAParser from 'ua-parser-js';

import type { DefaultTheme } from 'styled-components';

export default function getServerBreakpoint(): keyof DefaultTheme['breakpoints'] {
  const parser = new UAParser();
  const { type } = parser.getDevice();

  if (type === 'mobile') return 'mobile';
  if (type === 'tablet') return 'tabletPortrait';
  return 'desktop';
}
