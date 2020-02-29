import React from "react";
import { ScrollView } from "react-native";
import { Text } from "../../components";
import styles from "./AboutScreen.styles";
import navigationOptions from "./AboutScreen.navigationOptions";

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text.Primary>a propros</Text.Primary>
    </ScrollView>
  );
};

AboutScreen.navigationOptions = navigationOptions;

export default AboutScreen;
