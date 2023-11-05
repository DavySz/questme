import React from "react";
import { InitialUI } from "./initial.ui";

import { useNavigation } from "@react-navigation/native";

export const InitialContainer = (): ReturnType<React.FC> => {
  const navigation = useNavigation();

  const handleGoToLoginScreen = () => {
    navigation.navigate("login");
  };

  const handleGoToSignUpScreen = () => {
    navigation.navigate("sign-up");
  };

  return (
    <InitialUI
      handleGoToLoginScreen={handleGoToLoginScreen}
      handleGoToSignUpScreen={handleGoToSignUpScreen}
    />
  );
};
