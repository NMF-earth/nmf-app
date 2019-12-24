import React from "react";
import { ScrollView, View } from "react-native";

import { t } from "../../utils/translations";
import styles from "./EmissionsScreen.styles";
import { TabbedView, Text, Button, EmissionListItem } from "../../components";

interface Props {
  navigation: {
    push: (screen: string) => void;
  };
}

const ActionButtons = () => (
  <View style={styles.buttonView}>
    <Button.Primary
      style={styles.buttonLeft}
      black
      onPress={() => {
        // do nothing.
      }}
      textType={"Primary"}
    >
      <Text.Primary center white bold>
        {t("EMISSIONS_SCREEN_MITIGATE")}
      </Text.Primary>
    </Button.Primary>
    <Button.Primary
      style={styles.buttonRight}
      onPress={() => {
        // do nothing.
      }}
      textType={"Primary"}
    >
      <Text.Primary center white bold>
        {t("EMISSIONS_SCREEN_ADD")}
      </Text.Primary>
    </Button.Primary>
  </View>
);

/* TO DO: remove these constants */
const TITLE = "170 g of red meat";
const SUBTITLE = "2.1 kg CO2";
const ONPRESS = () => {
  // do nothing.
};

/* TO DO: line bellow later */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const EmissionsScreen = (props: Props) => {
  return (
    <React.Fragment>
      <ScrollView style={styles.container}>
        <TabbedView
          items={[
            {
              title: t("EMISSIONS_SCREEN_TO_OFFSET"),
              component: (
                <View style={styles.itemContainer}>
                  <EmissionListItem
                    onPress={ONPRESS}
                    title={TITLE}
                    subTitle={SUBTITLE}
                    restaurant
                  />
                  <EmissionListItem
                    onPress={ONPRESS}
                    title={TITLE}
                    subTitle={SUBTITLE}
                    build
                  />
                  <EmissionListItem
                    onPress={ONPRESS}
                    title={TITLE}
                    subTitle={SUBTITLE}
                    plane
                  />
                </View>
              )
            },
            {
              title: t("EMISSIONS_SCREEN_MITIGATED"),
              component: (
                <View style={styles.itemContainer}>
                  <EmissionListItem
                    onPress={ONPRESS}
                    title={TITLE}
                    subTitle={SUBTITLE}
                    build
                  />
                  <EmissionListItem
                    onPress={ONPRESS}
                    title={TITLE}
                    subTitle={SUBTITLE}
                    plane
                  />
                </View>
              )
            }
          ]}
        />
      </ScrollView>
      <ActionButtons />
    </React.Fragment>
  );
};

export default EmissionsScreen;
