import React, { useCallback } from "react";
import { View, ScrollView } from "react-native";
import { ElectricityType, electricity } from "carbon-footprint";
import { useDispatch, useSelector } from "react-redux";

import { Text, SelectableListItem } from "components";
import { userPreferences } from "ducks";
import { t, calculation } from "utils";
import { NavStatelessComponent } from "interfaces";

import navigationOptions from "./MyLocationScreen.navigationOptions";
import styles from "./MyLocationScreen.styles";

const Country: React.FC<{
  selectedCountry: ElectricityType;
  country: ElectricityType;
  onSelectCountry: (country: ElectricityType) => void;
}> = ({ country, onSelectCountry, selectedCountry }) => {
  const onClickCountry = useCallback(() => {
    onSelectCountry?.(country);
  }, [country, onSelectCountry]);

  return (
    <SelectableListItem
      key={country}
      selected={selectedCountry === country}
      title={country.toUpperCase()}
      onPress={onClickCountry}
    />
  );
};

const MyLocationScreen: NavStatelessComponent = () => {
  const dispatch = useDispatch();
  const location = useSelector(userPreferences.selectors.getLocation);

  const onPress = useCallback(
    (country: ElectricityType) => {
      dispatch(userPreferences.actions.updateLocation(country));
    },
    [dispatch]
  );

  return (
    <View style={styles.container}>
      <Text.Primary style={styles.intro}>{t("MY_LOCATION_SCREEN_INTRO")}</Text.Primary>
      <View style={styles.carbonIntensityContainer}>
        <Text.Primary style={styles.carbonIntensity}>
          {t("MY_LOCATION_SCREEN_MY_CARBON_INTENSITY")}
        </Text.Primary>
        <Text.Primary bold green style={styles.carbonIntensity}>
          {calculation.getCarbonIntensityInGramPerKWHromKgPerJoules(
            electricity[ElectricityType[location]]
          )}
        </Text.Primary>
        <Text.Primary bold green style={styles.carbonIntensity}>
          {" gCO₂eq/kWh"}
        </Text.Primary>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {Object.keys(ElectricityType)
          .filter((item) => item != "danmark")
          .map((country: ElectricityType) => (
            <Country
              key={country}
              selectedCountry={location}
              country={country}
              onSelectCountry={onPress}
            />
          ))}
      </ScrollView>
    </View>
  );
};

MyLocationScreen.navigationOptions = navigationOptions();

export default MyLocationScreen;
