import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";

import OpenFoodFacts from "../OpenFoodFacts";

jest.unmock("../");

describe("<OpenFoodFacts />", () => {
  const props = { ecoScore: "a", novaGroup: 0, nutriscoreGrade: "a" };

  test("render correctly", () => {
    const wrapper = render(<OpenFoodFacts {...props} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test("render nothing if no data passed", () => {
    const wrapper = render(<OpenFoodFacts />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test("render nothing if bad data passed", () => {
    const badProps = { ecoScore: "y", novaGroup: 10, nutriscoreGrade: "aw" };

    const wrapper = render(<OpenFoodFacts {...badProps} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
