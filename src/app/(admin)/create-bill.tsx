import { useMemo, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

import CustomButton from "../../components/common/CustomButton";
import CustomDropdown from "../../components/common/CustomDropDown";
import CustomInput from "../../components/common/CustomInput";
import ScreenWrapper from "../../components/common/ScreenWrapper";

import { mockCustomers } from "../../features/customer/data/mockCustomers";
import { mockProducts } from "../../features/product/data/mockProducts";

import { COLORS } from "../../theme/colors";

export default function CreateBill() {
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState("");

  const customer = mockCustomers.find((item) => item.id === selectedCustomer);

  const product = mockProducts.find((item) => item.id === selectedProduct);

  const total = useMemo(() => {
    if (!product) return 0;

    return Number(quantity || 0) * product.price;
  }, [quantity, product]);

  const customerItems = [
    {
      label: "Select Customer",
      value: "",
    },

    ...mockCustomers.map((customer) => ({
      label: customer.name,
      value: customer.id,
    })),
  ];

  const productItems = [
    {
      label: "Select Product",
      value: "",
    },

    ...mockProducts.map((product) => ({
      label: product.name,
      value: product.id,
    })),
  ];

  const generateBill = () => {
    if (!selectedCustomer || !selectedProduct || !quantity) {
      Alert.alert("Validation", "Please complete all fields");

      return;
    }

    console.log({
      customer,
      product,
      quantity,
      total,
    });

    Alert.alert("Success", "Bill generated successfully");
  };

  return (
    <ScreenWrapper>
      <Text style={styles.heading}>Create Bill</Text>

      <Text style={styles.label}>Customer</Text>

      <CustomDropdown
        selectedValue={selectedCustomer}
        onValueChange={setSelectedCustomer}
        items={customerItems}
      />

      {customer && (
        <View style={styles.infoCard}>
          <Text>Mobile: {customer.mobile}</Text>

          <Text>Outstanding Balance: ₹{customer.balance}</Text>

          <Text>Status: {customer.status}</Text>
        </View>
      )}

      <Text style={styles.label}>Product</Text>

      <CustomDropdown
        selectedValue={selectedProduct}
        onValueChange={setSelectedProduct}
        items={productItems}
      />

      {product && (
        <View style={styles.infoCard}>
          <Text>Category: {product.category}</Text>

          <Text>Price: ₹{product.price}</Text>

          <Text>
            Stock: {product.stock} {product.unit}
          </Text>

          <Text>Status: {product.status}</Text>
        </View>
      )}

      <CustomInput
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
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
    color: COLORS.text,
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },

  infoCard: {
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    gap: 6,
  },

  totalContainer: {
    marginVertical: 20,
    padding: 16,
    borderRadius: 12,
    backgroundColor: COLORS.white,
  },

  totalLabel: {
    fontSize: 14,
    color: COLORS.gray,
  },

  totalValue: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.primary,
  },
});
