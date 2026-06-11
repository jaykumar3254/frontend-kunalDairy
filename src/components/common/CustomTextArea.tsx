
import { StyleSheet, Text, TextInput, View } from "react-native";

import { BORDER_RADIUS, COLORS, SPACING } from "../../theme";

interface CustomTextAreaProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
}

export default function CustomTextArea({
  value,
  onChangeText,
  placeholder,
  error,
}: CustomTextAreaProps) {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={[styles.input, error && styles.errorBorder]}
        multiline
        numberOfLines={4}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={COLORS.gray}
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: SPACING.md,
  },

  input: {
    minHeight: 100,

    borderWidth: 1,

    borderColor: COLORS.border,

    borderRadius: BORDER_RADIUS.md,

    backgroundColor: COLORS.white,

    padding: SPACING.md,

    textAlignVertical: "top",
  },

  errorBorder: {
    borderColor: COLORS.danger,
  },

  errorText: {
    color: COLORS.danger,

    marginTop: 5,

    fontSize: 12,
  },
});
