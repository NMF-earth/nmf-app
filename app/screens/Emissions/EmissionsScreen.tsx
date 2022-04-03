/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import React from "react";
import { SectionList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { filter } from "ramda";

import { EmissionListItem, EmissionListItemProps } from "components";
import { navigate } from "navigation";

import { SectionHeader } from "./components";
import styles from "./EmissionsScreen.styles";

interface Props {
  emissions?: any;
  recurringEmissions?: any;
}

const EmissionsScreen: React.FC<Props> = ({ emissions = [], recurringEmissions }) => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  const sections = filter((item) => !!item, [recurringEmissions, ...emissions]);

  const renderListFooter = () => <View style={styles.separator} />;
  const renderSectionHeader = (date, title) => <SectionHeader title={title} date={date} />;

  return (
    <SectionList<EmissionListItemProps>
      style={styles.container}
      sections={sections}
      stickySectionHeadersEnabled
      ListFooterComponent={renderListFooter}
      renderSectionHeader={({ section: { date, title } }) => renderSectionHeader(date, title)}
      keyExtractor={({ id }) => id}
      renderItem={({
        item: { id, isMitigated, name, title, co2value, iconName, emissionModelType, times },
      }) => (
        <EmissionListItem
          id={id}
          isMitigated={isMitigated}
          name={name}
          onPress={() => navigator.openEmissionItem({ id, isRecurringEmission: !!times })}
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
