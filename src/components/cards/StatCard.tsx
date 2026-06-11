import { StyleSheet, Text, View } from "react-native";

import {
  BORDER_RADIUS,
  COLORS,
  SHADOWS,
  SPACING,
  TYPOGRAPHY,
} from "../../theme";

interface StatCardProps {
  title: string;
  value: string;
}

export default function StatCard({ title, value }: StatCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: COLORS.white,

    padding: SPACING.md,

    borderRadius: BORDER_RADIUS.md,

    ...SHADOWS.card,
  },

  title: {
    color: COLORS.gray,
    fontSize: TYPOGRAPHY.sm,
  },

  value: {
    fontSize: TYPOGRAPHY.h2,

    fontWeight: "700",

    marginTop: SPACING.sm,

    color: COLORS.text,
  },
});
