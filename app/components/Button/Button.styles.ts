import { StyleSheet } from "react-native";

import { Colors } from "style";

const Primary = StyleSheet.create({
  default: {
    backgroundColor: Colors.green50,
  },
});

const Secondary = StyleSheet.create({
  default: {
    backgroundColor: Colors.white,
    borderColor: Colors.green50,
    borderWidth: 2.5,
  },
});

export default { Primary, Secondary };
