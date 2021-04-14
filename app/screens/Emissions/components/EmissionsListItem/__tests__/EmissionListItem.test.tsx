import React from "react";
import { create } from "react-test-renderer";
import { FormattedProvider } from "react-native-globalize";
import {
  FoodType,
  TransportType,
  StreamingType,
  ElectricityType,
  PurchaseType,
  FashionType,
} from "carbon-footprint";

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
        iconName={ui.getIconFromModelType(FoodType.redMeat)}
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
        iconName={ui.getIconFromModelType(FoodType.redMeat)}
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
        iconName={ui.getIconFromModelType(FoodType.whiteMeat)}
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
        iconName={ui.getIconFromModelType(FoodType.chocolate)}
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
        iconName={ui.getIconFromModelType(FoodType.coffee)}
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
        iconName={ui.getIconFromModelType(FoodType.fish)}
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
        iconName={ui.getIconFromModelType(TransportType.boat)}
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
        iconName={ui.getIconFromModelType(TransportType.bus)}
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
        iconName={ui.getIconFromModelType(TransportType.car)}
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
        iconName={ui.getIconFromModelType(TransportType.longHaulFlight)}
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
        iconName={ui.getIconFromModelType(TransportType.mediumHaulFlight)}
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
        iconName={ui.getIconFromModelType(TransportType.motorbike)}
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
        iconName={ui.getIconFromModelType(TransportType.shortHaulFlight)}
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
        iconName={ui.getIconFromModelType(TransportType.train)}
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
        iconName={ui.getIconFromModelType(StreamingType.HDVideo)}
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
        iconName={ui.getIconFromModelType(StreamingType.audioMP3)}
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
        iconName={ui.getIconFromModelType(StreamingType.fullHDVideo)}
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
        iconName={ui.getIconFromModelType(StreamingType.ultraHDVideo)}
      />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionsListItem renders correctly with electricity icon", () => {
  const tree = create(
    <FormattedProvider locale="en">
      <EmissionsListItem
        {...props}
        iconName={ui.getIconFromModelType(ElectricityType.europe)}
      />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionsListItem renders correctly with card icon", () => {
  const tree = create(
    <FormattedProvider locale="en">
      <EmissionsListItem
        {...props}
        iconName={ui.getIconFromModelType(PurchaseType.computer)}
      />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionsListItem renders correctly with shirt icon", () => {
  const tree = create(
    <FormattedProvider locale="en">
      <EmissionsListItem
        {...props}
        iconName={ui.getIconFromModelType(FashionType.coat)}
      />
    </FormattedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
