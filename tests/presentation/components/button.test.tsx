import { Button } from "@presentation/components";
import { theme } from "@presentation/styles";
import { render } from "@testing-library/react-native";
import { View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import GoogleIcon from "@presentation/assets/google-icon.svg";

function ProvidersWrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Button.Root variant="google">{children}</Button.Root>
    </ThemeProvider>
  );
}
describe("Button", () => {
  describe("Button.Root", () => {
    test("Should render Button.Root without errors", () => {
      render(<View />, { wrapper: ProvidersWrapper });
    });
  });

  describe("Button.Text", () => {
    test("Should render Button.Text without errors", () => {
      render(<Button.Text>any-text</Button.Text>, {
        wrapper: ProvidersWrapper,
      });
    });

    test("Should render correct children text", () => {
      const { getByText } = render(<Button.Text>any-text</Button.Text>, {
        wrapper: ProvidersWrapper,
      });

      expect(getByText("any-text")).toBeTruthy();
    });
  });

  describe("Button.Icon", () => {
    test("Should render Button.Icon without errors", () => {
      render(<Button.Icon icon={GoogleIcon} side="left" />);
    });

    test("Should render Button.Icon with color", async () => {
      const { getByTestId } = render(
        <Button.Icon icon={GoogleIcon} side="left" color="#000" />
      );

      expect(getByTestId("icon-with-color")).toBeTruthy();
    });

    test("Should render Button.Icon without color", async () => {
      const { getByTestId } = render(
        <Button.Icon icon={GoogleIcon} side="left" />
      );

      expect(getByTestId("icon-without-color")).toBeTruthy();
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
