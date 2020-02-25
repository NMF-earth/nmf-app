import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { TransportEnum, FoodEnum } from "carbon-footprint";
import { Text, Tag } from "../../components";
import styles from "./AddEmissionScreen.styles";
import navigationOptions from "./AddEmissionScreen.navigationOptions";
import { t } from "../../utils";
import { Food, Transport, Custom, AddEmissionButton } from "./components";
import { EmissionEnum } from "../../interfaces";
import { EmissionPayload } from "../../interfaces/emission/emission.interface";

interface Props {
  navigation: {
    push: (screen: string) => void;
    goBack: () => void;
  };
}

/* multiply or divide by 1000 to have kilograms or meters */
const DEFAULT_SLIDER_VALUE_FOOD = 200 / 1000;
const DEFAULT_SLIDER_VALUE_TRANSPORT = 150 * 1000;
const DEFAULT_SLIDER_VALUE_CUSTOM = 800;

const AddEmissionScreen: React.FunctionComponent<Props> & {
  navigationOptions: typeof navigationOptions;
} = ({ navigation }) => {
  const [emissionType, setEmissionType] = useState(EmissionEnum.transport);
  const [transportType, setTransportType] = useState(TransportEnum.car);
  const [foodType, setFoodType] = useState(FoodEnum.redMeat);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [durationHours, setDurationHours] = useState(0);
  const [co2eqKilograms, setCo2eqKilograms] = useState(
    DEFAULT_SLIDER_VALUE_CUSTOM
  );
  const [distance, setDistance] = useState(DEFAULT_SLIDER_VALUE_TRANSPORT);
  const [quantity, setQuantity] = useState(DEFAULT_SLIDER_VALUE_FOOD);

  const emissionPayload: EmissionPayload = {
    emissionType: emissionType,
    value: 0,
    emissionModelType: null
  };

  const renderTransport = () => {
    if (emissionType === EmissionEnum.transport) {
      if (transportType === TransportEnum.plane) {
        emissionPayload.value = durationHours;
        emissionPayload.emissionModelType = transportType;
      } else {
        emissionPayload.value = distance;
        emissionPayload.emissionModelType = transportType;
      }
      return (
        <Transport
          defaultValueSlider={DEFAULT_SLIDER_VALUE_TRANSPORT}
          setDistance={setDistance}
          setTransportType={setTransportType}
          transportType={transportType}
        />
      );
    }
    return null;
  };

  const renderFood = () => {
    if (emissionType === EmissionEnum.food) {
      emissionPayload.value = quantity;
      emissionPayload.emissionModelType = foodType;
      return (
        <Food
          defaultValueSlider={DEFAULT_SLIDER_VALUE_FOOD}
          setQuantity={setQuantity}
          setFoodType={setFoodType}
          foodType={foodType}
        />
      );
    }
    return null;
  };

  const renderCustom = () => {
    if (emissionType === EmissionEnum.custom) {
      emissionPayload.value = co2eqKilograms;
      emissionPayload.emissionModelType = "custom";
      return (
        <Custom
          defaultValueSlider={DEFAULT_SLIDER_VALUE_CUSTOM}
          setCo2eqKilograms={setCo2eqKilograms}
        />
      );
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
            title={"Custom"}
            onPress={() => setEmissionType(EmissionEnum.custom)}
          />
        </ScrollView>
      </View>

      {renderTransport()}
      {renderFood()}
      {renderCustom()}

      <AddEmissionButton
        navigation={navigation}
        emissionPayload={emissionPayload}
      />
    </ScrollView>
  );
};

AddEmissionScreen.navigationOptions = navigationOptions;

export default AddEmissionScreen;
