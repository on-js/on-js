import on from "./on";
import onEvent from "./onEvent";

export default (context: HTMLElement | Document | null = document): void => {
  if (!context) {
    return;
  }

  context.querySelectorAll("[js-on]").forEach(on);

  [
    "blur",
    "change",
    "click",
    "focus",
    "input",
    "keydown",
    "keyup",
    "load",
    "pointerdown",
    "pointerenter",
    "pointerleave",
    "pointermove",
    "pointerout",
    "pointerover",
    "pointerup",
    "reset",
    "submit",
  ].forEach((event: string): void => {
    context
      .querySelectorAll(`[js-${event}]`)
      .forEach((element: Element): void => onEvent(element, event));
  });

  context
    .querySelectorAll("[js-hover]")
    .forEach((element: Element): void =>
      onEvent(element, "pointerenter pointerleave", "hover"),
    );
};
