import { Circle } from "./styles";
import { IScreenTemplateBubble } from "./types";

export const ScreenTemplateBubble = ({
  size,
  type,
}: IScreenTemplateBubble): ReturnType<React.FC<IScreenTemplateBubble>> => {
  return <Circle size={size} type={type} />;
};
