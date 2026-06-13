import { useMemo, useState } from "react";

import { FlatList, StyleSheet, Text, View } from "react-native";

import ProductCard from "../../components/cards/ProductCard";
import SearchBar from "../../components/common/SearchBar";

import { mockProducts } from "../../features/product/data/mockProducts";

export default function ProductsScreen() {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products</Text>

      <SearchBar
        value={search}
        onChangeText={setSearch}
        placeholder="Search Product"
      />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProductCard
            name={item.name}
            category={item.category}
            price={item.price}
            stock={item.stock}
            unit={item.unit}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No Products Found</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5F5",
  },

  heading: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 16,
  },

  emptyContainer: {
    marginTop: 50,
    alignItems: "center",
  },

  emptyText: {
    color: "gray",
  },
});
