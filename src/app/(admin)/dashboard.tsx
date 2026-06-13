import { ScrollView, StyleSheet, Text, View } from "react-native";

import RoleToggle from "../../components/common/RoleToggle";

import { useAuthStore } from "../../store/authStore";

import { useEffect } from "react";

import StatCard from "../../components/cards/StatCard";
import CustomButton from "../../components/common/CustomButton";

import { router } from "expo-router";

import { COLORS, SPACING, TYPOGRAPHY } from "../../theme";

export default function DashboardScreen() {
  const customerMode = useAuthStore((state) => state.customerMode);

  useEffect(() => {
    if (customerMode) {
      router.replace("/(user)/dashboard");
    }
  }, [customerMode]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Good Morning 👋</Text>

        <Text style={styles.title}>Dairy Management</Text>
      </View>
      <RoleToggle />

      <View style={styles.row}>
        <StatCard title="Customers" value="120" />

        <View style={styles.gap} />

        <StatCard title="Products" value="18" />
      </View>

      <View style={styles.row}>
        <StatCard title="Invoices" value="55" />

        <View style={styles.gap} />

        <StatCard title="Revenue" value="₹1.2L" />
      </View>

      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <CustomButton
        title="Add Customer"
        onPress={() => router.push("/add-customer")}
      />

      <CustomButton
        title="Create Bill"
        onPress={() => router.push("/create-bill")}
      />

      <CustomButton
        title="Customers"
        onPress={() => router.push("/customers")}
      />

      <CustomButton
        title="Add Products"
        onPress={() => router.push("/add-product")}
      />

      <CustomButton title="Products" onPress={() => router.push("/products")} />

      <Text style={styles.sectionTitle}>Recent Activity</Text>

      <Text style={styles.placeholder}>No recent activity found.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    padding: SPACING.md,
  },

  header: {
    marginBottom: SPACING.lg,
  },

  greeting: {
    fontSize: TYPOGRAPHY.lg,
    color: COLORS.gray,
  },

  title: {
    fontSize: TYPOGRAPHY.h1,
    fontWeight: "700",
    color: COLORS.text,
  },

  row: {
    flexDirection: "row",
    marginBottom: SPACING.md,
  },

  gap: {
    width: SPACING.sm,
  },

  sectionTitle: {
    fontSize: TYPOGRAPHY.h3,
    fontWeight: "600",
    marginTop: SPACING.lg,
    marginBottom: SPACING.md,
    color: COLORS.text,
  },

  placeholder: {
    color: COLORS.gray,
    marginTop: SPACING.sm,
  },
});
