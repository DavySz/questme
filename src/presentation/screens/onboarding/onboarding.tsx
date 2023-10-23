import { ScreenTemplate } from "@presentation/components";
import { View } from "react-native";

export const Onboarding = (): ReturnType<React.FC> => {
  return (
    <View style={{ flex: 1 }}>
      <ScreenTemplate.Root variant="tertiary">
        <ScreenTemplate.Header goBack={() => console.log("oi")}>
          Sign Up
        </ScreenTemplate.Header>
      </ScreenTemplate.Root>
    </View>
  );
};
