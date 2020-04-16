import { StyleSheet } from "react-native";
import { Colors, Layout } from "../../../../style";
import { platform } from "../../../../utils";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
    backgroundColor: Colors.white,
    paddingBottom: 14,
    borderRadius: 14,
    borderColor: Colors.linkGreen10,
    borderWidth: 2,
    marginVertical: 24,
    paddingTop: 10,
    marginHorizontal: platform.isIOS ? 0 : 2,
    flex: 1,
  },
  periodContainer: {
    flex: 1,
    alignItems: "center",
    marginVertical: 4,
  },
  header: {
    textTransform: "capitalize",
  },
});
