import { InitialContainer } from "@presentation/screens";
import { theme } from "@presentation/styles";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

describe("Initial", () => {
  test("Should render without errors", () => {
    const tree = render(
      <ThemeProvider theme={theme}>
        <InitialContainer />
      </ThemeProvider>
    );

    expect(tree).toMatchSnapshot();
  });
});
