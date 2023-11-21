export interface LoginResponse {
  token: string;
}

interface RegisterResponse {
  message: string;
}

interface ErrorResponse {
  message: string;
}

interface DecodedToken {
  email?: string;
  username?: string;
  role?: string | undefined;
}
