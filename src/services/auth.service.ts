import { api } from "./api";
import type { LoginRequestDTO, LoginOutputDTO } from "./../types/auth";

export const authService = {
  login: (data: LoginRequestDTO) =>
    api.post<LoginOutputDTO>("/api/v1/auth/login", data).then((r) => {
      setAuthToken(r.data.accessToken);
      setEmail(r.data.email);      
      return r.data;
    }),

  refresh: (email: string) =>
    api
      .post<LoginOutputDTO>(`/api/v1/auth/refresh/${email}`, null)
      .then((r) => {
        setAuthToken(r.data.accessToken);
        return r.data;
      }),

  logout: () =>
    api.post("/api/v1/auth/logout").then(() => {
      setAuthToken(null);
      setEmail(null);
    }),
};

let accessToken: string | null = null;
let email: string | null = localStorage.getItem("userEmail");

export function setAuthToken(token: string | null) {
  accessToken = token;
}

export function getAuthToken() {
  return accessToken;
}

export function setEmail(value: string | null) {
  email = value;
  if (value) localStorage.setItem("userEmail", value);
  else localStorage.removeItem("userEmail");
}

export function getEmail() {
  return email;
}
