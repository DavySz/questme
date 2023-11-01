import { Divider } from "@presentation/components";
import { customRender } from "../../utils/custom-render";

describe("Divider", () => {
  test("Should render component without errors", () => {
    const tree = customRender(
      <>
        <Divider.Text>any-text</Divider.Text>
        <Divider.Root />
      </>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
