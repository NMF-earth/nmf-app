import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, View } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { is, path, pathOr } from "ramda";

import { t, withLocalization, LocalizationContextProps } from "utils";
import { navigate } from "navigation";
import { Text, Button, PermissionsRequest } from "components";
import { Colors } from "style";

import styles from "./BarCodeScanScreen.styles";
import navigationOptions from "./BarCodeScanScreen.navigationOptions";

// https://world.openfoodfacts.org/api/v0/product/7622300336738
// https://world.openfoodfacts.org/api/v0/product/7622300336738.data
// product > ecoscore_data > agribalyse > co2_total

const isNumber = is(Number);
const getCO2eq = pathOr("", ["ecoscore_data", "agribalyse", "co2_total"]);
const getNutriscoreGrade = path(["nutriscore_grade"]);
const getNovaGroup = path(["nova_group"]);
const getEcoScore = path(["ecoscore_grade"]);
const getName = path(["product_name"]);

const BarCodeScanScreen = ({ language = "" }: LocalizationContextProps) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [hasCarbonData, setHasCarbonData] = useState(true);
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

  const onPressTryAgain = () => {
    setError(false);
    setIsFetchingData(false);
    setHasCarbonData(true);
  };

  const handleBarCodeScanned = ({ data }) => {
    setError(false);
    setScanned(true);
    setIsFetchingData(true);

    fetch(`https://world.openfoodfacts.org/api/v0/product/${data}`)
      .then((response) => response.json())
      .then(({ product, status_verbose }) => {
        if (status_verbose === "product found") {
          let name = getName(product);
          name = path(["product", "product_name_" + language], product) || name;

          const co2eq = parseFloat(getCO2eq(product));
          const nutriscoreGrade = getNutriscoreGrade(product);
          const novaGroup = getNovaGroup(product);
          const ecoScore = getEcoScore(product);

          if (isNumber(co2eq)) {
            navigator.openAddEmissionBarCode({
              co2eq,
              name,
              nutriscoreGrade,
              novaGroup,
              ecoScore,
            });
          } else {
            setHasCarbonData(false);
          }
        } else {
          throw "Item Not Found";
        }

        setIsFetchingData(false);
      })
      .catch(() => {
        setIsFetchingData(false);
        setError(true);
      });
  };

  if (hasPermission === null) {
    return <View style={styles.container}></View>;
  }

  if (!hasPermission) {
    return <PermissionsRequest type="camera" />;
  }

  if (error) {
    return (
      <View style={styles.container}>
        <View style={[styles.container, styles.centeredContainer]}>
          <Text.H2 center>{t("BAR_CODE_SCAN_SCREEN_ERROR_TITLE")}</Text.H2>
          <Text.Primary center>{t("BAR_CODE_SCAN_SCREEN_ERROR_MESSAGE")}</Text.Primary>
        </View>
        <Button.Secondary style={styles.scanAgain} textType={"Primary"} onPress={onPressTryAgain}>
          <Text.Primary bold center green>
            {t("BAR_CODE_SCAN_SCREEN_TRY_AGAIN")}
          </Text.Primary>
        </Button.Secondary>
      </View>
    );
  }

  if (!hasCarbonData) {
    return (
      <View style={styles.container}>
        <View style={[styles.container, styles.centeredContainer]}>
          <Text.H2 center>{t("BAR_CODE_SCAN_SCREEN_NO_CARBON_DATA_TITLE")}</Text.H2>
          <Text.Primary center>{t("BAR_CODE_SCAN_SCREEN_NO_CARBON_DATA_MESSAGE")}</Text.Primary>
        </View>
        <Button.Secondary style={styles.scanAgain} textType={"Primary"} onPress={onPressTryAgain}>
          <Text.Primary bold center green>
            {t("BAR_CODE_SCAN_SCREEN_TRY_AGAIN")}
          </Text.Primary>
        </Button.Secondary>
      </View>
    );
  }

  if (isFetchingData) {
    return (
      <View style={[styles.container, styles.centeredContainer]}>
        <ActivityIndicator style={styles.loading} size="large" color={Colors.green50} />
        <Text.H2 center>{t("BAR_CODE_SCAN_SCREEN_LOADING")}</Text.H2>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text.H2 center style={styles.scanProductText}>
          {t("BAR_CODE_SCAN_SCREEN_SCAN_PRODUCT")}
        </Text.H2>
        <BarCodeScanner
          style={styles.scanner}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
        {/* <Button.Secondary
          style={styles.scanAgain}
          textType={"Primary"}
          onPress={() => handleBarCodeScanned({ data: 7622300336738 })}
        >
          <Text.Primary bold center green>
            {"No camera access test"}
          </Text.Primary>
        </Button.Secondary> */}
      </View>
    );
  }
};

BarCodeScanScreen.navigationOptions = navigationOptions();

export default withLocalization(BarCodeScanScreen);
