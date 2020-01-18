import React from "react";
import { connect } from "react-redux";
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
  const { emissionsToMitigate, emissionsMitigated, navigation } = props;

  if (emissionsToMitigate.length || emissionsMitigated.length) {
    return <EmissionsScreen navigation={navigation} />;
  }

  return <NoEmission addEmission={() => navigation.push("AddEmission")} />;
};

Emissions.navigationOptions = navigationOptions;

const mapStateToProps = state => ({
  emissionsToMitigate: emissions.selectors.getEmissionsToMitigate(state),
  emissionsMitigated: emissions.selectors.getEmissionsMitigated(state)
});

export default connect(mapStateToProps, null)(Emissions);
