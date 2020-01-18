import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { t } from "../../utils/translations";
import styles from "./EmissionsScreen.styles";
import {
  TabbedView,
  Text,
  EmissionListItem,
  EmissionListItemProps
} from "../../components";
import { AddEmissionAndMitigateButtons } from "./components";
import { selectors } from "./ducks";

interface Props {
  navigation: {
    push: (screen: string) => void;
  };
}

const EmissionsScreen = ({ navigation }: Props) => {
  const emissionsToMitigate = useSelector(selectors.getEmissionsToMitigate);
  const emissionsMitigated = useSelector(selectors.getEmissionsMitigated);

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
                  data={emissionsToMitigate}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }: { item: EmissionListItemProps }) => (
                    <EmissionListItem
                      id={item.id}
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
              component: emissionsMitigated.length ? (
                <FlatList<EmissionListItemProps>
                  style={styles.listContainer}
                  data={emissionsMitigated}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }: { item: EmissionListItemProps }) => (
                    <EmissionListItem
                      id={item.id}
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
      <AddEmissionAndMitigateButtons navigation={navigation} />
    </React.Fragment>
  );
};

export default EmissionsScreen;
