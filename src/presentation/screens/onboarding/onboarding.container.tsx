import { useRef, useState } from "react";
import { Onboarding } from "./onboarding";
import { FlatList, useWindowDimensions } from "react-native";
import { TChange } from "./types";
import { slides } from "./slides";

export const OnboardingContainer = (): ReturnType<React.FC> => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef<FlatList>(null);
  const { width } = useWindowDimensions();

  const updateCurrentSlideIndex = (e: TChange) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(currentIndex);
  };

  return (
    <Onboarding
      updateCurrentSlideIndex={updateCurrentSlideIndex}
      currentIndex={currentIndex}
      ref={slidesRef}
      slides={slides}
    />
  );
};
