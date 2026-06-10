export type UserRole =
  | "admin"
  | "user";

export const getDashboardRoute = (
  role: UserRole
) => {
  switch (role) {
    case "admin":
      return "/(admin)/dashboard";

    case "user":
      return "/(user)/dashboard";

    default:
      return "/(auth)/login";
  }
};