import React from "react";

import { storiesOf } from "@storybook/react-native";

import EmissionListItem from "..";

const init = {
  title: "170 g of red meat",
  subTitle: "2.1 kg CO2",
  onPress: () => alert("onPress")
};

const plane = {
  ...init,
  plane: true
};

const restaurant = {
  ...init,
  restaurant: true
};

const build = {
  ...init,
  build: true
};

storiesOf("EmissionListItem", module)
  .add("plane", () => <EmissionListItem {...plane} />)
  .add("build", () => <EmissionListItem {...build} />)
  .add("restaurant", () => <EmissionListItem {...restaurant} />);
