import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import { Text } from "../../components";
import { t } from "../../utils";
import { Colors, ComponentsStyle } from "../../style";
import { navigate } from "../../navigation";

const navigationOptions = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  return {
    ...ComponentsStyle.transitionBetweenScreenPresets,
    headerStyle: {
      ...ComponentsStyle.header,
    },
    headerBackTitleVisible: false,
    headerTintColor: Colors.grey100,
    headerRight: () => (
      <Ionicons
        name="md-information-circle"
        size={26}
        style={{ marginRight: 10 }}
        color={Colors.grey100}
        onPress={navigator.openMethodology}
      />
    ),
    headerTitle: () => <Text.H1>{t("ADD_EMISSION_TITLE")}</Text.H1>,
  };
};
export default navigationOptions;
