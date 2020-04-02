import React, { useState } from "react";
import { View, Slider, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { useDispatch, useSelector } from "react-redux";

import { Text, Button } from "../../components";
import { Colors } from "../../style";
import styles from "./MonthlyBudgetScreen.styles";
import navigationOptions from "./MonthlyBudgetScreen.navigationOptions";
import { t } from "../../utils";
import { budget } from "../../ducks";
import { navigate } from "../../navigation";

const MIN_MONTHLY_CARBON_BUDGET = 0;
const MAX_MONTHLY_CARBON_BUDGET = 1000;

const translationMontlyBudgetCountries = [
  "MONTHLY_BUDGET_LUXEMBOURG",
  "MONTHLY_BUDGET_UNITED_STATES",
  "MONTHLY_BUDGET_JAPAN",
  "MONTHLY_BUDGET_SWEDEN",
  "MONTHLY_BUDGET_FRANCE",
  "MONTHLY_BUDGET_CHINA",
  "MONTHLY_BUDGET_BRAZIL",
  "MONTHLY_BUDGET_INDIA",
  "MONTHLY_BUDGET_ETHIOPIA"
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
          <Text.Primary bold>{t("MONTHLY_BUDGET_SLIDE_TO_SET")}</Text.Primary>
        </View>
        <Slider
          minimumTrackTintColor={Colors.linkGreen}
          maximumTrackTintColor={Colors.gray}
          thumbTintColor={Colors.linkGreen}
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
              {t("MONTHLY_BUDGET_CARBON_EMISSIONS_WORLD")}
              <Ionicons
                name="md-information-circle"
                size={26}
                color={Colors.linkGreen}
                onPress={onPressInfo}
              />
            </Text.Primary>
          </View>
          {translationMontlyBudgetCountries.map(CountryExample)}
          <View style={styles.parisAgreement}>
            <Text.Secondary center>
              {t("MONTHLY_BUDGET_PARIS_AGREEMENT")}
              <Text.Secondary bold green>
                {" 166 kg CO2"}
              </Text.Secondary>
            </Text.Secondary>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button.Primary onPress={onPressSaveBudget} textType={"Primary"}>
          <Text.Primary white center bold>
            {t("MONTHLY_BUDGET_SAVE")}
          </Text.Primary>
        </Button.Primary>
      </View>
    </View>
  );
};

MonthlyBudgetScreen.navigationOptions = navigationOptions;

export default MonthlyBudgetScreen;
