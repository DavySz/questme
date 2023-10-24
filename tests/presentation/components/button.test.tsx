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

    test("Should add margin right of 16px when Button.Icon receive left prop", async () => {
      const { getByTestId } = render(
        <Button.Icon icon={GoogleIcon} side="left" />
      );

      const iconWrapper = getByTestId("icon-wrapper");
      const iconWrapperStyle = iconWrapper.props.style;

      expect(iconWrapperStyle.marginRight).toBe(16);
    });

    test("Should add margin left of 16px when Button.Icon receive right prop", async () => {
      const { getByTestId } = render(
        <Button.Icon icon={GoogleIcon} side="right" />
      );

      const iconWrapper = getByTestId("icon-wrapper");
      const iconWrapperStyle = iconWrapper.props.style;

      expect(iconWrapperStyle.marginLeft).toBe(16);
    });

    test("Should not add margin when Button.Icon receive none prop", async () => {
      const { getByTestId } = render(
        <Button.Icon icon={GoogleIcon} side="none" />
      );

      const iconWrapper = getByTestId("icon-wrapper");
      const iconWrapperStyle = iconWrapper.props.style;

      expect(iconWrapperStyle.marginRight).toBeUndefined();
      expect(iconWrapperStyle.marginLeft).toBeUndefined();
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

    test("Should render button with correct background color primary variant by default", () => {
      const { getByTestId } = render(
        <ThemeProvider theme={theme}>
          <Button.Root>
            <Button.Icon icon={GoogleIcon} side="right" />
          </Button.Root>
        </ThemeProvider>
      );

      const button = getByTestId("button-root-wrapper");
      const buttonStyle = button.props.style;

      expect(buttonStyle.backgroundColor).toBe(theme.colors.primary);
    });

    test("Should render button with correct background color when variant is passed", () => {
      const { getByTestId } = render(
        <ThemeProvider theme={theme}>
          <Button.Root variant="tertiary">
            <Button.Icon icon={GoogleIcon} side="right" />
          </Button.Root>
        </ThemeProvider>
      );

      const button = getByTestId("button-root-wrapper");
      const buttonStyle = button.props.style;

      expect(buttonStyle.backgroundColor).toBe(theme.colors.transparent);
    });

    test("Should render button with 100% width if full prop is passed", () => {
      const { getByTestId } = render(
        <ThemeProvider theme={theme}>
          <Button.Root>
            <Button.Icon icon={GoogleIcon} side="right" />
          </Button.Root>
        </ThemeProvider>
      );

      const button = getByTestId("button-root-wrapper");
      const buttonStyle = button.props.style;

      expect(buttonStyle.width).toBe("100%");
    });

    test("Should render button with content width if full prop is not passed", () => {
      const { getByTestId } = render(
        <ThemeProvider theme={theme}>
          <Button.Root full={false}>
            <Button.Icon icon={GoogleIcon} side="right" />
          </Button.Root>
        </ThemeProvider>
      );

      const button = getByTestId("button-root-wrapper");
      const buttonStyle = button.props.style;

      expect(buttonStyle.width).toBeUndefined();
    });
  });
});
