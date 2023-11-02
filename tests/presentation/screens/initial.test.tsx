import { InitialContainer } from "@presentation/screens";
import { customRender, TestingPublicNavigator } from "../../utils";
import { fireEvent, render } from "@testing-library/react-native";
import { Initial } from "@presentation/screens/initial/initial";

import React from "react";

describe("Initial", () => {
  test("Should render without errors", () => {
    const tree = customRender(<InitialContainer />);
    expect(tree).toMatchSnapshot();
  });

  test("Should call one time mocked method when button is clicked", () => {
    const handleGoToLoginScreenMock = jest.fn();
    const handleGoToSignUpScreenMock = jest.fn();

    const { getByTestId } = customRender(
      <Initial
        handleGoToSignUpScreen={handleGoToSignUpScreenMock}
        handleGoToLoginScreen={handleGoToLoginScreenMock}
      />
    );

    const loginButton = getByTestId("button-login");
    fireEvent.press(loginButton);

    expect(handleGoToLoginScreenMock).toHaveBeenCalledTimes(1);
  });

  test("Should navigate to login screen when login button is clicked", async () => {
    const { getByTestId, findByTestId } = render(
      <TestingPublicNavigator currentRoute="initial" />
    );

    const loginButton = getByTestId("button-login");
    fireEvent.press(loginButton);

    const loginScreen = await findByTestId("login-screen-content");
    expect(loginScreen).toBeTruthy();
  });

  test("Should navigate to sign-up screen when sign-up button is clicked", async () => {
    const { getByTestId, findByTestId } = render(
      <TestingPublicNavigator currentRoute="initial" />
    );

    const loginButton = getByTestId("button-sign-up");
    fireEvent.press(loginButton);

    const loginScreen = await findByTestId("sign-up-screen-content");
    expect(loginScreen).toBeTruthy();
  });
});
