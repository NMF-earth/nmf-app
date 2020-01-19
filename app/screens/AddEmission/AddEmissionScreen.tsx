import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { version, TransportEnum, FoodEnum } from "carbon-footprint";
import { Text, Tag } from "../../components";
import styles from "./AddEmissionScreen.styles";
import navigationOptions from "./AddEmissionScreen.navigationOptions";
import { t } from "../../utils";
import { Food, Transport, Custom, AddEmissionButton } from "./components";
import { Emission, EmissionEnum } from "../../interfaces";

interface Props {
  navigation: {
    push: (screen: string) => void;
  };
}

const AddEmissionScreen = ({ navigation }) => {
  const [emissionType, setEmissionType] = useState(EmissionEnum.transport);
  const [transportType, setTransportType] = useState(TransportEnum.car);
  const [foodType, setFoodType] = useState(FoodEnum.redMeat);
  const [co2eqKilograms, setCo2eqKilograms] = useState(0);
  const [durationHours, setDurationHours] = useState(0.5);
  const [distanceKilometers, setDistanceKilometers] = useState(50);
  const [quantityKilograms, setQuantityKilograms] = useState(0.15);

  let emission: Emission = {
    id: Date.now(),
    creationDate: "now",
    co2eqKilograms: co2eqKilograms,
    co2eqModelVersion: version.co2eqModel,
    emissionType: emissionType,
    isMitigated: false
  };

  const renderTransport = () => {
    if (emissionType === EmissionEnum.transport) {
      if (transportType === TransportEnum.plane) {
        emission = {
          ...emission,
          transport: {
            transportType: transportType,
            durationHours: durationHours
          }
        };
      } else {
        emission = {
          ...emission,
          transport: {
            transportType: transportType,
            distanceKilometers: distanceKilometers
          }
        };
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
      emission = {
        ...emission,
        food: {
          foodType: foodType,
          quantityKilograms: quantityKilograms
        }
      };
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

      <AddEmissionButton navigation={navigation} emission={emission} />
    </ScrollView>
  );
};

AddEmissionScreen.navigationOptions = navigationOptions;

export default AddEmissionScreen;
