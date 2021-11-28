import React from "react";
import { FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { map, pipe, propOr, sum } from "ramda";

import { navigate } from "navigation";
import { EmissionListItem, EmissionListItemProps, Text } from "components";
import { NavStatelessComponent } from "interfaces";

import styles from "./RecurringEmissionsScreen.styles";
import { selectors } from "./ducks";
import navigationOptions from "./RecurringEmissionsScreen.navigationOptions";

const getCO2value = map(propOr(0, "co2value"));
const getAmountCO2 = pipe(getCO2value, sum);

const RecurringEmissionsScreen: NavStatelessComponent = () => {
  const recurringEmissions: Array<EmissionListItemProps> = useSelector(
    selectors.getAllRecurringEmissions
  );

  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const co2value = getAmountCO2(recurringEmissions);

  const renderHeader = () => (
    <View style={styles.containerHeader}>
      <Text.Primary darkGray bold>
        {`${co2value.toFixed(2)} kgCO2eq`}
      </Text.Primary>
    </View>
  );

  return (
    <FlatList<EmissionListItemProps>
      style={styles.container}
      data={recurringEmissions}
      ListHeaderComponent={renderHeader()}
      keyExtractor={({ id }) => id}
      renderItem={({ item: { id, name, title, co2value, iconName, emissionModelType } }) => (
        <EmissionListItem
          id={id}
          isMitigated={false}
          name={name}
          onPress={() => navigator.openEmissionItem({ id, isRecurringEmission: true })}
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
RecurringEmissionsScreen.navigationOptions = navigationOptions;

export default RecurringEmissionsScreen;
