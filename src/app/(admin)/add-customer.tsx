import { Alert, ScrollView, StyleSheet, Text } from "react-native";

import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import CustomButton from "../../components/common/CustomButton";
import CustomInput from "../../components/common/CustomInput";
import CustomTextArea from "../../components/common/CustomTextArea";

import { COLORS, SPACING, TYPOGRAPHY } from "../../theme";

import {
  customerSchema,
  CustomerSchemaType,
} from "../../features/customer/customerSchema";

export default function AddCustomerScreen() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CustomerSchemaType>({
    resolver: zodResolver(customerSchema),

    defaultValues: {
      name: "",
      mobile: "",
      address: "",
    },
  });

  const onSubmit = (data: CustomerSchemaType) => {
    console.log("Customer Data:", data);

    Alert.alert("Success", "Customer Added Successfully");

    reset();
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Add Customer</Text>

      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <CustomInput
            placeholder="Customer Name"
            value={value}
            onChangeText={onChange}
            error={errors.name?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="mobile"
        render={({ field: { onChange, value } }) => (
          <CustomInput
            placeholder="Mobile Number"
            keyboardType="phone-pad"
            value={value}
            onChangeText={onChange}
            error={errors.mobile?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="address"
        render={({ field: { onChange, value } }) => (
          <CustomTextArea
            placeholder="Address"
            value={value}
            onChangeText={onChange}
            error={errors.address?.message}
          />
        )}
      />

      <CustomButton title="Save Customer" onPress={handleSubmit(onSubmit)} />
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

  title: {
    fontSize: TYPOGRAPHY.h2,

    fontWeight: "700",

    marginBottom: SPACING.lg,

    color: COLORS.text,
  },
});
