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
});
