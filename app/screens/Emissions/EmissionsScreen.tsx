import React from "react";
import { SafeAreaView, View } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { Text, Button } from "components";
import { budget } from "ducks";
import { t } from "utils";
import { navigate } from "navigation";

import styles from "./EmissionsScreen.styles";
import { EmissionsList } from "./components";
import { selectors } from "./ducks";

const EmissionsScreen = () => {
  const monthlyCarbonBudget = useSelector(
    budget.selectors.getMonthlyCarbonBudget
  );
  const emissions = useSelector(selectors.getEmissions);
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <EmissionsList
          monthlyCarbonBudget={monthlyCarbonBudget}
          emissions={emissions}
        />
      </SafeAreaView>
      <View style={styles.buttonView}>
        <Button.Primary
          fullWidth
          onPress={() => navigator.openAddEmission()}
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
