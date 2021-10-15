import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import { Text, Button } from "components";
import { NavStatelessComponent } from "interfaces";

import styles from "./BarCodeScanScreen.styles";
import navigationOptions from "./BarCodeScanScreen.navigationOptions";

// https://world.openfoodfacts.org/api/v0/product/7622300336738
// product > ecoscore_data > agribalyse > co2_total

const BarCodeScanScreen: NavStatelessComponent = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    alert(`Bar code with data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text.Primary>Requesting for camera permission</Text.Primary>;
  }

  if (hasPermission === false) {
    return <Text.Primary>No access to camera</Text.Primary>;
  }

  return (
    <View style={styles.container}>
      <Text.H2 style={styles.info}>Scan product barcode</Text.H2>
      <BarCodeScanner
        style={styles.scanner}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      />
      {scanned && (
        <Button.Primary
          style={styles.scanAgain}
          textType={"Primary"}
          onPress={() => setScanned(false)}
        >
          <Text.Primary bold center white>
            {"Tap to Scan Again"}
          </Text.Primary>
        </Button.Primary>
      )}
    </View>
  );
};

BarCodeScanScreen.navigationOptions = navigationOptions();

export default BarCodeScanScreen;
