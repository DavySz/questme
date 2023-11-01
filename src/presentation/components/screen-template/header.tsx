import { Text } from "../text";
import { HeaderContainer, Wrapper, getIconColor, getTextColor } from "./styles";
import { IScreenTemplateHeader } from "./types";
import ArrowLeftIcon from "@presentation/assets/icons/arrow-left-icon.svg";
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
    if (!goBack) return null;

    return (
      <Wrapper>
        <Button.Root
          testID="go-back-button"
          variant="tertiary"
          onPress={goBack}
          full={false}
        >
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
    if (!children) return null;

    return (
      <Text.Root
        variant="heading-3"
        testID="header-title"
        color={getTextColor(variant)}
      >
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
