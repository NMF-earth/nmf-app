import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { FormattedNumber } from "react-native-globalize";

import { Colors } from "style";
import { userPreferences } from "ducks";
import { calculation } from "utils";
import { RecurringEmission, Emission, EmissionType } from "interfaces";

import Text from "../Text";
import styles from "./EmissionListItem.styles";

interface AnyEmission extends RecurringEmission, Emission {}

interface EmissionListItemProps extends Partial<AnyEmission> {
  title: string;
  co2value: number;
  iconName: string;
  onPress: () => void;
  /* no used in EmissionListItem so optional */
  emissionType?: EmissionType;
  value?: number;
  creationDate?: string;
  times?: number;
}

const EmissionListItem: React.FC<EmissionListItemProps> = ({
  isMitigated,
  name = "",
  iconName = "md-car",
  title = "",
  co2value = 0,
  onPress,
}) => {
  const useMetricUnits = useSelector(userPreferences.selectors.getUseMetricUnits);
  const getDisplayUnitsValue = calculation.getDisplayUnitsValue;
  const getDisplayUnits = calculation.getDisplayUnits;

  const displayValue: number = getDisplayUnitsValue(co2value, useMetricUnits);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={isMitigated ? styles.mitigatedCircle : styles.notMitigatedCircle} />
        <Ionicons
          name={iconName as keyof typeof Ionicons.glyphMap}
          size={22}
          style={styles.icon}
          color={isMitigated ? Colors.primary : Colors.grey70}
        />
      </View>
      <View style={styles.textContainer}>
        <Text.Primary numberOfLines={1}>{name.length ? name : title}</Text.Primary>
        <View style={styles.detailsContainer}>
          <Text.Tertiary numberOfLines={1} lightGray>
            <FormattedNumber
              maximumFractionDigits={displayValue >= 1 ? 2 : 4}
              value={displayValue}
            />
            {" " + getDisplayUnits(co2value, useMetricUnits)}CO2eq
          </Text.Tertiary>
          {isMitigated && (
            <>
              <Text.Tertiary lightGray>{" • "}</Text.Tertiary>
              <Text.Tertiary green>{"Offset"}</Text.Tertiary>
            </>
          )}
        </View>
      </View>
      <Ionicons
        name={"ios-chevron-forward-outline"}
        size={18}
        style={styles.icon}
        color={Colors.grey70}
      />
    </TouchableOpacity>
  );
};
export { EmissionListItem, EmissionListItemProps };
