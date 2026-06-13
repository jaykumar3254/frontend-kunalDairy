export type UserRole = "SUPER_ADMIN" | "ADMIN" | "CUSTOMER";

export interface User {
  id: string;
  name: string;
  mobile: string;
  role: UserRole;
}

export interface LoginResponse {
  token: string;
  user: User;
}
