/* eslint-disable typescript-sort-keys/interface */
/* eslint-disable sort-keys-fix/sort-keys-fix */
export default {
  none: '0rem',
  xxxSmall: '0.125rem',
  xxSmall: '0.25rem',
  xSmall: '0.5rem',
  small: '0.75rem',
  regular: '1rem',
  large: '1.5rem',
  xLarge: '2rem',
  xxLarge: '3rem',
  xxxLarge: '4rem',
  xxxxLarge: '6rem',
} as const;

export interface ISpace {
  none: string;
  xxxSmall: string;
  xxSmall: string;
  xSmall: string;
  small: string;
  regular: string;
  large: string;
  xLarge: string;
  xxLarge: string;
  xxxLarge: string;
  xxxxLarge: string;
}
