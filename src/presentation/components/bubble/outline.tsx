import { CircleOutline } from "./styles";
import { IBubbleCircle } from "./types";

export const BubbleOutline = ({
  size,
}: IBubbleCircle): ReturnType<React.FC<IBubbleCircle>> => {
  return <CircleOutline size={size} />;
};
