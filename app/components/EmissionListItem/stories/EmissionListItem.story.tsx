import React from "react";

import { storiesOf } from "@storybook/react-native";

import { EmissionListItem } from "..";
import { FoodEnum, TransportEnum } from "carbon-footprint";
import { ui } from "../../../utils";

const init = {
  id: "123",
  title: "170 g of red meat",
  co2value: 2.1,
  onPress: () => alert("onPress"),
};

/* Food */

const whiteMeat = {
  ...init,
  iconName: ui.getIconFromModelType(FoodEnum.whiteMeat),
};

const redMeat = {
  ...init,
  iconName: ui.getIconFromModelType(FoodEnum.redMeat),
};

/* Transport */

const boat = {
  ...init,
  iconName: ui.getIconFromModelType(TransportEnum.boat),
};

const bus = {
  ...init,
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

storiesOf("EmissionListItem", module)
  .add("whiteMeat", () => <EmissionListItem {...whiteMeat} />)
  .add("redMeat", () => <EmissionListItem {...redMeat} />)
  .add("boat", () => <EmissionListItem {...boat} />)
  .add("bus", () => <EmissionListItem {...bus} />)
  .add("car", () => <EmissionListItem {...car} />)
  .add("longHaulFlight", () => <EmissionListItem {...longHaulFlight} />)
  .add("mediumHaulFlight", () => <EmissionListItem {...mediumHaulFlight} />)
  .add("motorbike", () => <EmissionListItem {...motorbike} />)
  .add("shortHaulFlight", () => <EmissionListItem {...shortHaulFlight} />)
  .add("train", () => <EmissionListItem {...train} />);
