import Actions from "./actions";
import process from "./process";
import target from "./target";

export default (element: HTMLElement, event: string, json: object): void => {
  event.split(/\s+/).forEach((event: string): void => {
    element.addEventListener(event, (event: Event): void => {
      event.stopPropagation();

      for (const selector in json) {
        if ("preventDefault" === selector && true === json[selector]) {
          event.preventDefault();
        } else {
          const action: Actions = json[selector];

          target(element, selector, action.context).forEach(
            (el: Element): void => process(el, action, element),
          );
        }
      }
    });

    if ("load" === event) {
      element.dispatchEvent(new Event("load"));
    }
  });
};
