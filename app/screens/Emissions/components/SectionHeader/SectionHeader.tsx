import React from "react";
import { TouchableOpacity } from "react-native";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "style";
import { navigate } from "navigation";
import "moment/min/locales";
import { Text } from "components";
import { withLocalization, LocalizationContextProps, getLocaleForMoment } from "utils";

import styles from "./SectionHeader.styles";

interface Props {
  date: Date;
}

const SectionHeader: React.FC<Props & LocalizationContextProps> = ({ date, language = "" }) => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const monthAndYear = moment(date).locale(getLocaleForMoment(language)).format("MMMM YYYY");
  const onPress = () =>
    navigator.openMonthlyEmissions({
      date,
      monthAndYear,
    });

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text.Primary blue bold style={styles.text}>
        {monthAndYear}
      </Text.Primary>
      <Ionicons
        name={"ios-chevron-forward-outline"}
        size={24}
        style={styles.icon}
        color={Colors.blue50}
      />
    </TouchableOpacity>
  );
};

export default withLocalization(SectionHeader);
