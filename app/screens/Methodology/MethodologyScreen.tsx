import React from "react";
import { ScrollView, View } from "react-native";

import { Text } from "../../components";
import styles from "./MethodologyScreen.styles";
import navigationOptions from "./Methodology.navigationOptions";

const MethodologyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textView}>
        <Text.Primary style={styles.paragraph}>Some Random Text</Text.Primary>
      </View>
    </ScrollView>
  );
};

MethodologyScreen.navigationOptions = navigationOptions;

export default MethodologyScreen;
