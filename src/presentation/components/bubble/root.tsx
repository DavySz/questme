import { PositionWrapper } from "./styles";
import { IBubbleRoot } from "./types";

export const BubbleRoot = ({
  children,
  ...rest
}: IBubbleRoot): ReturnType<React.FC<IBubbleRoot>> => {
  return <PositionWrapper {...rest}>{children}</PositionWrapper>;
};
