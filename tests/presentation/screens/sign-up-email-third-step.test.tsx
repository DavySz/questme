import { SignUpEmailThirdStepContainer } from "@presentation/screens";
import { fireEvent, render } from "@testing-library/react-native";
import { TestingPublicNavigator, customRender } from "../../utils";

describe("SignUpEmailThirdStep", () => {
  test("Should render screen without errors", () => {
    const tree = customRender(<SignUpEmailThirdStepContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Should navigate to correct screen when go back button is pressed", async () => {
    const { getByText, findByTestId, getByTestId } = render(
      <TestingPublicNavigator currentRoute="sign-up-email-second-step" />
    );

    const buttonThirdStep = getByText("Continue");
    fireEvent.press(buttonThirdStep);

    const goBackButton = getByTestId("go-back-button");
    fireEvent.press(goBackButton);

    const previousScreen = await findByTestId(
      "sign-up-email-second-step-screen-content"
    );

    expect(previousScreen).toBeTruthy();
  });
});
