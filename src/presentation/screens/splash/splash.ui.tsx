import { ScreenTemplate, Text } from "@presentation/components";
import LogoIcon from "@presentation/assets/icons/logo-icon.svg";
import { Content } from "./splash.styles";

export const SplashUI = (): ReturnType<React.FC> => {
  return (
    <ScreenTemplate.Root variant="tertiary">
      <Content>
        <LogoIcon />
        <Text.Root color="neutral-white" variant="heading-3">
          Queezy
        </Text.Root>
      </Content>
    </ScreenTemplate.Root>
  );
};
