import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView } from "react-native";
import { pathOr } from "ramda";
import moment from "moment";
import { t } from "../../utils";
import styles from "./EmissionItemScreen.styles";
import { Text, Tag, Button } from "../../components";
import { selectors } from "./ducks";
import navigationOptions from "./EmissionItemScreen.navigationOptions";
import { calculation, ui } from "../../utils";
import { emissions } from "../../ducks";
import { navigate } from "../../navigation";

interface Props {
  navigation: {
    state: {
      params: {
        id: string;
      };
    };
  };
}

const EmissionItemScreen = ({ navigation }: Props) => {
  const emissionId = pathOr(false, ["state", "params", "id"], navigation);
  const dispatch = useDispatch();
  const navigator = navigate(navigation);

  if (!emissionId) {
    navigator.goBack();
    return null;
  }

  const emission = useSelector(state =>
    selectors.getEmissionItemById(state, emissionId)
  );
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onPress = () => {};

  /* Avoid crash right after an emission is deleted */
  if (!emission) {
    navigator.goBack();
    return null;
  }

  const { creationDate = "", emissionModelType = "", name = "" } = emission;

  const date = moment(creationDate, "YYYY-MM-DDTHH:mm:ss.sssZ").format(
    "dddd, MMMM Do YYYY"
  );
  const co2Emission = calculation.getC02ValueFromEmission(emission);
  const deleteEmission = () =>
    dispatch(emissions.actions.deleteEmissionById(emission.id));

  return (
    <ScrollView style={styles.container}>
      {name.length ? (
        <>
          <Text.H3>{t("EMISSION_ITEM_NAME")}</Text.H3>
          <Text.Primary darkGray style={styles.item}>
            {name}
          </Text.Primary>
        </>
      ) : null}
      <Text.H3>{t("EMISSION_ITEM_TYPE")}</Text.H3>
      <ScrollView horizontal style={styles.item}>
        <Tag
          selected
          onPress={onPress}
          title={ui.getTranslationModelType(emissionModelType)}
        />
      </ScrollView>
      <Text.H3>{t("EMISSION_ITEM_QUANTITY")}</Text.H3>
      <Text.Primary darkGray style={styles.item}>
        {Math.round(co2Emission)}
        {" kgC02eq"}
      </Text.Primary>
      <Text.H3>{t("EMISSION_ITEM_DATE")}</Text.H3>
      <Text.Primary darkGray style={styles.item}>
        {date}
      </Text.Primary>
      <Button.Primary fullWidth onPress={deleteEmission} textType={"Primary"}>
        <Text.Primary white>{t("EMISSION_ITEM_DELETE_EMISSION")}</Text.Primary>
      </Button.Primary>
    </ScrollView>
  );
};

EmissionItemScreen.navigationOptions = navigationOptions;

export default EmissionItemScreen;
