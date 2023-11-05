import { useNavigation } from "@react-navigation/native";
import { ResetPasswordUI } from "./reset-password.ui";

export const ResetPasswordContainer = (): ReturnType<React.FC> => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return <ResetPasswordUI handleGoBack={handleGoBack} />;
};
