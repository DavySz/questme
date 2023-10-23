import React from "react";

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { HomeContainer, OnboardingContainer } from "@presentation/screens";

const Stack = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const PublicRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName="onboarding"
    >
      <Stack.Screen name="home" component={HomeContainer} />
      <Stack.Screen name="onboarding" component={OnboardingContainer} />
    </Stack.Navigator>
  );
};
