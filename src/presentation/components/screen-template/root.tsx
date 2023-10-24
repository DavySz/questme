import { cloneElementWithProps } from "@presentation/utils/clone-element";
import { Container } from "./styles";
import { IChildProps, IScreenTemplateRoot } from "./types";
import { ScreenTemplateBubblesBackground } from "./bubbles-background";

export const ScreenTemplateRoot = ({
  children,
  variant = "primary",
}: IScreenTemplateRoot): ReturnType<React.FC<IScreenTemplateRoot>> => {
  const childrenWithProps = cloneElementWithProps<IChildProps>({
    children,
    props: {
      variant,
    },
  });

  if (variant === "tertiary") {
    return (
      <ScreenTemplateBubblesBackground testID="bubbles-container">
        {childrenWithProps}
      </ScreenTemplateBubblesBackground>
    );
  }

  return (
    <Container variant={variant} testID="default-container">
      {childrenWithProps}
    </Container>
  );
};
