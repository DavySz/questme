import { ScreenTemplate } from "@presentation/components";
import { theme } from "@presentation/styles";
import { fireEvent, render } from "@testing-library/react-native";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";

describe("ScreenTemplate", () => {
  describe("ScreenTemplate.Root", () => {
    test("Should render correct children", () => {
      const { getByText } = render(
        <ThemeProvider theme={theme}>
          <ScreenTemplate.Root>
            <Text>any-text</Text>
          </ScreenTemplate.Root>
        </ThemeProvider>
      );

      expect(getByText("any-text")).toBeTruthy();
    });

    test("Should render default container when variant prop is not passed", () => {
      const { getByTestId } = render(
        <ThemeProvider theme={theme}>
          <ScreenTemplate.Root>
            <Text>any-text</Text>
          </ScreenTemplate.Root>
        </ThemeProvider>
      );

      expect(getByTestId("default-container")).toBeTruthy();
    });

    test("Should render correct container when variant prop is passed", () => {
      const { getByTestId } = render(
        <ThemeProvider theme={theme}>
          <ScreenTemplate.Root variant="tertiary">
            <Text>any-text</Text>
          </ScreenTemplate.Root>
        </ThemeProvider>
      );

      expect(getByTestId("bubbles-container")).toBeTruthy();
    });
  });

  describe("ScreenTemplate.Header", () => {
    test("Should component without errors", () => {
      render(
        <ThemeProvider theme={theme}>
          <ScreenTemplate.Header>any-title</ScreenTemplate.Header>
        </ThemeProvider>
      );
    });
    test("Should render correct children", () => {
      const { getByText } = render(
        <ThemeProvider theme={theme}>
          <ScreenTemplate.Root>
            <ScreenTemplate.Header>any-title</ScreenTemplate.Header>
          </ScreenTemplate.Root>
        </ThemeProvider>
      );

      expect(getByText("any-title")).toBeTruthy();
    });

    test("Should call go back function when button is clicked", () => {
      const onPressFn = jest.fn();

      const { getByTestId } = render(
        <ThemeProvider theme={theme}>
          <ScreenTemplate.Root>
            <ScreenTemplate.Header goBack={onPressFn}>
              any-title
            </ScreenTemplate.Header>
          </ScreenTemplate.Root>
        </ThemeProvider>
      );

      const button = getByTestId("button-root-wrapper");
      fireEvent.press(button);

      expect(onPressFn).toBeCalled();
    });

    test("Should not render go back button when go back function is not passed", () => {
      const { queryByTestId } = render(
        <ThemeProvider theme={theme}>
          <ScreenTemplate.Root>
            <ScreenTemplate.Header>any-title</ScreenTemplate.Header>
          </ScreenTemplate.Root>
        </ThemeProvider>
      );

      const button = queryByTestId("button-root-wrapper");

      expect(button).toBeNull();
    });

    test("Should not render text if header children is not passed", () => {
      const { queryByTestId } = render(
        <ThemeProvider theme={theme}>
          <ScreenTemplate.Root>
            <ScreenTemplate.Header></ScreenTemplate.Header>
          </ScreenTemplate.Root>
        </ThemeProvider>
      );

      const headerTitle = queryByTestId("header-title");

      expect(headerTitle).toBeNull();
    });

    test("Should render correct header variant color when prop variant is not passed", () => {
      const { getByTestId } = render(
        <ThemeProvider theme={theme}>
          <ScreenTemplate.Root>
            <ScreenTemplate.Header>any-title</ScreenTemplate.Header>
          </ScreenTemplate.Root>
        </ThemeProvider>
      );

      const headerTitle = getByTestId("header-title");
      const headerTitleStyles = headerTitle.props.style;

      expect(headerTitleStyles.color).toBe(theme.colors.neutral.white);
    });

    test("Should render correct header variant color when prop is passed", () => {
      const { getByTestId } = render(
        <ThemeProvider theme={theme}>
          <ScreenTemplate.Root variant="secondary">
            <ScreenTemplate.Header>any-title</ScreenTemplate.Header>
          </ScreenTemplate.Root>
        </ThemeProvider>
      );

      const headerTitle = getByTestId("header-title");
      const headerTitleStyles = headerTitle.props.style;

      expect(headerTitleStyles.color).toBe(theme.colors.neutral.black);
    });
  });
});
