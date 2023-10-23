import { View } from "react-native";
import React from "react";
import { Button } from "@presentation/components";
import GoogleIcon from "@presentation/assets/google-icon.svg";

export const Home = (): ReturnType<React.FC> => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 24,
      }}
    >
      <Button.Root variant="google">
        <Button.Icon icon={GoogleIcon} side="left" />
        <Button.Text>Login with Google</Button.Text>
      </Button.Root>
    </View>
  );
};
