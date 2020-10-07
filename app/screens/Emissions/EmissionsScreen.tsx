import React from "react";
import { SafeAreaView } from "react-native";
import { useSelector } from "react-redux";

import { budget, selectors } from "ducks";

import styles from "./EmissionsScreen.styles";
import { AddEmissionAndMitigateButtons, EmissionsList } from "./components";

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
