import React from "react";
import { ScrollView } from "react-native";
import styles from "./BudgetScreen.styles";
import { Text, Button } from "../../components";
import { MonthSelector, ProgressChart } from "./components";

const foodEmissions = 200;
const transportEmissions = 600;
const otherEmissions = 0;
const totalEmissions = foodEmissions + transportEmissions + otherEmissions;
const monthlyEmissionsBudget = 1000;

const BudgetScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <MonthSelector />
      <ProgressChart
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
          // do nothing.
        }}
      >
        <Text.Primary bold center white>
          Set monthly budget
        </Text.Primary>
      </Button.Primary>
    </ScrollView>
  );
};

export default BudgetScreen;
