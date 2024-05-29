import {
  Children,
  cloneElement,
  FC,
  isValidElement,
  KeyboardEvent,
  ReactElement,
  useCallback,
  useEffect,
} from 'react';

export enum Keys {
  _8 = 'onBackspace',
  _9 = 'onTab',
  _13 = 'onEnter',
  _16 = 'onShift',
  _27 = 'onEsc',
  _32 = 'onSpace',
  _37 = 'onLeft',
  _38 = 'onUp',
  _39 = 'onRight',
  _40 = 'onDown',
  _188 = 'onComma',
}

export type KeyboardType = (
  event: KeyboardEvent<HTMLElement>,
  ...rest: any
) => void;

export interface KeyboardProps {
  children: ReactElement;
  onBackspace?: KeyboardType;
  onComma?: KeyboardType;
  onDown?: KeyboardType;
  onEnter?: KeyboardType;
  onEsc?: KeyboardType;
  onKeyDown?: KeyboardType;
  onLeft?: KeyboardType;
  onRight?: KeyboardType;
  onShift?: KeyboardType;
  onSpace?: KeyboardType;
  onTab?: KeyboardType;
  onUp?: KeyboardType;
  target?: 'component' | 'document';
}

const Keyboard: FC<KeyboardProps> = ({
  children,
  onKeyDown,
  target,
  ...props
}) => {
  const onKeyDownHandler = useCallback(
    (event: any, ...rest: any) => {
      const key = `_${
        event.keyCode ? event.keyCode : event.which
      }` as keyof typeof Keys;

      const callbackName = Keys[key];

      if (callbackName && props[callbackName]) {
        const cb = props[callbackName];
        if (cb) cb(event, ...rest);
      }

      if (onKeyDown) {
        onKeyDown(event, ...rest);
      }
    },
    [onKeyDown, props],
  );

  useEffect(() => {
    if (target === 'document') {
      document.addEventListener('keydown', onKeyDownHandler);
    }

    return () => {
      if (target === 'document') {
        document.removeEventListener('keydown', onKeyDownHandler);
      }
    };
  }, [onKeyDownHandler, target]);

  const child = Children.only(children) as ReactElement<KeyboardProps>;

  return target === 'document' || !isValidElement(child)
    ? (children as ReactElement<any>)
    : cloneElement(child, {
        onKeyDown: onKeyDownHandler,
      });
};

export default Keyboard;
