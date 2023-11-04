import { SignUpEmailSecondStepContainer } from "@presentation/screens";
import { fireEvent, render } from "@testing-library/react-native";
import { TestingPublicNavigator, customRender } from "../../utils";

describe("SignUpEmailSecondStep", () => {
  test("Should render screen without errors", () => {
    const tree = customRender(<SignUpEmailSecondStepContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Should navigate to correct screen when go back button is pressed", async () => {
    const { getByText, findByTestId, getByTestId } = render(
      <TestingPublicNavigator currentRoute="sign-up-email-first-step" />
    );

    const buttonSecondStep = getByText("Continue");
    fireEvent.press(buttonSecondStep);

    const goBackButton = getByTestId("go-back-button");
    fireEvent.press(goBackButton);

    const previousScreen = await findByTestId(
      "sign-up-email-first-step-screen-content"
    );

    expect(previousScreen).toBeTruthy();
  });

  test("Should navigate to third step screen when continue button is clicked", async () => {
    const { getByText, findByTestId } = render(
      <TestingPublicNavigator currentRoute="sign-up-email-second-step" />
    );

    const buttonThirdStep = getByText("Continue");
    fireEvent.press(buttonThirdStep);

    const thirdStepScreen = await findByTestId(
      "sign-up-email-third-step-screen-content"
    );

    expect(thirdStepScreen).toBeTruthy();
  });
});
