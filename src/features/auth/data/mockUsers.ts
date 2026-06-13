import { UserRole } from "../../../types/auth";

interface MockUser {
  id: string;
  name: string;
  mobile: string;
  password: string;
  role: UserRole;
}

export const mockUsers: MockUser[] = [
  {
    id: "1",
    name: "Super Admin",
    mobile: "9999999999",
    password: "123456",
    role: "SUPER_ADMIN",
  },

  {
    id: "2",
    name: "Admin User",
    mobile: "8888888888",
    password: "123456",
    role: "ADMIN",
  },

  {
    id: "3",
    name: "Customer User",
    mobile: "7777777777",
    password: "123456",
    role: "CUSTOMER",
  },
];
