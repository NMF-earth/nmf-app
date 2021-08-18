import React from "react";
import { Image, View } from "react-native";

import imagesPath from "./imagePath";
import styles from "./HTMLImage.styles";

interface Props {
  uri: string;
}

const HTMLImage: React.FC<Props> = ({ uri }) => {
  return (
    <View style={styles.container}>
      <Image source={imagesPath[uri]} style={styles.image} />
    </View>
  );
};

export default HTMLImage;
