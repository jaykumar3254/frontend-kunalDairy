import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../theme/colors";

interface CustomerCardProps {
  name: string;
  mobile: string;
  balance: number;
  status: string;
}

export default function CustomerCard({
  name,
  mobile,
  balance,
  status,
}: CustomerCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>

      <Text>{mobile}</Text>

      <Text>Balance: ₹{balance}</Text>

      <Text
        style={{
          color: status === "ACTIVE" ? "green" : "red",
        }}
      >
        {status}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },

  name: {
    fontSize: 18,
    fontWeight: "600",
  },
});
