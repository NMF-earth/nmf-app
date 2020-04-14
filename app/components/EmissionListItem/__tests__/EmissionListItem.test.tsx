import React from "react";
import renderer from "react-test-renderer";
import { EmissionListItem } from "../EmissionListItem";
import { FormattedProvider } from "react-native-globalize";
import { FoodEnum, TransportEnum } from "carbon-footprint";
import { ui } from "../../../utils";

jest.unmock("../EmissionListItem.tsx");

const props = {
  id: "123",
  title: "170 g of red meat",
  co2value: 2.1,
  onPress: () => {
    // do nothing.
  },
};

it("EmissionListItem renders correctly with redMeat icon", () => {
  const tree = renderer
    .create(
      <FormattedProvider locale="en">
        <EmissionListItem
          {...props}
          iconName={ui.getIconFromModelType(FoodEnum.redMeat)}
        />
      </FormattedProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with whiteMeat icon", () => {
  const tree = renderer
    .create(
      <FormattedProvider locale="en">
        <EmissionListItem
          {...props}
          iconName={ui.getIconFromModelType(FoodEnum.whiteMeat)}
        />
      </FormattedProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with boat icon", () => {
  const tree = renderer
    .create(
      <FormattedProvider locale="en">
        <EmissionListItem
          {...props}
          iconName={ui.getIconFromModelType(TransportEnum.boat)}
        />
      </FormattedProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with bus icon", () => {
  const tree = renderer
    .create(
      <FormattedProvider locale="en">
        <EmissionListItem
          {...props}
          iconName={ui.getIconFromModelType(TransportEnum.bus)}
        />
      </FormattedProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with car icon", () => {
  const tree = renderer
    .create(
      <FormattedProvider locale="en">
        <EmissionListItem
          {...props}
          iconName={ui.getIconFromModelType(TransportEnum.car)}
        />
      </FormattedProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with longHaulFlight icon", () => {
  const tree = renderer
    .create(
      <FormattedProvider locale="en">
        <EmissionListItem
          {...props}
          iconName={ui.getIconFromModelType(TransportEnum.longHaulFlight)}
        />
      </FormattedProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with mediumHaulFlight icon", () => {
  const tree = renderer
    .create(
      <FormattedProvider locale="en">
        <EmissionListItem
          {...props}
          iconName={ui.getIconFromModelType(TransportEnum.mediumHaulFlight)}
        />
      </FormattedProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with motorbike icon", () => {
  const tree = renderer
    .create(
      <FormattedProvider locale="en">
        <EmissionListItem
          {...props}
          iconName={ui.getIconFromModelType(TransportEnum.motorbike)}
        />
      </FormattedProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with shortHaulFlight icon", () => {
  const tree = renderer
    .create(
      <FormattedProvider locale="en">
        <EmissionListItem
          {...props}
          iconName={ui.getIconFromModelType(TransportEnum.shortHaulFlight)}
        />
      </FormattedProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionListItem renders correctly with train icon", () => {
  const tree = renderer
    .create(
      <FormattedProvider locale="en">
        <EmissionListItem
          {...props}
          iconName={ui.getIconFromModelType(TransportEnum.train)}
        />
      </FormattedProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
