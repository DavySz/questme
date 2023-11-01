import { ScreenTemplate } from "@presentation/components";
import { fireEvent } from "@testing-library/react-native";
import { Text } from "react-native";
import { customRender } from "../../utils/custom-render";
import { theme } from "@presentation/styles";

describe("ScreenTemplate", () => {
  describe("ScreenTemplate.Root", () => {
    test("Should render without errors", () => {
      const tree = customRender(
        <ScreenTemplate.Root>
          <Text>any-text</Text>
        </ScreenTemplate.Root>
      );

      expect(tree).toMatchSnapshot();
    });

    test("Should render correct children", () => {
      const { getByText } = customRender(
        <ScreenTemplate.Root>
          <Text>any-text</Text>
        </ScreenTemplate.Root>
      );

      expect(getByText("any-text")).toBeTruthy();
    });

    test("Should render default container when variant prop is not passed", () => {
      const { getByTestId } = customRender(
        <ScreenTemplate.Root>
          <Text>any-text</Text>
        </ScreenTemplate.Root>
      );

      expect(getByTestId("default-container")).toBeTruthy();
    });

    test("Should render correct container when variant prop is passed", () => {
      const { getByTestId } = customRender(
        <ScreenTemplate.Root variant="tertiary">
          <Text>any-text</Text>
        </ScreenTemplate.Root>
      );

      expect(getByTestId("bubbles-container")).toBeTruthy();
    });
  });

  describe("ScreenTemplate.Header", () => {
    test("Should component without errors", () => {
      customRender(<ScreenTemplate.Header>any-title</ScreenTemplate.Header>);
    });
    test("Should render correct children", () => {
      const { getByText } = customRender(
        <ScreenTemplate.Root>
          <ScreenTemplate.Header>any-title</ScreenTemplate.Header>
        </ScreenTemplate.Root>
      );

      expect(getByText("any-title")).toBeTruthy();
    });

    test("Should call go back function when button is clicked", () => {
      const onPressFn = jest.fn();

      const { getByTestId } = customRender(
        <ScreenTemplate.Root>
          <ScreenTemplate.Header goBack={onPressFn}>
            any-title
          </ScreenTemplate.Header>
        </ScreenTemplate.Root>
      );

      const button = getByTestId("go-back-button");
      fireEvent.press(button);

      expect(onPressFn).toBeCalled();
    });

    test("Should not render go back button when go back function is not passed", () => {
      const { queryByTestId } = customRender(
        <ScreenTemplate.Root>
          <ScreenTemplate.Header>any-title</ScreenTemplate.Header>
        </ScreenTemplate.Root>
      );

      const button = queryByTestId("go-back-button");

      expect(button).toBeNull();
    });

    test("Should not render text if header children is not passed", () => {
      const { queryByTestId } = customRender(
        <ScreenTemplate.Root>
          <ScreenTemplate.Header></ScreenTemplate.Header>
        </ScreenTemplate.Root>
      );

      const headerTitle = queryByTestId("header-title");

      expect(headerTitle).toBeNull();
    });

    test("Should render correct header variant color when prop variant is not passed", () => {
      const { getByTestId } = customRender(
        <ScreenTemplate.Root>
          <ScreenTemplate.Header>any-title</ScreenTemplate.Header>
        </ScreenTemplate.Root>
      );

      const headerTitle = getByTestId("header-title");
      const headerTitleStyles = headerTitle.props.style;

      expect(headerTitleStyles.color).toBe(theme.colors.neutral.white);
    });

    test("Should render correct header variant color when prop is passed", () => {
      const { getByTestId } = customRender(
        <ScreenTemplate.Root variant="secondary">
          <ScreenTemplate.Header>any-title</ScreenTemplate.Header>
        </ScreenTemplate.Root>
      );

      const headerTitle = getByTestId("header-title");
      const headerTitleStyles = headerTitle.props.style;

      expect(headerTitleStyles.color).toBe(theme.colors.neutral.black);
    });
  });
});
