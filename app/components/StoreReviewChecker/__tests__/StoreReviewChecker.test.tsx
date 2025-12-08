import React from "react";
import { render } from "@testing-library/react-native";
import { View } from "react-native";

import StoreReviewChecker from "..";

describe("StoreReviewChecker tests", () => {
  const children = <View />;
  it("should render correctly", () => {
    const tree = render(<StoreReviewChecker>{children}</StoreReviewChecker>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render children correctly", () => {
    const tree = render(<StoreReviewChecker>{children}</StoreReviewChecker>).toJSON() as {
      children: Array<{ type: string }>;
    };
    // Children are passed through - first child should be the View
    expect(tree.children[0].type).toBe("View");
  });
});
