import listen from "./listen";

export default (element: Element): void => {
  const json: object = JSON.parse(
    (element as HTMLElement).getAttribute("js-on") || "",
  );

  for (const event in json) {
    listen(element as HTMLElement, event, json[event]);
  }
};
