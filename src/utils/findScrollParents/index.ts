export default function findScrollParents(element: Element) {
  const documentTags = ['html', 'body'];
  const result: (Element | Document)[] = [];

  if (element) {
    let parent = element.parentElement;

    while (parent && parent.getBoundingClientRect) {
      const rect = parent.getBoundingClientRect();

      // 10px is to account for borders and scrollbars in a lazy way
      if (rect.height && parent.scrollHeight > rect.height + 10) {
        result.push(parent);
      }

      parent = parent.parentElement;
    }

    // last scrollable element will be the document
    // if nothing else is scrollable in the page
    if (result.length === 0) {
      result.push(document);
    } else if (
      'tagName' in result[0] &&
      documentTags.includes(result[0].tagName.toLowerCase())
    ) {
      result.length = 0;
      result.push(document);
    }
  }

  return result;
}
