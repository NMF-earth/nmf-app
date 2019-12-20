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

interface Props {
  navigation: {
    push: (screen: string) => void;
  };
}

const Budget = (props: Props) => {
  const [emission, setEmission] = useState(true);

  if (emission) {
    return <BudgetScreen {...props} />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <NoEmission addEmission={() => setEmission(true)} />
        </ScrollView>
      </SafeAreaView>
    );
  }
};

Budget.navigationOptions = navigationOptions;

export default Budget;
