import { MutableRefObject, useLayoutEffect } from 'react';

import { useChainedEventCallback } from './useChainedEventCallback';
import { disposables } from './useDisposables';

interface AbstractAutoFocusOptions {
  delay?: number;
  isDisabled?: boolean;
  onFocus?: (element?: HTMLElement) => void;
}

function useAbstractAutoFocus({
  delay,
  isDisabled,
  onFocus,
}: AbstractAutoFocusOptions) {
  useLayoutEffect(() => {
    const d = disposables();

    if (!isDisabled) {
      if (delay) {
        d.setTimeout(() => {
          onFocus?.();
        }, delay);
      } else {
        d.nextFrame(() => {
          onFocus?.();
        });
      }
    }

    return () => {
      d.dispose();
    };
  }, [isDisabled, delay, onFocus]);
}

interface AutoFocusOptions {
  delay?: number;
  isDisabled?: boolean;
  onFocus?: (element?: HTMLElement) => void;
}

export function useAutoFocus(
  targetRef: MutableRefObject<HTMLInputElement | undefined>,
  { delay, isDisabled, onFocus }: AutoFocusOptions = {},
) {
  useAbstractAutoFocus({
    delay,
    isDisabled,
    onFocus: useChainedEventCallback(
      () => onFocus?.(),
      () => {
        if (
          !targetRef?.current?.hasAttribute('disabled') &&
          !targetRef?.current?.contains(document.activeElement)
        ) {
          targetRef?.current?.focus();
        }
      },
    ),
  });
}
