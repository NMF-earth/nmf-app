import React from "react";
import { useSelector } from "react-redux";
import NoEmission from "../../components/NoEmission";
import EmissionsScreen from "./EmissionsScreen";
import navigationOptions from "./EmissionsScreen.navigationOptions";
import { emissions } from "../../ducks";
import { navigate } from "../../navigation";

const Emissions = props => {
  const navigator = navigate(props.navigation);
  const emissionsToMitigate = useSelector(
    emissions.selectors.getEmissionsToMitigate
  );
  const emissionsMitigated = useSelector(
    emissions.selectors.getEmissionsMitigated
  );

  if (emissionsToMitigate.length || emissionsMitigated.length) {
    return <EmissionsScreen navigation={props.navigation} />;
  }

  return <NoEmission addEmission={navigator.openAddEmission} />;
};

Emissions.navigationOptions = navigationOptions;

export default Emissions;
