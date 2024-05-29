import remToPixels from '.';

describe('remToPixel', () => {
  it('converts string rem value === 1', () => {
    const result = remToPixels('1rem');
    const expected = 16;
    expect(result).toBe(expected);
  });

  it('converts string rem value > 1', () => {
    const result = remToPixels('2rem');
    const expected = 32;
    expect(result).toBe(expected);
  });

  it('converts number rem value === 1', () => {
    const result = remToPixels(1);
    const expected = 16;
    expect(result).toBe(expected);
  });

  it('converts number rem value > 1', () => {
    const result = remToPixels(2);
    const expected = 32;
    expect(result).toBe(expected);
  });
});
