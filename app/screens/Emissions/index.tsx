import React from "react";
import { useSelector } from "react-redux";
import NoEmission from "../../components/NoEmission";
import EmissionsScreen from "./EmissionsScreen";
import navigationOptions from "./EmissionsScreen.navigationOptions";
import { EmissionListItemProps } from "../../components";
import { emissions } from "../../ducks";

interface Props {
  emissionsToMitigate: Array<EmissionListItemProps>;
  emissionsMitigated: Array<EmissionListItemProps>;
  navigation: {
    push: (screen: string) => void;
  };
}

const Emissions = (props: Props) => {
  const emissionsToMitigate = useSelector(
    emissions.selectors.getEmissionsToMitigate
  );
  const emissionsMitigated = useSelector(
    emissions.selectors.getEmissionsMitigated
  );
  const { navigation } = props;

  if (emissionsToMitigate.length || emissionsMitigated.length) {
    return <EmissionsScreen navigation={navigation} />;
  }

  return <NoEmission addEmission={() => navigation.push("AddEmission")} />;
};

Emissions.navigationOptions = navigationOptions;

export default Emissions;
