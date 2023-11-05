import { useNavigation } from "@react-navigation/native";
import { SignUpUI } from "./sign-up.ui";

export const SignUpContainer = (): ReturnType<React.FC> => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleGoToSignUpWithEmail = () => {
    navigation.navigate("sign-up-email-first-step");
  };

  return (
    <SignUpUI
      handleGoBack={handleGoBack}
      handleGoToSignUpWithEmail={handleGoToSignUpWithEmail}
    />
  );
};
