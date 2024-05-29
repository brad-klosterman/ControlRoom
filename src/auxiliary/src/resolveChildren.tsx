import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactNode,
  ReactPortal,
} from 'react';
import { isFragment } from 'react-is';

import { isFunction } from './assertions';

// Support first level fragment: https://github.com/facebook/react/issues/11859.
export function resolveFragment(children: ReactNode): ReactNode {
  if (isFragment(children)) {
    return children.props.children;
  }

  return children;
}

export function resolveChildren(
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ((
        arg0: Record<string, any>,
      ) =>
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | ReactFragment
        | ReactPortal),
  renderProps?: Record<string, any>,
) {
  if (isFunction(children)) {
    return resolveFragment(children(renderProps!));
  }

  return resolveFragment(children);
}
