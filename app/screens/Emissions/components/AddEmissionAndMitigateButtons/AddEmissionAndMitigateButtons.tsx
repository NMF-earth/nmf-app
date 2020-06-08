import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { t } from "../../../../utils";
import styles from "./AddEmissionAndMitigateButtons.styles";
import { Text, Button } from "../../../../components";
import { navigate } from "../../../../navigation";

const AddEmissionAndMitigateButtons = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  return (
    <View style={styles.buttonView}>
      <Button.Secondary
        style={styles.buttonLeft}
        onPress={navigator.openComingSoon}
        textType={"Secondary"}
      >
        <Text.Secondary numberOfLines={1} center bold green>
          {t("EMISSIONS_SCREEN_MITIGATE")}
        </Text.Secondary>
      </Button.Secondary>
      <Button.Primary
        style={styles.buttonRight}
        onPress={navigator.openAddEmission}
        textType={"Secondary"}
      >
        <Text.Secondary numberOfLines={1} center white bold>
          {t("EMISSIONS_SCREEN_ADD")}
        </Text.Secondary>
      </Button.Primary>
    </View>
  );
};

export default AddEmissionAndMitigateButtons;
