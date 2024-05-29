import { ComponentProps, ElementType, ForwardedRef } from 'react';

import { cssModule, forwardRef } from 'auxiliary';
// import './styles/Image.css';

export interface InnerImageProps {
  /**
   * A text description of the image.
   */
  alt: string;
  /**
   * An HTML element type or a custom React element type to render as.
   */
  as?: ElementType;
  /**
   * How the image should be resized to fit its container. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).
   */
  fit?: 'contain' | 'cover' | 'fill' | 'scale-down' | 'none';
  /**
   * @ignore
   */
  forwardedRef: ForwardedRef<any>;
  /**
   * @ignore
   */
  height?: number | string;
  /**
   * The alignment of the image within it's box. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position).
   */
  position?: string;
  /**
   * The image shape.
   */
  shape?: 'rounded' | 'circular';
  /**
   * Width and height in a single value.
   */
  size?: number | string;
  /**
   * The path to the image.
   */
  src: string;
  /**
   * @ignore
   */
  width?: number | string;
}

export function InnerImage({
  as: As = 'img',
  fit,
  forwardedRef,
  height,
  position,
  shape,
  size,
  width,
  ...rest
}: InnerImageProps) {
  return (
    <As
      {...{
        ...rest,
        className: cssModule('seon-ui-image', shape),
        height: height ?? size,
        ref: forwardedRef,
        style: {
          objectFit: fit,
          objectPosition: position,
        },
        width: width ?? size,
      }}
    />
  );
}

export const Image = forwardRef<InnerImageProps>((props, ref) => (
  <InnerImage {...props} forwardedRef={ref} />
));

export type ImageProps = ComponentProps<typeof Image>;

Image.displayName = 'Image';
