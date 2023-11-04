import { useNavigation } from "@react-navigation/native";
import { SignUpEmailThirdStep } from "./sign-up-email-third-step";

export const SignUpEmailThirdStepContainer = (): ReturnType<React.FC> => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return <SignUpEmailThirdStep handleGoBack={handleGoBack} />;
};
