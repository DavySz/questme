import { SetItem } from "@data/database";
import { database } from "@infra/firebase/firebase.config";
import { addDoc, collection } from "firebase/firestore";

export class FirebaseSetItemAdapter<I> implements SetItem<I> {
  async set(path: string, item: I): Promise<void> {
    try {
      await addDoc(collection(database, path), item);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
