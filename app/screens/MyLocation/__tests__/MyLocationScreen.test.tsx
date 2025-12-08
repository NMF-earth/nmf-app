/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { render } from "@testing-library/react-native";

import MyLocationScreen from "../MyLocationScreen";

// jest.unmock("../");

it("MyLocationScreen renders correctly", () => {
  const tree = render(<MyLocationScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
