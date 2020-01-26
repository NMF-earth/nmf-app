import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { t } from "../../utils";

import Text from "../../components/Text";
import Button from "../../components/Button";
import styles from "./GuidePreview.styles";
import { Guide } from "../../types/common-types";

interface Props {
  title: string;
  listItems: Guide[];
  onPressItem: (item: Guide) => void;
  onPressSeeAll: () => void;
}

class GuidePreview extends React.Component<Props> {
  renderItem = ({ item }: { item: Guide }) => (
    <TouchableOpacity
      onPress={() => this.props.onPressItem(item)}
      style={styles.listItem}
    >
      <Text.Tertiary>{item.title}</Text.Tertiary>
    </TouchableOpacity>
  );

  renderHeader = () => (
    <Text.H3 style={styles.title}>{this.props.title}</Text.H3>
  );

  renderFooter = () => (
    <Button.Secondary
      style={styles.button}
      onPress={() => this.props.onPressSeeAll()}
      textType={"Secondary"}
    >
      <Text.Secondary bold green center>
        {t("GUIDE_PREVIEW_SEE_ALL")}
      </Text.Secondary>
    </Button.Secondary>
  );

  render() {
    return (
      <FlatList
        ListHeaderComponent={this.renderHeader}
        data={this.props.listItems}
        renderItem={this.renderItem}
        ListFooterComponent={this.renderFooter}
      />
    );
  }
}

export default GuidePreview;
