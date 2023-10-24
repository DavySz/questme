import { ISlide } from "./types";
import FirstSlideIll from "@presentation/assets/illustrations/onboarding-first-illustration.svg";
import SecondSlideIll from "@presentation/assets/illustrations/onboarding-second-illustration.svg";
import ThirdSlideIll from "@presentation/assets/illustrations/onboarding-third-illustration.svg";

export const slides: ISlide[] = [
  {
    id: 0,
    image: <FirstSlideIll />,
    description: "Create gamified quizzes becomes simple",
  },
  {
    id: 1,
    image: <SecondSlideIll />,
    description: "Find quizzes to test out your knowledge",
  },
  {
    id: 2,
    image: <ThirdSlideIll />,
    description: "Take part in challenges with friends",
  },
];
