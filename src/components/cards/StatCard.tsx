
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "../../theme/colors";

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

    padding: 16,

    borderRadius: 12,

    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.1,

    shadowRadius: 4,

    elevation: 3,
  },

  title: {
    color: COLORS.gray,

    fontSize: 14,
  },

  value: {
    fontSize: 24,

    fontWeight: "700",

    marginTop: 8,

    color: COLORS.text,
  },
});
