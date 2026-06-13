import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Alert, StyleSheet, Text } from "react-native";

import CustomButton from "../../components/common/CustomButton";
import CustomInput from "../../components/common/CustomInput";
import CustomTextArea from "../../components/common/CustomTextArea";
import ScreenWrapper from "../../components/common/ScreenWrapper";

import {
  customerSchema,
  CustomerSchemaType,
} from "../../features/customer/customerSchema";

import { COLORS } from "../../theme/colors";

export default function AddCustomer() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
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

    Alert.alert("Customer Added", `${data.name} has been added successfully`);

    reset();
  };

  return (
    <ScreenWrapper>
      <Text style={styles.heading}>Add Customer</Text>

      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <CustomInput
            placeholder="Customer Name"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

      <Controller
        control={control}
        name="mobile"
        render={({ field: { onChange, value } }) => (
          <CustomInput
            placeholder="Mobile Number"
            value={value}
            onChangeText={onChange}
            keyboardType="phone-pad"
          />
        )}
      />
      {errors.mobile && (
        <Text style={styles.error}>{errors.mobile.message}</Text>
      )}

      <Controller
        control={control}
        name="address"
        render={({ field: { onChange, value } }) => (
          <CustomTextArea
            placeholder="Address"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.address && (
        <Text style={styles.error}>{errors.address.message}</Text>
      )}

      <CustomButton title="Save Customer" onPress={handleSubmit(onSubmit)} />
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

  error: {
    color: "red",
    marginBottom: 10,
    marginTop: -6,
    fontSize: 12,
  },
});
