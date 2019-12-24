import { getStorybookUI, configure } from "@storybook/react-native";
import { loadStories } from "./storyLoader";

import "./rn-addons";

configure(() => {
  loadStories();
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

export default StorybookUIRoot;
