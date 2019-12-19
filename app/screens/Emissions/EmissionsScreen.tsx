import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import NoEmission from "../../components/NoEmission";
import { t } from "../../utils/translations";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

export default function EmissionsScreen(): React.ReactElement {
  return (
    <ScrollView style={styles.container}>
      <NoEmission
        addEmission={() => {
          // do nothing.
        }}
      />
    </ScrollView>
  );
}

EmissionsScreen.navigationOptions = {
  title: t("EMISSIONS_SCREEN_TITLE")
};
