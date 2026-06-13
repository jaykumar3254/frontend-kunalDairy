import { UserRole } from "../types/auth";

export const getDashboardRoute = (role: UserRole, customerMode = false) => {
  if (customerMode) {
    return "/(user)/dashboard";
  }

  switch (role) {
    case "SUPER_ADMIN":
      return "/(super-admin)/dashboard";

    case "ADMIN":
      return "/(admin)/dashboard";

    case "CUSTOMER":
      return "/(user)/dashboard";

    default:
      return "/(auth)/login";
  }
};
