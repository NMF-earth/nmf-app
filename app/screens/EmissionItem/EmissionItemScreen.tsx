import React from "react";
import { useSelector } from "react-redux";
import { ScrollView, View } from "react-native";
import { pathOr } from "ramda";
import { t } from "../../utils";
import styles from "./EmissionItemScreen.styles";
import { Text } from "../../components";
import { selectors } from "./ducks";

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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.textView}>
        <Text.H1>{t("EMISSION_MITIGATED_QUESTION")}</Text.H1>
        <Text.Primary style={styles.paragraph}>
          {/* {emission['isMitigated']} */}
        </Text.Primary>
        <Text.H1>{t("EMISSION_QUANTITY")}</Text.H1>
        <Text.Primary style={styles.paragraph}>{emission.value}</Text.Primary>
        <Text.H1>{t("EMISSION_PRICE")}</Text.H1>
        <Text.Primary style={styles.paragraph}>{emission.value}</Text.Primary>
        <Text.H1>{t("EMISSION_DATE")}</Text.H1>
        <Text.Primary style={styles.paragraph}>
          {emission.creationDate}
        </Text.Primary>
      </View>
    </ScrollView>
  );
};

export default EmissionItemScreen;
