import listen from "./listen";

export default (element: Element): void => {
  const json: object = new Function(
    "return " + (element as HTMLElement).getAttribute("js-on") || "",
  )();

  for (const event in json) {
    listen(element as HTMLElement, event, json[event]);
  }
};
