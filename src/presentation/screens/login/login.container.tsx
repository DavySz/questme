import React from "react";
import { Login } from "./login";
import { useNavigation } from "@react-navigation/native";

export const LoginContainer = (): ReturnType<React.FC> => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleGoToResetPasswordScreen = () => {
    navigation.navigate("reset-password");
  };

  return (
    <Login
      handleGoBack={handleGoBack}
      handleGoToResetPasswordScreen={handleGoToResetPasswordScreen}
    />
  );
};
