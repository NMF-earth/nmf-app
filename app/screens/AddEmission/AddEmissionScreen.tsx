import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { TransportEnum, FoodEnum } from "carbon-footprint";
import { Text, Tag } from "../../components";
import styles from "./AddEmissionScreen.styles";
import navigationOptions from "./AddEmissionScreen.navigationOptions";
import { t } from "../../utils";
import { Food, Transport, Custom, AddEmissionButton } from "./components";
import { Emission, EmissionEnum } from "../../interfaces";

interface Props {
  navigation: {
    push: (screen: string) => void;
    goBack: () => void;
  };
}

const AddEmissionScreen: React.FunctionComponent<Props> & { navigationOptions: typeof navigationOptions } = ({ navigation }) => {
  const [emissionType, setEmissionType] = useState(EmissionEnum.transport);
  const [transportType, setTransportType] = useState(TransportEnum.car);
  const [foodType, setFoodType] = useState(FoodEnum.redMeat);
  const [co2eqKilograms, setCo2eqKilograms] = useState(0);
  const [durationHours, setDurationHours] = useState(0.5);
  const [distanceKilometers, setDistanceKilometers] = useState(50);
  const [quantityKilograms, setQuantityKilograms] = useState(0.15);

  const emissionPayload: Emission = {
    emissionType: emissionType,
    value: 0,
    emissionModelType: null,
  };

  const renderTransport = () => {
    if (emissionType === EmissionEnum.transport) {
      if (transportType === TransportEnum.plane) {
        emissionPayload.value = durationHours
        emissionPayload.emissionModelType = transportType
      } else {
        emissionPayload.value = distanceKilometers 
        emissionPayload.emissionModelType = transportType
      }
      return (
        <Transport
          setDistanceKilometers={setDistanceKilometers}
          setDurationHours={setDurationHours}
          setCo2eqKilograms={setCo2eqKilograms}
          setTransportType={setTransportType}
          transportType={transportType}
        />
      );
    }
    return null;
  };

  const renderFood = () => {
    if (emissionType === EmissionEnum.food) {
      emissionPayload.value = quantityKilograms
      emissionPayload.emissionModelType= foodType
      return (
        <Food
          setQuantityKilograms={setQuantityKilograms}
          setCo2eqKilograms={setCo2eqKilograms}
          setFoodType={setFoodType}
          foodType={foodType}
        />
      );
    }
    return null;
  };

  const renderCustom = () => {
    if (emissionType === EmissionEnum.custom) {
      emissionPayload.value = co2eqKilograms
      emissionPayload.emissionModelType= "custom"
      return <Custom setCo2eqKilograms={setCo2eqKilograms} />;
    }
    return null;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.typeContainer}>
        <View style={styles.textContainer}>
          <Text.H3>{t("ADD_EMISSION_EMISSION_TYPE")}</Text.H3>
        </View>
        <ScrollView horizontal style={styles.tagContainer}>
          <Tag
            icon={"md-airplane"}
            selected={emissionType === EmissionEnum.transport}
            title={"Transport"}
            onPress={() => setEmissionType(EmissionEnum.transport)}
          />
          <Tag
            icon={"md-restaurant"}
            selected={emissionType === EmissionEnum.food}
            title={"Food"}
            onPress={() => setEmissionType(EmissionEnum.food)}
          />
          <Tag
            icon={"md-build"}
            selected={emissionType === EmissionEnum.custom}
            title={"Custon"}
            onPress={() => setEmissionType(EmissionEnum.custom)}
          />
        </ScrollView>
      </View>

      {renderTransport()}
      {renderFood()}
      {renderCustom()}

      <AddEmissionButton navigation={navigation} emission={emissionPayload} />
    </ScrollView>
  );
};

AddEmissionScreen.navigationOptions = navigationOptions;

export default AddEmissionScreen;
