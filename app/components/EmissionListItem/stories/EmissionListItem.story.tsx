import React from "react";

import { storiesOf } from "@storybook/react-native";

import { EmissionListItem } from "..";

const init = {
  title: "170 g of red meat",
  subTitle: "2.1 kg CO2",
  onPress: () => alert("onPress")
};

const transport = {
  ...init,
  transport: true
};

const food = {
  ...init,
  food: true
};

const custom = {
  ...init,
  custom: true
};

storiesOf("EmissionListItem", module)
  .add("transport", () => <EmissionListItem {...transport} />)
  .add("custom", () => <EmissionListItem {...custom} />)
  .add("food", () => <EmissionListItem {...food} />);
