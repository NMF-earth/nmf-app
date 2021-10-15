import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, StyleSheet, View } from "react-native";
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
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [error, setError] = useState(false);

  const navigation = useNavigation();
  const navigator = navigate(navigation);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setError(false);
    setScanned(true);
    setIsFetchingData(true);

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
        setIsFetchingData(false);
      })
      .catch((error) => {
        // TODO: Handle Error Incase The Data Cant Be Found
        setIsFetchingData(false);
        setError(true);
      });
  };

  if (hasPermission === null) {
    return <Text.Primary>Requesting for camera permission</Text.Primary>;
  }

  if (hasPermission === false) {
    return <Text.Primary>No access to camera</Text.Primary>;
  }

  if (!error) {
    if (!isFetchingData) {
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
    } else {
      return (
        <View style={[styles.container, styles.centeredContainer]}>
          <Text.H2 style={styles.info}>Reading product barcode</Text.H2>
          <ActivityIndicator style={styles.loading} size="large" color="#0F853B" />
        </View>
      );
    }
  } else {
    return (
      <View style={[styles.container]}>
        <View style={[styles.container, styles.centeredContainer]}>
          <Text.H2 style={styles.centeredText}>Something went wrong</Text.H2>
          <Text.Primary style={styles.centeredText}>
            Make sure you have internet and try again.
          </Text.Primary>
        </View>
        <Button.Primary
          style={styles.scanAgain}
          textType={"Secondary"}
          onPress={() => {
            setError(false);
            setIsFetchingData(false);
            setScanned(false);
          }}
        >
          <Text.Primary bold center white>
            {"Try Again"}
          </Text.Primary>
        </Button.Primary>
      </View>
    );
  }
};

BarCodeScanScreen.navigationOptions = navigationOptions();

export default BarCodeScanScreen;
