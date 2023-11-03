import { ReactNode } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

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
  handleGoToSignUpScreen: () => void;
  handleGoToLoginScreen: () => void;
  currentIndex: number;
  slides: ISlide[];
}

export type OnboardingRef = React.LegacyRef<FlatList<ISlide>>;
