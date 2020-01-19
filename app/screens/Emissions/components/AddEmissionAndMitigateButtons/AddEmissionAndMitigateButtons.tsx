import React from "react";
import { View } from "react-native";
import { t } from "../../../../utils";
import styles from "./AddEmissionAndMitigateButtons.styles";
import { Text, Button } from "../../../../components";

interface Props {
  navigation: {
    push: (screen: string) => void;
  };
}

const AddEmissionAndMitigateButtons = ({ navigation }: Props) => (
  <View style={styles.buttonView}>
    <Button.Primary
      style={styles.buttonLeft}
      black
      onPress={() => {
        navigation.push("ComingSoon");
      }}
      textType={"Primary"}
    >
      <Text.Primary center white bold>
        {t("EMISSIONS_SCREEN_MITIGATE")}
      </Text.Primary>
    </Button.Primary>
    <Button.Primary
      style={styles.buttonRight}
      onPress={() => {
        navigation.push("AddEmission");
      }}
      textType={"Primary"}
    >
      <Text.Primary center white bold>
        {t("EMISSIONS_SCREEN_ADD")}
      </Text.Primary>
    </Button.Primary>
  </View>
);

export default AddEmissionAndMitigateButtons;
