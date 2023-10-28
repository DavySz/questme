import React from "react";

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { HomeContainer } from "@presentation/screens";
import {
  MakeSplashScreen,
  MakeInitialScreen,
  MakeOnboardingScreen,
} from "@main/factories/screens";

const Stack = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const PublicRoutes = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="initial">
      <Stack.Screen name="splash" component={MakeSplashScreen} />
      <Stack.Screen name="onboarding" component={MakeOnboardingScreen} />
      <Stack.Screen name="initial" component={MakeInitialScreen} />
      <Stack.Screen name="home" component={HomeContainer} />
    </Stack.Navigator>
  );
};
