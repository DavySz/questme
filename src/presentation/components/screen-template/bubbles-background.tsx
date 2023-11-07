import { Bubble } from "../bubble";
import { BubbleWrapper } from "./styles";
import { IScreenTemplateBubblesBackground } from "./types";

export const ScreenTemplateBubblesBackground = ({
  testID,
  children,
}: IScreenTemplateBubblesBackground): ReturnType<
  React.FC<IScreenTemplateBubblesBackground>
> => {
  const outlineSize = 418;
  const fillBigSize = 242;
  const fillMediumSize = 48;
  const fillSmallSize = 20;

  return (
    <BubbleWrapper testID={testID}>
      <Bubble.Root left={56} top={174}>
        <Bubble.Fill size={fillMediumSize} />
      </Bubble.Root>
      <Bubble.Root right={78} bottom={200}>
        <Bubble.Fill size={fillSmallSize} />
      </Bubble.Root>

      <Bubble.Root bottom={0} left={-(fillBigSize / 2)}>
        <Bubble.Fill size={fillBigSize} />
      </Bubble.Root>
      <Bubble.Root bottom={-(outlineSize / 5)} left={-(outlineSize / 2)}>
        <Bubble.Outline size={outlineSize} />
      </Bubble.Root>

      <Bubble.Root top={0} right={-(fillBigSize / 2)}>
        <Bubble.Fill size={fillBigSize} />
      </Bubble.Root>
      <Bubble.Root top={-(outlineSize / 5)} right={-(outlineSize / 2)}>
        <Bubble.Outline size={outlineSize} />
      </Bubble.Root>
      {children}
    </BubbleWrapper>
  );
};
