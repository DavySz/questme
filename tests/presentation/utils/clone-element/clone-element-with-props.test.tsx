import { cloneElementWithProps } from "@presentation/utils/clone-element";

interface Props {
  isValid: boolean;
}

describe("cloneElementWithProps", () => {
  test("Should return the children without props when child is invalid", () => {
    cloneElementWithProps<Props>({
      children: "child",
      props: {
        isValid: false,
      },
    });
  });
});
