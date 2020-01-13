import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
// import { connect } from "react-redux";
import { t } from "../../utils/translations";
import styles from "./EmissionsScreen.styles";
import {
  TabbedView,
  Text,
  Button,
  EmissionListItem,
  EmissionListItemProps
} from "../../components";
// import { emissions } from "../../ducks";

interface Props {
  navigation: {
    push: (screen: string) => void;
  };
}

const ActionButtons = (props: Props) => (
  <View style={styles.buttonView}>
    <Button.Primary
      style={styles.buttonLeft}
      black
      onPress={() => {
        props.navigation.push("ComingSoon");
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
        props.navigation.push("AddEmission");
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
const DATA = [
  {
    title: "170 g of red meat",
    subTitle: "2.1 kg CO2",
    food: true,
    transport: false,
    custom: false,
    onPress: () => {
      // do nothing.
    }
  },
  {
    title: "Custom emission",
    subTitle: "3 kg CO2eq",
    food: false,
    transport: true,
    custom: false,
    onPress: () => {
      // do nothing.
    }
  },
  {
    title: "5 hours flight",
    subTitle: "1 125 kg CO2eq",
    food: false,
    transport: false,
    custom: true,
    onPress: () => {
      // do nothing.
    }
  }
];

/* TO DO: remove these constants */
const DATA_EMPTY = [];

/* TO DO: line bellow later */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const EmissionsScreen = (props: Props) => {
  console.log("TCL: EmissionsScreen -> props", props);
  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}>
        <TabbedView
          items={[
            {
              title: t("EMISSIONS_SCREEN_TO_OFFSET"),
              component: (
                <FlatList<EmissionListItemProps>
                  style={styles.listContainer}
                  data={DATA}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }: { item: EmissionListItemProps }) => (
                    <EmissionListItem
                      onPress={item.onPress}
                      title={item.title}
                      subTitle={item.subTitle}
                      food={item.food}
                      transport={item.transport}
                      custom={item.custom}
                    />
                  )}
                />
              )
            },
            {
              title: t("EMISSIONS_SCREEN_MITIGATED"),
              component: DATA_EMPTY.length ? (
                <FlatList<EmissionListItemProps>
                  style={styles.listContainer}
                  data={DATA_EMPTY}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }: { item: EmissionListItemProps }) => (
                    <EmissionListItem
                      onPress={item.onPress}
                      title={item.title}
                      subTitle={item.subTitle}
                      food={item.food}
                      transport={item.transport}
                      custom={item.custom}
                    />
                  )}
                />
              ) : (
                <Text.Primary style={styles.textNoEmission} center lightGray>
                  {t("EMISSIONS_SCREEN_NO_EMISSION_MITIGATED")}
                </Text.Primary>
              )
            }
          ]}
        />
      </SafeAreaView>
      <ActionButtons {...props} />
    </React.Fragment>
  );
};

export default EmissionsScreen;

// const mapStateToProps = state => ({
//   stat: state,
//   emissionsToMitigate: emissions.selectors.getEmissionsToMitigate(state),
//   emissionsMitigated: emissions.selectors.getEmissionsMitigated(state)
// });

// export default connect(mapStateToProps, null)(EmissionsScreen);
