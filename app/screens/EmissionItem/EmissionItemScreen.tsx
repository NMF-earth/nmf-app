import React from "react";
import { ScrollView, View } from "react-native";
import { t } from "../../utils";
import styles from "./EmissionItemScreen.styles";
import { useSelector } from "react-redux";
import {
  Text,
} from "../../components";
import { NavigationState } from "react-navigation";
import { emissions } from "../../ducks";

interface Props {
  navigation: {
    state: NavigationState;
  };
}

const EmissionItemScreen = ({ navigation }: Props) => {
  
  const em = useSelector(state => emissions.selectors.getEmissionById(state, navigation.state.params.item.id));


  return (

    <ScrollView style={styles.container}>
      <View style={styles.textView}>
        <Text.H1>
          {t("EMISSION_MITIGATED_QUESTION")}
        </Text.H1>
        <Text.Primary style={styles.paragraph}>
          {/* {em['isMitigated']} */}
        </Text.Primary>
        <Text.H1>
          {t("EMISSION_QUANTITY")}
        </Text.H1>
        <Text.Primary style={styles.paragraph}>
          {em.value}
        </Text.Primary>
        <Text.H1>
          {t("EMISSION_PRICE")}
        </Text.H1>
        <Text.Primary style={styles.paragraph}>
          {em.value}
        </Text.Primary>
        <Text.H1>
          {t("EMISSION_DATE")}
        </Text.H1>
        <Text.Primary style={styles.paragraph}>
          {em.creationDate}
        </Text.Primary>
      </View>
    </ScrollView>
  );
};

export default EmissionItemScreen;
