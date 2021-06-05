import React from "react";
import { View, TouchableOpacity } from "react-native";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

import { navigate } from "navigation";
import "moment/min/locales";
import { Text } from "components";
import { withLocalization, LocalizationContextProps, t } from "utils";

import styles from "./SectionHeader.styles";

interface Props {
  date: Date;
}

const SectionHeader = ({ date, language = "" }: Props & LocalizationContextProps) => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  return (
    <View style={styles.container}>
      <Text.Primary darkGray bold style={styles.text}>
        {moment(date).locale(language).format("MMMM YYYY")}
      </Text.Primary>
      <TouchableOpacity
        onPress={() =>
          navigator.openMonthlyEmissions({
            date,
            monthAndYear: moment(date).locale(language).format("MMMM YYYY"),
          })
        }
      >
        <Text.Secondary blue style={styles.text}>
          {t("EMISSIONS_SCREEN_MORE_INFO")}
        </Text.Secondary>
      </TouchableOpacity>
    </View>
  );
};

export default withLocalization(SectionHeader);
