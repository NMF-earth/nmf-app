import React, { useEffect } from "react";
import { Animated, View } from "react-native";
import styles from "./SplashScreen.styles";

interface Props {
  screenAnimationComplete: (boolean) => void;
}

const SplashScreen = (props: Props) => {
  const fadeAnim = new Animated.Value(1);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false
    }).start(({ finished }) => {
      props.screenAnimationComplete(finished);
    });
  }, [fadeAnim]);

  return (
    <View style={styles.view}>
      <Animated.Image
        resizeMode={"cover"}
        source={require("../../../assets/images/splash.png")}
        style={[styles.animationImage, { opacity: fadeAnim }]}
      />
    </View>
  );
};

export default SplashScreen;
