import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Slider from "@react-native-community/slider";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { useDispatch, useSelector } from "react-redux";

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

const translationMontlyBudgetCountries = [
  "MONTHLY_BUDGET_SCREEN_LUXEMBOURG",
  "MONTHLY_BUDGET_SCREEN_UNITED_STATES",
  "MONTHLY_BUDGET_SCREEN_JAPAN",
  "MONTHLY_BUDGET_SCREEN_SWEDEN",
  "MONTHLY_BUDGET_SCREEN_FRANCE",
  "MONTHLY_BUDGET_SCREEN_CHINA",
  "MONTHLY_BUDGET_SCREEN_BRAZIL",
  "MONTHLY_BUDGET_SCREEN_INDIA",
  "MONTHLY_BUDGET_SCREEN_ETHIOPIA",
];

const CountryExample = (translation, index) => (
  <Text.Secondary center key={index} style={styles.worldExampleItem}>
    {t(translation)}
  </Text.Secondary>
);

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
          minimumTrackTintColor={Colors.green50}
          maximumTrackTintColor={Colors.grey}
          thumbTintColor={Colors.green50}
          style={styles.slider}
          maximumValue={MAX_MONTHLY_CARBON_BUDGET}
          minimumValue={MIN_MONTHLY_CARBON_BUDGET}
          value={sliderValue}
          onSlidingComplete={setSliderValue}
        />
        <Text.Primary lightGray>
          {Math.round(getDisplayUnitsValue(sliderValue, useMetricUnits))}{" "}
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
                color={Colors.blue50}
                onPress={onPressInfoWorldEmission}
              />
            </Text.Primary>
          </View>
          {translationMontlyBudgetCountries.map(CountryExample)}
          <View style={styles.parisAgreement}>
            <Text.Secondary center>
              {t("MONTHLY_BUDGET_SCREEN_PARIS_AGREEMENT")}
              <Ionicons
                name="md-information-circle"
                size={26}
                color={Colors.blue50}
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
