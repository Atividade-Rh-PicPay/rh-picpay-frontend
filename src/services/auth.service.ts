import { api } from "./api";
import type { LoginRequestDTO, LoginOutputDTO } from "./../types/auth";

export const authService = {
  login: (data: LoginRequestDTO) =>
    api.post<LoginOutputDTO>("/api/v1/auth/login", data).then((r) => r.data),

  refresh: (email: string, refreshToken: string) =>
    api
      .put<LoginOutputDTO>(`/api/v1/auth/refresh/${email}`, null, {
        headers: { Authorization: `Bearer ${refreshToken}` },
      })
      .then((r) => r.data),
};
