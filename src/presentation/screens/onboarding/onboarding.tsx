import { Button, ScreenTemplate, Text } from "@presentation/components";
import {
  Row,
  AuthWrapper,
  Content,
  Footer,
  ImageWrapper,
  ScrollArea,
} from "./onboarding.styles";
import { slides } from "./slides";
import { OnboardingDot } from "./onboarding.dot";
import { FlatList } from "react-native";
import { IOnboarding, ISlide } from "./types";
import React from "react";

export const Onboarding = React.forwardRef(
  ({ currentIndex, updateCurrentSlideIndex }: IOnboarding, ref: any) => {
    const renderDots = () => {
      return (
        <Row>
          {slides.map((item) => {
            return (
              <OnboardingDot
                isSelected={item.id === currentIndex}
                key={String(item.id)}
              />
            );
          })}
        </Row>
      );
    };

    const renderSlide = (slide: ISlide) => {
      return (
        <ScrollArea>
          <ImageWrapper>{slide.image}</ImageWrapper>
        </ScrollArea>
      );
    };

    return (
      <ScreenTemplate.Root variant="tertiary">
        <Content>
          <FlatList
            ref={ref}
            horizontal
            data={slides}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => renderSlide(item)}
            onMomentumScrollEnd={updateCurrentSlideIndex}
          />
          {renderDots()}
          <Footer>
            <Text.Root align="center" variant="heading-3" color="neutral-black">
              {slides[currentIndex].description}
            </Text.Root>
            <AuthWrapper>
              <Button.Root>
                <Button.Text>Sign Up</Button.Text>
              </Button.Root>
              <Text.Root variant="body-normal-regular" color="neutral-gey-2">
                Already have an account?{" "}
                <Text.Root variant="body-normal-medium" color="primary">
                  Login
                </Text.Root>
              </Text.Root>
            </AuthWrapper>
          </Footer>
        </Content>
      </ScreenTemplate.Root>
    );
  }
);
