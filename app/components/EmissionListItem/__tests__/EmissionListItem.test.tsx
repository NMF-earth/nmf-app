import React from "react";
import renderer from "react-test-renderer";
import { EmissionListItem } from "../EmissionListItem";

jest.unmock("../EmissionListItem.tsx");

const props = {
  id: 1,
  title: "170 g of red meat",
  subTitle: "2.1 kg CO2",
  onPress: () => {
    // do nothing.
  }
};

it("EmissionListItem renders correctly by default", () => {
  const tree = renderer.create(<EmissionListItem {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with food icon", () => {
  const tree = renderer.create(<EmissionListItem {...props} food />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with transport icon", () => {
  const tree = renderer
    .create(<EmissionListItem {...props} transport />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with custom icon", () => {
  const tree = renderer.create(<EmissionListItem {...props} custom />).toJSON();
  expect(tree).toMatchSnapshot();
});
