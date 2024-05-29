import { AnimatePresence, motion } from 'framer-motion';
import {
  memo,
  ReactNode,
  Ref,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  useClickOutside,
  useCombinedRefs,
  useDebounce,
  usePrevious,
} from 'hooks';
import styled, { css, Theme, useTheme } from 'styled-components';
import { getPosition, Position, remToPixels } from 'utils';

import Portal from '../Portal';

interface PositionDetails {
  isVisible?: boolean;
  ref: Ref<HTMLDivElement>;
  setIsVisible(prop: boolean): void;
}

export interface PositionerProps {
  anchorOffset?: keyof Theme['space'];
  animationDuration?: number;
  bodyOffset?: keyof Theme['space'];
  children: ReactNode;
  content(details: PositionDetails): ReactNode;
  fluid?: boolean;
  onDestroy?(): void;
  onMount?(): void;
  position?: Position;
  onHover?: boolean;
  zIndex?: number;
}

const nada = () => {};

const Transition = motion.div;

export const Wrapper = styled.div<{ fluid: boolean }>(
  ({ fluid }) => css`
    display: inline-block;
    width: ${fluid ? '100%' : 'auto'};
  `,
);

const initialDimensions = {
  height: 0,
  left: 0,
  top: 0,
  transformOrigin: '',
  width: 0,
};

const Positioner = memo(
  ({
    anchorOffset = 'xSmall',
    bodyOffset = anchorOffset,
    children,
    content,
    position = Position.BOTTOM,
    zIndex = 5,
    onDestroy = nada,
    onMount = nada,
    animationDuration = 200,
    onHover = false,
    fluid = true,
  }: PositionerProps) => {
    const [dimensions, setDimensions] = useState(initialDimensions);
    const [isVisible, setIsVisible] = useState(false);
    const [layout, setLayout] = useState(false);
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const previousDimensions = usePrevious(dimensions, initialDimensions);
    const [timer, setTimer] = useState<undefined | number>(undefined);

    const latestAnimationFrame = useRef<number>();
    const transitionState = useRef<'entered' | 'destroyed'>('destroyed');
    const wrapperRef = useRef<HTMLDivElement>(null);
    const positionerRef = useRef<HTMLDivElement>(null);
    const getRef = useCombinedRefs<HTMLDivElement>(positionerRef);

    const theme = useTheme();
    const offset = remToPixels(theme.space[anchorOffset]);
    const viewportOffset = remToPixels(theme.space[bodyOffset]);

    const update = useCallback(
      (prevHeight = 0, prevWidth = 0) => {
        if (isVisible && wrapperRef.current && positionerRef.current) {
          const targetRect = wrapperRef.current.getBoundingClientRect();

          const hasEntered =
            positionerRef.current.getAttribute('data-state') === 'entered';

          const viewportHeight = document.documentElement.clientHeight;
          const viewportWidth = document.documentElement.clientWidth;
          let height;
          let width;

          if (hasEntered) {
            const positionerRect =
              positionerRef.current.getBoundingClientRect();

            height = Math.round(positionerRect.height);
            width = Math.round(positionerRect.width);
          } else {
            height = Math.max(positionerRef.current.offsetHeight, prevHeight);
            width = Math.max(positionerRef.current.offsetWidth, prevWidth);
          }

          const { rect, transformOrigin } = getPosition({
            anchorOffset: offset,
            dimensions: {
              height,
              width,
            },
            position,
            targetRect,
            viewport: {
              height: viewportHeight,
              width: viewportWidth,
            },
            viewportOffset,
          });

          setDimensions({
            height,
            left: rect.left,
            top: rect.top,
            transformOrigin,
            width,
          });
        }
      },
      [isVisible, positionerRef, position, offset, viewportOffset],
    );

    const open = () => {
      if (!isVisible) {
        setIsVisible(true);
        onMount();
      }
    };

    const close = () => {
      setIsVisible(false);
    };

    const toggle = useCallback(() => {
      return isVisible ? close() : open();
    }, [isVisible, close, open]);

    const onEsc = useCallback(
      (event: any) => {
        return event.key === 'Escape' ? close() : undefined;
      },
      [close],
    );

    const updateSize = useCallback(() => {
      if (isVisible) {
        setWindowSize(window.innerWidth);
      }
    }, [isVisible]);

    useDebounce(update, 200, [windowSize]);

    useClickOutside(
      () => {
        close();
      },
      [positionerRef, wrapperRef],
      isVisible,
    );

    useEffect(() => {
      if (isVisible) {
        window.addEventListener('resize', updateSize);
      } else {
        window.removeEventListener('resize', updateSize);
      }

      return () => {
        window.removeEventListener('resize', updateSize);
      };
    }, [isVisible, onEsc, updateSize]);

    const destroy = useCallback(() => {
      transitionState.current = 'destroyed';
      setDimensions(initialDimensions);
      onDestroy();
    }, [onDestroy]);

    const enter = useCallback(() => {
      transitionState.current = 'entered';
      update();
    }, [update]);

    // Call `update` whenever the component is "entering" and dimensions change
    useEffect(() => {
      if (transitionState.current === 'entered') {
        latestAnimationFrame.current = requestAnimationFrame(() => {
          update(previousDimensions.height, previousDimensions.width);
        });
      }

      return () => {
        if (latestAnimationFrame.current) {
          cancelAnimationFrame(latestAnimationFrame.current);
        }
      };
    }, [previousDimensions.height, previousDimensions.width, update]);

    const contentToRender = useMemo(() => {
      return content({
        isVisible,
        ref: getRef,
        setIsVisible,
      });
    }, [content, getRef, isVisible]);

    useLayoutEffect(() => {
      if (!isVisible) {
        destroy();
      }
    }, [destroy, isVisible]);

    // useLayoutEffect(() => {
    //   if (onHover) {
    //     if (isVisible && timer == undefined) {
    //       close();
    //     }
    //
    //     if (timer !== undefined && timer > 0) {
    //       setTimeout(() => {
    //         setTimer(prev => (prev ? prev - 1 : 0));
    //       }, 500);
    //     } else if (timer == 0) {
    //       open();
    //     }
    //   }
    // }, [timer, isVisible]);

    const mouseEnter = () => {
      if (onHover) {
        open();
        //setTimer(2);
      }
    };

    const mouseLeave = () => {
      if (onHover) {
        //setTimer(undefined);
        close();
      }
    };

    return (
      <>
        <Wrapper
          fluid={fluid}
          onClick={toggle}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          ref={wrapperRef}
        >
          {children}
        </Wrapper>

        <AnimatePresence>
          {isVisible && (
            <Portal>
              <Transition
                animate={isVisible ? 'in' : 'out'}
                exit="out"
                initial="out"
                layout={layout}
                onAnimationComplete={() => setLayout(!layout)}
                onAnimationStart={enter}
                style={{
                  left: dimensions.left,
                  position: 'absolute',
                  top: dimensions.top + document.documentElement.scrollTop,
                  transformOrigin: dimensions.transformOrigin,
                }}
                transition={{ transition: { duration: animationDuration } }}
                variants={{
                  in: {
                    opacity: 1,
                    scale: 1,
                    zIndex,
                  },
                  out: {
                    opacity: 0,
                    scale: 0.95,
                    zIndex: 0,
                  },
                }}
              >
                {contentToRender}
              </Transition>
            </Portal>
          )}
        </AnimatePresence>
      </>
    );
  },
);

export default Positioner;
