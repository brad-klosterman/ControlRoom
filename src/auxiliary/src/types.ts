// When a component's props interface extends these types, no documentation will be generated for them by Storybook.
// This is an issue with react-docgen and storybook. So only put types here that you don't mind if it doesn't have any documentation.

export interface DomProps {
  /**
   * The element's unique identifier.
   * @ignore
   */
  id?: string;
}

export interface AriaLabelingProps {
  /**
   * Identifies the element (or elements) that describes the object.
   * @ignore
   */
  'aria-describedby'?: string;
  /**
   * Identifies the element (or elements) that provide a detailed, extended description for the object.
   * @ignore
   */
  'aria-details'?: string;
  /**
   * Defines a string value that labels the current element.
   * @ignore
   */
  'aria-label'?: string;
  /**
   * Identifies the element (or elements) that labels the current element.
   * @ignore
   */
  'aria-labelledby'?: string;
}

export interface InteractionStatesProps {
  /**
   * @ignore
   */
  active?: boolean;
  /**
   * @ignore
   */
  focus?: boolean;
  /**
   * @ignore
   */
  hover?: boolean;
}
