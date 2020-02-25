import React from "react";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native";
import { pathOr } from "ramda";
import moment from "moment";
import { t } from "../../utils";
import styles from "./EmissionItemScreen.styles";
import { Text, Tag } from "../../components";
import { selectors } from "./ducks";
import navigationOptions from "./EmissionItemScreen.navigationOptions";

interface Props {
  navigation: {
    state: {
      params: {
        id: string;
      };
    };
    goBack: () => void;
  };
}

const EmissionItemScreen = ({ navigation }: Props) => {
  const emissionId = pathOr(false, ["state", "params", "id"], navigation);

  if (!emissionId) {
    navigation.goBack();
  }

  const emission = useSelector(state =>
    selectors.getEmissionItemById(state, emissionId)
  );
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onPress = () => {};
  const date = moment(emission.creationDate, "YYYY-MM-DDTHH:mm:ss.sssZ").format(
    "dddd, MMMM Do YYYY"
  );
  console.log("TCL: EmissionItemScreen -> emission", emission);

  return (
    <ScrollView style={styles.container}>
      <Text.H3>{t("EMISSION_ITEM_TYPE")}</Text.H3>
      <ScrollView horizontal style={styles.item}>
        <Tag selected onPress={onPress} title={emission.emissionModelType} />
      </ScrollView>
      <Text.H3>{t("EMISSION_ITEM_QUANTITY")}</Text.H3>
      <Text.Primary darkGray style={styles.item}>
        {emission.value}
      </Text.Primary>
      <Text.H3>{t("EMISSION_ITEM_DATE")}</Text.H3>
      <Text.Primary darkGray style={styles.item}>
        {date}
      </Text.Primary>
    </ScrollView>
  );
};

EmissionItemScreen.navigationOptions = navigationOptions;

export default EmissionItemScreen;
