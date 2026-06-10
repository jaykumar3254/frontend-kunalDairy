
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "../../theme/colors";

interface InvoiceCardProps {
  invoiceNumber: string;
  customerName: string;
  amount: string;
}

export default function InvoiceCard({
  invoiceNumber,
  customerName,
  amount,
}: InvoiceCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.invoice}>#{invoiceNumber}</Text>

      <Text style={styles.customer}>{customerName}</Text>

      <Text style={styles.amount}>₹{amount}</Text>
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

  invoice: {
    fontWeight: "700",
  },

  customer: {
    marginTop: 5,

    color: COLORS.gray,
  },

  amount: {
    marginTop: 10,

    color: COLORS.success,

    fontWeight: "700",
  },
});
