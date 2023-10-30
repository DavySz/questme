import { Divider } from "@presentation/components";
import { theme } from "@presentation/styles";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

describe("Divider", () => {
  test("Should render component without errors", () => {
    const tree = render(
      <ThemeProvider theme={theme}>
        <Divider.Text>any-text</Divider.Text>
        <Divider.Root />
      </ThemeProvider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
