import React from "react";
import { create } from "react-test-renderer";

import MyLocationScreen from "../MyLocationScreen";

// jest.unmock("../");

it("MyLocationScreen renders correctly", () => {
  const tree = create(<MyLocationScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
