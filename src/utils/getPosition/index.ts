export enum Position {
  BOTTOM = 'bottom',
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_RIGHT = 'bottom-right',
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
  TOP_LEFT = 'top-left',
  TOP_RIGHT = 'top-right',
}

interface RectDimensions {
  height: number;
  left: number;
  top: number;
  width: number;
}

const createRect = ({ height, left, top, width }: RectDimensions) => {
  const ceiledLeft = Math.ceil(left);
  const ceiledTop = Math.ceil(top);
  return {
    bottom: ceiledTop + height,
    height,
    left: ceiledLeft,
    right: ceiledLeft + width,
    top: ceiledTop,
    width,
  };
};

const flipHorizontal = (position: Position) => {
  switch (position) {
    case Position.TOP_LEFT:
      return Position.BOTTOM_LEFT;
    case Position.TOP:
    default:
      return Position.BOTTOM;
    case Position.TOP_RIGHT:
      return Position.BOTTOM_RIGHT;
    case Position.BOTTOM_LEFT:
      return Position.TOP_LEFT;
    case Position.BOTTOM:
      return Position.TOP;
    case Position.BOTTOM_RIGHT:
      return Position.TOP_RIGHT;
  }
};

const isOnTop = (position: Position) => {
  switch (position) {
    case Position.TOP_LEFT:
    case Position.TOP:
    case Position.TOP_RIGHT:
      return true;
    default:
      return false;
  }
};

const isAlignedHorizontal = (position: Position) => {
  switch (position) {
    case Position.LEFT:
    case Position.RIGHT:
      return true;
    default:
      return false;
  }
};

const fitsBottom = (
  rect: ReturnType<typeof createRect>,
  viewport: GetPosition['viewport'],
  viewportOffset: number,
) => {
  return rect.bottom < viewport.height - viewportOffset;
};

const fitsTop = (
  rect: ReturnType<typeof createRect>,
  viewportOffset: number,
) => {
  return rect.top > viewportOffset;
};

const fitsRight = (
  rect: ReturnType<typeof createRect>,
  viewport: GetPosition['viewport'],
  viewportOffset: number,
) => {
  return rect.right < viewport.width - viewportOffset;
};

const fitsLeft = (
  rect: ReturnType<typeof createRect>,
  viewportOffset: number,
) => {
  return rect.left > viewportOffset;
};

interface GetTransformOrigin {
  dimensions: GetPosition['dimensions'];
  position: Position;
  rect: ReturnType<typeof createRect>;
  targetCenter: number;
}

function getRect({
  anchorOffset,
  dimensions,
  position,
  targetRect,
}: Omit<GetPosition, 'viewportOffset' | 'viewport'>) {
  const leftRect =
    targetRect.left + targetRect.width / 2 - dimensions.width / 2;

  const alignedTopY = targetRect.top - dimensions.height - anchorOffset;
  const alignedBottomY = targetRect.bottom + anchorOffset;
  const alignedRightX = targetRect.right - dimensions.width;

  const alignedLeftRightY =
    targetRect.top + targetRect.height / 2 - dimensions.height / 2;

  switch (position) {
    case Position.LEFT:
      return createRect({
        ...dimensions,
        left: targetRect.left - dimensions.width - anchorOffset,
        top: alignedLeftRightY,
      });
    case Position.RIGHT:
      return createRect({
        ...dimensions,
        left: targetRect.right + anchorOffset,
        top: alignedLeftRightY,
      });
    case Position.TOP:
      return createRect({ ...dimensions, left: leftRect, top: alignedTopY });
    case Position.TOP_LEFT:
      return createRect({
        ...dimensions,
        left: targetRect.left,
        top: alignedTopY,
      });
    case Position.TOP_RIGHT:
      return createRect({
        ...dimensions,
        left: alignedRightX,
        top: alignedTopY,
      });
    default:
    case Position.BOTTOM:
      return createRect({ ...dimensions, left: leftRect, top: alignedBottomY });
    case Position.BOTTOM_LEFT:
      return createRect({
        ...dimensions,
        left: targetRect.left,
        top: alignedBottomY,
      });
    case Position.BOTTOM_RIGHT:
      return createRect({
        ...dimensions,
        left: alignedRightX,
        top: alignedBottomY,
      });
  }
}

const getTransformOrigin = ({
  dimensions,
  position,
  rect,
  targetCenter,
}: GetTransformOrigin) => {
  const centerY = Math.round(targetCenter - rect.top);

  if (position === Position.LEFT) {
    return `${dimensions.width}px ${centerY}px`;
  }

  if (position === Position.RIGHT) {
    return `0px ${centerY}px`;
  }

  const centerX = Math.round(targetCenter - rect.left);

  if (isOnTop(position)) {
    return `${centerX}px ${dimensions.height}px `;
  }

  return `${centerX}px 0px `;
};

function getFittedPosition({
  anchorOffset,
  dimensions,
  position,
  targetRect,
  viewport,
  viewportOffset = 8,
}: GetPosition) {
  const isHorizontal = isAlignedHorizontal(position);

  // Handle left and right positions
  if (isHorizontal) {
    const leftRect = getRect({
      anchorOffset,
      dimensions,
      position: Position.LEFT,
      targetRect,
    });

    const rightRect = getRect({
      anchorOffset,
      dimensions,
      position: Position.RIGHT,
      targetRect,
    });

    const fitsOnLeft = fitsLeft(leftRect, viewportOffset);
    const fitsOnRight = fitsRight(rightRect, viewport, viewportOffset);

    if (position === Position.LEFT) {
      if (fitsOnLeft) {
        return {
          position,
          rect: leftRect,
        };
      }

      if (fitsOnRight) {
        return {
          position: Position.RIGHT,
          rect: rightRect,
        };
      }
    }

    if (position === Position.RIGHT) {
      if (fitsOnRight) {
        return {
          position,
          rect: rightRect,
        };
      }

      if (fitsOnLeft) {
        return {
          position: Position.LEFT,
          rect: leftRect,
        };
      }
    }

    // Default to using the position with the most space
    const spaceRight = Math.abs(
      viewport.width - viewportOffset - rightRect.right,
    );

    const spaceLeft = Math.abs(leftRect.left - viewportOffset);

    if (spaceRight < spaceLeft) {
      return {
        position: Position.RIGHT,
        rect: rightRect,
      };
    }

    return {
      position: Position.LEFT,
      rect: leftRect,
    };
  }

  const positionisOnTop = isOnTop(position);
  let topRect;
  let bottomRect;

  if (positionisOnTop) {
    topRect = getRect({
      anchorOffset,
      dimensions,
      position,
      targetRect,
    });

    bottomRect = getRect({
      anchorOffset,
      dimensions,
      position: flipHorizontal(position),
      targetRect,
    });
  } else {
    topRect = getRect({
      anchorOffset,
      dimensions,
      position: flipHorizontal(position),
      targetRect,
    });

    bottomRect = getRect({
      anchorOffset,
      dimensions,
      position,
      targetRect,
    });
  }

  const topRectFitsOnTop = fitsTop(topRect, viewportOffset);

  const bottomRectFitsOnBottom = fitsBottom(
    bottomRect,
    viewport,
    viewportOffset,
  );

  if (positionisOnTop) {
    if (topRectFitsOnTop) {
      return {
        position,
        rect: topRect,
      };
    }

    if (bottomRectFitsOnBottom) {
      return {
        position: flipHorizontal(position),
        rect: bottomRect,
      };
    }
  }

  if (!positionisOnTop) {
    if (bottomRectFitsOnBottom) {
      return {
        position,
        rect: bottomRect,
      };
    }

    if (topRectFitsOnTop) {
      return {
        position: flipHorizontal(position),
        rect: topRect,
      };
    }
  }

  const spaceBottom = Math.abs(
    viewport.height - viewportOffset - bottomRect.bottom,
  );

  const spaceTop = Math.abs(topRect.top - viewportOffset);

  if (spaceBottom < spaceTop) {
    return {
      position: positionisOnTop ? flipHorizontal(position) : position,
      rect: bottomRect,
    };
  }

  return {
    position: positionisOnTop ? position : flipHorizontal(position),
    rect: topRect,
  };
}

interface GetPosition {
  anchorOffset: number;
  dimensions: {
    height: number;
    width: number;
  };
  position: Position;
  targetRect: ReturnType<typeof createRect>;
  viewport: {
    height: number;
    width: number;
  };
  viewportOffset: number;
}

export default function getPosition({
  anchorOffset,
  dimensions,
  position,
  targetRect,
  viewport,
  viewportOffset,
}: GetPosition) {
  const { position: finalPosition, rect } = getFittedPosition({
    anchorOffset,
    dimensions,
    position,
    targetRect,
    viewport,
    viewportOffset,
  });

  if (rect.left < viewportOffset) {
    rect.right += Math.ceil(Math.abs(rect.left - viewportOffset));
    rect.left = Math.ceil(viewportOffset);
  }

  if (rect.right > viewport.width - viewportOffset) {
    const delta = Math.ceil(rect.right - (viewport.width - viewportOffset));
    rect.left -= delta;
    rect.right -= delta;
  }

  if (rect.top < viewportOffset) {
    rect.top += Math.ceil(Math.abs(rect.top - viewportOffset));
    rect.bottom = Math.ceil(viewportOffset);
  }

  if (rect.bottom > viewport.height - viewportOffset) {
    const delta = Math.ceil(rect.bottom - (viewport.height - viewportOffset));
    rect.top -= delta;
    rect.bottom -= delta;
  }

  const targetCenter = isAlignedHorizontal(position)
    ? targetRect.top + targetRect.height / 2
    : targetRect.left + targetRect.width / 2;

  const transformOrigin = getTransformOrigin({
    dimensions,
    position: finalPosition,
    rect,
    targetCenter,
  });

  return {
    position: finalPosition,
    rect,
    transformOrigin,
  };
}
