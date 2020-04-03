import React from "react";
import { useSelector } from "react-redux";
import NoEmission from "../../components/NoEmission";
import BudgetScreen from "./BudgetScreen";
import navigationOptions from "./BudgetScreen.navigationOptions";
import { emissions } from "../../ducks";
import { navigate } from "../../navigation";

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
  const navigator = navigate(navigation);

  if (emissionsToMitigate.length || emissionsMitigated.length) {
    return <BudgetScreen navigation={navigation} />;
  }

  return <NoEmission addEmission={navigator.openAddEmission} />;
};

Budget.navigationOptions = navigationOptions;

export default Budget;
