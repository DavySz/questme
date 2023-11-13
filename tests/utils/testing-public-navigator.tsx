import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { publicRoutes } from "@main/routes/register-routes.public";

import { ThemeProvider } from "styled-components/native";
import { theme } from "@presentation/styles";
import { RecoilRoot } from "recoil";

const Stack = createNativeStackNavigator();

interface ITestingPublicNavigator {
  currentRoute: string;
}

export const TestingPublicNavigator = ({
  currentRoute,
}: ITestingPublicNavigator): ReturnType<React.FC<ITestingPublicNavigator>> => {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={currentRoute}>
            {publicRoutes.map(({ component, name }) => (
              <Stack.Screen name={name} component={component} key={name} />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </RecoilRoot>
    </ThemeProvider>
  );
};
