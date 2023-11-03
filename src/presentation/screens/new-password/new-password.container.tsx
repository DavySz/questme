import { useNavigation } from "@react-navigation/native";
import { NewPassword } from "./new-password";

export const NewPasswordContainer = (): ReturnType<React.FC> => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  return <NewPassword handleGoBack={handleGoBack} />;
};
