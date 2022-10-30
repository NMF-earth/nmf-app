// import React from "react";
// import { View, ViewStyle } from "react-native";
// import { storiesOf } from "@storybook/react-native";
// import { text, boolean } from "@storybook/addon-knobs";

// import Button from "..";

// const DEFAULT_TEXT = "Fake button";
// const onPressFake = () => {
//   // do nothing.
// };

// const container: ViewStyle = { flexDirection: "row", margin: 20 };

// storiesOf("Button", module)
//   .add("Primary", () => (
//     <View style={container}>
//       <Button.Primary
//         fullWidth={boolean("FullWidth", false)}
//         onPress={onPressFake}
//         text={text("Title", DEFAULT_TEXT)}
//       />
//     </View>
//   ))
//   .add("Secondary", () => (
//     <View style={container}>
//       <Button.Secondary
//         fullWidth={boolean("FullWidth", false)}
//         onPress={onPressFake}
//         text={text("Title", DEFAULT_TEXT)}
//       />
//     </View>
//   ))
//   .add("Danger", () => (
//     <View style={container}>
//       <Button.Danger
//         fullWidth={boolean("FullWidth", false)}
//         onPress={onPressFake}
//         text={text("Title", DEFAULT_TEXT)}
//       />
//     </View>
//   ));
