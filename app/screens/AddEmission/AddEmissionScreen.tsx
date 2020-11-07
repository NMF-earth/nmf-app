import React, { useCallback, useState } from "react";
import moment, { Moment } from "moment";
import { useSelector } from "react-redux";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { TransportEnum, FoodEnum, StreamingEnum } from "carbon-footprint";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Text, Tag, TextInput } from "components";
import { userPreferences } from "ducks";
import { EmissionType, EmissionPayload } from "interfaces";
import {
  calculation,
  t,
  withLocalization,
  LocalizationContextProps,
  ui,
  time,
} from "utils";

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

interface Props {
  navigation: {
    push: (screen: string) => void;
    goBack: () => void;
  };
}

/* multiply or divide by 1000 to have kilograms or meters */
const DEFAULT_SLIDER_VALUE_FOOD = 200 / 1000;
const DEFAULT_SLIDER_VALUE_TRANSPORT = 150 * 1000;
const DEFAULT_SLIDER_VALUE_ELECTRICITY = 100 * 3.6 * Math.pow(10, 6);
const DEFAULT_SLIDER_VALUE_STREAMING = 120 * 60;
const DEFAULT_SLIDER_VALUE_CUSTOM = 200;
const EMISSION_NAME_MAX_LENGTH = 150;

const AddEmissionScreen = ({
  navigation,
  locale = "",
  language = "",
}: Props & LocalizationContextProps) => {
  const location = useSelector(userPreferences.selectors.getLocation);
  const [emissionName, setEmissionName] = useState<string>("");
  const [emissionType, setEmissionType] = useState<EmissionType>(
    EmissionType.transport
  );
  const [transportType, setTransportType] = useState<TransportEnum>(
    TransportEnum.car
  );
  const [electricityConsumption, setElectricityConsumption] = useState<number>(
    DEFAULT_SLIDER_VALUE_ELECTRICITY
  );
  const [foodType, setFoodType] = useState<FoodEnum>(FoodEnum.redMeat);
  const [streamingType, setStreamingType] = useState<StreamingEnum>(
    StreamingEnum.HDVideo
  );
  const [durationMinutes, setDurationMinutes] = useState<number>(
    DEFAULT_SLIDER_VALUE_TRANSPORT / 1000
  );
  const [durationSeconds, setDurationSeconds] = useState<number>(
    DEFAULT_SLIDER_VALUE_STREAMING
  );
  const [co2eqKilograms, setCo2eqKilograms] = useState<number>(
    DEFAULT_SLIDER_VALUE_CUSTOM
  );
  const [distance, setDistance] = useState<number>(
    DEFAULT_SLIDER_VALUE_TRANSPORT
  );
  const [quantity, setQuantity] = useState<number>(DEFAULT_SLIDER_VALUE_FOOD);

  const [creationDate, setCreationDate] = useState<Moment>(moment().utc());

  const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(
    false
  );
  const showDatePicker = useCallback(() => setDatePickerVisibility(true), []);
  const hideDatePicker = useCallback(() => setDatePickerVisibility(false), []);

  const handleConfirm = useCallback(
    (date: Date) => {
      hideDatePicker();
      const now = new Date();
      const effectiveCreationDate = time.getEarlierDate(date, now);
      setCreationDate(moment(effectiveCreationDate));
    },
    [hideDatePicker]
  );

  const emissionPayload: EmissionPayload = {
    creationDate: creationDate.toISOString(),
    name: "",
    emissionType: emissionType,
    value: 0,
    emissionModelType: null,
  };

  const renderTransport = () => {
    if (emissionType === EmissionType.transport) {
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
    if (emissionType === EmissionType.electricity) {
      emissionPayload.value = electricityConsumption;
      emissionPayload.emissionModelType = location;

      return (
        <Electricity
          electricityCountry={location}
          defaultValueSlider={DEFAULT_SLIDER_VALUE_ELECTRICITY}
          setElectricityConsumption={setElectricityConsumption}
        />
      );
    }
    return null;
  };

  const renderFood = () => {
    if (emissionType === EmissionType.food) {
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
    if (emissionType === EmissionType.streaming) {
      emissionPayload.value = durationSeconds;
      emissionPayload.emissionModelType = streamingType;
      emissionPayload.location = location;

      return (
        <Streaming
          electricityCountry={location}
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
    if (emissionType === EmissionType.custom) {
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

  const onTransportTagPress = useCallback(() => {
    setEmissionType(EmissionType.transport);
  }, []);
  const onFoodTagPress = useCallback(() => {
    setEmissionType(EmissionType.food);
  }, []);
  const onStreamingTagPress = useCallback(() => {
    setEmissionType(EmissionType.streaming);
  }, []);
  const onElectricityTagPress = useCallback(() => {
    setEmissionType(EmissionType.electricity);
  }, []);
  const onCustomTagPress = useCallback(() => {
    setEmissionType(EmissionType.custom);
  }, []);

  const isDarkModeEnabled = ui.isDarkModeEnabled();

  const onChangeEmissionName = useCallback((name: string) => {
    if (name.length < EMISSION_NAME_MAX_LENGTH) {
      setEmissionName(name);
    }
  }, []);

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.typeContainer}>
        <View style={styles.textContainer}>
          <Text.H3>{t("ADD_EMISSION_SCREEN_EMISSION_TYPE")}</Text.H3>
        </View>
        <ScrollView horizontal style={styles.tagContainer}>
          <Tag
            icon={"md-airplane"}
            selected={emissionType === EmissionType.transport}
            title={t("ADD_EMISSION_SCREEN_TRANSPORT")}
            onPress={onTransportTagPress}
          />
          <Tag
            icon={"md-restaurant"}
            selected={emissionType === EmissionType.food}
            title={t("ADD_EMISSION_SCREEN_FOOD")}
            onPress={onFoodTagPress}
          />
          <Tag
            icon={"md-play-circle"}
            selected={emissionType === EmissionType.streaming}
            title={t("ADD_EMISSION_SCREEN_STREAMING")}
            onPress={onStreamingTagPress}
          />
          <Tag
            icon={"md-flash"}
            selected={emissionType === EmissionType.electricity}
            title={t("ADD_EMISSION_SCREEN_ELECTRICITY")}
            onPress={onElectricityTagPress}
          />
          <Tag
            icon={"md-build"}
            selected={emissionType === EmissionType.custom}
            title={t("ADD_EMISSION_SCREEN_CUSTOM")}
            onPress={onCustomTagPress}
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
        placeholder={t("ADD_EMISSION_SCREEN_TEXTINPUT_PLACEHOLDER")}
        title={t("ADD_EMISSION_SCREEN_NAME_EMISSION")}
        onChangeText={onChangeEmissionName}
        value={emissionName}
      />

      <DateTimePickerModal
        headerTextIOS={t("ADD_EMISSION_SCREEN_PICKER_MODAL_HEADER_TEXT")}
        confirmTextIOS={t("ADD_EMISSION_SCREEN_PICKER_MODAL_CONFIRM")}
        cancelTextIOS={t("ADD_EMISSION_SCREEN_PICKER_MODAL_CANCEL")}
        locale={locale}
        isVisible={isDatePickerVisible}
        isDarkModeEnabled={isDarkModeEnabled}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <View style={styles.textContainer}>
        <Text.H3>{t("ADD_EMISSION_SCREEN_DATE")}</Text.H3>
        <View style={styles.dateContainer}>
          <Text.Primary lightGray bold>
            {creationDate.locale(language).format("dddd Do MMMM YYYY")}
          </Text.Primary>
          <TouchableOpacity onPress={showDatePicker}>
            <Text.Primary bold green>
              {t("ADD_EMISSION_SCREEN_CHANGE")}
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
