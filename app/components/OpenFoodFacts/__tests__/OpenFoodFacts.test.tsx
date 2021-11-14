import "react-native";
import React from "react";
import { create } from "react-test-renderer";

import OpenFoodFacts from "../OpenFoodFacts";

jest.unmock("../");

describe("<OpenFoodFacts />", () => {
  const props = { ecoScore: "a", novaGroup: 0, nutriscoreGrade: "a" };

  test("render correctly", () => {
    const wrapper = create(<OpenFoodFacts {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("render nothing if no data passed", () => {
    const wrapper = create(<OpenFoodFacts />);
    expect(wrapper).toMatchSnapshot();
  });

  test("render nothing if bad data passed", () => {
    const badProps = { ecoScore: "y", novaGroup: 10, nutriscoreGrade: "aw" };

    const wrapper = create(<OpenFoodFacts {...badProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
