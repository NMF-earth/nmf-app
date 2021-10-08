import "react-native";
import React from "react";
import { create } from "react-test-renderer";

import FaqComponent from "../FaqComponent";

describe("<FaqComponent />", () => {
  test("FaqComponent renders correctly without description", () => {
    const tree = create(<FaqComponent title={"text"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("FaqComponent renders correctly with title and description", () => {
    const tree = create(<FaqComponent title={"text"} description={"LOREM IPSUM"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
