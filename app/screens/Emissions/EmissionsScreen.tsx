import React from "react";
import { SectionList, SafeAreaView, View } from "react-native";
import { useSelector } from "react-redux";
import { t } from "../../utils";
import styles from "./EmissionsScreen.styles";
import {
  TabbedView,
  Text,
  EmissionListItem,
  EmissionListItemProps,
} from "../../components";
import { AddEmissionAndMitigateButtons, SectionHeader } from "./components";
import { selectors } from "./ducks";
import { navigate } from "../../navigation";

const EmissionsScreen = (props) => {
  const navigator = navigate(props.navigation);
  const emissionsToMitigate = useSelector(selectors.getEmissionsToMitigate);
  const emissionsMitigated = useSelector(selectors.getEmissionsMitigated);

  const renderListFooter = () => <View style={styles.separator} />;
  const renderSectionHeader = (date) => <SectionHeader date={date} />;

  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}>
        <TabbedView
          items={[
            {
              title: t("EMISSIONS_SCREEN_TO_OFFSET"),
              component: (
                <SectionList<EmissionListItemProps>
                  sections={emissionsToMitigate}
                  stickySectionHeadersEnabled
                  ListFooterComponent={renderListFooter()}
                  renderSectionHeader={({ section: { date } }) =>
                    renderSectionHeader(date)
                  }
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }: { item: EmissionListItemProps }) => (
                    <EmissionListItem
                      id={item.id}
                      name={item.name}
                      onPress={() =>
                        navigator.openEmissionItem({ id: item.id })
                      }
                      title={item.title}
                      co2value={item.co2value}
                      iconName={item.iconName}
                    />
                  )}
                />
              ),
            },
            {
              title: t("EMISSIONS_SCREEN_MITIGATED"),
              component: emissionsMitigated.length ? (
                <SectionList<EmissionListItemProps>
                  sections={emissionsMitigated}
                  stickySectionHeadersEnabled
                  ListFooterComponent={renderListFooter()}
                  renderSectionHeader={({ section: { date } }) =>
                    renderSectionHeader(date)
                  }
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }: { item: EmissionListItemProps }) => (
                    <EmissionListItem
                      id={item.id}
                      name={item.name}
                      onPress={item.onPress}
                      title={item.title}
                      co2value={item.co2value}
                      iconName={item.iconName}
                    />
                  )}
                />
              ) : (
                <Text.Primary style={styles.textNoEmission} center lightGray>
                  {t("EMISSIONS_SCREEN_NO_EMISSION_MITIGATED")}
                </Text.Primary>
              ),
            },
          ]}
        />
      </SafeAreaView>
      <AddEmissionAndMitigateButtons navigation={props.navigation} />
    </React.Fragment>
  );
};

export default EmissionsScreen;
