import { useEffect } from "react";

import { Stack, router } from "expo-router";

import LoadingScreen from "./loading";

import { secureStorage } from "../services/storage/secureStorage";

import { useAuthStore } from "../store/authStore";

import { getDashboardRoute } from "../navigation/authGuard";

export default function RootLayout() {
  const { restoreSession, isLoading, setLoading } = useAuthStore();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = await secureStorage.getToken();

        const userString = await secureStorage.getUser();

        if (token && userString) {
          const user = JSON.parse(userString);

          restoreSession(token, user);

          router.replace(getDashboardRoute(user.role));
        } else {
          router.replace("/(auth)/login");
        }
      } catch (error) {
        console.log("Restore Session Error", error);

        router.replace("/(auth)/login");
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
