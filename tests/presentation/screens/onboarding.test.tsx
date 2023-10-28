import { Onboarding } from "@presentation/screens/onboarding/onboarding";
import { OnboardingDot } from "@presentation/screens/onboarding/onboarding.dot";
import { slides } from "@presentation/screens/onboarding/slides";
import { ISlide } from "@presentation/screens/onboarding/types";
import { theme } from "@presentation/styles";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import Illustration from "@presentation/assets/illustrations/onboarding-first-illustration.svg";

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
  describe("OnboardingDot", () => {
    test("Should render correct dot component when isSelected", () => {
      const { getByTestId } = render(
        <ThemeProvider theme={theme}>
          <OnboardingDot isSelected />
        </ThemeProvider>
      );

      const dotSelected = getByTestId("is-selected-dot");

      expect(dotSelected).toBeTruthy();
    });

    test("Should render correct dot component when isSelected is false", () => {
      const { getByTestId } = render(
        <ThemeProvider theme={theme}>
          <OnboardingDot isSelected={false} />
        </ThemeProvider>
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

      const { getByTestId } = render(
        <ThemeProvider theme={theme}>
          <Onboarding
            currentIndex={0}
            slides={mockSlides}
            updateCurrentSlideIndex={updateCurrentSlideIndexJest}
          />
        </ThemeProvider>
      );

      const flatList = getByTestId("slides-list");
      expect(flatList.props.data.length).toBe(mockSlides.length);
    });
  });
});
