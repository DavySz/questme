import { LoginContainer } from "@presentation/screens";
import { customRender, TestingPublicNavigator } from "../../utils";
import { fireEvent, render } from "@testing-library/react-native";
describe("Login", () => {
  test("Should render without errors", () => {
    const tree = customRender(<LoginContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Should go back to the previous screen when go back button is pressed", async () => {
    const { getByTestId, findByTestId } = render(
      <TestingPublicNavigator currentRoute="initial" />
    );

    const goToLoginButton = getByTestId("button-login");
    fireEvent.press(goToLoginButton);

    const goBackButton = getByTestId("go-back-button");
    fireEvent.press(goBackButton);

    const loginScreen = await findByTestId("initial-screen-content");

    expect(loginScreen).toBeTruthy();
  });
});
