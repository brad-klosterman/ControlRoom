// Tree walker code have been copied from: https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/focus/src/FocusScope.tsx.

const FocusableElement = [
  'input:not([disabled]):not([type=hidden])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'button:not([disabled])',
  'a[href]',
  'area[href]',
  'summary',
  'iframe',
  'object',
  'embed',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]',
];

const FocusableElementSelector = [...FocusableElement, '[tabindex]'].join(',');

export function walkFocusableElements(
  root: HTMLElement,
  onElement: (element: Element, index?: number) => void,
): void {
  if (root.matches(FocusableElementSelector)) {
    onElement(root, 0);
  }

  root
    .querySelectorAll(FocusableElementSelector)
    .forEach((x, index) => onElement(x, index + 1));
}
