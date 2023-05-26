import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, View } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { is, path, pathOr, both, complement, equals } from "ramda";
import ExpoConstants from "expo-constants";

import { EmissionType } from "interfaces";
import { t, withLocalization, LocalizationContextProps, platform } from "utils";
import { navigate } from "navigation";
import { Text, Button, PermissionsRequest, OpenFoodFacts } from "components";
import { Colors } from "style";

import styles from "./BarCodeScanScreen.styles";
import navigationOptions from "./BarCodeScanScreen.navigationOptions";

/* more info on the http request at https://world.openfoodfacts.org/api/v0/product/7622300336738.data */

const isValidNumber = both(is(Number), complement(equals(NaN)));
const getCO2eq = pathOr("", ["ecoscore_data", "agribalyse", "co2_total"]);
const getNutriscoreGrade = pathOr("", ["nutriscore_grade"]);
const getNovaGroup = pathOr(0, ["nova_group"]);
const getEcoScore = pathOr("", ["ecoscore_grade"]);
const getName = path(["product_name"]);

const BarCodeScanScreen = ({ language = "" }: LocalizationContextProps) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [hasCarbonData, setHasCarbonData] = useState(true);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [error, setError] = useState(false);
  const [nutriscoreGrade, setNutriscoreGrade] = useState("");
  const [novaGroup, setNovaGroup] = useState(0);
  const [ecoScore, setEcoScore] = useState("");

  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const { version, ios, android } = ExpoConstants.manifest;
  const buildNumber = platform.isIOS ? ios.buildNumber : android.versionCode;
  const platformType = platform.isIOS ? "iOS" : "Android";

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

    const headers = new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent":
        "NMF.earth - " + platformType + " - Version " + version + "-" + `${buildNumber}`,
    });

    fetch(`https://world.openfoodfacts.org/api/v0/product/${data}`, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then(({ product, status_verbose }) => {
        if (status_verbose === "product found") {
          let name = getName(product);
          name = path(["product_name_" + language], product) || name;

          const productCarbonFootprint = parseFloat(getCO2eq(product));
          const nutriscoreGrade = getNutriscoreGrade(product);
          const novaGroup = getNovaGroup(product);
          const ecoScore = getEcoScore(product);
          const navParams = {
            productCarbonFootprint,
            name,
            nutriscoreGrade,
            novaGroup,
            ecoScore,
            emissionType: EmissionType.productScanned,
            emissionModelType: "productScanned",
          };

          if (isValidNumber(productCarbonFootprint)) {
            navigator.openAddEmission(navParams);
          } else {
            setScanned(false);
            setHasCarbonData(false);
            setNutriscoreGrade(nutriscoreGrade);
            setNovaGroup(novaGroup);
            setEcoScore(ecoScore);
          }
        } else {
          setHasCarbonData(false);
          setScanned(false);
        }

        setIsFetchingData(false);
        setScanned(false);
      })
      .catch(() => {
        setIsFetchingData(false);
        setError(true);
        setScanned(false);
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
        <Button.Secondary
          fullWidth
          icon={"refresh"}
          style={styles.scanAgain}
          text={t("BAR_CODE_SCAN_SCREEN_TRY_AGAIN")}
          onPress={onPressTryAgain}
        />
      </View>
    );
  }

  if (!hasCarbonData) {
    return (
      <View style={styles.container}>
        <View style={[styles.container, styles.centeredContainer]}>
          <Text.H2 center>{t("BAR_CODE_SCAN_SCREEN_NO_CARBON_DATA_TITLE")}</Text.H2>
          <Text.Primary center>{t("BAR_CODE_SCAN_SCREEN_NO_CARBON_DATA_MESSAGE")}</Text.Primary>
          <OpenFoodFacts
            nutriscoreGrade={nutriscoreGrade}
            novaGroup={novaGroup}
            ecoScore={ecoScore}
          />
        </View>
        <Button.Secondary
          fullWidth
          icon={"refresh"}
          style={styles.scanAgain}
          text={t("BAR_CODE_SCAN_SCREEN_TRY_AGAIN")}
          onPress={onPressTryAgain}
        />
      </View>
    );
  }

  if (isFetchingData) {
    return (
      <View style={[styles.container, styles.centeredContainer]}>
        <ActivityIndicator style={styles.loading} size="large" color={Colors.primary} />
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
        {__DEV__ ? (
          <Button.Secondary
            fullWidth
            style={styles.scanAgain}
            text={"Mock scan"}
            onPress={() => handleBarCodeScanned({ data: 7622300336738 })}
          />
        ) : null}
      </View>
    );
  }
};

BarCodeScanScreen.navigationOptions = navigationOptions();

export default withLocalization(BarCodeScanScreen);
