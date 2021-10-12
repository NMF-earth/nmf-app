import React from "react";
import { create } from "react-test-renderer";
import { View } from "react-native";

import StoreReviewChecker from "..";

describe("StoreReviewChecker tests", () => {
  const children = <View />;
  it("should render correctly", () => {
    const tree = create(<StoreReviewChecker>{children}</StoreReviewChecker>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render children correctly", () => {
    const tree = create(<StoreReviewChecker>{children}</StoreReviewChecker>).toJSON();
    expect(tree.type).toBe(children.type.displayName);
  });
});
