import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { useSelector } from "react-redux";
import { t } from "../../utils";
import styles from "./EmissionsScreen.styles";
import {
  TabbedView,
  Text,
  EmissionListItem,
  EmissionListItemProps
} from "../../components";
import { AddEmissionAndMitigateButtons } from "./components";
import { selectors } from "./ducks";
import { navigate } from "../../navigation";

const EmissionsScreen = props => {
  const navigator = navigate(props.navigation);
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
                  ListFooterComponent={<View style={styles.separator} />}
                  style={styles.listContainer}
                  data={emissionsToMitigate}
                  keyExtractor={item => item.id}
                  renderItem={({ item }: { item: EmissionListItemProps }) => (
                    <EmissionListItem
                      id={item.id}
                      name={item.name}
                      onPress={() =>
                        navigator.openEmissionItem({ id: item.id })
                      }
                      title={item.title}
                      co2value={item.co2value}
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
                  ListFooterComponent={<View style={styles.separator} />}
                  style={styles.listContainer}
                  data={emissionsMitigated}
                  keyExtractor={item => item.id}
                  renderItem={({ item }: { item: EmissionListItemProps }) => (
                    <EmissionListItem
                      id={item.id}
                      name={item.name}
                      onPress={item.onPress}
                      title={item.title}
                      co2value={item.co2value}
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
      <AddEmissionAndMitigateButtons navigation={props.navigation} />
    </React.Fragment>
  );
};

export default EmissionsScreen;
