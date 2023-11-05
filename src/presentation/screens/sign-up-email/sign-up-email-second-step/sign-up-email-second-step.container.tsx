import { useNavigation } from "@react-navigation/native";
import { SignUpEmailSecondStepUI } from "./sign-up-email-second-step.ui";

export const SignUpEmailSecondStepContainer = (): ReturnType<React.FC> => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSignUpEmailThirdStepScreen = () => {
    navigation.navigate("sign-up-email-third-step");
  };

  return (
    <SignUpEmailSecondStepUI
      handleSignUpEmailThirdStepScreen={handleSignUpEmailThirdStepScreen}
      handleGoBack={handleGoBack}
    />
  );
};
