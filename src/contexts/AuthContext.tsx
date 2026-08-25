import { createContext, useContext, useState, ReactNode } from "react";
import { authService } from "./../services/auth.service";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  email: string | null;
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    accessToken: null,
    refreshToken: null,
    email: null,
  });

  async function login(email: string, password: string) {
    const data = await authService.login({ email, password });
    setState({
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      email: data.email,
    });
  }

  function logout() {
    setState({ accessToken: null, refreshToken: null, email: null });
  }

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de AuthContextProvider");
  return ctx;
}
