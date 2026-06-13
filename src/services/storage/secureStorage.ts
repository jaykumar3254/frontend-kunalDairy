import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

const TOKEN_KEY = "auth_token";
const USER_KEY = "auth_user";

export const secureStorage = {
  async saveToken(token: string) {
    if (Platform.OS === "web") {
      localStorage.setItem(TOKEN_KEY, token);
      return;
    }

    await SecureStore.setItemAsync(TOKEN_KEY, token);
  },

  async getToken() {
    if (Platform.OS === "web") {
      return localStorage.getItem(TOKEN_KEY);
    }

    return await SecureStore.getItemAsync(TOKEN_KEY);
  },

  async saveUser(user: string) {
    if (Platform.OS === "web") {
      localStorage.setItem(USER_KEY, user);
      return;
    }

    await SecureStore.setItemAsync(USER_KEY, user);
  },

  async getUser() {
    if (Platform.OS === "web") {
      return localStorage.getItem(USER_KEY);
    }

    return await SecureStore.getItemAsync(USER_KEY);
  },

  async clearSession() {
    if (Platform.OS === "web") {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
      return;
    }

    await SecureStore.deleteItemAsync(TOKEN_KEY);

    await SecureStore.deleteItemAsync(USER_KEY);
  },
};
