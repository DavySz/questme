import { PasswordValidator } from "@validation/fields";

const makeSut = () => {
  const sut = new PasswordValidator();

  return {
    sut,
  };
};

describe("PasswordValidator", () => {
  test("Should return false when the number of characters is less than 8", () => {
    const { sut } = makeSut();
    const isValid = sut.isValid("invalid");
    expect(isValid).toBeFalsy();
  });

  test("Should return true when the number of characters is equal to 8", () => {
    const { sut } = makeSut();
    const isValid = sut.isValid("validPas");
    expect(isValid).toBeTruthy();
  });

  test("Should return true when the number of characters is greater than 8", () => {
    const { sut } = makeSut();
    const isValid = sut.isValid("valid-password");
    expect(isValid).toBeTruthy();
  });
});
