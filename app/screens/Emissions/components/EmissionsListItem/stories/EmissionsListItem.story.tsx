import React from "react";
import { storiesOf } from "@storybook/react-native";
import { text, boolean, number, select } from "@storybook/addon-knobs";

import { ui } from "utils";

import EmissionsListItem from "..";

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

storiesOf("EmissionsListItem", module)
  .add("Emission by food", () => {
    const value = select("Type of Food", foodOptions, "coffee");
    return (
      <EmissionsListItem
        {...{
          id: "123",
          isMitigated: boolean("isMitigated", false),
          title: text("title", "170 g of red meats"),
          co2value: number("co2value", 2.1),
          iconName: ui.getIconFromModelType(value),
          onPress: () => alert(value),
        }}
      />
    );
  })
  .add("Emission by transport", () => {
    const transportValue = select(
      "Type of Transport",
      transportOptions,
      "bike"
    );
    return (
      <EmissionsListItem
        {...{
          id: "123",
          isMitigated: boolean("isMitigated", false),
          title: text("title", "Bike"),
          co2value: number("co2value", 2.1),
          iconName: ui.getIconFromModelType(transportValue),
          onPress: () => alert(transportValue),
        }}
      />
    );
  });
