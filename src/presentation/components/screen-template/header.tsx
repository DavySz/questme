import { Text } from "../text";
import { HeaderContainer, Wrapper, getIconColor, getTextColor } from "./styles";
import { IScreenTemplateHeader } from "./types";
import ArrowLeftIcon from "@presentation/assets/arrow-left-icon.svg";
import { Button } from "../button";
import { useTheme } from "styled-components/native";
import { TTheme } from "@presentation/styles";

export const ScreenTemplateHeader = ({
  goBack,
  children,
  variant = "primary",
}: IScreenTemplateHeader): ReturnType<React.FC<IScreenTemplateHeader>> => {
  const theme = useTheme();

  const renderGoBack = () => {
    if (!goBack) return;

    return (
      <Wrapper>
        <Button.Root onPress={goBack} full={false} variant="tertiary">
          <Button.Icon
            color={getIconColor(theme as TTheme, variant)}
            icon={ArrowLeftIcon}
            side="none"
          />
        </Button.Root>
      </Wrapper>
    );
  };

  const renderTitle = () => {
    if (!children) return;

    return (
      <Text.Root color={getTextColor(variant)} variant="heading-3">
        {children}
      </Text.Root>
    );
  };

  return (
    <HeaderContainer>
      {renderGoBack()}
      {renderTitle()}
    </HeaderContainer>
  );
};
