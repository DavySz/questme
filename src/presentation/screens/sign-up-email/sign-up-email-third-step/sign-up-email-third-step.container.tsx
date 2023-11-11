import { useRecoilState } from "recoil";

import { useNavigation } from "@react-navigation/native";
import { signUpEmailState } from "@presentation/recoil/atoms";

import { SignUpEmailThirdStepUI } from "./sign-up-email-third-step.ui";

export const SignUpEmailThirdStepContainer = (): ReturnType<React.FC> => {
  const [user, setUser] = useRecoilState(signUpEmailState);

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleUpdateUser = (username: string) => {
    setUser((prev) => ({ ...prev, username }));
  };

  return (
    <SignUpEmailThirdStepUI
      user={user}
      handleGoBack={handleGoBack}
      handleUpdateUser={handleUpdateUser}
    />
  );
};
