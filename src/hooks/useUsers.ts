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

interface GetUserListResponse {
  totalCount: number;
  users: User[];
}

export async function getUsersList(page: number): Promise<GetUserListResponse> {
  const { data, headers } = await api.get<ApiResponse>("/users", {
    params: {
      page,
    },
  });

  const totalCount = Number(headers["x-total-count"]);

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

  return { users, totalCount };
}

export function useUsers(page: number) {
  return useQuery(['users', page], () => getUsersList(page), {
    staleTime: 1000 * 5, // 5 seconds
  });
}
