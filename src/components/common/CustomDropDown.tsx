import { StyleSheet, Text, View } from "react-native";

import { Picker } from "@react-native-picker/picker";

import { COLORS } from "../../theme/colors";

interface DropdownItem {
  label: string;
  value: string;
}

interface CustomDropdownProps {
  label?: string;
  selectedValue: string;
  onValueChange: (value: string) => void;
  items: DropdownItem[];
  error?: string;
}

export default function CustomDropdown({
  label,
  selectedValue,
  onValueChange,
  items,
  error,
}: CustomDropdownProps) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={[styles.dropdownContainer, error && styles.errorBorder]}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(value) => onValueChange(value)}
          style={styles.picker}
        >
          {items.map((item) => (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
            />
          ))}
        </Picker>
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: COLORS.text,
  },

  dropdownContainer: {
    backgroundColor: COLORS.white,

    borderWidth: 1,
    borderColor: "#E5E7EB",

    borderRadius: 12,

    overflow: "hidden",
  },

  picker: {
    height: 55,
    width: "100%",
  },

  errorBorder: {
    borderColor: "#EF4444",
  },

  errorText: {
    marginTop: 6,
    color: "#EF4444",
    fontSize: 12,
  },
});
