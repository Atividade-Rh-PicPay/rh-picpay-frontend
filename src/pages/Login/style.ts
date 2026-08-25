import styled from "styled-components";

export const LoginContainer = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;

  background: #f4f8f6;
`;

export const LoginContent = styled.section`
  width: 50vw; 
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  padding: 30px 60px;

  background: #f4f8f6;
`;

export const Logo = styled.img`
  width: 12vw;
  min-width: 100px;
  height: auto;

  object-fit: contain;
`;

export const WelcomeSection = styled.div`
  width: 100%;
  max-width: 500px;

  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserIcon = styled.img`
  width: 70px;
  height: 0px;

  margin-bottom: 25px;

  font-size: 48px;
`;

export const Title = styled.h1`
  margin: 0;

  color: #111111;

  font-size: 18px;
  font-weight: 500;

  text-align: center;
`;

export const Subtitle = styled.h2`
  margin: 6px 0 40px;

  color: #26935f;

  font-size: 19px;
  font-weight: 700;

  text-align: center;
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 14px;
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;

  margin-top: 34px;

  border: none;
  border-radius: 30px;

  background: #000000;
  color: #ffffff;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }

  &:active {
    transform: translateY(0);
  }
`;

export const Presentation = styled.section`
  width: 50vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background: #171717;
`;

export const PresentationImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  display: block;
`;

export const PresentationText = styled.p`
  margin: 30px 0 20px;

  color: #ffffff;

  font-size: 27px;
  font-weight: 300;

  text-align: center;

  strong {
    font-weight: 700;
  }
`;

export const PresentationLogo = styled.img`
  width: 200px;
  height: auto;

  object-fit: contain;
`;
