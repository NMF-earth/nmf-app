import React from "react";
import { SectionList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { EmissionListItem, EmissionListItemProps } from "components";
import { navigate } from "navigation";

import SectionHeader from "../SectionHeader";
import styles from "./EmissionsList.styles";

const EmissionsList = ({ emissions }) => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const renderListFooter = () => <View style={styles.separator} />;
  const renderSectionHeader = (date) => <SectionHeader date={date} />;

  return (
    <SectionList<EmissionListItemProps>
      sections={emissions}
      stickySectionHeadersEnabled
      ListFooterComponent={renderListFooter}
      renderSectionHeader={({ section: { date } }) => renderSectionHeader(date)}
      keyExtractor={({ id }) => id}
      renderItem={({
        item: { id, isMitigated, name, title, co2value, iconName, emissionModelType },
      }) => (
        <EmissionListItem
          id={id}
          isMitigated={isMitigated}
          name={name}
          onPress={() => navigator.openEmissionItem({ id, emissionModelType })}
          title={title}
          co2value={co2value}
          iconName={iconName}
          emissionModelType={emissionModelType}
        />
      )}
    />
  );
};

export default EmissionsList;
