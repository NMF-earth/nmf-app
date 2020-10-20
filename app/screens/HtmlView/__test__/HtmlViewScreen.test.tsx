import React from "react";
import { create } from "react-test-renderer";

import HtmlViewScreen from "../HtmlViewScreen";

it("HtmlViewScreen renders correctly", () => {
  const tree = create(<HtmlViewScreen route />).toJSON();
  expect(tree).toMatchSnapshot();
});
