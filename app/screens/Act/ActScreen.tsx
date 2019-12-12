import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { t } from "../../utils/translations";
import TabbedView from "../../components/TabbedView";
import GuidePreview from "../../components/GuidePreview";
import { Guide, GuideCategory } from "../../types/common-types";

import Guides from "../../../assets/guides/guides.json"
import { NavigationParams } from "react-navigation";

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
  const kitchenGuides = Guides
    .filter(guide => guide.category === GuideCategory.kitchen) as Guide[];
  const techGuides = Guides
    .filter(guide => guide.category === GuideCategory.technology) as Guide[];

  return <ScrollView style={styles.container}>
    <TabbedView
      items={[
        { title: t("HABITS"), component: (
          <View>
            <GuidePreview
              title="Kitchen" 
              listItems={kitchenGuides} 
              onPress={(guide: Guide) => props.navigation.push("Details", { guide })} 
            />
            <GuidePreview
              title="Technology" 
              listItems={techGuides} 
              onPress={(guide: Guide) => props.navigation.push("Details", { guide })} 
            />
        </View>
        )},
        { title: t("FOOD"), component: (
          <React.Fragment>
            <GuidePreview
              title="Food" 
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
