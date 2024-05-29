import {
  Children,
  ReactElement,
  ReactNode,
  Ref,
  RefAttributes,
  useMemo,
} from 'react';

import { isNil } from 'auxiliary';

export interface ExpanderBuilderItem {
  id: string;
  index: number;
  key: string;
  header: ExpanderBuilderHeader;
  panel: ExpanderBuilderPanel;
  below?: ReactElement;
}

export interface ExpanderBuilderHeader {
  elementType: ReactElement['type'];
  props: Record<string, any>;
  ref: Ref<any>;
}

export interface ExpanderBuilderPanel {
  elementType: ReactElement['type'];
  props: Record<string, any>;
  ref: Ref<any>;
}

export class ExpanderBuilder {
  private readonly rootId;

  constructor(rootId: string) {
    this.rootId = rootId;
  }

  build(children: ReactNode): ExpanderBuilderItem[] {
    if (isNil(children)) {
      throw new Error('An expander must have children.');
    }

    // @ts-ignore
    return Children.map(children, (element: ReactElement, index) => {
      if (!children || !element) return null;

      const [header, content] = Children.toArray(
        element.props?.children,
      ) as ReactElement[];

      if (isNil(header) || isNil(content)) {
        throw new Error('An expander must have header and content.');
      }

      const key = !isNil(element.key)
        ? element.key.toString().replace('.', '').replace('$', '')
        : index.toString();

      const headerProps = {
        // Use a custom type if available otherwise let the ExpanderHeader component choose his default type.
        elementType: header.type,
        props: { ...element.props, ...header?.props },
        ref: (header as RefAttributes<any>).ref,
      };

      const panelProps = {
        // Use a custom type if available otherwise let the ExpanderPanel component choose his default type.
        elementType: content.type,
        props: content.props,
        ref: (content as RefAttributes<any>).ref,
      };

      let below;

      if (key === 'below') {
        below = element;
      }

      return {
        below,
        header: headerProps,
        id: `${this.rootId}-${key}`,
        index,
        key,
        panel: panelProps,
      };
    });
  }
}

export function useExpanderItems(children: ReactNode, rootId: string) {
  const builder = useMemo(() => new ExpanderBuilder(rootId), [rootId]);

  return useMemo(() => builder.build(children), [builder, children]);
}
