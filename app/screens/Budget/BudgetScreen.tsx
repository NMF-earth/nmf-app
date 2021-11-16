import React from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { Button } from "components";
import { t } from "utils";
import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";

import styles from "./BudgetScreen.styles";
import { NumberOfDaysVegetarian, ProgressChart } from "./components";
import { selectors } from "./ducks";
import navigationOptions from "./BudgetScreen.navigationOptions";

const BudgetScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const monthlyCarbonBudget = useSelector(selectors.getMonthlyCarbonBudget);

  const foodCurrentMonthEmissions = useSelector(selectors.getCurrentMonthFoodCarbonValue);
  const mealCurrentMonthEmissions = useSelector(selectors.getCurrentMonthMealCarbonValue);
  const transportCurrentMonthEmissions = useSelector(selectors.getCurrentMonthTransportCarbonValue);
  const streamingCurrentMonthEmissions = useSelector(selectors.getCurrentMonthStreamingCarbonValue);
  const purchaseCurrentMonthEmissions = useSelector(selectors.getCurrentMonthPurchaseCarbonValue);
  const fashionCurrentMonthEmissions = useSelector(selectors.getCurrentMonthFashionCarbonValue);
  const electricityCurrentMonthEmissions = useSelector(
    selectors.getCurrentMonthElectricityCarbonValue
  );
  const productScannedCurrentMonthEmissions = useSelector(
    selectors.getCurrentMonthProductScannedCarbonValue
  );
  const customCurrentMonthEmissions = useSelector(selectors.getCurrentMonthCustomCarbonValue);
  const totalCurrentMonthEmissions = useSelector(selectors.getCurrentMonthAllCarbonValue);

  const foodCurrentYearEmissions = useSelector(selectors.getCurrentYearFoodCarbonValue);
  const mealCurrentYearEmissions = useSelector(selectors.getCurrentYearMealCarbonValue);
  const transportCurrentYearEmissions = useSelector(selectors.getCurrentYearTransportCarbonValue);
  const streamingCurrentYearEmissions = useSelector(selectors.getCurrentYearStreamingCarbonValue);
  const purchaseCurrentYearEmissions = useSelector(selectors.getCurrentYearPurchaseCarbonValue);
  const fashionCurrentYearEmissions = useSelector(selectors.getCurrentYearFashionCarbonValue);
  const electricityCurrentYearEmissions = useSelector(
    selectors.getCurrentYearElectricityCarbonValue
  );
  const productScannedCurrentYearEmissions = useSelector(
    selectors.getCurrentYearProductScannedCarbonValue
  );
  const customCurrentYearEmissions = useSelector(selectors.getCurrentYearCustomCarbonValue);
  const totalCurrentYearEmissions = useSelector(selectors.getCurrentYearAllCarbonValue);

  return (
    <ScrollView style={styles.container}>
      <ProgressChart
        isMonth
        totalEmissions={totalCurrentMonthEmissions}
        foodEmissions={foodCurrentMonthEmissions}
        mealEmissions={mealCurrentMonthEmissions}
        transportEmissions={transportCurrentMonthEmissions}
        streamingEmissions={streamingCurrentMonthEmissions}
        purchaseEmissions={purchaseCurrentMonthEmissions}
        fashionEmissions={fashionCurrentMonthEmissions}
        electricityEmissions={electricityCurrentMonthEmissions}
        productScannedEmissions={productScannedCurrentMonthEmissions}
        customEmissions={customCurrentMonthEmissions}
        monthlyEmissionsBudget={monthlyCarbonBudget}
      />
      <Button.Primary
        icon={"calendar"}
        style={styles.monthlyBudgetButton}
        fullWidth
        text={t("BUDGET_SCREEN_SET_MONTHLY_BUDGET")}
        onPress={() => navigator.openMontlyBudget()}
      />
      <NumberOfDaysVegetarian />
      <ProgressChart
        totalEmissions={totalCurrentYearEmissions}
        foodEmissions={foodCurrentYearEmissions}
        mealEmissions={mealCurrentYearEmissions}
        transportEmissions={transportCurrentYearEmissions}
        streamingEmissions={streamingCurrentYearEmissions}
        purchaseEmissions={purchaseCurrentYearEmissions}
        fashionEmissions={fashionCurrentYearEmissions}
        electricityEmissions={electricityCurrentYearEmissions}
        productScannedEmissions={productScannedCurrentYearEmissions}
        customEmissions={customCurrentYearEmissions}
        monthlyEmissionsBudget={monthlyCarbonBudget}
      />
    </ScrollView>
  );
};

BudgetScreen.navigationOptions = navigationOptions();

export default BudgetScreen;
