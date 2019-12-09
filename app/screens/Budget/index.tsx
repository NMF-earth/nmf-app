import React, { useState } from "react";
import { ScrollView, StyleSheet, SafeAreaView } from "react-native";

import NoEmission from "../../components/NoEmission";
import BudgetScreen from "./BudgetScreen";
import navigationOptions from "./BudgetScreen.navigationOptions";

Budget.navigationOptions = navigationOptions;

export default function Budget(): React.ReactElement {
  /* TODO: remove useState and chack if user has data instead */
  let [emission, setEmission] = useState(false);

  if (emission) {
    return <BudgetScreen />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <NoEmission addEmission={() => setEmission(true)} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  }
});
