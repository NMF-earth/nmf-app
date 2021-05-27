import "react-native";
import React from "react";
import { create } from "react-test-renderer";

import MonthlyEmissions from "../MonthlyEmissions";

describe("<MonthlyEmissions />", () => {
  const defaultProps = {};
  const wrapper = create(<MonthlyEmissions {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
