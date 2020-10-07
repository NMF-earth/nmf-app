import React from "react";
import { SectionList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { navigate } from "navigation";

import EmissionsListItem from "../EmissionsListItem";
import EmissionsListItemProps from "../EmissionsListItem/EmissionsListItemProps";
import SectionHeader from "../SectionHeader";
import styles from "./EmissionsList.styles";

const EmissionsList = ({ emissions, monthlyCarbonBudget }) => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const renderListFooter = () => <View style={styles.separator} />;
  const renderSectionHeader = (date, co2value) => (
    <SectionHeader
      date={date}
      co2value={co2value}
      monthlyCarbonBudget={monthlyCarbonBudget}
    />
  );

  return (
    <SectionList<EmissionsListItemProps>
      sections={emissions}
      stickySectionHeadersEnabled
      ListFooterComponent={renderListFooter}
      renderSectionHeader={({ section: { date, co2value } }) =>
        renderSectionHeader(date, co2value)
      }
      keyExtractor={({ id }) => id}
      renderItem={({
        item: { id, isMitigated, name, title, co2value, iconName },
      }) => (
        <EmissionsListItem
          id={id}
          isMitigated={isMitigated}
          name={name}
          onPress={() => navigator.openEmissionItem({ id })}
          title={title}
          co2value={co2value}
          iconName={iconName}
        />
      )}
    />
  );
};

export default EmissionsList;
