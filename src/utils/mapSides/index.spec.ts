import space from '../../theme/space';

import mapSides from '.';

describe('mapSides', () => {
  it('formats CSS for combined sides', () => {
    const result = mapSides('regular');
    expect(result).toBe(space.regular);
  });

  it('formats CSS for vertical sides', () => {
    const result = mapSides({ vertical: 'regular' });
    const expected = `${space.regular} 0 ${space.regular} 0`;
    expect(result).toBe(expected);
  });

  it('formats CSS for horizontal sides', () => {
    const result = mapSides({ horizontal: 'small' });
    const expected = `0 ${space.small} 0 ${space.small}`;
    expect(result).toBe(expected);
  });

  it('formats CSS for 4 unique sides', () => {
    const result = mapSides({
      bottom: 'xxxSmall',
      left: 'xxSmall',
      right: 'xSmall',
      top: 'small',
    });

    const expected = `${space.small} ${space.xSmall} ${space.xxxSmall} ${space.xxSmall}`;
    expect(result).toBe(expected);
  });
});
