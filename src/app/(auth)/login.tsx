import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import CustomInput from "../../components/common/CustomInput";
import CustomButton from "../../components/common/CustomButton";

import { COLORS } from "../../theme/colors";

export default function LoginScreen() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [secureText, setSecureText] = useState(true);

  const handleLogin = () => {
    console.log("Login Pressed");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/uk_logo.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        Welcome Back!
      </Text>

      <Text style={styles.subtitle}>
        Login to manage your dairy business
      </Text>

      <CustomInput
        placeholder="Mobile Number"
        keyboardType="phone-pad"
        value={mobile}
        onChangeText={setMobile}
        leftIcon={
          <Ionicons
            name="person-outline"
            size={22}
            color={COLORS.gray}
          />
        }
      />

      <CustomInput
        placeholder="Password"
        secureTextEntry={secureText}
        value={password}
        onChangeText={setPassword}
        leftIcon={
          <Ionicons
            name="lock-closed-outline"
            size={22}
            color={COLORS.gray}
          />
        }
        rightIcon={
          <TouchableOpacity
            onPress={() =>
              setSecureText(!secureText)
            }
          >
            <Ionicons
              name={
                secureText
                  ? "eye-off-outline"
                  : "eye-outline"
              }
              size={22}
              color={COLORS.gray}
            />
          </TouchableOpacity>
        }
      />

      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.rememberContainer}
          onPress={() =>
            setRememberMe(!rememberMe)
          }
        >
          <Ionicons
            name={
              rememberMe
                ? "checkbox"
                : "square-outline"
            }
            size={22}
            color={COLORS.primary}
          />

          <Text style={styles.rememberText}>
            Remember Me
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotText}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      <CustomButton
        title="Login"
        onPress={handleLogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,

    paddingHorizontal: 25,

    justifyContent: "center",
  },

  logo: {
    width: 170,
    height: 170,

    alignSelf: "center",

    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",

    textAlign: "center",

    color: COLORS.text,
  },

  subtitle: {
    textAlign: "center",

    color: COLORS.gray,

    marginTop: 8,
    marginBottom: 35,
  },

  optionsContainer: {
    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    marginBottom: 25,
  },

  rememberContainer: {
    flexDirection: "row",

    alignItems: "center",
  },

  rememberText: {
    marginLeft: 6,

    color: COLORS.text,
  },

  forgotText: {
    color: COLORS.primary,

    fontWeight: "600",
  },
});