export default (
  element: HTMLElement,
  name: string,
  context: "self" | "parent" | "document" = "document",
): Array<HTMLElement> | NodeListOf<Element> => {
  switch (name) {
    case "self":
      return [element];
    case "parent":
      return element.parentElement ? [element.parentElement] : [];
    default:
      return {
        self: element,
        parent: element.parentElement || document,
        document: document,
      }[context].querySelectorAll(name);
  }
};
