export interface ISignUpEmailThirdStep {
  handleUpdateUser: (username: string) => void;
  handleGoBack: () => void;
  user: {
    email: string;
    password: string;
    username: string;
  };
}
