import Actions from "./actions";
import clone from "./clone";
import listen from "./listen";
import target from "./target";

export default (
  element: Element,
  action: Actions,
  original: HTMLElement,
): void => {
  const el = element as HTMLElement;

  if (action.delete) {
    return el.remove();
  }

  if (action.toggle) {
    action.toggle
      .split(/\s+/)
      .forEach((className: string): boolean => el.classList.toggle(className));
  }

  if (action.add) {
    el.classList.add(...action.add.split(/\s+/));
  }

  if (action.remove) {
    el.classList.remove(...action.remove.split(/\s+/));
  }

  action.toggleattr
    ?.split(/\s+/)
    .forEach((attr: string): boolean => el.toggleAttribute(attr));

  if (action.attr) {
    for (const name in action.attr) {
      const value: string | number | boolean = action.attr[name];
      if ("boolean" === typeof value) {
        el.toggleAttribute(name, value);
      } else {
        el.setAttribute(name, String(value));
      }
    }
  }

  if (action.content) {
    el.innerHTML = action.content;
  }

  if ("up" === action.move && el.previousElementSibling) {
    el.previousElementSibling.before(el);
  } else if ("down" === action.move && el.nextElementSibling) {
    el.nextElementSibling.after(el);
  }

  if (action.movebefore) {
    target(original, action.movebefore)[0].before(el);
  } else if (action.moveafter) {
    target(original, action.moveafter)[0].after(el);
  } else if (action.movetostart) {
    target(original, action.movetostart)[0].prepend(el);
  } else if (action.movetoend) {
    target(original, action.movetoend)[0].append(el);
  }

  if (action.swap) {
    const swap: Element = target(original, action.swap)[0];

    if (swap && el.parentNode) {
      const parent: ParentNode = el.parentNode;
      const sibling: Element | null =
        el.nextElementSibling === swap ? el : el.nextElementSibling;
      swap.before(el);
      parent.insertBefore(swap, sibling);
    }
  }

  if (action.clonebefore) {
    target(original, action.clonebefore).forEach((element: Element): void =>
      element.before(clone(el)),
    );
  }
  if (action.cloneafter) {
    target(original, action.cloneafter).forEach((element: Element): void =>
      element.after(clone(el)),
    );
  }
  if (action.clonetostart) {
    target(original, action.clonetostart).forEach((element: Element): void =>
      element.prepend(clone(el)),
    );
  }
  if (action.clonetoend) {
    target(original, action.clonetoend).forEach((element: Element): void =>
      element.append(clone(el)),
    );
  }

  if (action.on) {
    for (const event in action.on) {
      listen(el, event, action.on[event]);
    }
  }

  action.dispatch
    ?.split(/\s+/)
    .forEach((event: string): boolean => el.dispatchEvent(new Event(event)));
};
