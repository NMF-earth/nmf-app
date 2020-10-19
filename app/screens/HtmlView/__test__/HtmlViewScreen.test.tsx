import React from "react";
import { create } from "react-test-renderer";

import { HtmlViewPages } from "../HtmlViewPages";
import HtmlViewScreen from "../HtmlViewScreen";

it("HtmlViewScreen renders correctly", () => {
  const tree = create(<HtmlViewScreen page={HtmlViewPages.methodology} />).toJSON();
  expect(tree).toMatchSnapshot();
});
