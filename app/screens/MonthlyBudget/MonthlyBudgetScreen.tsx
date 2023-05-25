import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Slider from "@react-native-community/slider";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { useDispatch, useSelector } from "react-redux";
import { FormattedNumber } from "react-native-globalize";

import { Text, Button } from "components";
import { budget, userPreferences } from "ducks";
import { t, calculation } from "utils";
import { Colors } from "style";
import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";

import styles from "./MonthlyBudgetScreen.styles";
import navigationOptions from "./MonthlyBudgetScreen.navigationOptions";

const MIN_MONTHLY_CARBON_BUDGET = 10;
const MAX_MONTHLY_CARBON_BUDGET = 1000;

const translationMonthlyBudgetCountries = [
  ["MONTHLY_BUDGET_SCREEN_LUXEMBOURG", 3500],
  ["MONTHLY_BUDGET_SCREEN_UNITED_STATES", 1500],
  ["MONTHLY_BUDGET_SCREEN_JAPAN", 900],
  ["MONTHLY_BUDGET_SCREEN_SWEDEN", 595],
  ["MONTHLY_BUDGET_SCREEN_FRANCE", 575],
  ["MONTHLY_BUDGET_SCREEN_CHINA", 522],
  ["MONTHLY_BUDGET_SCREEN_BRAZIL", 208],
  ["MONTHLY_BUDGET_SCREEN_INDIA", 139],
  ["MONTHLY_BUDGET_SCREEN_ETHIOPIA", 8.3],
];

const CountryExample = (translation, kgCarbonValue, index) => {
  const useMetricUnits = useSelector(userPreferences.selectors.getUseMetricUnits);
  const getDisplayUnitsValue = calculation.getDisplayUnitsValue;
  const getDisplayUnits = calculation.getDisplayUnits;

  return (
    <Text.Secondary center key={index} style={styles.worldExampleItem}>
      {t(translation)}
      <FormattedNumber
        value={Math.round(getDisplayUnitsValue(kgCarbonValue, useMetricUnits))}
      />{" "}
      {getDisplayUnits(kgCarbonValue, useMetricUnits)}
      {"CO2eq"}
    </Text.Secondary>
  );
};

const onPressInfoWorldEmission = () =>
  WebBrowser.openBrowserAsync(
    "https://en.wikipedia.org/wiki/List_of_countries_by_carbon_dioxide_emissions_per_capita"
  );
const onPressInfoParisAgreement = () =>
  WebBrowser.openBrowserAsync("https://en.wikipedia.org/wiki/Under2_Coalition");

const MonthlyBudgetScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const monthlyBudget = useSelector(budget.selectors.getMonthlyCarbonBudget);
  const navigator = navigate(navigation);

  const [sliderValue, setSliderValue] = useState(monthlyBudget);
  const dispatch = useDispatch();

  const onPressSaveBudget = () => {
    dispatch(budget.actions.setMonthlyCarbonBudget(Math.round(sliderValue)));
    navigator.goBack();
  };

  const useMetricUnits = useSelector(userPreferences.selectors.getUseMetricUnits);
  const getDisplayUnitsValue = calculation.getDisplayUnitsValue;
  const getDisplayUnits = calculation.getDisplayUnits;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.personnalBudgetContainer}>
          <Text.Primary bold>{t("MONTHLY_BUDGET_SCREEN_SLIDE_TO_SET")}</Text.Primary>
        </View>
        <Slider
          minimumTrackTintColor={Colors.primary}
          maximumTrackTintColor={Colors.grey}
          thumbTintColor={Colors.primary}
          style={styles.slider}
          maximumValue={MAX_MONTHLY_CARBON_BUDGET}
          minimumValue={MIN_MONTHLY_CARBON_BUDGET}
          value={sliderValue}
          onSlidingComplete={setSliderValue}
        />
        <Text.Primary lightGray>
          <FormattedNumber value={Math.round(getDisplayUnitsValue(sliderValue, useMetricUnits))} />{" "}
          {getDisplayUnits(sliderValue, useMetricUnits)}
          {"CO2eq"}
        </Text.Primary>
        <View style={styles.worldBudgetContainer}>
          <View style={styles.worldExampleTitle}>
            <Text.Primary bold>
              {t("MONTHLY_BUDGET_SCREEN_CARBON_EMISSIONS_WORLD")}
              <Ionicons
                name="md-information-circle"
                size={26}
                color={Colors.secondary}
                onPress={onPressInfoWorldEmission}
              />
            </Text.Primary>
          </View>
          {translationMonthlyBudgetCountries.map((countryArr, idx) =>
            CountryExample(countryArr[0], countryArr[1], idx)
          )}
          <View style={styles.parisAgreement}>
            <Text.Secondary center>
              {t("MONTHLY_BUDGET_SCREEN_PARIS_AGREEMENT")}{" "}
              {Math.round(getDisplayUnitsValue(167, useMetricUnits))}{" "}
              {getDisplayUnits(167, useMetricUnits) + "CO2eq"}
              <Ionicons
                name="md-information-circle"
                size={26}
                color={Colors.secondary}
                onPress={onPressInfoParisAgreement}
              />
            </Text.Secondary>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button.Secondary
          fullWidth
          icon={"save"}
          onPress={onPressSaveBudget}
          text={t("MONTHLY_BUDGET_SCREEN_SAVE")}
        />
      </View>
    </View>
  );
};

MonthlyBudgetScreen.navigationOptions = navigationOptions();

export default MonthlyBudgetScreen;
