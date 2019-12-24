import React, { useState } from "react";
import { ScrollView, StyleSheet, SafeAreaView } from "react-native";

import NoEmission from "../../components/NoEmission";
import EmissionsScreen from "./EmissionsScreen";
import navigationOptions from "./EmissionsScreen.navigationOptions";

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

const Emissions = (props: Props) => {
  const [emission, setEmission] = useState(true);

  if (emission) {
    return <EmissionsScreen {...props} />;
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

Emissions.navigationOptions = navigationOptions;

export default Emissions;
