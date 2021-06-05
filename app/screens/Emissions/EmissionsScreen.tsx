import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { Text, Button } from "components";
import { t } from "utils";
import { navigate } from "navigation";

import styles from "./EmissionsScreen.styles";
import { EmissionsList } from "./components";
import { selectors } from "./ducks";

const EmissionsScreen = () => {
  const emissions = useSelector(selectors.getEmissions);
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  return (
    <>
      <View style={styles.container}>
        <EmissionsList emissions={emissions} />
      </View>
      <View style={styles.buttonView}>
        <Button.Primary
          fullWidth
          onPress={() => navigator.openCategorySelection()}
          textType={"Secondary"}
        >
          <Text.Secondary numberOfLines={1} center white bold>
            {t("EMISSIONS_SCREEN_ADD_EMISSION")}
          </Text.Secondary>
        </Button.Primary>
      </View>
    </>
  );
};

export default EmissionsScreen;
