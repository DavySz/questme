import { Decrypt } from "@data/crypto";
import CryptoJS from "crypto-js";

export class CryptoDecryptAdapter implements Decrypt {
  decrypt(value: string, key: string): string {
    const bytes = CryptoJS.AES.decrypt(value, key);
    const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return data;
  }
}
