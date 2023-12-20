import { CryptoEncryptAdapter } from "@infra/crypto";
import { Encrypt } from "@data/crypto";

export function makeCryptoEncryptAdapter(): Encrypt {
  return new CryptoEncryptAdapter();
}
