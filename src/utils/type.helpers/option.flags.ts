type OptionsFlags<T> = {
  [Property in keyof T]: T[Property] extends 'nav' ? T[Property] : false;
};
