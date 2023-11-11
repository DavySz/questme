import { CustomNavigationButton } from "@presentation/components";
import { customRender } from "../../utils";

import PlusIcon from "@presentation/assets/icons/plus-icon.svg";

describe("CustomNavigationButton", () => {
  test("Should render component without errors", () => {
    const tree = customRender(
      <CustomNavigationButton.Root>
        <CustomNavigationButton.Icon icon={PlusIcon} />
      </CustomNavigationButton.Root>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("Should render correct icon when color is passed", () => {
    const { findByTestId } = customRender(
      <CustomNavigationButton.Root>
        <CustomNavigationButton.Icon icon={PlusIcon} color="neutral-black" />
      </CustomNavigationButton.Root>
    );

    expect(findByTestId("icon-with-color")).toBeTruthy();
  });
});
