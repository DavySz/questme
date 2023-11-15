import { UserModel } from "@domain/models";
import { CreateUserByEmailPassword } from "@domain/usecases";

export class CreateUserByEmailPasswordSpy implements CreateUserByEmailPassword {
  params: UserModel;
  callsCount = 0;

  create(params: UserModel) {
    this.params = params;
    this.callsCount++;

    return Promise.resolve();
  }
}
