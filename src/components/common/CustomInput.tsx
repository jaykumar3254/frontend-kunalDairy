import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  Text,
} from "react-native";

import { COLORS } from "../../theme/colors";

interface CustomInputProps
  extends TextInputProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
}

export default function CustomInput({
  leftIcon,
  rightIcon,
  error,
  ...props
}: CustomInputProps) {
  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.container,
          error && styles.errorBorder,
        ]}
      >
        {leftIcon}

        <TextInput
          {...props}
          style={styles.input}
          placeholderTextColor={
            COLORS.gray
          }
        />

        {rightIcon}
      </View>

      {error ? (
        <Text style={styles.errorText}>
          {error}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 15,
  },

  container: {
    height: 55,

    borderWidth: 1,
    borderColor: COLORS.border,

    borderRadius: 12,

    backgroundColor: COLORS.white,

    flexDirection: "row",

    alignItems: "center",

    paddingHorizontal: 15,
  },

  errorBorder: {
    borderColor: COLORS.danger,
  },

  input: {
    flex: 1,
    marginHorizontal: 10,
  },

  errorText: {
    color: COLORS.danger,
    marginTop: 5,
    fontSize: 12,
  },
});