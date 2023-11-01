import { LoginContainer } from "@presentation/screens";
import { customRender } from "../../utils/custom-render";
describe("Login", () => {
  test("Should render without errors", () => {
    const tree = customRender(<LoginContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
