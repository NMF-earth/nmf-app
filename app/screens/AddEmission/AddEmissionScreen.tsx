import React, { useState } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { TransportEnum, FoodEnum, StreamingEnum } from "carbon-footprint";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Text, Tag, TextInput } from "../../components";
import styles from "./AddEmissionScreen.styles";
import navigationOptions from "./AddEmissionScreen.navigationOptions";
import {
  Food,
  Transport,
  Streaming,
  Custom,
  Electricity,
  AddEmissionButton,
} from "./components";
import { EmissionEnum } from "../../interfaces";
import { EmissionPayload } from "../../interfaces/emission/emission.interface";
import {
  calculation,
  t,
  withLocalization,
  LocalizationContextProps,
} from "../../utils";
import { userPreferences } from "../../ducks";

interface Props {
  navigation: {
    push: (screen: string) => void;
    goBack: () => void;
  };
}

/* multiply or divide by 1000 to have kilograms or meters */
const DEFAULT_SLIDER_VALUE_FOOD = 200 / 1000;
const DEFAULT_SLIDER_VALUE_TRANSPORT = 150 * 1000;
const DEFAULT_SLIDER_VALUE_ELECTRICITY = 100 * 1000;
const DEFAULT_SLIDER_VALUE_STREAMING = 120 * 60;
const DEFAULT_SLIDER_VALUE_CUSTOM = 200;

const AddEmissionScreen = ({
  navigation,
  locale = "",
  language = "",
}: Props & LocalizationContextProps) => {
  const location = useSelector(userPreferences.selectors.getLocation);
  const [emissionName, setEmissionName] = useState("");
  const [emissionType, setEmissionType] = useState(EmissionEnum.transport);
  const [transportType, setTransportType] = useState(TransportEnum.car);
  const [electricityConsumption, setElectricityConsumption] = useState(
    DEFAULT_SLIDER_VALUE_ELECTRICITY
  );
  const [foodType, setFoodType] = useState(FoodEnum.redMeat);
  const [streamingType, setStreamingType] = useState(StreamingEnum.HDVideo);
  const [durationMinutes, setDurationMinutes] = useState(
    DEFAULT_SLIDER_VALUE_TRANSPORT / 1000
  );
  const [durationSeconds, setDurationSeconds] = useState(
    DEFAULT_SLIDER_VALUE_STREAMING
  );
  const [co2eqKilograms, setCo2eqKilograms] = useState(
    DEFAULT_SLIDER_VALUE_CUSTOM
  );
  const [distance, setDistance] = useState(DEFAULT_SLIDER_VALUE_TRANSPORT);
  const [quantity, setQuantity] = useState(DEFAULT_SLIDER_VALUE_FOOD);

  const [creationDate, setCreationDate] = useState(moment().utc());

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (date: Date) => {
    hideDatePicker();
    const now = new Date();
    if (date < now) {
      setCreationDate(moment(date));
    } else {
      setCreationDate(moment(now));
    }
  };

  const emissionPayload: EmissionPayload = {
    creationDate: creationDate.toISOString(),
    name: "",
    emissionType: emissionType,
    value: 0,
    emissionModelType: null,
  };

  const renderTransport = () => {
    if (emissionType === EmissionEnum.transport) {
      if (transportType === TransportEnum.plane) {
        emissionPayload.value = calculation.getFlightEmissionValue(
          durationMinutes
        );
        emissionPayload.emissionModelType = calculation.getFlightType(
          durationMinutes
        );
      } else {
        emissionPayload.value = distance;
        emissionPayload.emissionModelType = transportType;
      }

      return (
        <Transport
          defaultValueSlider={DEFAULT_SLIDER_VALUE_TRANSPORT}
          setDistance={setDistance}
          setDurationMinutes={setDurationMinutes}
          setTransportType={setTransportType}
          transportType={transportType}
        />
      );
    }
    return null;
  };

  const renderElectricity = () => {
    if (emissionType === EmissionEnum.electricity) {
      emissionPayload.value = electricityConsumption;
      emissionPayload.emissionModelType = location;

      return (
        <Electricity
          defaultValueSlider={DEFAULT_SLIDER_VALUE_ELECTRICITY}
          setElectricityConsumption={setElectricityConsumption}
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

  const renderStreaming = () => {
    if (emissionType === EmissionEnum.streaming) {
      emissionPayload.value = durationSeconds;
      emissionPayload.emissionModelType = streamingType;

      return (
        <Streaming
          defaultValueSlider={DEFAULT_SLIDER_VALUE_STREAMING}
          setDurationSeconds={setDurationSeconds}
          setStreamingType={setStreamingType}
          streamingType={streamingType}
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
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.typeContainer}>
        <View style={styles.textContainer}>
          <Text.H3>{t("ADD_EMISSION_EMISSION_TYPE")}</Text.H3>
        </View>
        <ScrollView horizontal style={styles.tagContainer}>
          <Tag
            icon={"md-airplane"}
            selected={emissionType === EmissionEnum.transport}
            title={t("ADD_EMISSION_TRANSPORT")}
            onPress={() => setEmissionType(EmissionEnum.transport)}
          />
          <Tag
            icon={"md-restaurant"}
            selected={emissionType === EmissionEnum.food}
            title={t("ADD_EMISSION_FOOD")}
            onPress={() => setEmissionType(EmissionEnum.food)}
          />
          <Tag
            icon={"md-play-circle"}
            selected={emissionType === EmissionEnum.streaming}
            title={t("ADD_EMISSION_STREAMING")}
            onPress={() => setEmissionType(EmissionEnum.streaming)}
          />
          <Tag
            icon={"md-flash"}
            selected={emissionType === EmissionEnum.electricity}
            title={t("ADD_EMISSION_ELECTRICITY")}
            onPress={() => setEmissionType(EmissionEnum.electricity)}
          />
          <Tag
            icon={"md-build"}
            selected={emissionType === EmissionEnum.custom}
            title={t("ADD_EMISSION_CUSTOM")}
            onPress={() => setEmissionType(EmissionEnum.custom)}
          />
          <View style={styles.separator} />
        </ScrollView>
      </View>

      {renderTransport()}
      {renderFood()}
      {renderStreaming()}
      {renderElectricity()}
      {renderCustom()}

      <TextInput
        isOptional
        placeholder={t("ADD_EMISSION_TEXTINPUT_PLACEHOLDER")}
        title={t("ADD_EMISSION_NAME_EMISSION")}
        onChangeText={(name) => {
          if (name.length < 150) {
            setEmissionName(name);
          }
        }}
        value={emissionName}
      />

      <DateTimePickerModal
        headerTextIOS={t("ADD_EMISSION_PICKER_MODAL_HEADER_TEXT")}
        confirmTextIOS={t("ADD_EMISSION_PICKER_MODAL_CONFIRM")}
        cancelTextIOS={t("ADD_EMISSION_PICKER_MODAL_CANCEL")}
        locale={locale}
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <View style={styles.textContainer}>
        <Text.H3>{t("ADD_EMISSION_DATE")}</Text.H3>
        <View style={styles.dateContainer}>
          <Text.Primary lightGray bold>
            {creationDate.locale(language).format("dddd Do MMMM YYYY")}
          </Text.Primary>
          <Text.Primary lightGray bold>
            {" - "}
          </Text.Primary>
          <TouchableOpacity style={styles.changeBtn} onPress={showDatePicker}>
            <Text.Primary bold green>
              {t("ADD_EMISSION_CHANGE")}
            </Text.Primary>
          </TouchableOpacity>
        </View>
      </View>

      <AddEmissionButton
        goBack={navigation.goBack}
        emissionPayload={{
          ...emissionPayload,
          name: emissionName,
          creationDate: creationDate.toISOString(),
        }}
      />
    </KeyboardAwareScrollView>
  );
};

AddEmissionScreen.navigationOptions = navigationOptions;

export default withLocalization(AddEmissionScreen);
