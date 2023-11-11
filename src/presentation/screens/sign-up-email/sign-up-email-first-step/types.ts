export interface ISignUpEmailFirstStep {
  handleSignUpEmailSecondStepScreen: () => void;
  handleUpdateUser: (email: string) => void;
  handleGoBack: () => void;
  user: {
    email: string;
    password: string;
    username: string;
  };
}
