import React from "react";
import { SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import styles from "./EmissionsScreen.styles";
import { AddEmissionAndMitigateButtons, EmissionsList } from "./components";
import { budget } from "../../ducks";
import { selectors } from "./ducks";

const EmissionsScreen = () => {
  const monthlyCarbonBudget = useSelector(
    budget.selectors.getMonthlyCarbonBudget
  );
  const emissions = useSelector(selectors.getEmissions);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <EmissionsList
          monthlyCarbonBudget={monthlyCarbonBudget}
          emissions={emissions}
        />
      </SafeAreaView>
      <AddEmissionAndMitigateButtons />
    </>
  );
};

export default EmissionsScreen;
