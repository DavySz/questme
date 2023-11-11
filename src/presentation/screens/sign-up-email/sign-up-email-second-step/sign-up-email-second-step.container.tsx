import { useRecoilState } from "recoil";

import { useNavigation } from "@react-navigation/native";
import { signUpEmailState } from "@presentation/recoil/atoms";

import { SignUpEmailSecondStepUI } from "./sign-up-email-second-step.ui";

export const SignUpEmailSecondStepContainer = (): ReturnType<React.FC> => {
  const [user, setUser] = useRecoilState(signUpEmailState);

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSignUpEmailThirdStepScreen = () => {
    navigation.navigate("sign-up-email-third-step");
  };

  const handleUpdateUser = (password: string) => {
    setUser((prev) => ({ ...prev, password }));
  };

  return (
    <SignUpEmailSecondStepUI
      handleSignUpEmailThirdStepScreen={handleSignUpEmailThirdStepScreen}
      handleUpdateUser={handleUpdateUser}
      handleGoBack={handleGoBack}
      user={user}
    />
  );
};
