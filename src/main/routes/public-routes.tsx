import React from "react";

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import {
  HomeContainer,
  SplashContainer,
  OnboardingContainer,
} from "@presentation/screens";

const Stack = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const PublicRoutes = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="splash">
      <Stack.Screen name="splash" component={SplashContainer} />
      <Stack.Screen name="onboarding" component={OnboardingContainer} />
      <Stack.Screen name="home" component={HomeContainer} />
    </Stack.Navigator>
  );
};
