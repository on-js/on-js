export default interface Actions {
  context?: "self" | "parent" | "document";
  delete?: boolean;
  toggle?: string;
  add?: string;
  remove?: string;
  toggleattr?: string;
  attr?: object;
  content?: string;
  move?: "up" | "down";
  movebefore?: string;
  moveafter?: string;
  movetostart?: string;
  movetoend?: string;
  swap?: string;
  clonebefore?: string;
  cloneafter?: string;
  clonetostart?: string;
  clonetoend?: string;
  on?: object;
  dispatch?: string;
}
