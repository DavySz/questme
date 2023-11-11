import { Card } from "@presentation/components";
import { customRender } from "../../utils";

import PlusIcon from "@presentation/assets/icons/plus-icon.svg";
import { Text } from "react-native";

describe("Card", () => {
  test("Should render component without errors", () => {
    const tree = customRender(
      <Card.Root>
        <Card.Icon icon={PlusIcon} />
        <Card.Group>
          <Text>any-children</Text>
        </Card.Group>
      </Card.Root>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("Should render correct icon when color is passed", () => {
    const { findByTestId } = customRender(
      <Card.Root>
        <Card.Icon icon={PlusIcon} color="neutral-black" />
      </Card.Root>
    );

    expect(findByTestId("icon-with-color")).toBeTruthy();
  });
});
