import React from "react";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { navigate } from "navigation";
import { EmissionType, NavStatelessComponent } from "interfaces";
import { Text, Tag } from "components";
import { t, ui } from "utils";

import { categories } from "./categoryList";
import navigationOptions from "./CategorySelectionScreen.navigationOptions";
import styles from "./CategorySelectionScreen.styles";

// TODO: to be removed once scanned products emissions are released
let cleanedCategories = categories.filter(
  (item) => item.emissionType !== EmissionType.productScanned
);

if (__DEV__) {
  cleanedCategories = categories;
}

const CategorySelectionScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const onPress = ({ emissionType }) => {
    if (emissionType === EmissionType.custom || emissionType === EmissionType.electricity) {
      navigator.openAddEmission({ emissionType });
    } else if (emissionType === EmissionType.productScanned) {
      navigator.openBarCodeScan({ emissionType });
    } else {
      navigator.openSubCategorySelection({ emissionType });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text.H2 style={styles.info}>{t("CATEGORY_SELECTION_SCREEN_SELECT_CATEGORY")}</Text.H2>
      {cleanedCategories.map((category, index) => (
        <Tag
          key={index}
          icon={category.icon}
          text={ui.getTranslationEmissionType(category.emissionType)}
          onPress={() => onPress(category)}
        />
      ))}
      <View style={styles.separator}></View>
    </ScrollView>
  );
};

CategorySelectionScreen.navigationOptions = navigationOptions();

export default CategorySelectionScreen;
