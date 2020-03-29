import { StyleSheet } from "react-native";
import { platform } from "../../utils";
import { Colors } from "../colors";

export default StyleSheet.create({
  header: {
    shadowColor: platform.isIOS ? Colors.darkLink70 : null,
    shadowOffset: {
      width: platform.isIOS ? 0 : 0,
      height: platform.isIOS ? 2 : 2
    },
    shadowOpacity: platform.isIOS ? 0.25 : 0.25,
    shadowRadius: platform.isIOS ? 3.84 : 3.84,
    elevation: platform.isIOS ? 5 : 5
  }
});
