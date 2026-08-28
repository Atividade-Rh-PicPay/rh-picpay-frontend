import { api } from "./api";
import type { LoginRequestDTO, LoginOutputDTO } from "./../types/auth";

const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";

export const authService = {
  login: (data: LoginRequestDTO) =>
    api.post<LoginOutputDTO>("/api/v1/auth/login", data).then((r) => {
      setAuthToken(r.data.accessToken);
      setRefreshToken(r.data.refreshToken);
      return r.data;
    }),
  refresh: (email: string, refreshToken: string) =>
    api
      .put<LoginOutputDTO>(`/api/v1/auth/refresh/${email}`, null, {
        headers: { Authorization: `Bearer ${refreshToken}` },
      })
      .then((r) => {
        setAuthToken(r.data.accessToken);
        setRefreshToken(r.data.refreshToken);
        return r.data;
      }),
  logout: () => {
    setAuthToken(null);
    setRefreshToken(null);
  },
};

let accessToken: string | null = localStorage.getItem(ACCESS_TOKEN_KEY);
let refreshToken: string | null = localStorage.getItem(REFRESH_TOKEN_KEY);

export function setAuthToken(token: string | null) {
  accessToken = token;
  if (token) {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  } else {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }
}

export function getAuthToken() {
  return accessToken;
}

export function setRefreshToken(token: string | null) {
  refreshToken = token;
  if (token) {
    localStorage.setItem(REFRESH_TOKEN_KEY, token);
  } else {
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  }
}

export function getRefreshToken() {
  return refreshToken;
}
