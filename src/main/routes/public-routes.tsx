import React from "react";

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { HomeContainer } from "../../presentation/screens/home/home.container";

const Stack = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const PublicRoutes = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="home" component={HomeContainer} />
    </Stack.Navigator>
  );
};
