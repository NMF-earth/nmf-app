import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, View, Switch } from "react-native";
import { isEmpty, pathOr } from "ramda";
import moment from "moment";
import "moment/min/locales";
import { FormattedNumber } from "react-native-globalize";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Text, Button } from "components";
import { emissions } from "ducks";
import { calculation, ui, t, withLocalization, LocalizationContextProps } from "utils";
import { navigate } from "navigation";

import styles from "./EmissionItemScreen.styles";
import navigationOptions from "./EmissionItemScreen.navigationOptions";

const EmissionItemScreen = ({ language = "" }: LocalizationContextProps) => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const route = useRoute();
  const emissionId = pathOr("", ["params", "id"], route);

  const dispatch = useDispatch();

  const emission = useSelector((state) => emissions.selectors.getEmissionById(state, emissionId));

  const { creationDate, emissionModelType, emissionType, name, isMitigated } = emission || {
    creationDate: new Date(),
    emissionModelType: "",
    name: "",
  };

  const date = moment(creationDate, "YYYY-MM-DDTHH:mm:ss.sssZ");
  const day = date.locale(language).format("dddd");
  const monthAndYear = date.locale(language).format("Do MMMM YYYY");
  const co2Emission = calculation.getC02ValueFromEmission(emission || {});
  const deleteEmission = () => dispatch(emissions.actions.deleteEmission(emission.id));
  const toggleIsMitigated = () => dispatch(emissions.actions.toggleIsMitigated(emission.id));

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
          <Text.Primary darkGray style={styles.lastItem}>
            {name}
          </Text.Primary>
        </>
      ) : null}
      <Text.H3>{t("EMISSION_ITEM_SCREEN_TYPE")}</Text.H3>
      <Text.Primary darkGray style={styles.lastItem}>
        {ui.getTranslationEmissionType(emissionType)}
        {" - "}
        {ui.getTranslationEmissionModelType(emissionModelType)}
      </Text.Primary>
      <Text.H3>{t("EMISSION_ITEM_SCREEN_QUANTITY")}</Text.H3>
      <Text.Primary darkGray style={styles.lastItem}>
        <FormattedNumber
          maximumFractionDigits={2}
          value={co2Emission > 1 ? co2Emission : co2Emission * 1000}
        />{" "}
        {co2Emission > 1 ? " kgC02eq" : " gC02eq"}
      </Text.Primary>

      <Text.H3>{t("EMISSION_ITEM_SCREEN_MITIGATED")}</Text.H3>
      <Text.Primary darkGray style={styles.text}>
        {isMitigated
          ? t("EMISSION_ITEM_SCREEN_IS_MITIGATED")
          : t("EMISSION_ITEM_SCREEN_IS_NOT_MITIGATED")}
      </Text.Primary>
      <View style={styles.lastItem}>
        <Switch value={isMitigated} onValueChange={toggleIsMitigated} />
      </View>

      <Text.H3>{t("EMISSION_ITEM_SCREEN_DATE")}</Text.H3>
      <View style={styles.date}>
        <Text.Primary darkGray style={[styles.lastItem, styles.day]}>
          {day + " "}
        </Text.Primary>
        <Text.Primary darkGray style={styles.lastItem}>
          {monthAndYear}
        </Text.Primary>
      </View>
      <Button.Primary red fullWidth onPress={deleteEmission} textType={"Primary"}>
        <Text.Primary white>{t("EMISSION_ITEM_SCREEN_DELETE_EMISSION")}</Text.Primary>
      </Button.Primary>
    </ScrollView>
  );
};

EmissionItemScreen.navigationOptions = navigationOptions;

export default withLocalization(EmissionItemScreen);
