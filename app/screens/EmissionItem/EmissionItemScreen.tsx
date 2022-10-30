import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, View, Switch } from "react-native";
import { isEmpty, pathOr } from "ramda";
import moment from "moment";
import "moment/min/locales";
import { FormattedNumber } from "react-native-globalize";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Text, Button } from "components";
import { emissions, recurringEmissions } from "ducks";
import {
  calculation,
  ui,
  t,
  withLocalization,
  LocalizationContextProps,
  getLocaleForMoment,
} from "utils";
import { navigate } from "navigation";
import { EmissionType } from "interfaces";

import styles from "./EmissionItemScreen.styles";
import navigationOptions from "./EmissionItemScreen.navigationOptions";

const EmissionItemScreen = ({ language = "" }: LocalizationContextProps) => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const route = useRoute();
  const emissionId = pathOr("", ["params", "id"], route);
  const isRecurringEmission = pathOr(false, ["params", "isRecurringEmission"], route);

  const dispatch = useDispatch();

  let emission = useSelector((state) => emissions.selectors.getEmissionById(state, emissionId));

  const recurringEmission = useSelector((state) =>
    recurringEmissions.selectors.getRecurringEmissionById(state, emissionId)
  );

  if (isRecurringEmission) {
    emission = recurringEmission;
  }

  const {
    creationDate,
    emissionModelType,
    emissionType,
    name,
    isMitigated,
    weekDays,
    periodType,
    times,
  } = emission || {
    creationDate: new Date(),
    emissionModelType: "",
    name: "",
  };

  const date = moment(creationDate, "YYYY-MM-DDTHH:mm:ss.sssZ");
  const day = date.locale(getLocaleForMoment(language)).format("dddd");
  const monthAndYear = date.locale(getLocaleForMoment(language)).format("Do MMMM YYYY");
  const co2Emission = calculation.getC02ValueFromEmission(emission || {});
  const deleteEmission = () => {
    if (isRecurringEmission) {
      dispatch(recurringEmissions.actions.deleteRecurringEmission(recurringEmission.id));
    } else {
      dispatch(emissions.actions.deleteEmission(emission.id));
    }
  };
  const toggleIsMitigated = () => {
    dispatch(emissions.actions.toggleIsMitigated(emission.id));
  };

  useEffect(() => {
    /* Avoid crash right after an emission is deleted */
    if (!emission) {
      navigator.goBack();
    }
  }, [navigator, emission]);

  if (isEmpty(emission)) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      {name.length ? (
        <>
          <Text.H3>{t("EMISSION_ITEM_SCREEN_NAME")}</Text.H3>
          <Text.Primary darkGray style={styles.item}>
            {name}
          </Text.Primary>
        </>
      ) : null}
      <Text.H3>{t("EMISSION_ITEM_SCREEN_TYPE")}</Text.H3>
      {emissionType == EmissionType.custom || emissionType == EmissionType.productScanned ? (
        <Text.Primary darkGray style={styles.item}>
          {ui.getTranslationEmissionType(emissionType)}
        </Text.Primary>
      ) : (
        <Text.Primary darkGray style={styles.item}>
          {ui.getTranslationEmissionType(emissionType)}
          {" - "}
          {ui.getTranslationEmissionModelType(emissionModelType)}
        </Text.Primary>
      )}
      <Text.H3>{t("EMISSION_ITEM_SCREEN_QUANTITY")}</Text.H3>
      <Text.Primary darkGray style={styles.item}>
        <FormattedNumber
          maximumFractionDigits={2}
          value={co2Emission > 1 ? co2Emission : co2Emission * 1000}
        />{" "}
        {co2Emission > 1 ? " kgC02eq" : " gC02eq"}
      </Text.Primary>

      {!isRecurringEmission && (
        <>
          <Text.H3>{t("EMISSION_ITEM_SCREEN_MITIGATED")}</Text.H3>
          <Text.Primary darkGray style={styles.text}>
            {isMitigated
              ? t("EMISSION_ITEM_SCREEN_IS_MITIGATED")
              : t("EMISSION_ITEM_SCREEN_IS_NOT_MITIGATED")}
          </Text.Primary>
          <View style={styles.item}>
            <Switch value={isMitigated} onValueChange={toggleIsMitigated} />
          </View>
        </>
      )}

      <Text.H3>{t("EMISSION_ITEM_SCREEN_DATE")}</Text.H3>
      <View style={styles.date}>
        <Text.Primary darkGray style={[styles.item, styles.day]}>
          {day + " "}
        </Text.Primary>
        <Text.Primary darkGray style={styles.item}>
          {monthAndYear}
        </Text.Primary>
      </View>

      {isRecurringEmission && (
        <>
          <Text.H3>{t("EMISSION_ITEM_SCREEN_PERIODICITY")}</Text.H3>
          <View style={styles.item}>
            <Text.Primary darkGray style={styles.item}>
              {calculation.getPeriodicityText({ times, periodType, weekDays })}
            </Text.Primary>
          </View>
        </>
      )}

      <Button.Danger
        fullWidth
        icon={"trash"}
        onPress={deleteEmission}
        text={t("EMISSION_ITEM_SCREEN_DELETE")}
      />
    </ScrollView>
  );
};

EmissionItemScreen.navigationOptions = navigationOptions;

export default withLocalization(EmissionItemScreen);
