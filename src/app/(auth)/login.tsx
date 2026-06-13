import { mockUsers } from "../../features/auth/data/mockUsers";

import { useAuthStore } from "../../store/authStore";

import { secureStorage } from "../../services/storage/secureStorage";

import { useEffect, useState } from "react";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { Controller, useForm } from "react-hook-form";

import { router } from "expo-router";

import { getDashboardRoute } from "../../navigation/authGuard";

import { zodResolver } from "@hookform/resolvers/zod";

import CustomButton from "../../components/common/CustomButton";
import CustomInput from "../../components/common/CustomInput";

import { COLORS } from "../../theme/colors";

import {
  getRememberMe,
  saveRememberMe,
} from "../../services/storage/authStorage";

import { loginSchema, LoginSchemaType } from "../../features/auth/loginSchema";

export default function LoginScreen() {
  const [secureText, setSecureText] = useState(true);

  const [rememberMe, setRememberMe] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      mobile: "",
      password: "",
    },
  });

  useEffect(() => {
    const loadRememberMe = async () => {
      const stored = await getRememberMe();

      setRememberMe(stored);
    };

    loadRememberMe();
  }, []);

  const login = useAuthStore((state) => state.login);

  const onSubmit = async (data: LoginSchemaType) => {
    const user = mockUsers.find(
      (user) => user.mobile === data.mobile && user.password === data.password,
    );

    if (!user) {
      alert("Invalid mobile number or password");

      return;
    }

    const mockToken = `jwt_${user.id}_${Date.now()}`;

    const authUser = {
      id: user.id,
      name: user.name,
      mobile: user.mobile,
      role: user.role,
    };

    login(mockToken, authUser);

    await secureStorage.saveToken(mockToken);

    await secureStorage.saveUser(JSON.stringify(authUser));

    router.replace(getDashboardRoute(user.role));
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/uk_logo.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Welcome Back!</Text>

      <Text style={styles.subtitle}>Login to manage your dairy business</Text>

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
            leftIcon={
              <Ionicons name="person-outline" size={22} color={COLORS.gray} />
            }
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <CustomInput
            placeholder="Password"
            secureTextEntry={secureText}
            value={value}
            onChangeText={onChange}
            error={errors.password?.message}
            leftIcon={
              <Ionicons
                name="lock-closed-outline"
                size={22}
                color={COLORS.gray}
              />
            }
            rightIcon={
              <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                <Ionicons
                  name={secureText ? "eye-off-outline" : "eye-outline"}
                  size={22}
                  color={COLORS.gray}
                />
              </TouchableOpacity>
            }
          />
        )}
      />

      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.rememberContainer}
          onPress={async () => {
            const newValue = !rememberMe;

            setRememberMe(newValue);

            await saveRememberMe(newValue);
          }}
        >
          <Ionicons
            name={rememberMe ? "checkbox" : "square-outline"}
            size={22}
            color={COLORS.primary}
          />

          <Text style={styles.rememberText}>Remember Me</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <CustomButton title="Login" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: COLORS.background,

    paddingHorizontal: 25,

    justifyContent: "center",
  },

  logo: {
    width: 100,
    height: 100,

    alignSelf: "center",

    marginBottom: 15,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",

    textAlign: "center",

    color: COLORS.text,
  },

  subtitle: {
    textAlign: "center",

    color: COLORS.gray,

    marginTop: 8,

    marginBottom: 35,
  },

  optionsContainer: {
    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    marginBottom: 25,
  },

  rememberContainer: {
    flexDirection: "row",

    alignItems: "center",
  },

  rememberText: {
    marginLeft: 6,

    color: COLORS.text,
  },

  forgotText: {
    color: COLORS.primary,

    fontWeight: "600",
  },
});
