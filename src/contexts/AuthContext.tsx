import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { authService, getEmail, setAuthToken, setEmail } from "./../services/auth.service";

interface AuthState {
  accessToken: string | null;
  email: string | null;
}

interface AuthContextType extends AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    accessToken: null,
    email: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function bootstrap() {
      const savedEmail = getEmail();
      if (!savedEmail) {
        setIsLoading(false);
        return;
      }
      try {
        const data = await authService.refresh(savedEmail);
        console.log(data);
        setState({ accessToken: data.accessToken, email: data.email });
      } catch {
        setState({ accessToken: null, email: null });
        setEmail(null);
      } finally {
        setIsLoading(false);
      }
    }
    bootstrap();
  }, []);

  async function login(email: string, password: string) {
    const data = await authService.login({ email, password });
    setState({
      accessToken: data.accessToken,
      email: data.email,
    });
    setAuthToken(data.accessToken);
  }

  async function logout() {
    await authService.logout(); 
    setState({ accessToken: null, email: null });
    setAuthToken(null);
  }

  return (
    <AuthContext.Provider
    value={{
      ...state,
      isAuthenticated: !!state.email,
      isLoading,
      login,
      logout,
    }}
    >
    {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx)
    throw new Error("useAuth deve ser usado dentro de AuthContextProvider");
  return ctx;
}
