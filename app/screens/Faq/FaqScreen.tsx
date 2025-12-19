import React from "react";
import { ScrollView } from "react-native";

import Accordion from "components/Accordion";
import { NavStatelessComponent } from "interfaces";
import { useTabBarBottomPadding } from "hooks/useTabBarBottomPadding";

import content from "./FaqContent";
import styles from "./FaqScreen.styles";
import navigationOptions from "./FaqScreen.navigationOptions";

const FaqScreen: NavStatelessComponent = () => {
  const bottomPadding = useTabBarBottomPadding();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.contentContainer,
        { paddingBottom: 24 + bottomPadding },
      ]}
      contentInsetAdjustmentBehavior="automatic"
    >
      <Accordion>
        {content.map((content, index) => (
          <Accordion.Item key={index} title={content.title}>
            {content.description}
          </Accordion.Item>
        ))}
      </Accordion>
    </ScrollView>
  );
};

FaqScreen.navigationOptions = navigationOptions();

export default FaqScreen;
