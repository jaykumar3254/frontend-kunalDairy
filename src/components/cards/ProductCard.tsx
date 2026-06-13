import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "../../theme/colors";

interface ProductCardProps {
  name: string;
  category: string;
  price: number;
  stock: number;
  unit: string;
}

export default function ProductCard({
  name,
  category,
  price,
  stock,
  unit,
}: ProductCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>

      <Text>Category: {category}</Text>

      <Text>
        Stock: {stock} {unit}
      </Text>

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
