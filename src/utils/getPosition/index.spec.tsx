import getPosition, { Position } from '.';

const defaultDimensions = {
  height: 100,
  width: 100,
};

const dimensions = (overrides?: Pick<typeof defaultDimensions, any>) => ({
  ...defaultDimensions,
  ...overrides,
});

const defaultRect = {
  bottom: 150 - 30,
  height: 30,
  left: 250,
  right: 200,
  top: 150,
  width: 50,
  x: 250,
  y: 150,
};

const targetRect = (overrides?: Pick<typeof defaultDimensions, any>) => ({
  ...defaultRect,
  ...overrides,
});

const anchorOffset = 6;

const viewport = (overrides?: Pick<typeof defaultDimensions, any>) => ({
  height: 250,
  width: 850,
  ...overrides,
});

describe('getPosition', () => {
  it('Should render positioned left', () => {
    const result = getPosition({
      anchorOffset,
      dimensions: dimensions(),
      position: Position.LEFT,
      targetRect: targetRect(),
      viewport: viewport(),
      viewportOffset: 0,
    });

    const expected = {
      position: 'left',
      rect: {
        bottom: 215,
        height: 100,
        left: 144,
        right: 244,
        top: 115,
        width: 100,
      },
      transformOrigin: '100px 50px',
    };

    expect(result).toEqual(expected);
  });

  it('Should render positioned right', () => {
    const result = getPosition({
      anchorOffset,
      dimensions: dimensions(),
      position: Position.RIGHT,
      targetRect: targetRect(),
      viewport: viewport(),
      viewportOffset: 0,
    });

    const expected = {
      position: 'right',
      rect: {
        bottom: 215,
        height: 100,
        left: 206,
        right: 306,
        top: 115,
        width: 100,
      },
      transformOrigin: '0px 50px',
    };

    expect(result).toEqual(expected);
  });

  it('Should render positioned bottom', () => {
    const result = getPosition({
      anchorOffset,
      dimensions: dimensions(),
      position: Position.BOTTOM,
      targetRect: targetRect(),
      viewport: viewport(),
      viewportOffset: 0,
    });

    const expected = {
      position: 'bottom',
      rect: {
        bottom: 226,
        height: 100,
        left: 225,
        right: 325,
        top: 126,
        width: 100,
      },
      transformOrigin: '50px 0px ',
    };

    expect(result).toEqual(expected);
  });

  it('Should render positioned bottom left', () => {
    const result = getPosition({
      anchorOffset,
      dimensions: dimensions(),
      position: Position.BOTTOM_LEFT,
      targetRect: targetRect(),
      viewport: viewport(),
      viewportOffset: 0,
    });

    const expected = {
      position: 'bottom-left',
      rect: {
        bottom: 226,
        height: 100,
        left: 250,
        right: 350,
        top: 126,
        width: 100,
      },
      transformOrigin: '25px 0px ',
    };

    expect(result).toEqual(expected);
  });

  it('Should render positioned bottom right', () => {
    const result = getPosition({
      anchorOffset,
      dimensions: dimensions(),
      position: Position.BOTTOM_RIGHT,
      targetRect: targetRect(),
      viewport: viewport(),
      viewportOffset: 0,
    });

    const expected = {
      position: 'bottom-right',
      rect: {
        bottom: 226,
        height: 100,
        left: 100,
        right: 200,
        top: 126,
        width: 100,
      },
      transformOrigin: '175px 0px ',
    };

    expect(result).toEqual(expected);
  });

  it('Should render positioned top', () => {
    const result = getPosition({
      anchorOffset,
      dimensions: dimensions(),
      position: Position.TOP,
      targetRect: targetRect(),
      viewport: viewport(),

      viewportOffset: 0,
    });

    const expected = {
      position: 'top',
      rect: {
        bottom: 144,
        height: 100,
        left: 225,
        right: 325,
        top: 44,
        width: 100,
      },
      transformOrigin: '50px 100px ',
    };

    expect(result).toEqual(expected);
  });

  it('Should render positioned top left', () => {
    const result = getPosition({
      anchorOffset,
      dimensions: dimensions(),
      position: Position.TOP_LEFT,
      targetRect: targetRect(),
      viewport: viewport(),
      viewportOffset: 0,
    });

    const expected = {
      position: 'top-left',
      rect: {
        bottom: 144,
        height: 100,
        left: 250,
        right: 350,
        top: 44,
        width: 100,
      },
      transformOrigin: '25px 100px ',
    };

    expect(result).toEqual(expected);
  });

  it('Should render positioned top right', () => {
    const result = getPosition({
      anchorOffset,
      dimensions: dimensions(),
      position: Position.TOP_RIGHT,
      targetRect: targetRect(),
      viewport: viewport(),
      viewportOffset: 0,
    });

    const expected = {
      position: 'top-right',
      rect: {
        bottom: 144,
        height: 100,
        left: 100,
        right: 200,
        top: 44,
        width: 100,
      },
      transformOrigin: '175px 100px ',
    };

    expect(result).toEqual(expected);
  });

  it('Left position repositions to the right', () => {
    const result = getPosition({
      anchorOffset,
      dimensions: dimensions({ width: 350 }),
      position: Position.LEFT,
      targetRect: targetRect(),
      viewport: viewport(),
      viewportOffset: 0,
    });

    const expected = {
      position: 'right',
      rect: {
        bottom: 215,
        height: 100,
        left: 206,
        right: 556,
        top: 115,
        width: 350,
      },
      transformOrigin: '0px 50px',
    };

    expect(result).toEqual(expected);
  });

  it('Right position repositions to the left', () => {
    const result = getPosition({
      anchorOffset,
      dimensions: dimensions({ width: 250 }),
      position: Position.RIGHT,
      targetRect: targetRect({ left: 800, right: 850, x: 800 }),
      viewport: viewport(),
      viewportOffset: 0,
    });

    const expected = {
      position: 'left',
      rect: {
        bottom: 215,
        height: 100,
        left: 544,
        right: 794,
        top: 115,
        width: 250,
      },
      transformOrigin: '250px 50px',
    };

    expect(result).toEqual(expected);
  });

  it('Top position repositions to the bottom', () => {
    const result = getPosition({
      anchorOffset,
      dimensions: dimensions({ height: 250 }),
      position: Position.TOP,
      targetRect: targetRect({ top: 20, y: 20 }),
      viewport: viewport(),
      viewportOffset: 0,
    });

    const expected = {
      position: 'bottom',
      rect: {
        bottom: 250,
        height: 250,
        left: 225,
        right: 325,
        top: 0,
        width: 100,
      },
      transformOrigin: '50px 0px ',
    };

    expect(result).toEqual(expected);
  });

  it('Bottom position repositions to the top', () => {
    const result = getPosition({
      anchorOffset,
      dimensions: dimensions({ height: 250 }),
      position: Position.BOTTOM,
      targetRect: targetRect({ bottom: 295, height: 5, top: 290, y: 290 }),
      viewport: viewport({ height: 300 }),
      viewportOffset: 0,
    });

    const expected = {
      position: 'top',
      rect: {
        bottom: 284,
        height: 250,
        left: 225,
        right: 325,
        top: 34,
        width: 100,
      },
      transformOrigin: '50px 250px ',
    };

    expect(result).toEqual(expected);
  });
});
