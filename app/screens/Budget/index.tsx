import React, { useState } from "react";
import { ScrollView, StyleSheet, SafeAreaView } from "react-native";

import NoEmission from "../../components/NoEmission";
import BudgetScreen from "./BudgetScreen";
import navigationOptions from "./BudgetScreen.navigationOptions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  }
});

export default function Budget(): React.ReactElement {
  const [emission, setEmission] = useState(true);

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

Budget.navigationOptions = navigationOptions;
