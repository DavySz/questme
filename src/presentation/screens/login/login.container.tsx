import React from "react";
import { Login } from "./login";
import { useNavigation } from "@react-navigation/native";

export const LoginContainer = (): ReturnType<React.FC> => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate("initial");
  };

  return <Login handleGoBack={handleGoBack} />;
};
