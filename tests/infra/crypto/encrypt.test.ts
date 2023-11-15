import { CryptoEncryptAdapter } from "@infra/crypto";

const makeSut = () => {
  const sut = new CryptoEncryptAdapter();

  return {
    sut,
  };
};

describe("CryptoEncryptAdapter", () => {
  test("Should return a different value than the one passed by parameter", () => {
    const key = "any-key";
    const value = "test-value";

    const { sut } = makeSut();
    const encryptedValue = sut.encrypt(value, key);

    expect(encryptedValue).not.toBe(value);
  });
});
