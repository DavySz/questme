import { SetItem } from "@data/database";

export class SetItemSpy<I> implements SetItem<I> {
  path: string;
  item: I;

  callsCount = 0;

  async set(path: string, item: I): Promise<void> {
    this.item = item;
    this.path = path;
    this.callsCount++;
  }
}
