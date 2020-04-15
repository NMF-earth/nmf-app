import React from "react";
import { SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import styles from "./EmissionsScreen.styles";
import { AddEmissionAndMitigateButtons, EmissionsList } from "./components";
import { budget } from "../../ducks";
import { selectors } from "./ducks";
import { navigate } from "../../navigation";

const EmissionsScreen = (props) => {
  const navigator = navigate(props.navigation);
  const monthlyCarbonBudget = useSelector(
    budget.selectors.getMonthlyCarbonBudget
  );
  const emissions = useSelector(selectors.getEmissions);

  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}>
        <EmissionsList
          navigator={navigator}
          monthlyCarbonBudget={monthlyCarbonBudget}
          emissions={emissions}
        />
      </SafeAreaView>
      <AddEmissionAndMitigateButtons navigation={props.navigation} />
    </React.Fragment>
  );
};

export default EmissionsScreen;
