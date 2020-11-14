import { StyleSheet } from "react-native";

import { Font, Colors } from "style";

export default StyleSheet.create({
  view: {
    flex: 1,
    margin: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 300,
    width: 300,
  },
  imgContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  textContainer: {
    flex: 1,
  },
  quote: {
    paddingTop: 30,
    color: Colors.black,
    fontStyle: "italic",
    fontSize: Font.FontSize.Primary,
  },
  author: {
    paddingTop: 20,
    color: Colors.green50,
    fontWeight: "bold",
    fontSize: Font.FontSize.H3,
  },
});
