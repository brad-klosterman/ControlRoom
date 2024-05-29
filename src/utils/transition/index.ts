import type { PropertiesHyphen } from 'csstype';

import animation from 'theme/animation';

type PropertyName = keyof PropertiesHyphen;
type DuationMultiple = number;
type DelayMultiple = number;
type TimingFunction = (typeof animation.easing)[keyof typeof animation.easing];

type PropertyGroup = [
  PropertyName,
  DuationMultiple?,
  DelayMultiple?,
  TimingFunction?,
];

export default function transition(
  ...properties: (PropertyName | PropertyGroup)[]
): string {
  const values = properties.map(property => {
    const propertyGroup: PropertyGroup =
      typeof property === 'string' ? [property] : property;

    const [
      propertyName,
      durationMultiple = 1,
      delayMultiple = 0,
      timingFunction = animation.easing.outQuad,
    ] = propertyGroup;

    const duration = `${durationMultiple * animation.duration}s`;
    const delay = `${delayMultiple * animation.duration}s`;
    return `${propertyName} ${duration} ${timingFunction} ${delay}`;
  });

  return values.join(', ');
}
