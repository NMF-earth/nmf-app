import React from "react";
import { render } from "@testing-library/react-native";

import StickersImage from "../";

jest.unmock("../");

it("renders correctly StickersImage with bike image", () => {
  const tree = render(<StickersImage sticker="bike" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly StickersImage with restaurant image", () => {
  const tree = render(<StickersImage sticker="restaurant" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly StickersImage with earth image", () => {
  const tree = render(<StickersImage sticker="earth" />).toJSON();
  expect(tree).toMatchSnapshot();
});
