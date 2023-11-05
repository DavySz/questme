import React from "react";
import { LoginUI } from "./login.ui";
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
    <LoginUI
      handleGoBack={handleGoBack}
      handleGoToResetPasswordScreen={handleGoToResetPasswordScreen}
    />
  );
};
