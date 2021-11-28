import React from "react";
import { FlatList, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { map, pipe, propOr, sum } from "ramda";

import { navigate } from "navigation";
import { EmissionListItem, EmissionListItemProps, Text } from "components";
import { budget } from "ducks";
import { t } from "utils";
import { NavStatelessComponent } from "interfaces";

import { selectors } from "./ducks";
import styles from "./MonthlyEmissionsScreen.styles";
import navigationOptions from "./MonthlyEmissionsScreen.navigationOptions";

const getCO2value = map(propOr(0, "co2value"));
const getAmountCO2 = pipe(getCO2value, sum);

const MonthlyEmissions: NavStatelessComponent = () => {
  const route = useRoute();
  const monthlyCarbonBudget = useSelector(budget.selectors.getMonthlyCarbonBudget);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const date = route.params?.date;
  const emissions: Array<EmissionListItemProps> = useSelector((state) =>
    selectors.getEmissions(state, date)
  );

  const navigation = useNavigation();
  const navigator = navigate(navigation);

  let percentageBudget = 1;
  const co2value = getAmountCO2(emissions);

  if (monthlyCarbonBudget && co2value) {
    percentageBudget = Math.round((co2value / monthlyCarbonBudget) * 100);
    if (percentageBudget < 1) {
      percentageBudget = 1;
    }
  }

  const renderHeader = () => (
    <View style={styles.containerHeader}>
      <Text.Primary darkGray bold>
        {`${co2value.toFixed(2)} kgCO2eq`}
      </Text.Primary>
      {percentageBudget && (
        <Text.Secondary orange={percentageBudget > 100} green={percentageBudget < 100}>
          {percentageBudget + " % " + t("MONTHLY_EMISSIONS_SCREEN_OF_BUDGET")}
        </Text.Secondary>
      )}
    </View>
  );

  return (
    <FlatList<EmissionListItemProps>
      style={styles.container}
      data={emissions}
      ListHeaderComponent={renderHeader()}
      keyExtractor={({ id }) => id}
      renderItem={({
        item: { id, isMitigated, name, title, co2value, iconName, emissionModelType },
      }) => (
        <EmissionListItem
          id={id}
          isMitigated={isMitigated}
          name={name}
          onPress={() => navigator.openEmissionItem({ id })}
          title={title}
          co2value={co2value}
          iconName={iconName}
          emissionModelType={emissionModelType}
        />
      )}
    />
  );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
MonthlyEmissions.navigationOptions = navigationOptions;

export default MonthlyEmissions;
