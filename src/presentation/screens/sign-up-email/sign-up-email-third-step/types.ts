import { UserModel } from "@domain/models";
import { CreateUserByEmailPassword } from "@domain/usecases";

export interface ISignUpEmailThirdStep {
  handleUpdateUser: (username: string) => void;
  handleCreateUser: () => Promise<void>;
  handleGoBack: () => void;
  user: UserModel;
}

export interface ISignUpEmailThirdStepContainer {
  createUserByEmailPassword: CreateUserByEmailPassword;
}
