import React from "react";
import { useSelector } from "react-redux";
import NoEmission from "../../components/NoEmission";
import EmissionsScreen from "./EmissionsScreen";
import navigationOptions from "./EmissionsScreen.navigationOptions";
import { emissions } from "../../ducks";

interface Props {
  navigation: {
    push: (screen: string) => void;
    navigate: (screen: string) => void;
  };
}

const Emissions = ({ navigation }: Props) => {
  const emissionsToMitigate = useSelector(
    emissions.selectors.getEmissionsToMitigate
  );
  const emissionsMitigated = useSelector(
    emissions.selectors.getEmissionsMitigated
  );

  if (emissionsToMitigate.length || emissionsMitigated.length) {
    return <EmissionsScreen navigation={navigation} />;
  }

  return <NoEmission addEmission={() => navigation.push("AddEmission")} />;
};

Emissions.navigationOptions = navigationOptions;

export default Emissions;
