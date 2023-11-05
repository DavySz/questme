import { useNavigation } from "@react-navigation/native";
import { SignUpEmailThirdStepUI } from "./sign-up-email-third-step.ui";

export const SignUpEmailThirdStepContainer = (): ReturnType<React.FC> => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return <SignUpEmailThirdStepUI handleGoBack={handleGoBack} />;
};
