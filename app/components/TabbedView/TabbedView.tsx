import React, { ReactElement } from "react";
import { Button, View } from "react-native";

import styles from "./TabbedView.styles";
import colors from "../../style/colors";

interface TabbedViewItem {
  title: string;
  component: ReactElement;
}

interface Props {
  items: TabbedViewItem[];
}

interface State {
  selectedTab: number;
}

export default class TabbedView extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      selectedTab: 0,
    }

    this.renderTabItem = this.renderTabItem.bind(this);
  }

  handleTabPress(index: number): void {
    this.setState({
      selectedTab: index
    })
  }

  renderTabItem({ title }, index: number) {
    const { selectedTab } = this.state;
    const isSelected = (index === selectedTab);
    const buttonColor = isSelected ? colors.linkGreen : colors.gray;
    const tabStyles = isSelected ? styles.tabItemSelected : styles.tabItem;
    return (
      <View 
        key={index} 
        style={tabStyles}>
        <Button 
          color={buttonColor}
          onPress={() => this.handleTabPress(index)} 
          title={title} />
      </View>
    );
  }

  render(): ReactElement {
    const { items } = this.props;
    const { selectedTab } = this.state;
    return (
      <View>
        <View style={styles.tabContainer}>
        {items.map(this.renderTabItem)}
        </View>
        {items[selectedTab].component}
      </View>
    );
  }
}

