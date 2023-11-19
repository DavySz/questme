import { Encrypt } from "@data/crypto";

export class EncryptSpy implements Encrypt {
  value: string;
  key: string;

  callsCount = 0;

  encrypt(value: string, key: string) {
    this.callsCount++;

    this.value = value;
    this.key = key;

    return "wj31";
  }
}
