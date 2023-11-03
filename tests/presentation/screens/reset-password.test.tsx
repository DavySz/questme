import { fireEvent, render } from "@testing-library/react-native";
import { TestingPublicNavigator, customRender } from "../../utils";
import { ResetPasswordContainer } from "@presentation/screens";

describe("SignUp", () => {
  test("Should render screen without errors", () => {
    const tree = customRender(<ResetPasswordContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Should navigate to correct screen when go back button is pressed", async () => {
    const { getByTestId, findByTestId } = render(
      <TestingPublicNavigator currentRoute="login" />
    );

    const buttonResetPassword = getByTestId("button-reset-password");
    fireEvent.press(buttonResetPassword);

    const goBackButton = getByTestId("go-back-button");
    fireEvent.press(goBackButton);

    const previousScreen = await findByTestId("login-screen-content");

    expect(previousScreen).toBeTruthy();
  });
});
