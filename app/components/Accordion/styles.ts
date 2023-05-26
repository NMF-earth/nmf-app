import { StyleSheet } from "react-native";

import { Colors } from "style";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const itemStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderColor: Colors.primary10,
    borderRadius: 10,
    borderWidth: 1.5,
    marginTop: 16,
  },
  firstContainer: {
    marginTop: 0,
  },
  icon: {
    color: Colors.secondary,
  },
  titleContainer: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  titleText: {
    color: Colors.black,
    fontSize: 16,
    marginLeft: 8,
    flex: 1,
  },
  descriptionContainer: {
    borderTopColor: Colors.primary10,
    borderTopWidth: 1.5,
    padding: 16,
  },
  descriptionText: {
    color: Colors.black70,
    fontSize: 12,
  },
});
