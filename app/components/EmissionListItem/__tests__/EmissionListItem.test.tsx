import React from "react";
import renderer from "react-test-renderer";
import { EmissionListItem } from "../EmissionListItem";

jest.unmock("../EmissionListItem.tsx");

const TITLE = "170 g of red meat";
const SUBTITLE = "2.1 kg CO2";
const ONPRESS = () => {
  // do nothing.
};

it("EmissionListItem renders correctly by default", () => {
  const tree = renderer
    .create(
      <EmissionListItem onPress={ONPRESS} title={TITLE} subTitle={SUBTITLE} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with food icon", () => {
  const tree = renderer
    .create(
      <EmissionListItem
        onPress={ONPRESS}
        title={TITLE}
        subTitle={SUBTITLE}
        food
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with transport icon", () => {
  const tree = renderer
    .create(
      <EmissionListItem
        onPress={ONPRESS}
        title={TITLE}
        subTitle={SUBTITLE}
        transport
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with custom icon", () => {
  const tree = renderer
    .create(
      <EmissionListItem
        onPress={ONPRESS}
        title={TITLE}
        subTitle={SUBTITLE}
        custom
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
