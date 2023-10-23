import { View } from "react-native";
import React from "react";
import { Text } from "@presentation/components";

export const Home = (): ReturnType<React.FC> => {
  return (
    <View>
      <Text.Root variant="heading-1" color="primary">
        Hello World
      </Text.Root>
    </View>
  );
};
