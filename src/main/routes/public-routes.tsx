import React from "react";

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { publicRoutes } from "./routes";

const Stack = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const PublicRoutes = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="initial">
      {publicRoutes.map(({ component, name }) => (
        <Stack.Screen name={name} component={component} key={name} />
      ))}
    </Stack.Navigator>
  );
};
