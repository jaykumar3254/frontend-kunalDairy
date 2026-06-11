
import { StyleSheet, TextInput, View } from "react-native";

import { BORDER_RADIUS, COLORS, SPACING } from "../../theme";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChangeText,
  placeholder,
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={COLORS.gray}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.md,
  },

  input: {
    height: 50,

    borderWidth: 1,

    borderColor: COLORS.border,

    borderRadius: BORDER_RADIUS.md,

    backgroundColor: COLORS.white,

    paddingHorizontal: SPACING.md,

    color: COLORS.text,
  },
});
