import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "../../theme/colors";

interface RoleBadgeProps {
  role: string;
}

export default function RoleBadge({ role }: RoleBadgeProps) {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{role}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",

    backgroundColor: COLORS.primary,

    paddingHorizontal: 12,

    paddingVertical: 6,

    borderRadius: 20,

    marginVertical: 10,
  },

  text: {
    color: COLORS.white,

    fontWeight: "600",
  },
});
