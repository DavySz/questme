import { SplashContainer } from "@presentation/screens/splash/splash.container";
import { theme } from "@presentation/styles";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

describe("Splash", () => {
  test("Should render without errors", () => {
    const tree = render(
      <ThemeProvider theme={theme}>
        <SplashContainer />
      </ThemeProvider>
    );

    expect(tree).toMatchSnapshot();
  });
});
