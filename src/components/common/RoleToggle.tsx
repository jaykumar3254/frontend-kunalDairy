import { StyleSheet, Switch, Text, View } from "react-native";

import { useAuthStore } from "../../store/authStore";


export default function RoleToggle() {
  const customerMode = useAuthStore((state) => state.customerMode);

  const toggleCustomerMode = useAuthStore((state) => state.toggleCustomerMode);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Customer Mode</Text>

      <Switch value={customerMode} onValueChange={toggleCustomerMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",
  },

  label: {
    fontSize: 16,

    fontWeight: "600",
  },
});
