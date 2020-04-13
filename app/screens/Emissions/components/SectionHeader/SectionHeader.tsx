import React from "react";
import { View } from "react-native";
import moment from "moment";
import "moment/min/locales";
import { Text } from "../../../../components";
import styles from "./SectionHeader.styles";
import { withLocalization } from "../../../../utils";

const SectionHeader = ({ date, language = "" }) => (
  <View style={styles.container}>
    <Text.Primary darkGray bold style={styles.text}>
      {moment(date).locale(language).format("MMMM YYYY")}
    </Text.Primary>
  </View>
);

export default withLocalization(SectionHeader);
