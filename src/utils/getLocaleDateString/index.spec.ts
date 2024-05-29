import getLocaleDateString from '.';

describe('getLocaleDateFormat', () => {
  let languageGetter: jest.SpyInstance;

  beforeEach(() => {
    languageGetter = jest.spyOn(window.navigator, 'language', 'get');
  });

  it('returns date string based on locale param', () => {
    expect(getLocaleDateString('es-US')).toEqual('M/d/yyyy');
  });

  it('returns date string based on navigator language', () => {
    languageGetter.mockReturnValue('en-GB');
    expect(getLocaleDateString()).toEqual('dd/MM/yyyy');
  });

  it('returns default date string when navigator locale is not recognised', () => {
    languageGetter.mockReturnValue('lorem');
    expect(getLocaleDateString()).toEqual('dd/MM/yyyy');
  });
});
