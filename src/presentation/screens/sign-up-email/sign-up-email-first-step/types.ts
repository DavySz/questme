import { UserModel } from "@domain/models";

export interface ISignUpEmailFirstStep {
  handleSignUpEmailSecondStepScreen: () => void;
  handleUpdateUser: (email: string) => void;
  handleGoBack: () => void;
  user: UserModel;
}
