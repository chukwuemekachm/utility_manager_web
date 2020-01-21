declare interface Action {
  type: string;
  payload?: Record<string, unknown>;
}
