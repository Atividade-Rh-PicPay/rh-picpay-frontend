import { useState, SubmitEvent  } from "react";
import {
  LoginContainer,
  LoginContent,
  Logo,
  WelcomeSection,
  UserIcon,
  Title,
  Subtitle,
  Form,
  Button,
  Presentation,
  PresentationImage,
  PresentationText,
  PresentationLogo
} from "./style";
import InputField from "./../../components/InputField";
import { useAuth } from "./../../contexts/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await login(email, password);

      navigate("/dashboard");
    } catch (error){
      if (axios.isAxiosError(error)){
        const message = error.response?.data?.message ?? "E-mail ou senha inválidos";
        setError(message);
      } else {
        setError("Erro inesperado ao fazer login");
      }   
    } finally {
      setLoading(false);
    }
  }

  return (
    <LoginContainer>
      <LoginContent>
        <Logo src="/images/black-logo.png" alt="Pickpeople" />
        <WelcomeSection>
          <UserIcon src="/images/black-icon.png"></UserIcon>
          <Title>
            Gerencie seus funcionários
          </Title>
          <Subtitle>
            Eleve sua organização e agilidade
          </Subtitle>
          <Form onSubmit={handleSubmit}>
            <InputField
              placeholder="Insira seu e-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
            <InputField
              placeholder="Insira sua senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Button type="submit" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </Form>
        </WelcomeSection>
      </LoginContent>
      <Presentation>
        <PresentationImage
          src="/images/dashboard.png"
          alt="Dashboard Pickpeople"
        />
        <PresentationText>
          Gerenciamento <strong>otimizado.</strong>
        </PresentationText>
        <PresentationLogo src="/images/green-logo.png">
        </PresentationLogo>
      </Presentation>
    </LoginContainer>
  );
}

export default Login;
