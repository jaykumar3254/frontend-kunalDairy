import { Redirect, Stack } from "expo-router";

import { useAuthStore } from "../../store/authStore";

export default function UserLayout() {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
