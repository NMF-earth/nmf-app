import { getStorybookUI, configure,addDecorator } from "@storybook/react-native";
import {withKnobs} from "@storybook/addon-knobs"
import { loadStories } from "./storyLoader";

import "./rn-addons";

configure(() => {
  loadStories();
}, module);

addDecorator(withKnobs)
// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

export default StorybookUIRoot;
