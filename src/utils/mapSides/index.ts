import space from '../../theme/space';

type Side = 'vertical' | 'horizontal' | 'top' | 'bottom' | 'left' | 'right';
type SpaceKey = keyof typeof space;
type Options = { [key in Side]?: SpaceKey };

const getSideValue = (side?: SpaceKey) => {
  return side ? space[side] : 0;
};

export default function mapSides(options: SpaceKey | Options) {
  if (typeof options === 'string') return space[options];

  const top = getSideValue(options.top || options.vertical);
  const right = getSideValue(options.right || options.horizontal);
  const bottom = getSideValue(options.bottom || options.vertical);
  const left = getSideValue(options.left || options.horizontal);

  return `${top} ${right} ${bottom} ${left}`;
}
