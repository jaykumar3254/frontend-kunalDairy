
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "../../theme/colors";

interface ProductCardProps {
  productName: string;
  price: string;
}

export default function ProductCard({ productName, price }: ProductCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{productName}</Text>

      <Text style={styles.price}>₹{price}</Text>
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
  },

  price: {
    marginTop: 8,

    color: COLORS.primary,

    fontWeight: "700",
  },
});
