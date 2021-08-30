import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

import styles from "./EmissionsScreen.styles";
import { EmissionsList } from "./components";
import { selectors } from "./ducks";

const EmissionsScreen: React.FC = () => {
  const emissions = useSelector(selectors.getEmissions);

  return (
    <>
      <View style={styles.container}>
        <EmissionsList emissions={emissions} />
      </View>
    </>
  );
};

export default EmissionsScreen;
