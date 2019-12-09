import React, { useState } from "react";
import { ScrollView, StyleSheet, SafeAreaView } from "react-native";

import NoEmission from "../../components/NoEmission";
import BudgetScreen from "./BudgetScreen";

export default function Budget(): React.ReactElement {
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

Budget.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
});
