import React, { useState } from "react";
import { View, Slider, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";

import { Text, Button } from "../../components";
import colors from "../../style/colors";
import styles from "./MonthlyBudgetScreen.styles";
import navigationOptions from "./MonthlyBudgetScreen.navigationOptions";
import { t } from "../../utils";

const DEFAULT_MONTHLY_CARBON_BUDGET = 500;
const MIN_MONTHLY_CARBON_BUDGET = 0;
const MAX_MONTHLY_CARBON_BUDGET = 1000;

const MonthlyBudgetScreen = ({ navigation }) => {
  const [value, setValue] = useState(DEFAULT_MONTHLY_CARBON_BUDGET);
  const onPressInfo = () =>
    WebBrowser.openBrowserAsync(
      "https://en.wikipedia.org/wiki/List_of_countries_by_carbon_dioxide_emissions_per_capita"
    );
  const onPressSaveBudget = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.personnalBudgetContainer}>
          <Text.Primary bold>
            {t("MONTHLY_BUDGET_MY_MONTHLY_CARBON_BUDGET")}
          </Text.Primary>
          <Text.Primary lightGray>{Math.round(value) + " kg"}</Text.Primary>
        </View>
        <Slider
          minimumTrackTintColor={colors.linkGreen}
          maximumTrackTintColor={colors.gray}
          thumbTintColor={colors.linkGreen}
          style={styles.slider}
          maximumValue={MAX_MONTHLY_CARBON_BUDGET}
          minimumValue={MIN_MONTHLY_CARBON_BUDGET}
          value={value}
          onSlidingComplete={setValue}
        />
        <View style={styles.worldBudgetContainer}>
          <View style={styles.worldExampleTitle}>
            <Text.Primary bold>
              {t("MONTHLY_BUDGET_CARBON_EMISSIONS_WORLD")}
              <Ionicons
                name="md-information-circle"
                size={26}
                color={colors.linkGreen}
                onPress={onPressInfo}
              />
            </Text.Primary>
          </View>
          <Text.Secondary style={styles.worldExampleItem}>
            {t("MONTHLY_BUDGET_LUXEMBOURG")}
          </Text.Secondary>
          <Text.Secondary style={styles.worldExampleItem}>
            {t("MONTHLY_BUDGET_UNITED_STATES")}
          </Text.Secondary>
          <Text.Secondary style={styles.worldExampleItem}>
            {t("MONTHLY_BUDGET_JAPAN")}
          </Text.Secondary>
          <Text.Secondary style={styles.worldExampleItem}>
            {t("MONTHLY_BUDGET_SWEDEN")}
          </Text.Secondary>
          <Text.Secondary style={styles.worldExampleItem}>
            {t("MONTHLY_BUDGET_FRANCE")}
          </Text.Secondary>
          <Text.Secondary style={styles.worldExampleItem}>
            {t("MONTHLY_BUDGET_CHINA")}
          </Text.Secondary>
          <Text.Secondary style={styles.worldExampleItem}>
            {t("MONTHLY_BUDGET_BRAZIL")}
          </Text.Secondary>
          <Text.Secondary style={styles.worldExampleItem}>
            {t("MONTHLY_BUDGET_INDIA")}
          </Text.Secondary>
          <Text.Secondary style={styles.worldExampleItem}>
            {t("MONTHLY_BUDGET_ETHIOPIA")}
          </Text.Secondary>
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
