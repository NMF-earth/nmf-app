import React from "react";
import { create } from "react-test-renderer";

import TabBarIcon from "../TabBarIcon";

it("renders correctly", () => {
  const tree = create(
    <TabBarIcon focused={false} name="ios-information-circle" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
