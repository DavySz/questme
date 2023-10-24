import { ReactNode } from "react";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";

export interface ISlide {
  description: string;
  image: ReactNode;
  id: number;
}

export interface IOboardingDot {
  isSelected: boolean;
}

export type TChange = NativeSyntheticEvent<NativeScrollEvent>;

export interface IOnboarding {
  updateCurrentSlideIndex: (e: TChange) => void;
  currentIndex: number;
}
