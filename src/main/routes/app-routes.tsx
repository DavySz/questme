import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PublicRoutes } from "./public-routes";

export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <PublicRoutes />
    </NavigationContainer>
  );
};
