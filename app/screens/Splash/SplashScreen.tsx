import React, { useEffect, useMemo } from "react";
import { Animated, View, Image } from "react-native";

import styles from "./SplashScreen.styles";
import quotes from "../../../assets/quotes/quotes.json";

interface Props {
  screenAnimationComplete: (boolean) => void;
}

const SplashScreen: React.FC<Props> = ({ screenAnimationComplete }) => {
  const fadeAnimQuote = useMemo(() => new Animated.Value(0), []);
  const fadeAnimAuthor = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    Animated.timing(fadeAnimQuote, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(fadeAnimAuthor, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false,
      }).start(({ finished }) => {
        screenAnimationComplete(finished);
      });
    });
  }, [fadeAnimQuote, fadeAnimAuthor, screenAnimationComplete]);

  const quoteIndex = Math.floor(Math.random() * Math.floor(quotes.length));

  return (
    <View style={styles.view}>
      <View style={styles.imgContainer}>
        <Image
          resizeMode={"contain"}
          source={require("../../../assets/images/stickers/restaurant.png")}
          style={styles.img}
        />
      </View>
      <View style={styles.textContainer}>
        <Animated.Text style={[styles.quote, { opacity: fadeAnimQuote }]}>
          {quotes[quoteIndex].quote}
        </Animated.Text>
        <Animated.Text style={[styles.author, { opacity: fadeAnimAuthor }]}>
          {"- "}
          {quotes[quoteIndex].author}
        </Animated.Text>
      </View>
    </View>
  );
};

export default SplashScreen;
