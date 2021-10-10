import React, { FC, ReactNode, Children, cloneElement, useState, ReactElement } from "react";
import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Text from "../Text";
import styles, { itemStyles } from "./styles";

interface ItemProps {
  title: string;
  children?: ReactNode;
  isFirst?: boolean;
  isOpen?: boolean;
  onTitlePress?: () => void;
}

interface AccordionProps {
  children?: ReactNode;
}

const Item: FC<ItemProps> = ({ title, children, isFirst, isOpen, onTitlePress }) => (
  <View style={[itemStyles.container, isFirst && itemStyles.firstContainer]}>
    <Pressable style={itemStyles.titleContainer} onPress={onTitlePress}>
      <Ionicons name={isOpen ? "chevron-down" : "chevron-up"} size={22} style={itemStyles.icon} />

      <Text.H3 style={itemStyles.titleText}>{title}</Text.H3>
    </Pressable>

    {isOpen ? (
      <View style={itemStyles.descriptionContainer}>
        <Text.Primary style={itemStyles.descriptionText}>{children}</Text.Primary>
      </View>
    ) : null}
  </View>
);

const Accordion: FC<AccordionProps> & { Item: typeof Item } = ({ children }) => {
  const [openIndex, setOpenIndex] = useState<number | undefined>();

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => {
      if (prev === index) {
        return;
      }

      return index;
    });
  };

  return (
    <View style={styles.container}>
      {Children.map(children, (child, index) =>
        cloneElement(child as ReactElement, {
          isFirst: index === 0,
          isOpen: index === openIndex,
          onTitlePress: () => {
            toggleItem(index);
          },
        })
      )}
    </View>
  );
};

Accordion.Item = Item;

export default Accordion;
export { Item };
