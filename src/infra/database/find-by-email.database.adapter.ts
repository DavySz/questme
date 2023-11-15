import { collection, query, where, getDocs } from "firebase/firestore";
import { database } from "@infra/firebase/firebase.config";
import { FindOneByEmail } from "@data/database";

export class FirebaseFindOneByEmailAdapter<R> implements FindOneByEmail<R> {
  async findOne(path: string, email: string): Promise<R> {
    let data: R[] = [];

    const collectionRef = collection(database, path);
    const q = query(collectionRef, where("email", "==", email));

    try {
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        data.push(doc.data() as R);
      });

      return data[0];
    } catch (error) {
      throw new Error(error);
    }
  }
}
