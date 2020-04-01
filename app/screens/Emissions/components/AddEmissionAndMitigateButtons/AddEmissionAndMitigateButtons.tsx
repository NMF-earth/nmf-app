import React from "react";
import { View } from "react-native";
import { t } from "../../../../utils";
import styles from "./AddEmissionAndMitigateButtons.styles";
import { Text, Button } from "../../../../components";

interface Props {
  navigation: {
    push: (screen: string) => void;
    navigate: (screen: string) => void;
  };
}

const AddEmissionAndMitigateButtons = ({ navigation }: Props) => (
  <View style={styles.buttonView}>
    <Button.Secondary
      style={styles.buttonLeft}
      onPress={() => navigation.navigate("ComingSoon")}
      textType={"Secondary"}
    >
      <Text.Secondary center bold green>
        {t("EMISSIONS_SCREEN_MITIGATE")}
      </Text.Secondary>
    </Button.Secondary>
    <Button.Primary
      style={styles.buttonRight}
      onPress={() => {
        navigation.push("AddEmission");
      }}
      textType={"Secondary"}
    >
      <Text.Secondary center white bold>
        {t("EMISSIONS_SCREEN_ADD")}
      </Text.Secondary>
    </Button.Primary>
  </View>
);

export default AddEmissionAndMitigateButtons;
