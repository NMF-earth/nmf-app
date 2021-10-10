import React from "react";
import { ScrollView } from "react-native";

import Accordion from "components/Accordion";
import { NavStatelessComponent } from "interfaces";

import content from "./FaqContent";
import styles from "./FaqScreen.styles";
import navigationOptions from "./FaqScreen.navigationOptions";

const FaqScreen: NavStatelessComponent = () => {
  return (
    <ScrollView style={styles.container}>
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
