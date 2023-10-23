import { ScreenTemplateBubble } from "./bubble";
import { BubbleWrapper, PositionWrapper } from "./styles";
import { IScreenTemplateBubblesBackground } from "./types";

export const ScreenTemplateBubblesBackground = ({
  children,
}: IScreenTemplateBubblesBackground): ReturnType<
  React.FC<IScreenTemplateBubblesBackground>
> => {
  const outlineSize = 418;
  const fillBigSize = 242;
  const fillMediumSize = 48;
  const fillSmallSize = 20;

  return (
    <BubbleWrapper>
      <PositionWrapper left={56} top={174}>
        <ScreenTemplateBubble size={fillMediumSize} type="fill" />
      </PositionWrapper>
      <PositionWrapper right={78} bottom={200}>
        <ScreenTemplateBubble size={fillSmallSize} type="fill" />
      </PositionWrapper>

      <PositionWrapper bottom={0} left={-(fillBigSize / 2)}>
        <ScreenTemplateBubble size={fillBigSize} type="fill" />
      </PositionWrapper>
      <PositionWrapper bottom={-(outlineSize / 5)} left={-(outlineSize / 2)}>
        <ScreenTemplateBubble size={outlineSize} type="outline" />
      </PositionWrapper>

      <PositionWrapper top={0} right={-(fillBigSize / 2)}>
        <ScreenTemplateBubble size={fillBigSize} type="fill" />
      </PositionWrapper>
      <PositionWrapper top={-(outlineSize / 5)} right={-(outlineSize / 2)}>
        <ScreenTemplateBubble size={outlineSize} type="outline" />
      </PositionWrapper>
      {children}
    </BubbleWrapper>
  );
};
