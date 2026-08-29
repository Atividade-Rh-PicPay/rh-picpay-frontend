import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div<{ $fullScreen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ $fullScreen }) =>
    $fullScreen &&
    `
    height: 100vh;
    width: 100%;
  `}
`;

export const SpinnerCircle = styled.div<{ $size: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border: ${({ $size }) => Math.max(2, $size / 10)}px solid #e0e0e0;
  border-top-color: #20c997; /* ajuste pra cor da sua marca */
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;
