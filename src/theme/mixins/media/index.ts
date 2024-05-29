import breakpoints from '../../breakpoints';

type Above = {
  [key in keyof typeof breakpoints]: string;
};

const above = Object.keys(breakpoints).reduce(
  (accumulator, key) => ({
    ...accumulator,
    [key]: `@media (min-width: ${breakpoints[key]}px)`,
  }),
  {} as Above,
);

type Below = {
  [key in keyof typeof breakpoints]: string;
};

const below = Object.keys(breakpoints).reduce(
  (accumulator, key) => ({
    ...accumulator,
    [key]: `@media (max-width: ${breakpoints[key] - 1}px)`,
  }),
  {} as Below,
);

type Between = {
  [fromKey in keyof typeof breakpoints]: {
    [toKey in keyof typeof breakpoints]: string;
  };
};

const between = Object.keys(breakpoints).reduce(
  (mediaAbove, fromKey) => ({
    ...mediaAbove,
    [fromKey]: Object.keys(breakpoints).reduce((mediaBelow, toKey) => {
      const min = breakpoints[fromKey];
      const max = breakpoints[toKey] - 1;

      return {
        ...mediaBelow,
        [toKey]: `@media (min-width: ${min}px) and (max-width: ${max}px)`,
      };
    }, {}),
  }),
  {} as Between,
);

const hover = '@media (hover: hover) and (pointer: fine)';

export default { above, below, between, hover };
