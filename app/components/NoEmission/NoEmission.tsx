import React from "react";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { t } from "utils";
import { navigate } from "navigation";

import Text from "../Text";
import StickersImage from "../StickersImage";
import Button from "../Button";
import styles from "./NoEmission.styles";

const NoEmission: React.FC = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  return (
    <ScrollView style={styles.container}>
      <StickersImage sticker="earth" />
      <View style={styles.textView}>
        <Text.H1 style={styles.header}>{t("NO_EMISSION_COMPONENT_TITLE")}</Text.H1>
        <Text.Primary style={styles.paragraph}>{t("NO_EMISSION_COMPONENT_THANKS")}</Text.Primary>
        <Text.Primary style={styles.paragraph}>
          {t("NO_EMISSION_COMPONENT_START_USING_APP")}
        </Text.Primary>
        <Button.Primary
          fullWidth
          icon={"add"}
          style={styles.button}
          onPress={() => navigator.openAddEmissionNavigator()}
          text={t("NO_EMISSION_COMPONENT_ADD_FIRST_EMISSION")}
        />
      </View>
    </ScrollView>
  );
};

export default NoEmission;
