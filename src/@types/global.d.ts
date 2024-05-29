import Icon from 'components/ui/Icon';

declare global {
  type IconKey = keyof typeof Icon;

  declare const cr_symbol: unique symbol;

  export type CRSymbol<T, TCRSymbol> = T & { [cr_symbol]: TCRSymbol };

  function globalFN(): 'hello global';
}
