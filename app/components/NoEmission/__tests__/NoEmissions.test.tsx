import React from "react";
import { render } from "@testing-library/react-native";

import NoEmission from "../";

jest.unmock("../");

it("renders correctly NoEmission", () => {
  const tree = render(<NoEmission />).toJSON();
  expect(tree).toMatchSnapshot();
});
