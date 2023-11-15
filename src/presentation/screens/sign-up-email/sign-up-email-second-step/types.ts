import { UserModel } from "@domain/models";

export interface ISignUpEmailSecondStep {
  handleSignUpEmailThirdStepScreen: () => void;
  handleUpdateUser: (password: string) => void;
  handleGoBack: () => void;
  user: UserModel;
}
