import { StyleSheet, Text, View } from "react-native";

import { router } from "expo-router";

import CustomButton from "./CustomButton";

import { useAuthStore } from "../../store/authStore";

import { secureStorage } from "../../services/storage/secureStorage";

import { getDashboardRoute } from "../../navigation/authGuard";

import { COLORS } from "../../theme/colors";

export default function SessionControls() {
  const { user, customerMode, toggleCustomerMode, logout } = useAuthStore();

  const handleExitCustomerMode = () => {
    toggleCustomerMode();

    if (user) {
      router.replace(getDashboardRoute(user.role, false));
    }
  };

  const handleLogout = async () => {
    await secureStorage.clearSession();

    logout();

    router.replace("/(auth)/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user?.name}</Text>

      <Text style={styles.role}>{user?.role}</Text>

      {customerMode && user?.role !== "CUSTOMER" && (
        <CustomButton
          title="Exit Customer Mode"
          onPress={handleExitCustomerMode}
        />
      )}

      <CustomButton title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  name: {
    fontSize: 18,

    fontWeight: "700",
  },

  role: {
    marginBottom: 15,

    color: COLORS.gray,
  },
});
