import { EmailValidator } from "@validation/fields";

const makeSut = () => {
  const sut = new EmailValidator();

  return {
    sut,
  };
};

describe("EmailValidator", () => {
  test("Should returns false when email is invalid", () => {
    const { sut } = makeSut();
    const isValid = sut.isValid("any-invalid-email@");
    expect(isValid).toBeFalsy();
  });

  test("Should returns true when email is valid", () => {
    const { sut } = makeSut();
    const isValid = sut.isValid("any-valid-email@gmail.com");
    expect(isValid).toBeTruthy();
  });
});
