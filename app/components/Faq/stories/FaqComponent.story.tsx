import React from "react";
import { storiesOf } from "@storybook/react-native";

import FaqComponent from "..";

storiesOf("FaqComponent", module).add("basic list item", () => (
  <FaqComponent title={"test"} description={"description test"} />
));
