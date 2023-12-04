import init from "./init";

const context: HTMLDivElement = document.createElement("div");

export default (node: HTMLElement): Node => {
  const clone: Node = node.cloneNode(true);

  context.appendChild(clone);

  init(context);

  return clone;
};
