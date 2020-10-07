import React from "react";
import { View, ScrollView } from "react-native";
import { ElectricityEnum, electricity } from "carbon-footprint";
import { useDispatch, useSelector } from "react-redux";

import { userPreferences } from "ducks";

import { Text, SelectableListItem } from "../../components";
import { t, calculation } from "../../utils";
import navigationOptions from "./MyLocationScreen.navigationOptions";
import styles from "./MyLocationScreen.styles";

const MyLocationScreen = () => {
  const dispatch = useDispatch();
  const location = useSelector(userPreferences.selectors.getLocation);

  const onPress = (country: ElectricityEnum) => {
    dispatch(userPreferences.actions.updateLocation(country));
  };

  return (
    <View style={styles.container}>
      <Text.Primary style={styles.intro}>
        {t("MY_LOCATION_SCREEN_INTRO")}
      </Text.Primary>
      <View style={styles.carbonIntensityContainer}>
        <Text.Primary style={styles.carbonIntensity}>
          {t("MY_LOCATION_SCREEN_MY_CARBON_INTENSITY")}
        </Text.Primary>
        <Text.Primary bold green style={styles.carbonIntensity}>
          {calculation.getCarbonIntensityInGramPerKWHromKgPerJoules(
            electricity[ElectricityEnum[location]]
          )}
        </Text.Primary>
        <Text.Primary bold green style={styles.carbonIntensity}>
          {" gCO₂eq/kWh"}
        </Text.Primary>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {Object.keys(ElectricityEnum).map((item: ElectricityEnum) => (
          <SelectableListItem
            key={item}
            selected={location === item}
            title={item.toUpperCase()}
            onPress={() => onPress(item)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

MyLocationScreen.navigationOptions = navigationOptions;

export default MyLocationScreen;
