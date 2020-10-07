import React from "react";
import { create } from "react-test-renderer";

import NoEmission from "../";

jest.unmock("../");

it("renders correctly NoEmission", () => {
  const tree = create(<NoEmission />).toJSON();
  expect(tree).toMatchSnapshot();
});
