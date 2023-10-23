import { View } from "react-native";
import React from "react";
import { Button } from "@presentation/components";

export const Home = (): ReturnType<React.FC> => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button.Root variant="primary">
        <Button.Text>Button</Button.Text>
      </Button.Root>
    </View>
  );
};
