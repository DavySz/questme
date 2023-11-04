import { useNavigation } from "@react-navigation/native";
import { SignUp } from "./sign-up";

export const SignUpContainer = (): ReturnType<React.FC> => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleGoToSignUpWithEmail = () => {
    navigation.navigate("sign-up-email-first-step");
  };

  return (
    <SignUp
      handleGoBack={handleGoBack}
      handleGoToSignUpWithEmail={handleGoToSignUpWithEmail}
    />
  );
};
