import { fireEvent, render } from "@testing-library/react-native";
import { TestingPublicNavigator, customRender } from "../../utils";
import { LoginContainer } from "@presentation/screens";

describe("SignUp", () => {
  test("Should render screen without errors", () => {
    const tree = customRender(<LoginContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Should navigate to correct screen when go back button is pressed", async () => {
    const { getByTestId, findByTestId } = render(
      <TestingPublicNavigator currentRoute="initial" />
    );

    const buttonSignUp = getByTestId("button-sign-up");
    fireEvent.press(buttonSignUp);

    const buttonGoBack = getByTestId("go-back-button");
    fireEvent.press(buttonGoBack);

    const previousScreen = await findByTestId("initial-screen-content");

    expect(previousScreen).toBeTruthy();
  });
});
