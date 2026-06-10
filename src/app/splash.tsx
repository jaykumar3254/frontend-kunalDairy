import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
} from "react-native";
import { router } from "expo-router";

import { COLORS } from "../theme/colors";

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(auth)/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/uk_logo.jpeg")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        Kunal Dairy
      </Text>

      <Text style={styles.subtitle}>
        Dairy Management Made Simple
      </Text>

      <ActivityIndicator
        size="large"
        color={COLORS.primary}
        style={styles.loader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,

    justifyContent: "center",
    alignItems: "center",

    paddingHorizontal: 20,
  },

  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: COLORS.primary,
  },

  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: COLORS.gray,
  },

  loader: {
    marginTop: 40,
  },
});