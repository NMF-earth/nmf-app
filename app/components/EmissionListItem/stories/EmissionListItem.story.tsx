import React from "react";
import { storiesOf } from "@storybook/react-native";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { FoodType, TransportType } from "carbon-footprint";

import { ui } from "utils";

import { EmissionListItem } from "..";

const foodOptions = {
  whiteMeat: "whiteMeat",
  coffee: "coffee",
  chocolate: "chocolate",
  fish: "fish",
  redMeat: "redMeat",
};
const transportOptions = {
  boat: "boat",
  bus: "bus",
  car: "car",
  LongHaulFlight: "longHaulFlight",
  mediumHaulFlight: "mediumHaulFlight",
  motorbike: "motorbike",
  shortHaulFlight: "shortHaulFlight",
  train: "train",
};

storiesOf("EmissionListItem", module)
  .add("Emission by food", () => {
    const value = select("Type of Food", foodOptions, "coffee");
    return (
      <EmissionListItem
        {...{
          id: "123",
          emissionModelType: FoodType.redMeat,
          isMitigated: boolean("isMitigated", false),
          title: text("title", "170 g of red meats"),
          co2value: number("co2value", 2.1),
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          iconName: ui.getIconFromModelType(value),
          onPress: () => alert(value),
        }}
      />
    );
  })
  .add("Emission by transport", () => {
    const transportValue = select("Type of Transport", transportOptions, "bike");
    return (
      <EmissionListItem
        {...{
          id: "123",
          emissionModelType: TransportType.boat,
          isMitigated: boolean("isMitigated", false),
          title: text("title", "Boat"),
          co2value: number("co2value", 2.1),
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          iconName: ui.getIconFromModelType(transportValue),
          onPress: () => alert(transportValue),
        }}
      />
    );
  });
