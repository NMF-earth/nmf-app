import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import Slider from "@react-native-community/slider";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { useDispatch, useSelector } from "react-redux";

import { Text, Button } from "components";
import { budget } from "ducks";
import { t } from "utils";
import { Colors } from "style";
import { navigate } from "navigation";

import styles from "./MonthlyBudgetScreen.styles";
import navigationOptions from "./MonthlyBudgetScreen.navigationOptions";

const MIN_MONTHLY_CARBON_BUDGET = 0;
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

const MonthlyBudgetScreen = ({ navigation }) => {
  const monthlyBudget = useSelector(budget.selectors.getMonthlyCarbonBudget);
  const navigator = navigate(navigation);

  const [sliderValue, setSliderValue] = useState(monthlyBudget);
  const dispatch = useDispatch();

  const onPressInfo = () =>
    WebBrowser.openBrowserAsync(
      "https://en.wikipedia.org/wiki/List_of_countries_by_carbon_dioxide_emissions_per_capita"
    );

  const onPressSaveBudget = () => {
    dispatch(budget.actions.setMonthlyCarbonBudget(Math.round(sliderValue)));
    navigator.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.personnalBudgetContainer}>
          <Text.Primary bold>
            {t("MONTHLY_BUDGET_SCREEN_SLIDE_TO_SET")}
          </Text.Primary>
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
          {Math.round(sliderValue) + " kg CO2eq"}
        </Text.Primary>
        <View style={styles.worldBudgetContainer}>
          <View style={styles.worldExampleTitle}>
            <Text.Primary bold>
              {t("MONTHLY_BUDGET_SCREEN_CARBON_EMISSIONS_WORLD")}
              <Ionicons
                name="md-information-circle"
                size={26}
                color={Colors.green50}
                onPress={onPressInfo}
              />
            </Text.Primary>
          </View>
          {translationMontlyBudgetCountries.map(CountryExample)}
          <View style={styles.parisAgreement}>
            <Text.Secondary center>
              {t("MONTHLY_BUDGET_SCREEN_PARIS_AGREEMENT")}
              <Text.Secondary bold blue>
                {" 166 kg CO2"}
              </Text.Secondary>
            </Text.Secondary>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button.Primary onPress={onPressSaveBudget} textType={"Primary"}>
          <Text.Primary white center bold>
            {t("MONTHLY_BUDGET_SCREEN_SAVE")}
          </Text.Primary>
        </Button.Primary>
      </View>
    </View>
  );
};

MonthlyBudgetScreen.navigationOptions = navigationOptions;

export default MonthlyBudgetScreen;
