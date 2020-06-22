import React from "react";
import { Image, View } from "react-native";
import imagesPath from "../../screens/ActDetail/imagePath";
import styles from "./HTMLImage.styles";

const HTMLImage = ({ uri }) => {
  return (
    <View>
      <Image source={imagesPath[uri]} style={styles.image} />
    </View>
  );
};

export default HTMLImage;
