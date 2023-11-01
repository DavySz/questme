import { InitialContainer } from "@presentation/screens";
import { customRender } from "../../utils/custom-render";

describe("Initial", () => {
  test("Should render without errors", () => {
    const tree = customRender(<InitialContainer />);
    expect(tree).toMatchSnapshot();
  });
});
