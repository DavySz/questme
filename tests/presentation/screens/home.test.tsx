import {
  RecentQuizCardUI,
  FindFriendsCardUI,
} from "@presentation/screens/home/cards";

import { customRender } from "../../utils";
import React from "react";

describe("Home", () => {
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
