import { useNavigation } from "@react-navigation/native";
import { SignUpEmailSecondStep } from "./sign-up-email-second-step";

export const SignUpEmailSecondStepContainer = (): ReturnType<React.FC> => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSignUpEmailThirdStepScreen = () => {
    navigation.navigate("sign-up-email-third-step");
  };

  return (
    <SignUpEmailSecondStep
      handleSignUpEmailThirdStepScreen={handleSignUpEmailThirdStepScreen}
      handleGoBack={handleGoBack}
    />
  );
};
