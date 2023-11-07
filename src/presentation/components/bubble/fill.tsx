import { CircleFill } from "./styles";
import { IBubbleCircle } from "./types";

export const BubbleFill = ({
  size,
}: IBubbleCircle): ReturnType<React.FC<IBubbleCircle>> => {
  return <CircleFill size={size} />;
};
