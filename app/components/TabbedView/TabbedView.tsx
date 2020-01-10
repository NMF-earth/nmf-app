import React, { ReactElement, useState } from "react";
import { View, TouchableOpacity } from "react-native";

import styles from "./TabbedView.styles";
import Text from "../Text/";

export interface TabbedViewItem {
  title: string;
  component: ReactElement;
}

interface Props {
  items: TabbedViewItem[];
}

interface TabItemProps {
  title: string;
  index: number;
  handleTabPress: (index: number) => void;
  isSelected: boolean;
}

const TabItem = ({
  title,
  index,
  handleTabPress,
  isSelected
}: TabItemProps) => {
  const tabStyles = isSelected ? styles.tabItemSelected : styles.tabItem;

  return (
    <View style={tabStyles}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => handleTabPress(index)}
      >
        <Text.Primary center green={isSelected} lightGray={!isSelected}>
          {title}
        </Text.Primary>
      </TouchableOpacity>
    </View>
  );
};

const TabbedView = (props: Props) => {
  const { items } = props;
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <React.Fragment>
      <View style={styles.tabContainer}>
        {items.map(({ title }, index: number) => (
          <TabItem
            key={index}
            handleTabPress={setSelectedTab}
            title={title}
            index={index}
            isSelected={index === selectedTab}
          />
        ))}
      </View>
      {items[selectedTab].component}
    </React.Fragment>
  );
};

export default TabbedView;
