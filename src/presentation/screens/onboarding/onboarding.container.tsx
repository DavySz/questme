import { useRef, useState } from "react";
import { Onboarding } from "./onboarding";
import { FlatList, useWindowDimensions } from "react-native";
import { TChange } from "./types";
import { slides } from "./slides";
import { useNavigation } from "@react-navigation/native";

export const OnboardingContainer = (): ReturnType<React.FC> => {
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef<FlatList>(null);
  const { width } = useWindowDimensions();

  const updateCurrentSlideIndex = (e: TChange) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(currentIndex);
  };

  const handleGoToSignUpScreen = () => {
    navigation.navigate("sign-up");
  };

  const handleGoToLoginScreen = () => {
    navigation.navigate("login");
  };

  return (
    <Onboarding
      updateCurrentSlideIndex={updateCurrentSlideIndex}
      handleGoToSignUpScreen={handleGoToSignUpScreen}
      handleGoToLoginScreen={handleGoToLoginScreen}
      currentIndex={currentIndex}
      ref={slidesRef}
      slides={slides}
    />
  );
};
