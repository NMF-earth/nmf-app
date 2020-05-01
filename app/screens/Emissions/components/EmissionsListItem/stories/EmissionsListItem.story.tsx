import React from "react";

import { storiesOf } from "@storybook/react-native";

import EmissionsListItem from "..";
import { FoodEnum, TransportEnum } from "carbon-footprint";
import { ui } from "../../../../../utils";

const init = {
  id: "123",
  isMitigated: false,
  title: "170 g of red meat",
  co2value: 2.1,
  onPress: () => alert("onPress"),
};

/* Food */

const whiteMeat = {
  ...init,
  iconName: ui.getIconFromModelType(FoodEnum.whiteMeat),
};

const coffee = {
  ...init,
  iconName: ui.getIconFromModelType(FoodEnum.coffee),
};

const chocolate = {
  ...init,
  iconName: ui.getIconFromModelType(FoodEnum.chocolate),
};

const fish = {
  ...init,
  iconName: ui.getIconFromModelType(FoodEnum.fish),
};

const redMeat = {
  ...init,
  isMitigated: true,
  iconName: ui.getIconFromModelType(FoodEnum.redMeat),
};

/* Transport */

const boat = {
  ...init,
  iconName: ui.getIconFromModelType(TransportEnum.boat),
};

const bus = {
  ...init,
  isMitigated: true,
  iconName: ui.getIconFromModelType(TransportEnum.bus),
};

const car = {
  ...init,
  iconName: ui.getIconFromModelType(TransportEnum.car),
};

const longHaulFlight = {
  ...init,
  iconName: ui.getIconFromModelType(TransportEnum.longHaulFlight),
};

const mediumHaulFlight = {
  ...init,
  iconName: ui.getIconFromModelType(TransportEnum.mediumHaulFlight),
};

const motorbike = {
  ...init,
  isMitigated: true,
  iconName: ui.getIconFromModelType(TransportEnum.motorbike),
};

const shortHaulFlight = {
  ...init,
  iconName: ui.getIconFromModelType(TransportEnum.shortHaulFlight),
};

const train = {
  ...init,
  iconName: ui.getIconFromModelType(TransportEnum.train),
};

storiesOf("EmissionsListItem", module)
  .add("whiteMeat", () => <EmissionsListItem {...whiteMeat} />)
  .add("redMeat", () => <EmissionsListItem {...redMeat} />)
  .add("fish", () => <EmissionsListItem {...fish} />)
  .add("chocolate", () => <EmissionsListItem {...chocolate} />)
  .add("coffee", () => <EmissionsListItem {...coffee} />)
  .add("boat", () => <EmissionsListItem {...boat} />)
  .add("bus", () => <EmissionsListItem {...bus} />)
  .add("car", () => <EmissionsListItem {...car} />)
  .add("longHaulFlight", () => <EmissionsListItem {...longHaulFlight} />)
  .add("mediumHaulFlight", () => <EmissionsListItem {...mediumHaulFlight} />)
  .add("motorbike", () => <EmissionsListItem {...motorbike} />)
  .add("shortHaulFlight", () => <EmissionsListItem {...shortHaulFlight} />)
  .add("train", () => <EmissionsListItem {...train} />);
