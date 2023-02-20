import React from "react";
import { create } from "react-test-renderer";
import { GlobalizeProvider } from "react-native-globalize";
import * as reactRedux from "react-redux";
import {
  FoodType,
  TransportType,
  StreamingType,
  ElectricityType,
  PurchaseType,
  FashionType,
  MealType,
} from "carbon-footprint";

import { userPreferences } from "ducks";
import { ui } from "utils";
import { EmissionModelType } from "interfaces";

import { EmissionListItem } from "../EmissionListItem";

jest.unmock("../EmissionListItem");

const props = {
  id: "123",
  isMitigated: false,
  title: "170 g of red meat",
  co2value: 2.1,
  emissionModelType: "custom" as EmissionModelType,
  onPress: () => {
    // do nothing.
  },
};

const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

beforeEach(() => {
  useSelectorMock.mockImplementation(userPreferences.selectors.getUseMetricUnits);
});

it("EmissionListItem renders correctly if mitigated", () => {
  const tree = create(
    <GlobalizeProvider locale="en">
      <EmissionListItem
        {...props}
        isMitigated
        iconName={ui.getIconFromModelType(FoodType.redMeat)}
      />
    </GlobalizeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with redMeat icon", () => {
  const tree = create(
    <GlobalizeProvider locale="en">
      <EmissionListItem {...props} iconName={ui.getIconFromModelType(FoodType.redMeat)} />
    </GlobalizeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with whiteMeat icon", () => {
  const tree = create(
    <GlobalizeProvider locale="en">
      <EmissionListItem {...props} iconName={ui.getIconFromModelType(FoodType.whiteMeat)} />
    </GlobalizeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with chocolate icon", () => {
  const tree = create(
    <GlobalizeProvider locale="en">
      <EmissionListItem {...props} iconName={ui.getIconFromModelType(FoodType.chocolate)} />
    </GlobalizeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with coffee icon", () => {
  const tree = create(
    <GlobalizeProvider locale="en">
      <EmissionListItem {...props} iconName={ui.getIconFromModelType(FoodType.coffee)} />
    </GlobalizeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with fish icon", () => {
  const tree = create(
    <GlobalizeProvider locale="en">
      <EmissionListItem {...props} iconName={ui.getIconFromModelType(FoodType.fish)} />
    </GlobalizeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with boat icon", () => {
  const tree = create(
    <GlobalizeProvider locale="en">
      <EmissionListItem {...props} iconName={ui.getIconFromModelType(TransportType.boat)} />
    </GlobalizeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with bus icon", () => {
  const tree = create(
    <GlobalizeProvider locale="en">
      <EmissionListItem {...props} iconName={ui.getIconFromModelType(TransportType.bus)} />
    </GlobalizeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with car icon", () => {
  const tree = create(
    <GlobalizeProvider locale="en">
      <EmissionListItem {...props} iconName={ui.getIconFromModelType(TransportType.car)} />
    </GlobalizeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with longHaulFlight icon", () => {
  const tree = create(
    <GlobalizeProvider locale="en">
      <EmissionListItem
        {...props}
        iconName={ui.getIconFromModelType(TransportType.longHaulFlight)}
      />
    </GlobalizeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with mediumHaulFlight icon", () => {
  const tree = create(
    <GlobalizeProvider locale="en">
      <EmissionListItem
        {...props}
        iconName={ui.getIconFromModelType(TransportType.mediumHaulFlight)}
      />
    </GlobalizeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with motorbike icon", () => {
  const tree = create(
    <GlobalizeProvider locale="en">
      <EmissionListItem {...props} iconName={ui.getIconFromModelType(TransportType.motorbike)} />
    </GlobalizeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with shortHaulFlight icon", () => {
  const tree = create(
    <GlobalizeProvider locale="en">
      <EmissionListItem
        {...props}
        iconName={ui.getIconFromModelType(TransportType.shortHaulFlight)}
      />
    </GlobalizeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with train icon", () => {
  const tree = create(
    <GlobalizeProvider locale="en">
      <EmissionListItem {...props} iconName={ui.getIconFromModelType(TransportType.train)} />
    </GlobalizeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with hd video icon", () => {
  const tree = create(
    <GlobalizeProvider locale="en">
      <EmissionListItem {...props} iconName={ui.getIconFromModelType(StreamingType.HDVideo)} />
    </GlobalizeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with audio icon", () => {
  const tree = create(
    <GlobalizeProvider locale="en">
      <EmissionListItem {...props} iconName={ui.getIconFromModelType(StreamingType.audioMP3)} />
    </GlobalizeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with full hd video icon", () => {
  const tree = create(
    <GlobalizeProvider locale="en">
      <EmissionListItem {...props} iconName={ui.getIconFromModelType(StreamingType.fullHDVideo)} />
    </GlobalizeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with ultra hd video icon", () => {
  const tree = create(
    <GlobalizeProvider locale="en">
      <EmissionListItem {...props} iconName={ui.getIconFromModelType(StreamingType.ultraHDVideo)} />
    </GlobalizeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with electricity icon", () => {
  const tree = create(
    <GlobalizeProvider locale="en">
      <EmissionListItem {...props} iconName={ui.getIconFromModelType(ElectricityType.europe)} />
    </GlobalizeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with card icon", () => {
  const tree = create(
    <GlobalizeProvider locale="en">
      <EmissionListItem {...props} iconName={ui.getIconFromModelType(PurchaseType.computer)} />
    </GlobalizeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with shirt icon", () => {
  const tree = create(
    <GlobalizeProvider locale="en">
      <EmissionListItem {...props} iconName={ui.getIconFromModelType(FashionType.coat)} />
    </GlobalizeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with meal icon", () => {
  const tree = create(
    <GlobalizeProvider locale="en">
      <EmissionListItem {...props} iconName={ui.getIconFromModelType(MealType.mediumMeat)} />
    </GlobalizeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
