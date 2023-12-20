import { useRecoilState } from "recoil";

import { useNavigation } from "@react-navigation/native";
import { signUpEmailState } from "@presentation/recoil/atoms";

import { SignUpEmailThirdStepUI } from "./sign-up-email-third-step.ui";
import { ISignUpEmailThirdStepContainer } from "./types";

export const SignUpEmailThirdStepContainer = ({
  createUserByEmailPassword,
}: ISignUpEmailThirdStepContainer): ReturnType<
  React.FC<ISignUpEmailThirdStepContainer>
> => {
  const [user, setUser] = useRecoilState(signUpEmailState);
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleUpdateUser = (username: string) => {
    setUser((prev) => ({ ...prev, username }));
  };

  const handleCreateUser = async () => {
    try {
      await createUserByEmailPassword.create(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SignUpEmailThirdStepUI
      user={user}
      handleGoBack={handleGoBack}
      handleUpdateUser={handleUpdateUser}
      handleCreateUser={handleCreateUser}
    />
  );
};
