import { SignUpEmailFirstStepContainer } from "@presentation/screens";
import { fireEvent, render } from "@testing-library/react-native";
import { TestingPublicNavigator, customRender } from "../../utils";

describe("SignUpEmailFirstStep", () => {
  test("Should render screen without errors", () => {
    const tree = customRender(<SignUpEmailFirstStepContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Should navigate to correct screen when go back button is pressed", async () => {
    const { getByTestId, findByTestId } = render(
      <TestingPublicNavigator currentRoute="sign-up" />
    );

    const buttonSignUpWithEmail = getByTestId("button-sign-up-with-email");
    fireEvent.press(buttonSignUpWithEmail);

    const goBackButton = getByTestId("go-back-button");
    fireEvent.press(goBackButton);

    const previousScreen = await findByTestId("sign-up-screen-content");

    expect(previousScreen).toBeTruthy();
  });
});
