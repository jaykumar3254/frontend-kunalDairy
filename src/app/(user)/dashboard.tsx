import { ScrollView, StyleSheet, Text, View } from "react-native";

import { COLORS, SPACING, TYPOGRAPHY } from "../../theme";

import { useAuthStore } from "../../store/authStore";

import RoleBadge from "../../components/common/RoleBadge";

import SessionControls from "../../components/common/SessionControls";

export default function UserDashboard() {
  const user = useAuthStore((state) => state.user);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Customer Dashboard</Text>

      <RoleBadge role={user?.role || ""} />

      <View style={styles.card}>
        <Text style={styles.label}>Name</Text>

        <Text style={styles.value}>{user?.name}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Mobile</Text>

        <Text style={styles.value}>{user?.mobile}</Text>
      </View>

      <Text style={styles.sectionTitle}>Customer Features</Text>

      <Text style={styles.placeholder}>Bills Module Coming Soon</Text>

      <Text style={styles.placeholder}>Payments Module Coming Soon</Text>

      <Text style={styles.placeholder}>Ledger Module Coming Soon</Text>

      <SessionControls />
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

  heading: {
    fontSize: TYPOGRAPHY.h1,

    fontWeight: "700",

    color: COLORS.text,

    marginBottom: 10,
  },

  card: {
    backgroundColor: COLORS.white,

    padding: 16,

    borderRadius: 12,

    marginBottom: 12,
  },

  label: {
    color: COLORS.gray,
  },

  value: {
    fontSize: 16,

    fontWeight: "600",

    marginTop: 4,
  },

  sectionTitle: {
    marginTop: 20,

    marginBottom: 10,

    fontSize: TYPOGRAPHY.h3,

    fontWeight: "600",
  },

  placeholder: {
    marginBottom: 8,

    color: COLORS.gray,
  },
});
