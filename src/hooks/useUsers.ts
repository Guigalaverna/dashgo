import { useQuery } from "react-query";
import { api } from "../services/api";


interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

interface ApiResponse {
  users: User[];
}
export async function getUsersList(): Promise<User[]> {
  const { data } = await api.get<ApiResponse>("/users");
  const users = data.users.map((user) => {
    return {
      ...user,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return users;
}

export function useUsers() {
  return useQuery("users", getUsersList, {
    staleTime: 1000 * 5, // 5 seconds
  });
}
