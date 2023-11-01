import { theme } from "@presentation/styles";
import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

export function customRender<T>(children: React.ReactElement<T>) {
  const component = render(
    <ThemeProvider theme={theme}>
      <NavigationContainer>{children}</NavigationContainer>
    </ThemeProvider>
  );

  return component;
}
