import { FieldValidatorProtocol } from "../protocols";

export class PasswordValidator implements FieldValidatorProtocol {
  isValid(value: string): boolean {
    const passwordRegex = /^.{8,}$/;
    return passwordRegex.test(value);
  }
}
