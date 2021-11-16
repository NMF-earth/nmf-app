import { StyleSheet } from "react-native";

import { Colors } from "style";

const Primary = StyleSheet.create({
  default: {
    backgroundColor: Colors.green50,
  },
});

const Secondary = StyleSheet.create({
  default: {
    backgroundColor: Colors.blue50,
  },
});

const Danger = StyleSheet.create({
  default: {
    backgroundColor: Colors.red50,
  },
});

export default { Primary, Secondary, Danger };
