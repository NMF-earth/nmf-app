import React from "react";
import { create } from "react-test-renderer";

import StickersImage from "../";

jest.unmock("../");

it("renders correctly StickersImage with bike image", () => {
  const tree = create(<StickersImage sticker="bike" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly StickersImage with restaurant image", () => {
  const tree = create(<StickersImage sticker="restaurant" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly StickersImage with earth image", () => {
  const tree = create(<StickersImage sticker="earth" />).toJSON();
  expect(tree).toMatchSnapshot();
});
