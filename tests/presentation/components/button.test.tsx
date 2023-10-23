import { Button } from "@presentation/components";
import { theme } from "@presentation/styles";
import { render } from "@testing-library/react-native";
import { View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import GoogleIcon from "@presentation/assets/google-icon.svg";

describe("Button", () => {
  describe("Button.Root", () => {
    test("Should render Button.Root without errors", () => {
      render(
        <ThemeProvider theme={theme}>
          <Button.Root>
            <View />
          </Button.Root>
        </ThemeProvider>
      );
    });
  });

  describe("Button.Text", () => {
    test("Should render Button.Text without errors", () => {
      render(
        <ThemeProvider theme={theme}>
          <Button.Text>any-text</Button.Text>
        </ThemeProvider>
      );
    });

    test("Should render correct children text", () => {
      const { getByText } = render(
        <ThemeProvider theme={theme}>
          <Button.Text>any-text</Button.Text>
        </ThemeProvider>
      );

      expect(getByText("any-text")).toBeTruthy();
    });
  });

  describe("Button.Icon", () => {
    test("Should render Button.Icon without errors", () => {
      render(<Button.Icon icon={GoogleIcon} side="left" />);
    });
  });

  describe("Button.*", () => {
    test("Should render all button parts without errors", () => {
      const { getByText } = render(
        <ThemeProvider theme={theme}>
          <Button.Root variant="google">
            <Button.Text>any-text</Button.Text>
            <Button.Icon icon={GoogleIcon} side="right" />
          </Button.Root>
        </ThemeProvider>
      );

      expect(getByText("any-text")).toBeTruthy();
    });
  });
});
