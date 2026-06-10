
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "../../theme/colors";

interface CustomerCardProps {
  name: string;
  mobile: string;
  balance: string;
}

export default function CustomerCard({
  name,
  mobile,
  balance,
}: CustomerCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>

      <Text style={styles.mobile}>{mobile}</Text>

      <Text style={styles.balance}>Balance: ₹{balance}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,

    padding: 16,

    borderRadius: 12,

    marginBottom: 12,

    elevation: 2,
  },

  name: {
    fontSize: 18,

    fontWeight: "600",

    color: COLORS.text,
  },

  mobile: {
    marginTop: 4,

    color: COLORS.gray,
  },

  balance: {
    marginTop: 8,

    fontWeight: "700",

    color: COLORS.primary,
  },
});
