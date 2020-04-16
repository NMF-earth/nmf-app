import React from "react";
import renderer from "react-test-renderer";
import StickersImage from "../";

jest.unmock("../");

it("renders correctly StickersImage with bike image", () => {
  const tree = renderer.create(<StickersImage sticker="bike" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly StickersImage with restaurant image", () => {
  const tree = renderer.create(<StickersImage sticker="restaurant" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly StickersImage with earth image", () => {
  const tree = renderer.create(<StickersImage sticker="earth" />).toJSON();
  expect(tree).toMatchSnapshot();
});
