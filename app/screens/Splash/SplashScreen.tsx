import React, { useEffect, useMemo } from "react";
import { Animated, View } from "react-native";

import styles from "./SplashScreen.styles";

interface Props {
  screenAnimationComplete: (boolean) => void;
}

const SplashScreen: React.FC<Props> = ({ screenAnimationComplete }) => {
  const fadeAnim = useMemo(() => new Animated.Value(0), []);
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start(({ finished }) => {
      screenAnimationComplete(finished);
    });
  }, [fadeAnim, screenAnimationComplete]);

  return (
    <View style={styles.view}>
      <Animated.Image
        resizeMode={"contain"}
        source={require("../../../assets/images/logos/nmf.png")}
        style={[styles.animationImage, { opacity: fadeAnim }]}
      />
    </View>
  );
};

export default SplashScreen;
