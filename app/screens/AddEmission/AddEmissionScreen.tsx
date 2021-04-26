import React, { useCallback, useState } from "react";
import moment, { Moment } from "moment";
import { useSelector } from "react-redux";
import { View, TouchableOpacity } from "react-native";
import { TransportType } from "carbon-footprint";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useRoute } from "@react-navigation/core";

import { Text, TextInput } from "components";
import { userPreferences } from "ducks";
import { EmissionType, EmissionPayload, EmissionModelType } from "interfaces";
import { calculation, t, withLocalization, LocalizationContextProps, ui, time } from "utils";

import styles from "./AddEmissionScreen.styles";
import navigationOptions from "./AddEmissionScreen.navigationOptions";
import {
  Food,
  Transport,
  Streaming,
  Custom,
  Electricity,
  Purchase,
  AddEmissionButton,
  Fashion,
  Meal,
} from "./components";

/* multiply or divide by 1000 to have kilograms or meters */
const DEFAULT_SLIDER_VALUE_FOOD = 200 / 1000;
const DEFAULT_SLIDER_VALUE_TRANSPORT = 150 * 1000;
const DEFAULT_SLIDER_VALUE_ELECTRICITY = 100 * 3.6 * Math.pow(10, 6);
const DEFAULT_SLIDER_VALUE_STREAMING = 120 * 60;
const DEFAULT_SLIDER_VALUE_PURCHASE = 1;
const DEFAULT_SLIDER_VALUE_FASHION = 1;
const DEFAULT_SLIDER_VALUE_MEAL = 1;
const DEFAULT_SLIDER_VALUE_CUSTOM = 200;
const EMISSION_NAME_MAX_LENGTH = 150;

const AddEmissionScreen = ({ locale = "", language = "" }: LocalizationContextProps) => {
  const route = useRoute();
  const location = useSelector(userPreferences.selectors.getLocation);
  const [emissionName, setEmissionName] = useState<string>("");
  const [electricityConsumption, setElectricityConsumption] = useState<number>(
    DEFAULT_SLIDER_VALUE_ELECTRICITY
  );
  const [durationMinutes, setDurationMinutes] = useState<number>(
    DEFAULT_SLIDER_VALUE_TRANSPORT / 1000
  );
  const [durationSeconds, setDurationSeconds] = useState<number>(DEFAULT_SLIDER_VALUE_STREAMING);
  const [co2eqKilograms, setCo2eqKilograms] = useState<number>(DEFAULT_SLIDER_VALUE_CUSTOM);
  const [distance, setDistance] = useState<number>(DEFAULT_SLIDER_VALUE_TRANSPORT);
  const [foodQuantity, setFoodQuantity] = useState<number>(DEFAULT_SLIDER_VALUE_FOOD);
  const [purchaseQuantity, setPurchaseQuantity] = useState<number>(DEFAULT_SLIDER_VALUE_PURCHASE);
  const [fashionQuantity, setFashionQuantity] = useState<number>(DEFAULT_SLIDER_VALUE_FASHION);
  const [mealQuantity, setMealQuantity] = useState<number>(DEFAULT_SLIDER_VALUE_MEAL);

  const [creationDate, setCreationDate] = useState<Moment>(moment().utc());

  const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false);
  const showDatePicker = useCallback(() => setDatePickerVisibility(true), []);
  const hideDatePicker = useCallback(() => setDatePickerVisibility(false), []);

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const emissionType: EmissionType = route.params?.emissionType;
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const emissionModelType: EmissionModelType = route.params?.emissionModelType;

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
    emissionModelType,
  };

  const renderTransport = () => {
    if (emissionType === EmissionType.transport) {
      if (emissionModelType === TransportType.plane) {
        emissionPayload.value = calculation.getFlightEmissionValue(durationMinutes);
        emissionPayload.emissionModelType = calculation.getFlightType(durationMinutes);
      } else {
        emissionPayload.value = distance;
      }

      return (
        <Transport
          defaultValueSlider={DEFAULT_SLIDER_VALUE_TRANSPORT}
          setDistance={setDistance}
          setDurationMinutes={setDurationMinutes}
          emissionModelType={emissionModelType}
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

  const renderPurchase = () => {
    if (emissionType === EmissionType.purchase) {
      emissionPayload.value = purchaseQuantity;

      return (
        <Purchase
          emissionModelType={emissionModelType}
          defaultValueSlider={DEFAULT_SLIDER_VALUE_PURCHASE}
          setQuantity={setPurchaseQuantity}
        />
      );
    }
    return null;
  };

  const renderMeal = () => {
    if (emissionType === EmissionType.meal) {
      emissionPayload.value = mealQuantity;

      return (
        <Meal
          emissionModelType={emissionModelType}
          defaultValueSlider={DEFAULT_SLIDER_VALUE_MEAL}
          setQuantity={setMealQuantity}
        />
      );
    }
    return null;
  };

  const renderFashion = () => {
    if (emissionType === EmissionType.fashion) {
      emissionPayload.value = fashionQuantity;

      return (
        <Fashion
          emissionModelType={emissionModelType}
          defaultValueSlider={DEFAULT_SLIDER_VALUE_FASHION}
          setQuantity={setFashionQuantity}
        />
      );
    }
    return null;
  };

  const renderFood = () => {
    if (emissionType === EmissionType.food) {
      emissionPayload.value = foodQuantity;

      return (
        <Food
          defaultValueSlider={DEFAULT_SLIDER_VALUE_FOOD}
          setQuantity={setFoodQuantity}
          emissionModelType={emissionModelType}
        />
      );
    }
    return null;
  };

  const renderStreaming = () => {
    if (emissionType === EmissionType.streaming) {
      emissionPayload.value = durationSeconds;
      emissionPayload.location = location;

      return (
        <Streaming
          electricityCountry={location}
          defaultValueSlider={DEFAULT_SLIDER_VALUE_STREAMING}
          setDurationSeconds={setDurationSeconds}
          emissionModelType={emissionModelType}
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

  const isDarkModeEnabled = ui.isDarkModeEnabled();

  const onChangeEmissionName = useCallback((name: string) => {
    if (name.length < EMISSION_NAME_MAX_LENGTH) {
      setEmissionName(name);
    }
  }, []);

  return (
    <KeyboardAwareScrollView style={styles.container}>
      {emissionModelType ? (
        <View style={styles.textContainer}>
          <Text.H2 style={styles.text}>{emissionType}</Text.H2>
          <Text.Primary lightGray style={styles.text}>
            {ui.getTranslationEmissionModelType(emissionModelType)}
          </Text.Primary>
        </View>
      ) : (
        <View style={styles.emptyContainer} />
      )}

      {renderTransport()}
      {renderFood()}
      {renderStreaming()}
      {renderElectricity()}
      {renderPurchase()}
      {renderFashion()}
      {renderMeal()}
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
          <TouchableOpacity style={{ flexDirection: "row" }} onPress={showDatePicker}>
            <Text.Primary lightGray>
              {creationDate.locale(language).format("dddd Do MMMM YYYY")}
            </Text.Primary>
            <Text.Primary lightGray>{" - "}</Text.Primary>
            <Text.Primary bold green>
              {t("ADD_EMISSION_SCREEN_CHANGE")}
            </Text.Primary>
          </TouchableOpacity>
        </View>
      </View>

      <AddEmissionButton
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
