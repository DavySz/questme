import { Input } from "@presentation/components/input";
import { act, waitFor } from "@testing-library/react-native";

import LockIcon from "@presentation/assets/icons/lock-icon.svg";
import { View } from "react-native";

import { customRender } from "../../utils/custom-render";
describe("Input", () => {
  test("Should render input without errors", () => {
    const tree = customRender(
      <>
        <Input.Label>test-label</Input.Label>
        <Input.Root>
          <Input.Icon icon={LockIcon} />
          <Input.Text />
        </Input.Root>
      </>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("Should update isFocused state to true when onFocus has been called", async () => {
    const { getByTestId } = customRender(
      <View>
        <View testID="view-outside" />
        <Input.Label>test-label</Input.Label>
        <Input.Root>
          <Input.Icon icon={LockIcon} />
          <Input.Text />
        </Input.Root>
      </View>
    );

    const inputWrapper = getByTestId("input-wrapper");

    act(() => {
      getByTestId("custom-input").props.onFocus();
    });

    await waitFor(() => expect(inputWrapper.props.isFocused).toBe(true));
  });

  test("Should update isFocused state to false when onBlur has been called", async () => {
    const { getByTestId } = customRender(
      <View>
        <View testID="view-outside" />
        <Input.Label>test-label</Input.Label>
        <Input.Root>
          <Input.Icon icon={LockIcon} />
          <Input.Text />
        </Input.Root>
      </View>
    );

    const inputWrapper = getByTestId("input-wrapper");

    expect(inputWrapper.props.isFocused).toBe(false);

    act(() => {
      getByTestId("custom-input").props.onFocus();
    });

    await waitFor(() => expect(inputWrapper.props.isFocused).toBe(true));

    act(() => {
      getByTestId("custom-input").props.onBlur();
    });

    await waitFor(() => expect(inputWrapper.props.isFocused).toBe(false));
  });
});
