import {
  ComponentProps,
  ElementRef,
  ElementType,
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  HTMLProps,
  forwardRef as reactForwardRef,
  RefAttributes,
  WeakValidationMap,
} from 'react';

type AsRef<T> = T extends ElementType ? ElementRef<T> : T;

type PropsWithoutChildren<P> = 'children' extends keyof P
  ? Pick<P, Exclude<keyof P, 'children'>>
  : P;

// Use PropsWithoutChildren here since in some cases, we didn't want to allow the children props but the As property's properties were bringing it back
type PropsOf<T> = PropsWithoutChildren<
  T extends ElementType
    ? HTMLProps<AsRef<T>> & ComponentProps<T> & RefAttributes<AsRef<T>>
    : T extends HTMLElement
    ? HTMLProps<T> & RefAttributes<T>
    : never
>;

export type RightJoinProps<
  SourceProps extends Record<string, any> = Record<string, never>,
  OverrideProps extends Record<string, any> = Record<string, never>,
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

export type OmitCommonProps<
  Target,
  OmitAdditionalProps extends keyof any = never,
> = Omit<Target, 'forwardedRef' | OmitAdditionalProps>;

type MergeWithAs<T, P> = RightJoinProps<
  PropsOf<T>,
  OmitCommonProps<P, 'slot'> & {
    /**
     * Default slot override. Added to every seon component
     */
    slot?: string;
  }
>;

export interface OrbitComponent<T, P>
  extends ForwardRefExoticComponent<MergeWithAs<T, P>> {
  defaultProps?: Partial<any>;
  propTypes?: WeakValidationMap<any>;
}

export function forwardRef<P extends Record<string, any>, T = HTMLElement>(
  render: ForwardRefRenderFunction<AsRef<T>, P>,
) {
  return reactForwardRef(render) as unknown as OrbitComponent<T, P>;
}
