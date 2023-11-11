export interface ISignUpEmailSecondStep {
  handleSignUpEmailThirdStepScreen: () => void;
  handleUpdateUser: (password: string) => void;
  handleGoBack: () => void;
  user: {
    email: string;
    password: string;
    username: string;
  };
}
