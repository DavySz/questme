import { InitialContainer } from "@presentation/screens";
import { customRender } from "../../utils/custom-render";
import { fireEvent } from "@testing-library/react-native";
import { Initial } from "@presentation/screens/initial/initial";

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
});
