import { Button } from "@presentation/components";
import GoogleIcon from "@presentation/assets/icons/google-icon.svg";
import { customRender } from "../../utils/custom-render";
import { theme } from "@presentation/styles";

describe("Button", () => {
  describe("Button.Root", () => {
    test("Should render Button.Root without errors", () => {
      const tree = customRender(
        <Button.Root variant="google">
          <Button.Text>any-text</Button.Text>
        </Button.Root>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("Button.Text", () => {
    test("Should render Button.Text without errors", () => {
      customRender(
        <Button.Root variant="google">
          <Button.Text>any-text</Button.Text>
        </Button.Root>
      );
    });

    test("Should render correct children text", () => {
      const { getByText } = customRender(
        <Button.Root variant="google">
          <Button.Text>any-text</Button.Text>
        </Button.Root>
      );

      expect(getByText("any-text")).toBeTruthy();
    });
  });

  describe("Button.Icon", () => {
    test("Should render Button.Icon without errors", () => {
      customRender(<Button.Icon icon={GoogleIcon} side="left" />);
    });

    test("Should render Button.Icon with color", async () => {
      const { getByTestId } = customRender(
        <Button.Icon icon={GoogleIcon} side="left" color="company-facebook" />
      );

      expect(getByTestId("icon-with-color")).toBeTruthy();
    });

    test("Should render Button.Icon without color", async () => {
      const { getByTestId } = customRender(
        <Button.Icon icon={GoogleIcon} side="left" />
      );

      expect(getByTestId("icon-without-color")).toBeTruthy();
    });

    test("Should add margin right of 16px when Button.Icon receive left prop", async () => {
      const { getByTestId } = customRender(
        <Button.Icon icon={GoogleIcon} side="left" />
      );

      const iconWrapper = getByTestId("icon-wrapper");
      const iconWrapperStyle = iconWrapper.props.style;

      expect(iconWrapperStyle.marginRight).toBe(16);
    });

    test("Should add margin left of 16px when Button.Icon receive right prop", async () => {
      const { getByTestId } = customRender(
        <Button.Icon icon={GoogleIcon} side="right" />
      );

      const iconWrapper = getByTestId("icon-wrapper");
      const iconWrapperStyle = iconWrapper.props.style;

      expect(iconWrapperStyle.marginLeft).toBe(16);
    });

    test("Should not add margin when Button.Icon receive none prop", async () => {
      const { getByTestId } = customRender(
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
      const { getByText } = customRender(
        <Button.Root variant="google">
          <Button.Text>any-text</Button.Text>
          <Button.Icon icon={GoogleIcon} side="right" />
        </Button.Root>
      );

      expect(getByText("any-text")).toBeTruthy();
    });

    test("Should render button with correct background color primary variant by default", () => {
      const { getByTestId } = customRender(
        <Button.Root testID="button-root-wrapper">
          <Button.Icon icon={GoogleIcon} side="right" />
        </Button.Root>
      );

      const button = getByTestId("button-root-wrapper");
      const buttonStyle = button.props.style;

      expect(buttonStyle.backgroundColor).toBe(theme.colors.primary);
    });

    test("Should render button with correct background color when variant is passed", () => {
      const { getByTestId } = customRender(
        <Button.Root variant="tertiary" testID="button-root-wrapper">
          <Button.Icon icon={GoogleIcon} side="right" />
        </Button.Root>
      );

      const button = getByTestId("button-root-wrapper");
      const buttonStyle = button.props.style;

      expect(buttonStyle.backgroundColor).toBe(theme.colors.transparent);
    });

    test("Should render button with 100% width if full prop is passed", () => {
      const { getByTestId } = customRender(
        <Button.Root testID="button-root-wrapper">
          <Button.Icon icon={GoogleIcon} side="right" />
        </Button.Root>
      );

      const button = getByTestId("button-root-wrapper");
      const buttonStyle = button.props.style;

      expect(buttonStyle.width).toBe("100%");
    });

    test("Should render button with content width if full prop is not passed", () => {
      const { getByTestId } = customRender(
        <Button.Root full={false} testID="button-root-wrapper">
          <Button.Icon icon={GoogleIcon} side="right" />
        </Button.Root>
      );

      const button = getByTestId("button-root-wrapper");
      const buttonStyle = button.props.style;

      expect(buttonStyle.width).toBeUndefined();
    });
  });
});
