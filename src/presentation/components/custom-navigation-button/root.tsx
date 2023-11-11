import { Container, Wrapper } from "./styles";

import { useTheme } from "styled-components/native";
import { ICustomNavigationButtonRoot } from "./types";

export const CustomNavigationButtonRoot = ({
  ...rest
}: ICustomNavigationButtonRoot): ReturnType<
  React.FC<ICustomNavigationButtonRoot>
> => {
  const { colors } = useTheme();

  return (
    <Container>
      <Wrapper
        {...rest}
        style={{ backgroundColor: colors.primary }}
        activeOpacity={0.7}
      />
    </Container>
  );
};
