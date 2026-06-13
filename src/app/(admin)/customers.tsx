import { useMemo, useState } from "react";

import { FlatList, StyleSheet, Text, View } from "react-native";

import CustomerCard from "../../components/cards/CustomerCard";
import SearchBar from "../../components/common/SearchBar";

import { mockCustomers } from "../../features/customer/data/mockCustomers";

import { COLORS, SPACING, TYPOGRAPHY } from "../../theme";

export default function CustomersScreen() {
  const [search, setSearch] = useState("");

  const filteredCustomers = useMemo(() => {
    return mockCustomers.filter(
      (customer) =>
        customer.name.toLowerCase().includes(search.toLowerCase()) ||
        customer.mobile.includes(search),
    );
  }, [search]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customers</Text>

      <SearchBar
        value={search}
        onChangeText={setSearch}
        placeholder="Search customer..."
      />

      <FlatList
        data={filteredCustomers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CustomerCard
            name={item.name}
            mobile={item.mobile}
            balance={item.balance}
            status={item.status}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No Customers Found</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.md,
  },

  title: {
    fontSize: TYPOGRAPHY.h2,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: SPACING.md,
  },

  emptyContainer: {
    marginTop: 50,
    alignItems: "center",
  },

  emptyText: {
    color: COLORS.gray,
  },
});
