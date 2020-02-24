import React from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import styles from "./BudgetScreen.styles";
import { Text, Button } from "../../components";
import { NumberOfDaysVegetarian, ProgressChart } from "./components";
import { t } from "../../utils";
import { selectors } from "./ducks";

interface Props {
  navigation: {
    push: (screen: string) => void;
  };
}

const BudgetScreen = (props: Props) => {
  const monthlyCarbonBudget = useSelector(selectors.getMonthlyCarbonBudget);
  const totalEmissions = useSelector(selectors.getAllCarbonValue);
  const transportEmissions = useSelector(selectors.getTransportCarbonValue);
  const foodEmissions = useSelector(selectors.getFoodCarbonValue);
  const otherEmissions = useSelector(selectors.getCustomCarbonValue);

  return (
    <ScrollView style={styles.container}>
      <ProgressChart
        isMonth
        totalEmissions={totalEmissions}
        foodEmissions={foodEmissions}
        transportEmissions={transportEmissions}
        otherEmissions={otherEmissions}
        monthlyEmissionsBudget={monthlyCarbonBudget}
      />
      <Button.Primary
        style={styles.monthlyBudgetButton}
        fullWidth
        textType={"Primary"}
        onPress={() => {
          props.navigation.push("MontlyBudget");
        }}
      >
        <Text.Primary bold center white>
          {t("BUDGET_SCREEN_SET_MONTHLY_BUDGET")}
        </Text.Primary>
      </Button.Primary>
      <ProgressChart
        totalEmissions={totalEmissions}
        foodEmissions={foodEmissions}
        transportEmissions={transportEmissions}
        otherEmissions={otherEmissions}
        monthlyEmissionsBudget={monthlyCarbonBudget}
      />
      <NumberOfDaysVegetarian />
    </ScrollView>
  );
};

export default BudgetScreen;
