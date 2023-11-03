import { Button, ScreenTemplate, Text } from "@presentation/components";
import {
  Row,
  AuthWrapper,
  Content,
  Footer,
  ImageWrapper,
  ScrollArea,
} from "./onboarding.styles";
import { OnboardingDot } from "./onboarding.dot";
import { FlatList } from "react-native";
import { IOnboarding, ISlide, OnboardingRef } from "./types";
import React from "react";

export const Onboarding = React.forwardRef(
  (props: IOnboarding, ref: OnboardingRef) => {
    const {
      slides,
      currentIndex,
      handleGoToLoginScreen,
      handleGoToSignUpScreen,
      updateCurrentSlideIndex,
    } = props;

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
            bounces={false}
            testID="slides-list"
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
              <Button.Root
                variant="primary"
                testID="button-sign-up"
                onPress={handleGoToSignUpScreen}
              >
                <Button.Text>Sign Up</Button.Text>
              </Button.Root>
              <Text.Root variant="body-normal-regular" color="neutral-gey-2">
                Already have an account?{" "}
                <Text.Root
                  onPress={handleGoToLoginScreen}
                  variant="body-normal-medium"
                  testID="button-login"
                  color="primary"
                >
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
