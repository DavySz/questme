import { CryptoDecryptAdapter, CryptoEncryptAdapter } from "@infra/crypto";

const makeSut = () => {
  const sut = new CryptoDecryptAdapter();
  const encrypt = new CryptoEncryptAdapter();

  return {
    encrypt,
    sut,
  };
};

describe("CryptoDecryptAdapter", () => {
  test("Should return correct decrypt value", () => {
    const key = "any-key";
    const value = "test-value";

    const { sut, encrypt } = makeSut();
    const encryptedValue = encrypt.encrypt(value, key);

    const decryptedValue = sut.decrypt(encryptedValue, key);

    expect(decryptedValue).toBe(value);
  });
});
