import { ErrorMessages } from "./messages.enum";

export class UserAlreadyExistsError extends Error {
  constructor() {
    super(ErrorMessages.UserAlreadyExists);
  }
}
