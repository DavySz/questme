import { Text } from "@presentation/components";
import { theme } from "@presentation/styles";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

describe("Text", () => {
  test("Should align text center if prop align center is passed", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Text.Root
          align="center"
          color="company-facebook"
          variant="body-large-medium"
        >
          any-text
        </Text.Root>
      </ThemeProvider>
    );
    const text = getByText("any-text");

    expect(text.props.style.textAlign).toBe("center");
  });
});
