import { Container, SpinnerCircle } from "./style";

interface SpinnerProps {
  size?: number;
  fullScreen?: boolean;
}

function Spinner({ size = 40, fullScreen = false }: SpinnerProps) {
  return (
    <Container $fullScreen={fullScreen}>
      <SpinnerCircle $size={size} />
    </Container>
  );
}

export default Spinner;
