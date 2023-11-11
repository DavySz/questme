import { colorMapping } from "@presentation/styles";
import { ICustomNavigationIcon } from "./types";

export const CustomNavigationIcon = ({
  icon: Icon,
  color,
}: ICustomNavigationIcon): ReturnType<React.FC<ICustomNavigationIcon>> => {
  const renderIcon = () => {
    if (color) {
      return <Icon color={colorMapping(color)} testID="icon-with-color" />;
    }
    return <Icon testID="icon-without-color" />;
  };

  return renderIcon();
};
