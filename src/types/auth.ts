export interface LoginRequestDTO {
  email: string;
  password: string;
}

export interface LoginOutputDTO {
  email: string;
  authenticated: boolean;
  created: string;
  expiration: string;
  accessToken: string;
  refreshToken: string;
}
