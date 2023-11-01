import React from "react";
import { Initial } from "./initial";

import { useNavigation } from "@react-navigation/native";

export const InitialContainer = (): ReturnType<React.FC> => {
  const navigation = useNavigation();

  const handleGoToLoginScreen = () => {
    navigation.navigate("login");
  };

  return <Initial handleGoToLoginScreen={handleGoToLoginScreen} />;
};
