import React from "react";
import "react-native-gesture-handler";

import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components";
import * as SplashScreen from "expo-splash-screen";

import {
  Rubik_700Bold,
  Rubik_500Medium,
  Rubik_400Regular,
} from "@expo-google-fonts/rubik";

import { theme } from "@presentation/styles";
import { AppRoutes } from "@main/routes/app-routes";
import { StatusBar } from "react-native";

import { GestureWrapper } from "./styles";

export const Entry = (): ReturnType<React.FC> => {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    Rubik_700Bold,
    Rubik_500Medium,
    Rubik_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>
      <GestureWrapper>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />
        <AppRoutes />
      </GestureWrapper>
    </ThemeProvider>
  );
};
