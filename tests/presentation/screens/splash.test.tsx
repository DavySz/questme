import { SplashContainer } from "@presentation/screens/splash/splash.container";
import { customRender } from "../../utils/custom-render";

describe("Splash", () => {
  test("Should render without errors", () => {
    const tree = customRender(<SplashContainer />);
    expect(tree).toMatchSnapshot();
  });
});
