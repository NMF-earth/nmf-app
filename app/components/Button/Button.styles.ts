import { StyleSheet } from "react-native";

import { Colors } from "style";

const Primary = StyleSheet.create({
  default: {
    backgroundColor: Colors.primary,
  },
});

const Secondary = StyleSheet.create({
  default: {
    backgroundColor: Colors.secondary,
  },
});

const Danger = StyleSheet.create({
  default: {
    backgroundColor: Colors.danger,
  },
});

export default { Primary, Secondary, Danger };
