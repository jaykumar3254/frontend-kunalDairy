import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";

import { COLORS } from "../../theme/colors";

interface CustomInputProps extends TextInputProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export default function CustomInput({
  leftIcon,
  rightIcon,
  ...props
}: CustomInputProps) {
  return (
    <View style={styles.container}>
      {leftIcon}

      <TextInput
        {...props}
        style={styles.input}
        placeholderTextColor={COLORS.gray}
      />

      {rightIcon}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 55,

    borderWidth: 1,
    borderColor: COLORS.border,

    borderRadius: 12,

    backgroundColor: COLORS.white,

    flexDirection: "row",

    alignItems: "center",

    paddingHorizontal: 15,

    marginBottom: 15,
  },

  input: {
    flex: 1,
    marginHorizontal: 10,
  },
});