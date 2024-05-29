// BK EDIT
/* eslint-disable no-param-reassign */
import { RefObject, useCallback, useEffect, useReducer } from 'react';

import {
  isNil,
  useCommittedRef,
  useDisposables,
  useIsInitialRender,
} from 'auxiliary';

import { match } from './match';

enum ActionType {
  completeTransition = 'CompleteTransition',
  slideDown = 'SlideDown',
  slideUp = 'SlideUp',
}

enum TransitionState {
  completed = 'Completed',
  transitioning = 'Transitioning',
}

enum SlidingDirection {
  down = 'Down',
  up = 'Up',
}

interface SlidingTransitionState {
  direction: SlidingDirection;
  transitionState: TransitionState;
}

function reducer(state: SlidingTransitionState, action: ActionType) {
  return match<ActionType, SlidingTransitionState>(action, {
    [ActionType.slideDown]: () => ({
      direction: SlidingDirection.down,
      transitionState: TransitionState.transitioning,
    }),
    [ActionType.slideUp]: () => ({
      direction: SlidingDirection.up,
      transitionState: TransitionState.transitioning,
    }),
    [ActionType.completeTransition]: () => ({
      direction: state.direction,
      transitionState: TransitionState.completed,
    }),
  });
}

interface SlidingTransition {
  transitionClasses: string;
  transitionProps: {
    onTransitionEnd?: () => void;
  };
}

// For a better understanding of the techniques behind this animation, read https://css-tricks.com/using-css-transitions-auto-dimensions/#technique-3-javascript
// and have a look at https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Collapse.tsx
export function useSlidingTransition(
  isOpen: boolean | null | undefined,
  ref: RefObject<any>,
  collapsed_height = '0px',
): SlidingTransition {
  const [{ direction, transitionState }, dispatch] = useReducer(reducer, {
    direction: isOpen ? SlidingDirection.down : SlidingDirection.up,
    transitionState: TransitionState.completed,
  });

  const disposables = useDisposables();

  const slideDown = useCallback(() => {
    dispatch(ActionType.slideDown);
  }, [dispatch]);

  const slideUp = useCallback(() => {
    dispatch(ActionType.slideUp);
  }, [dispatch]);

  const completeTransition = useCallback(() => {
    dispatch(ActionType.completeTransition);
  }, [dispatch]);

  const isInitialRender = useCommittedRef(useIsInitialRender());

  useEffect(() => {
    if (!isInitialRender.current) {
      if (isOpen) {
        slideDown();
      } else {
        slideUp();
      }
    }
  }, [isOpen, isInitialRender, slideDown, slideUp]);

  useEffect(() => {
    match(transitionState, {
      [TransitionState.transitioning]: () => {
        match(direction, {
          [SlidingDirection.down]: () => {
            disposables.nextFrame(() => {
              if (!isNil(ref.current)) {
                ref.current.style.height = collapsed_height;
                // ref.current.style.opacity = '0';

                disposables.nextFrame(() => {
                  if (!isNil(ref.current)) {
                    ref.current.style.height = `${ref.current.scrollHeight}px`;
                    // ref.current.style.opacity = '1';
                  }
                });
              }
            });
          },
          [SlidingDirection.up]: () => {
            disposables.nextFrame(() => {
              if (!isNil(ref.current)) {
                ref.current.style.height = `${ref.current.scrollHeight}px`;

                disposables.nextFrame(() => {
                  if (!isNil(ref.current)) {
                    ref.current.style.height = collapsed_height;
                    // ref.current.style.opacity = '0';
                  }
                });
              }
            });
          },
        });
      },
      [TransitionState.completed]: () => {
        disposables.nextFrame(() => {
          if (!isNil(ref.current)) {
            ref.current.style.height = null;
          }
        });
      },
    });
  }, [transitionState, direction, disposables, ref]);

  return match(transitionState, {
    [TransitionState.transitioning]: () => ({
      transitionClasses:
        direction === SlidingDirection.down
          ? 'expanding seon-ui-slide-down'
          : 'collapsing seon-ui-slide-up',
      transitionProps: { onTransitionEnd: completeTransition },
    }),
    [TransitionState.completed]: () => ({
      transitionClasses:
        direction === SlidingDirection.down ? 'expanded' : 'collapsed',
      transitionProps: {},
    }),
  });
}
