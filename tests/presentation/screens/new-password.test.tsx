import { fireEvent, render } from "@testing-library/react-native";
import { TestingPublicNavigator, customRender } from "../../utils";
import { NewPasswordContainer } from "@presentation/screens";

describe("NewPassword", () => {
  test("Should render screen without errors", () => {
    const tree = customRender(<NewPasswordContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Should navigate to correct screen when button reset password is pressed", async () => {
    const { getByTestId, findByTestId } = render(
      <TestingPublicNavigator currentRoute="new-password" />
    );

    const buttonResetPassword = getByTestId("button-reset-password");
    fireEvent.press(buttonResetPassword);

    const screen = await findByTestId("initial-screen-content");

    expect(screen).toBeTruthy();
  });
});
