import { useRecoilState } from "recoil";

import { useNavigation } from "@react-navigation/native";
import { signUpEmailState } from "@presentation/recoil/atoms";

import { SignUpEmailFirstStepUI } from "./sign-up-email-first-step.ui";

export const SignUpEmailFirstStepContainer = (): ReturnType<React.FC> => {
  const [user, setUser] = useRecoilState(signUpEmailState);

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSignUpEmailSecondStepScreen = () => {
    navigation.navigate("sign-up-email-second-step");
  };

  const handleUpdateUser = (email: string) => {
    setUser((prev) => ({ ...prev, email }));
  };

  return (
    <SignUpEmailFirstStepUI
      handleSignUpEmailSecondStepScreen={handleSignUpEmailSecondStepScreen}
      handleUpdateUser={handleUpdateUser}
      handleGoBack={handleGoBack}
      user={user}
    />
  );
};
