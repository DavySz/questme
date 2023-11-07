import React from "react";

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { privateRoutes } from "./register-routes.private";

const Stack = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const PrivateRoutes = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="home">
      {privateRoutes.map(({ component, name }) => (
        <Stack.Screen name={name} component={component} key={name} />
      ))}
    </Stack.Navigator>
  );
};
