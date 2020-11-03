import React from "react";
import { useSelector } from "react-redux";

import { NoEmission } from "components";
import { emissions } from "ducks";

import BudgetScreen from "./BudgetScreen";
import navigationOptions from "./BudgetScreen.navigationOptions";

interface Props {
  navigation: {
    push: (screen: string) => void;
    navigate: (screen: string) => void;
  };
}

const Budget = ({ navigation }: Props) => {
  const emissionsToMitigate = useSelector(
    emissions.selectors.getEmissionsToMitigate
  );
  const emissionsMitigated = useSelector(
    emissions.selectors.getEmissionsMitigated
  );

  if (emissionsToMitigate.length || emissionsMitigated.length) {
    return <BudgetScreen navigation={navigation} />;
  }

  return <NoEmission />;
};

Budget.navigationOptions = navigationOptions;

export default Budget;
