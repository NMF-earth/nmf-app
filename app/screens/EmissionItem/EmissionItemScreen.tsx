import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, View } from "react-native";
import { isEmpty, pathOr } from "ramda";
import moment from "moment";
import "moment/min/locales";
import { FormattedNumber } from "react-native-globalize";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Text, Tag, Button } from "components";
import { emissions } from "ducks";
import {
  calculation,
  ui,
  t,
  withLocalization,
  LocalizationContextProps,
} from "utils";
import { navigate } from "navigation";

import styles from "./EmissionItemScreen.styles";
import navigationOptions from "./EmissionItemScreen.navigationOptions";

const EmissionItemScreen = ({ language = "" }: LocalizationContextProps) => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const route = useRoute();
  const emissionId = pathOr("", ["params", "id"], route);

  const dispatch = useDispatch();

  const emission = useSelector((state) =>
    emissions.selectors.getEmissionById(state, emissionId)
  );
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onPress = () => {};

  const { creationDate, emissionModelType, name } = emission || {
    creationDate: new Date(),
    emissionModelType: "",
    name: "",
  };

  const date = moment(creationDate, "YYYY-MM-DDTHH:mm:ss.sssZ");
  const day = date.locale(language).format("dddd");
  const monthAndYear = date.locale(language).format("Do MMMM YYYY");
  const co2Emission = calculation.getC02ValueFromEmission(emission || {});
  const deleteEmission = () =>
    dispatch(emissions.actions.deleteEmissionById(emission.id));

  useEffect(() => {
    /* Avoid crash right after an emission is deleted */
    if (!emission) navigator.goBack();
  }, [navigator, emission]);

  return (
    <Fragment>
      {!isEmpty(emission) && (
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
          <ScrollView horizontal style={styles.item}>
            <Tag
              selected
              onPress={onPress}
              title={ui.getTranslationModelType(emissionModelType)}
            />
          </ScrollView>
          <Text.H3>{t("EMISSION_ITEM_SCREEN_QUANTITY")}</Text.H3>
          <Text.Primary darkGray style={styles.item}>
            <FormattedNumber
              maximumFractionDigits={2}
              value={co2Emission > 1 ? co2Emission : co2Emission * 1000}
            />{" "}
            {co2Emission > 1 ? " kgC02eq" : " gC02eq"}
          </Text.Primary>
          <Text.H3>{t("EMISSION_ITEM_SCREEN_DATE")}</Text.H3>
          <View style={styles.date}>
            <Text.Primary darkGray style={[styles.item, styles.day]}>
              {day + " "}
            </Text.Primary>
            <Text.Primary darkGray style={styles.item}>
              {monthAndYear}
            </Text.Primary>
          </View>
          <Button.Primary
            fullWidth
            onPress={deleteEmission}
            textType={"Primary"}
          >
            <Text.Primary white>
              {t("EMISSION_ITEM_SCREEN_DELETE_EMISSION")}
            </Text.Primary>
          </Button.Primary>
        </ScrollView>
      )}
    </Fragment>
  );
};

EmissionItemScreen.navigationOptions = navigationOptions;

export default withLocalization(EmissionItemScreen);
