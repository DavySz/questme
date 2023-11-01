import { Onboarding } from "@presentation/screens/onboarding/onboarding";
import { OnboardingDot } from "@presentation/screens/onboarding/onboarding.dot";
import { slides } from "@presentation/screens/onboarding/slides";
import { ISlide } from "@presentation/screens/onboarding/types";
import Illustration from "@presentation/assets/illustrations/onboarding-first-illustration.svg";
import { OnboardingContainer } from "@presentation/screens";
import { customRender } from "../../utils/custom-render";

const mockSlides: ISlide[] = [
  {
    id: 1,
    description: "slide1",
    image: <Illustration />,
  },
  {
    id: 2,
    description: "slide2",
    image: <Illustration />,
  },
  {
    id: 3,
    description: "slide3",
    image: <Illustration />,
  },
];

describe("Onboarding", () => {
  describe("Onboarding Container", () => {
    test("Should render onboarding container without errors", () => {
      const tree = customRender(<OnboardingContainer />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe("OnboardingDot", () => {
    test("Should render correct dot component when isSelected", () => {
      const { getByTestId } = customRender(<OnboardingDot isSelected />);

      const dotSelected = getByTestId("is-selected-dot");

      expect(dotSelected).toBeTruthy();
    });

    test("Should render correct dot component when isSelected is false", () => {
      const { getByTestId } = customRender(
        <OnboardingDot isSelected={false} />
      );

      const dotSelected = getByTestId("is-not-selected-dot");

      expect(dotSelected).toBeTruthy();
    });
  });

  describe("slides", () => {
    test("Should slides have 3 items", () => {
      expect(slides.length).toBe(3);
    });
  });

  describe("Onboarding", () => {
    test("Should slides have 3 items in FlatList component", () => {
      const updateCurrentSlideIndexJest = jest.fn();

      const { getByTestId } = customRender(
        <Onboarding
          currentIndex={0}
          slides={mockSlides}
          updateCurrentSlideIndex={updateCurrentSlideIndexJest}
        />
      );

      const flatList = getByTestId("slides-list");
      expect(flatList.props.data.length).toBe(mockSlides.length);
    });
  });
});
