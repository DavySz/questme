export interface SetItem<I> {
  set(path: string, item: I): Promise<void>;
}
