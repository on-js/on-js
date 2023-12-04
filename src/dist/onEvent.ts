import listen from "./listen";

export default (element: Element, event: string, attribute?: string): void => {
  const json: object = JSON.parse(
    (element as HTMLElement).getAttribute(`js-${attribute || event}`) || "",
  );

  listen(element as HTMLElement, event, json);
};
