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
});
