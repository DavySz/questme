import { useNavigation } from "@react-navigation/native";
import { NewPassword } from "./new-password";

export const NewPasswordContainer = (): ReturnType<React.FC> => {
  const navigation = useNavigation();

  const handleGoToInitial = () => {
    navigation.navigate("initial");
  };
  return <NewPassword handleGoToInitial={handleGoToInitial} />;
};
