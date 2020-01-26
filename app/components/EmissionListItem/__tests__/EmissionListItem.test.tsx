import React from "react";
import renderer from "react-test-renderer";
import { EmissionListItem } from "../EmissionListItem";
import { FormattedProvider } from "react-native-globalize";

jest.unmock("../EmissionListItem.tsx");

const props = {
  id: "123",
  title: "170 g of red meat",
  co2value: 2.1,
  onPress: () => {
    // do nothing.
  }
};

it("EmissionListItem renders correctly by default", () => {
  const tree = renderer.create(
    <FormattedProvider locale="en">
      <EmissionListItem {...props} />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with food icon", () => {
  const tree = renderer.create(
    <FormattedProvider locale="en">
      <EmissionListItem {...props} food />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with transport icon", () => {
  const tree = renderer
  .create(
    <FormattedProvider locale="en">
      <EmissionListItem {...props} transport />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with custom icon", () => {
  const tree = renderer.create(
    <FormattedProvider locale="en">
      <EmissionListItem {...props} custom />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
