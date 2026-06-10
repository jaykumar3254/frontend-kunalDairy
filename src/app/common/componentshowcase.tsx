
import { ScrollView, StyleSheet, Text, View } from "react-native";

import CustomerCard from "../../components/cards/CustomerCard";
import InvoiceCard from "../../components/cards/InvoiceCard";
import ProductCard from "../../components/cards/ProductCard";
import StatCard from "../../components/cards/StatCard";

import { COLORS } from "../../theme/colors";

export default function ComponentShowcase() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Design System Showcase</Text>

      <Text style={styles.sectionTitle}>Stat Cards</Text>

      <View style={styles.row}>
        <StatCard title="Customers" value="120" />

        <View style={styles.spacing} />

        <StatCard title="Products" value="18" />
      </View>

      <Text style={styles.sectionTitle}>Customer Card</Text>

      <CustomerCard name="Rahul Sharma" mobile="9876543210" balance="2500" />

      <Text style={styles.sectionTitle}>Product Card</Text>

      <ProductCard productName="Cow Milk" price="65" />

      <Text style={styles.sectionTitle}>Invoice Card</Text>

      <InvoiceCard
        invoiceNumber="INV001"
        customerName="Rahul Sharma"
        amount="1450"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    padding: 20,
  },

  heading: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 25,
    color: COLORS.text,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    marginTop: 15,
    color: COLORS.text,
  },

  row: {
    flexDirection: "row",
  },

  spacing: {
    width: 10,
  },
});
