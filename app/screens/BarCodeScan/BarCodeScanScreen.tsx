import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import { navigate } from "navigation";
import { Text, Button } from "components";
import { NavStatelessComponent } from "interfaces";

import styles from "./BarCodeScanScreen.styles";
import navigationOptions from "./BarCodeScanScreen.navigationOptions";

// https://world.openfoodfacts.org/api/v0/product/7622300336738
// product > ecoscore_data > agribalyse > co2_total

const BarCodeScanScreen: NavStatelessComponent = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const navigation = useNavigation();
  const navigator = navigate(navigation);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    // TODO: Add A Loading Screen

    fetch(`https://world.openfoodfacts.org/api/v0/product/${data}`)
      .then((response) => response.json())
      .then((json) => {
        if (json["status_verbose"] === "product found") {
          // TODO: Add Localised Name So It's In The Correct Language
          navigator.openAddEmissionBarCode({
            co2: json["product"]["ecoscore_data"]["agribalyse"]["co2_total"],
            name: json["product"]["ecoscore_data"]["agribalyse"]["name_en"],
            nutriscore_grade: json["product"]["nutriscore_grade"],
            nova_group: json["product"]["nova_group"],
            ecoscore_grade: json["product"]["ecoscore_grade"],
          });
        } else {
          throw "Item Not Found";
        }
      })
      .catch((error) => {
        // TODO: Handle Error Incase The Data Cant Be Found
        console.error(error);
      });
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
