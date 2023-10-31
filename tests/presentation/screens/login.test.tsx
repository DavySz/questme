import { LoginContainer } from "@presentation/screens";
import { theme } from "@presentation/styles";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

describe("Login", () => {
  test("Should render without errors", () => {
    const tree = render(
      <ThemeProvider theme={theme}>
        <LoginContainer />
      </ThemeProvider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
