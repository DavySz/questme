import { colorMapping } from "@presentation/styles";
import { ICardIcon } from "./types";

export const CardIcon = ({
  icon: Icon,
  color,
}: ICardIcon): ReturnType<React.FC<ICardIcon>> => {
  const renderIcon = () => {
    if (color) {
      return <Icon color={colorMapping(color)} testID="icon-with-color" />;
    }

    return <Icon testID="icon-without-color" />;
  };

  return renderIcon();
};
