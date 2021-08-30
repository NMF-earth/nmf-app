/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import React from "react";
import { SectionList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { EmissionListItem, EmissionListItemProps } from "components";
import { navigate } from "navigation";

import { SectionHeader } from "./components";
import styles from "./EmissionsScreen.styles";

interface Props {
  emissions: any;
}

const EmissionsScreen: React.FC<Props> = ({ emissions }) => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const renderListFooter = () => <View style={styles.separator} />;
  const renderSectionHeader = (date) => <SectionHeader date={date} />;

  return (
    <SectionList<EmissionListItemProps>
      style={styles.container}
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

export default EmissionsScreen;
