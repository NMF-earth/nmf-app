import React from "react";
import { ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { EmissionType, EmissionModelType, NavStatelessComponent } from "interfaces";
import { Text, Tag } from "components";
import { t, ui } from "utils";
import { navigate } from "navigation";

import {
  foodTypes,
  fashionTypes,
  transportTypes,
  purchaseTypes,
  mealTypes,
  streamingTypes,
} from "./subCategoryTypes";
import navigationOptions from "./SubCategorySelectionScreen.navigationOptions";
import styles from "./SubCategorySelectionScreen.styles";

const getSubCategory = (emissionType): Array<EmissionModelType> => {
  switch (emissionType) {
    case EmissionType.fashion:
      return fashionTypes;
    case EmissionType.food:
      return foodTypes;
    case EmissionType.transport:
      return transportTypes;
    case EmissionType.purchase:
      return purchaseTypes;
    case EmissionType.meal:
      return mealTypes;
    case EmissionType.streaming:
      return streamingTypes;
    default:
      return fashionTypes;
      break;
  }
};

const SubCategorySelectionScreen: NavStatelessComponent = () => {
  const route = useRoute();

  const navigation = useNavigation();
  const navigator = navigate(navigation);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const emissionType = route.params?.emissionType;

  const subCategories = getSubCategory(emissionType);

  return (
    <ScrollView style={styles.container}>
      <Text.H2 style={styles.info}>
        {t("SUB_CATEGORY_SELECTION_SCREEN_SELECT_SUB_CATEGORY")}
      </Text.H2>
      {subCategories.map((subCategory) => (
        <Tag
          key={subCategory}
          text={ui.getTranslationEmissionModelType(subCategory)}
          onPress={() =>
            navigator.openAddEmission({ emissionType, emissionModelType: subCategory })
          }
        />
      ))}
    </ScrollView>
  );
};

SubCategorySelectionScreen.navigationOptions = navigationOptions();

export default SubCategorySelectionScreen;
