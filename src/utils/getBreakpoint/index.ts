import breakpoints from '../../theme/breakpoints';

export default function getBreakpoint(width: number) {
  const names = Object.keys(breakpoints) as (keyof typeof breakpoints)[];
  const sortedNames = names.sort((a, b) => breakpoints[b] - breakpoints[a]);
  let matchedBreakpoint: keyof typeof breakpoints | undefined;

  sortedNames.some(sortedName => {
    const validBreakpoint = width >= breakpoints[sortedName];
    if (validBreakpoint) matchedBreakpoint = sortedName;
    return validBreakpoint;
  });

  return matchedBreakpoint || sortedNames[sortedNames.length - 1];
}
