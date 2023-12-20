import { FirebaseSetItemAdapter } from "@infra/database";
import { SetItem } from "@data/database";

export function makeFirebaseSetItemAdapter<T>(): SetItem<T> {
  return new FirebaseSetItemAdapter<T>();
}
