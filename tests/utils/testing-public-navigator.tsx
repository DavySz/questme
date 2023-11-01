import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { publicRoutes } from "@main/routes/routes";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

interface ITestingPublicNavigator {
  currentRoute: string;
}

export const TestingPublicNavigator = ({
  currentRoute,
}: ITestingPublicNavigator): ReturnType<React.FC<ITestingPublicNavigator>> => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={currentRoute}>
        {publicRoutes.map(({ component, name }) => (
          <Stack.Screen name={name} component={component} key={name} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
