import { InitialContainer } from "@presentation/screens";
import { customRender, TestingPublicNavigator } from "../../utils";
import { fireEvent, render } from "@testing-library/react-native";
import { Initial } from "@presentation/screens/initial/initial";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@presentation/styles";

import React from "react";

describe("Initial", () => {
  test("Should render without errors", () => {
    const tree = customRender(<InitialContainer />);
    expect(tree).toMatchSnapshot();
  });

  test("Should call one time mocked method when button is clicked", () => {
    const handleGoToLoginScreenMock = jest.fn();

    const { getByTestId } = customRender(
      <Initial handleGoToLoginScreen={handleGoToLoginScreenMock} />
    );

    const loginButton = getByTestId("button-login");
    fireEvent.press(loginButton);

    expect(handleGoToLoginScreenMock).toHaveBeenCalledTimes(1);
  });

  test("Should navigate to login screen when login button is clicked", async () => {
    const { getByTestId, findByTestId } = render(
      <ThemeProvider theme={theme}>
        <TestingPublicNavigator currentRoute="initial" />
      </ThemeProvider>
    );

    const loginButton = getByTestId("button-login");
    fireEvent.press(loginButton);

    const loginScreen = await findByTestId("login-screen-content");
    expect(loginScreen).toBeTruthy();
  });
});
