import { CreateHash } from "@data/hash";
import uuid from "react-native-uuid";

export class UuiCreateHashAdapter implements CreateHash {
  create() {
    return uuid.v4().toString();
  }
}
