import { useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CustomButton from "../../components/common/CustomButton";
import CustomInput from "../../components/common/CustomInput";
import ScreenWrapper from "../../components/common/ScreenWrapper";

import { COLORS } from "../../theme/colors";

export default function CreateBill() {
  const [customerName, setCustomerName] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const total = useMemo(() => {
    const qty = Number(quantity) || 0;
    const pr = Number(price) || 0;

    return qty * pr;
  }, [quantity, price]);

  const generateBill = () => {
    console.log({
      customerName,
      productName,
      quantity,
      price,
      total,
    });
  };

  return (
    <ScreenWrapper>
      <Text style={styles.heading}>Create Bill</Text>

      <CustomInput
        placeholder="Customer Name"
        value={customerName}
        onChangeText={setCustomerName}
      />

      <CustomInput
        placeholder="Product Name"
        value={productName}
        onChangeText={setProductName}
      />

      <CustomInput
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />

      <CustomInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total Amount</Text>

        <Text style={styles.totalValue}>₹{total}</Text>
      </View>

      <CustomButton title="Generate Bill" onPress={generateBill} />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.textPrimary,
    marginBottom: 20,
  },

  totalContainer: {
    marginVertical: 20,
    padding: 16,
    borderRadius: 12,
    backgroundColor: COLORS.white,
  },

  totalLabel: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },

  totalValue: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.primary,
  },
});
