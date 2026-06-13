import { ScrollView, StyleSheet, Text, View } from "react-native";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import CustomButton from "../../components/common/CustomButton";
import CustomInput from "../../components/common/CustomInput";

import {
  productSchema,
  ProductSchemaType,
} from "../../features/product/productSchema";

export default function AddProductScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductSchemaType>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      price: "",
      unit: "",
    },
  });

  const onSubmit = (data: ProductSchemaType) => {
    console.log("Product Data:", data);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Add Product</Text>

      {/* Product Name */}

      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <CustomInput
            placeholder="Product Name"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

      {/* Price */}

      <Controller
        control={control}
        name="price"
        render={({ field: { onChange, value } }) => (
          <CustomInput
            placeholder="Price"
            keyboardType="numeric"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      {errors.price && <Text style={styles.error}>{errors.price.message}</Text>}

      {/* Unit */}

      <Controller
        control={control}
        name="unit"
        render={({ field: { onChange, value } }) => (
          <CustomInput
            placeholder="Unit (Litre / Kg)"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      {errors.unit && <Text style={styles.error}>{errors.unit.message}</Text>}

      <View style={{ marginTop: 20 }}>
        <CustomButton title="Save Product" onPress={handleSubmit(onSubmit)} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F5F5F5",
    flexGrow: 1,
  },

  heading: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
  },

  error: {
    color: "red",
    marginBottom: 10,
    marginTop: 4,
  },
});
