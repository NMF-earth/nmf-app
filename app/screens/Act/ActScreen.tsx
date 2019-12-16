import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import { t } from "../../utils/translations";
import TabbedView from "../../components/TabbedView";
import GuidePreview from "../../components/GuidePreview";
import { Guide, GuideCategory } from "../../types/common-types";
import { filter, pathEq } from "ramda";

import Guides from "../../../assets/guides/guides.json";
import { NavigationParams } from "react-navigation";

const isKitchen = pathEq(["category"], GuideCategory.kitchen);
const isTechnology = pathEq(["category"], GuideCategory.technology);

interface Props {
  navigation: {
    push: (screen: string, params: NavigationParams) => void;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  text: {
    textAlign: "center"
  }
});

export default function ActScreen(props: Props): React.ReactElement {
  const kitchenGuides = filter(isKitchen, Guides) as Guide[];
  const techGuides = filter(isTechnology, Guides) as Guide[];

  return <ScrollView style={styles.container}>
    <TabbedView
      items={[
        { title: t("HABITS"), component: (
          <React.Fragment>
            <GuidePreview
              title={t("KITCHEN")}
              listItems={kitchenGuides} 
              onPress={(guide: Guide) => props.navigation.push("Details", { guide })} 
            />
            <GuidePreview
              title={t("TECHNOLOGY")}
              listItems={techGuides} 
              onPress={(guide: Guide) => props.navigation.push("Details", { guide })} 
            />
        </React.Fragment>
        )},
        { title: t("FOOD"), component: (
          <React.Fragment>
            <GuidePreview
              title={t("FOOD")}
              listItems={kitchenGuides} 
              onPress={(guide: Guide) => props.navigation.push("Details", { guide })} 
            />
          </React.Fragment>
        )},
      ]}
    />
  </ScrollView>;
}

ActScreen.navigationOptions = {
  title: t("ACT")
};
