import React from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";

import { Text, Button } from "components";
import { t } from "utils";
import { navigate } from "navigation";

import styles from "./BudgetScreen.styles";
import { NumberOfDaysVegetarian, ProgressChart } from "./components";
import { selectors } from "./ducks";
import navigationOptions from "./BudgetScreen.navigationOptions";

interface Props {
  navigation: {
    push: (screen: string) => void;
  };
}

const BudgetScreen = (props: Props) => {
  const navigator = navigate(props.navigation);
  const monthlyCarbonBudget = useSelector(selectors.getMonthlyCarbonBudget);
  const totalCurrentMonthEmissions = useSelector(
    selectors.getCurrentMonthAllCarbonValue
  );
  const transportCurrentMonthEmissions = useSelector(
    selectors.getCurrentMonthTransportCarbonValue
  );
  const foodCurrentMonthEmissions = useSelector(
    selectors.getCurrentMonthFoodCarbonValue
  );
  const otherCurrentMonthEmissions = useSelector(
    selectors.getCurrentMonthOtherCarbonValue
  );

  const totalCurrentYearEmissions = useSelector(
    selectors.getCurrentYearAllCarbonValue
  );
  const transportCurrentYearEmissions = useSelector(
    selectors.getCurrentMonthTransportCarbonValue
  );
  const foodCurrentYearEmissions = useSelector(
    selectors.getCurrentYearFoodCarbonValue
  );
  const otherCurrentYearEmissions = useSelector(
    selectors.getCurrentYearOtherCarbonValue
  );

  return (
    <ScrollView style={styles.container}>
      <ProgressChart
        isMonth
        totalEmissions={totalCurrentMonthEmissions}
        foodEmissions={foodCurrentMonthEmissions}
        transportEmissions={transportCurrentMonthEmissions}
        otherEmissions={otherCurrentMonthEmissions}
        monthlyEmissionsBudget={monthlyCarbonBudget}
      />
      <Button.Primary
        style={styles.monthlyBudgetButton}
        fullWidth
        textType={"Primary"}
        onPress={() => navigator.openMontlyBudget()}
      >
        <Text.Primary bold center white>
          {t("BUDGET_SCREEN_SET_MONTHLY_BUDGET")}
        </Text.Primary>
      </Button.Primary>
      <NumberOfDaysVegetarian />
      <ProgressChart
        totalEmissions={totalCurrentYearEmissions}
        foodEmissions={foodCurrentYearEmissions}
        transportEmissions={transportCurrentYearEmissions}
        otherEmissions={otherCurrentYearEmissions}
        monthlyEmissionsBudget={monthlyCarbonBudget}
      />
    </ScrollView>
  );
};

BudgetScreen.navigationOptions = navigationOptions;

export default BudgetScreen;
