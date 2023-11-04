import { colorMapping } from "@presentation/styles";
import { IInputIcon } from "./types";

export const InputIcon = ({
  icon: Icon,
  color,
}: IInputIcon): ReturnType<React.FC<IInputIcon>> => {
  const renderIcon = () => {
    if (color) {
      return <Icon color={colorMapping(color)} testID="icon-with-color" />;
    }
    return <Icon testID="icon-without-color" />;
  };

  return renderIcon();
};
