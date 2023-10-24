import { OnboardingDot } from "@presentation/screens/onboarding/onboarding.dot";
import { slides } from "@presentation/screens/onboarding/slides";
import { theme } from "@presentation/styles";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

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
});
