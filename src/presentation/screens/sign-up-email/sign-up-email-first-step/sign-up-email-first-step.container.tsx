import { useNavigation } from "@react-navigation/native";
import { SignUpEmailFirstStepUI } from "./sign-up-email-first-step.ui";

export const SignUpEmailFirstStepContainer = (): ReturnType<React.FC> => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSignUpEmailSecondStepScreen = () => {
    navigation.navigate("sign-up-email-second-step");
  };

  return (
    <SignUpEmailFirstStepUI
      handleSignUpEmailSecondStepScreen={handleSignUpEmailSecondStepScreen}
      handleGoBack={handleGoBack}
    />
  );
};
