import { theme } from "@presentation/styles";
import "styled-components";

declare module "styled-components" {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}
