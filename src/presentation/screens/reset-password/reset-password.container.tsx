import { useNavigation } from "@react-navigation/native";
import { ResetPassword } from "./reset-password";

export const ResetPasswordContainer = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return <ResetPassword handleGoBack={handleGoBack} />;
};
