import { useNavigation } from "@react-navigation/native";
import { SignUp } from "./sign-up";

export const SignUpContainer = (): ReturnType<React.FC> => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate("initial");
  };

  return <SignUp handleGoBack={handleGoBack} />;
};
