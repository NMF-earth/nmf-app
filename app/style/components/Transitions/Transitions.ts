import { TransitionPresets } from "@react-navigation/stack";

import { platform } from "utils";

const transitions = {
  transitionBetweenScreenPresets: platform.isAndroid
    ? TransitionPresets.FadeFromBottomAndroid
    : null,
};

export default transitions;
