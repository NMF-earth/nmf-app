import React from "react";
import { View } from "react-native";
import moment from "moment";

import "moment/min/locales";
import { Text } from "components";
import { withLocalization, LocalizationContextProps, t } from "utils";

import styles from "./SectionHeader.styles";

interface Props {
  date: Date;
  co2value: number;
  monthlyCarbonBudget: number;
}

const SectionHeader = ({
  date,
  co2value = 1,
  monthlyCarbonBudget = 1,
  language = "",
}: Props & LocalizationContextProps) => {
  let percentageBudget = 1;

  if (monthlyCarbonBudget && co2value) {
    percentageBudget = Math.round((co2value / monthlyCarbonBudget) * 100);
    if (percentageBudget < 1) {
      percentageBudget = 1;
    }
  }

  return (
    <View style={styles.container}>
      <Text.Primary darkGray bold style={styles.text}>
        {moment(date).locale(language).format("MMMM YYYY")}
      </Text.Primary>
      {percentageBudget && (
        <Text.Secondary
          red={percentageBudget > 100}
          green={percentageBudget < 100}
        >
          {percentageBudget + " % " + t("EMISSIONS_SCREEN_HEADER_OF_BUDGET")}
        </Text.Secondary>
      )}
    </View>
  );
};

export default withLocalization(SectionHeader);
