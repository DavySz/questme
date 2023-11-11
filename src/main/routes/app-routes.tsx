import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PrivateTabRoutes } from "./private-routes.tab";

export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <PrivateTabRoutes />
    </NavigationContainer>
  );
};
