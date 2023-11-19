import { CreateHash } from "@data/hash";

export class CreateHashSpy implements CreateHash {
  callsCount = 0;

  create() {
    this.callsCount++;

    return "d1dno2";
  }
}
