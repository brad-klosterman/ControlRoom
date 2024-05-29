import breakpoints from '../../breakpoints';

import media from './index';

describe('media', () => {
  it('exposes min-width media queries', () => {
    const min = breakpoints.mobile;
    const expected = `@media (min-width: ${min}px)`;
    expect(media.above.mobile).toBe(expected);
  });

  it('exposes max-width media queries', () => {
    const max = breakpoints.desktop - 1;
    const expected = `@media (max-width: ${max}px)`;
    expect(media.below.desktop).toBe(expected);
  });

  it('exposes min-width and max-width media queries', () => {
    const min = breakpoints.tabletPortrait;
    const max = breakpoints.desktopLarge - 1;
    const expected = `@media (min-width: ${min}px) and (max-width: ${max}px)`;
    expect(media.between.tabletPortrait.desktopLarge).toBe(expected);
  });

  it('exposes a hover media query string', () => {
    const expected = '@media (hover: hover) and (pointer: fine)';
    expect(media.hover).toBe(expected);
  });
});
