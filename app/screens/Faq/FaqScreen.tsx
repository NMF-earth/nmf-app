import React from "react";
import { ScrollView } from "react-native";

import Accordion from "components/Accordion";
import { NavStatelessComponent } from "interfaces";

import contents from "./contents";
import styles from "./styles";

const FaqScreen: NavStatelessComponent = () => {
  return (
    <ScrollView style={styles.container}>
      <Accordion>
        {contents.map((content) => (
          <Accordion.Item key={content.key} title={content.title}>
            {content.description}
          </Accordion.Item>
        ))}
      </Accordion>
    </ScrollView>
  );
};

export default FaqScreen;
