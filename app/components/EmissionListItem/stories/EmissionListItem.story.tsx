import React from "react";

import { storiesOf } from "@storybook/react-native";

import { EmissionListItem } from "..";

const init = {
  id: "123",
  title: "170 g of red meat",
  co2value: 2.1,
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
