import { useNavigation } from "@react-navigation/native";
import { ResetPassword } from "./reset-password";

export const ResetPasswordContainer = (): ReturnType<React.FC> => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return <ResetPassword handleGoBack={handleGoBack} />;
};
