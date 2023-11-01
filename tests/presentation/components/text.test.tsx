import { Text } from "@presentation/components";
import { customRender } from "../../utils/custom-render";

describe("Text", () => {
  test("Should render without errors", () => {
    const tree = customRender(
      <Text.Root
        align="center"
        color="company-facebook"
        variant="body-large-medium"
      >
        any-text
      </Text.Root>
    );

    expect(tree).toMatchSnapshot();
  });

  test("Should align text center if prop align center is passed", () => {
    const { getByText } = customRender(
      <Text.Root
        align="center"
        color="company-facebook"
        variant="body-large-medium"
      >
        any-text
      </Text.Root>
    );
    const text = getByText("any-text");

    expect(text.props.style.textAlign).toBe("center");
  });
});
