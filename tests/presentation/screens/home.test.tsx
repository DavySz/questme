import {
  RecentQuizCardUI,
  FindFriendsCardUI,
} from "@presentation/screens/home/cards";

import { customRender } from "../../utils";
import React from "react";
import { HomeContainer } from "@presentation/screens";

describe("Home", () => {
  describe("HomeContainer", () => {
    test("Should render without errors", () => {
      const tree = customRender(
        <HomeContainer />
      );

      expect(tree).toMatchSnapshot();
    });
  });

  describe("RecentQuizCardUI", () => {
    test("Should render without errors", () => {
      const tree = customRender(
        <RecentQuizCardUI progress={6} totalQuestions={10} />
      );

      expect(tree).toMatchSnapshot();
    });
  });

  describe("FindFriendsCardUI", () => {
    test("Should render without errors", () => {
      const tree = customRender(<FindFriendsCardUI />);

      expect(tree).toMatchSnapshot();
    });
  });
});
