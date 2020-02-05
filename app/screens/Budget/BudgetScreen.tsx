import React from "react";
import { ScrollView } from "react-native";
import styles from "./BudgetScreen.styles";
import { Text, Button } from "../../components";
import { NumberOfDaysVegetarian, ProgressChart } from "./components";
import { t } from "../../utils";

const foodEmissions = 200;
const transportEmissions = 600;
const otherEmissions = 0;
const totalEmissions = foodEmissions + transportEmissions + otherEmissions;
const monthlyEmissionsBudget = 1000;

interface Props {
  navigation: {
    push: (screen: string) => void;
  };
}

const BudgetScreen = (props: Props) => {
  return (
    <ScrollView style={styles.container}>
      <ProgressChart
        isMonth
        totalEmissions={totalEmissions}
        foodEmissions={foodEmissions}
        transportEmissions={transportEmissions}
        otherEmissions={otherEmissions}
        monthlyEmissionsBudget={monthlyEmissionsBudget}
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
        monthlyEmissionsBudget={monthlyEmissionsBudget}
      />
      <NumberOfDaysVegetarian />
    </ScrollView>
  );
};

export default BudgetScreen;
