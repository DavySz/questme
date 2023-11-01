import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { publicRoutes } from "@main/routes/routes";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@presentation/styles";

const Stack = createNativeStackNavigator();

interface ITestingPublicNavigator {
  currentRoute: string;
}

export const TestingPublicNavigator = ({
  currentRoute,
}: ITestingPublicNavigator): ReturnType<React.FC<ITestingPublicNavigator>> => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={currentRoute}>
          {publicRoutes.map(({ component, name }) => (
            <Stack.Screen name={name} component={component} key={name} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};