import { RefObject } from 'react';

export type ChangeEventHandler = (
  elements: HTMLElement[],
  scope: HTMLElement[],
) => void;

export class DomScope {
  private scopeRef: RefObject<HTMLElement[]>;

  private handlersRef: RefObject<ChangeEventHandler[]>;

  constructor(
    scopeRef: RefObject<HTMLElement[]>,
    handlersRef: RefObject<ChangeEventHandler[]>,
  ) {
    this.scopeRef = scopeRef;
    this.handlersRef = handlersRef;
  }

  get elements() {
    return this.scopeRef.current;
  }

  registerChangeHandler(handler: ChangeEventHandler) {
    this.handlersRef.current?.push(handler);
  }

  removeChangeHandler(handler: ChangeEventHandler) {
    const handlers = this.handlersRef.current;

    handlers?.splice(handlers.indexOf(handler), 1);
  }

  isInScope(element: HTMLElement) {
    return this.elements?.some(x => x.contains(element));
  }
}
