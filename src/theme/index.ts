import animation from './animation';
import breakpoints from './breakpoints';
import buildColors from './colors/buildColors';
import space from './space';
import typography from './typography';
import zIndex from './zIndex';

export default function theme(...options: Parameters<typeof buildColors>) {
  const colors = buildColors(...options);
  return { animation, breakpoints, colors, space, typography, zIndex };
}
