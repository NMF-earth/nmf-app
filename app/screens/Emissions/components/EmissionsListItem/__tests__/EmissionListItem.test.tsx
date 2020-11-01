import React from "react";
import { create } from "react-test-renderer";
import { FormattedProvider } from "react-native-globalize";
import { FoodEnum, TransportEnum, StreamingEnum } from "carbon-footprint";

import { ui } from "utils";

import EmissionsListItem from "../EmissionsListItem";

jest.unmock("../EmissionsListItem");

const props = {
  id: "123",
  isMitigated: false,
  title: "170 g of red meat",
  co2value: 2.1,
  onPress: () => {
    // do nothing.
  },
};

it("EmissionsListItem renders correctly if mitigated", () => {
  const tree = create(
    <FormattedProvider locale="en">
      <EmissionsListItem
        {...props}
        isMitigated
        iconName={ui.getIconFromModelType(FoodEnum.redMeat)}
      />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionsListItem renders correctly with redMeat icon", () => {
  const tree = create(
    <FormattedProvider locale="en">
      <EmissionsListItem
        {...props}
        iconName={ui.getIconFromModelType(FoodEnum.redMeat)}
      />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionsListItem renders correctly with whiteMeat icon", () => {
  const tree = create(
    <FormattedProvider locale="en">
      <EmissionsListItem
        {...props}
        iconName={ui.getIconFromModelType(FoodEnum.whiteMeat)}
      />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionsListItem renders correctly with chocolate icon", () => {
  const tree = create(
    <FormattedProvider locale="en">
      <EmissionsListItem
        {...props}
        iconName={ui.getIconFromModelType(FoodEnum.chocolate)}
      />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionsListItem renders correctly with coffee icon", () => {
  const tree = create(
    <FormattedProvider locale="en">
      <EmissionsListItem
        {...props}
        iconName={ui.getIconFromModelType(FoodEnum.coffee)}
      />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionsListItem renders correctly with fish icon", () => {
  const tree = create(
    <FormattedProvider locale="en">
      <EmissionsListItem
        {...props}
        iconName={ui.getIconFromModelType(FoodEnum.fish)}
      />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionsListItem renders correctly with boat icon", () => {
  const tree = create(
    <FormattedProvider locale="en">
      <EmissionsListItem
        {...props}
        iconName={ui.getIconFromModelType(TransportEnum.boat)}
      />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionsListItem renders correctly with bus icon", () => {
  const tree = create(
    <FormattedProvider locale="en">
      <EmissionsListItem
        {...props}
        iconName={ui.getIconFromModelType(TransportEnum.bus)}
      />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionsListItem renders correctly with car icon", () => {
  const tree = create(
    <FormattedProvider locale="en">
      <EmissionsListItem
        {...props}
        iconName={ui.getIconFromModelType(TransportEnum.car)}
      />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionsListItem renders correctly with longHaulFlight icon", () => {
  const tree = create(
    <FormattedProvider locale="en">
      <EmissionsListItem
        {...props}
        iconName={ui.getIconFromModelType(TransportEnum.longHaulFlight)}
      />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionsListItem renders correctly with mediumHaulFlight icon", () => {
  const tree = create(
    <FormattedProvider locale="en">
      <EmissionsListItem
        {...props}
        iconName={ui.getIconFromModelType(TransportEnum.mediumHaulFlight)}
      />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionsListItem renders correctly with motorbike icon", () => {
  const tree = create(
    <FormattedProvider locale="en">
      <EmissionsListItem
        {...props}
        iconName={ui.getIconFromModelType(TransportEnum.motorbike)}
      />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionsListItem renders correctly with shortHaulFlight icon", () => {
  const tree = create(
    <FormattedProvider locale="en">
      <EmissionsListItem
        {...props}
        iconName={ui.getIconFromModelType(TransportEnum.shortHaulFlight)}
      />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionsListItem renders correctly with train icon", () => {
  const tree = create(
    <FormattedProvider locale="en">
      <EmissionsListItem
        {...props}
        iconName={ui.getIconFromModelType(TransportEnum.train)}
      />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionsListItem renders correctly with hd video icon", () => {
  const tree = create(
    <FormattedProvider locale="en">
      <EmissionsListItem
        {...props}
        iconName={ui.getIconFromModelType(StreamingEnum.HDVideo)}
      />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionsListItem renders correctly with audio icon", () => {
  const tree = create(
    <FormattedProvider locale="en">
      <EmissionsListItem
        {...props}
        iconName={ui.getIconFromModelType(StreamingEnum.audioMP3)}
      />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionsListItem renders correctly with full hd video icon", () => {
  const tree = create(
    <FormattedProvider locale="en">
      <EmissionsListItem
        {...props}
        iconName={ui.getIconFromModelType(StreamingEnum.fullHDVideo)}
      />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionsListItem renders correctly with ultra hd video icon", () => {
  const tree = create(
    <FormattedProvider locale="en">
      <EmissionsListItem
        {...props}
        iconName={ui.getIconFromModelType(StreamingEnum.ultraHDVideo)}
      />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
