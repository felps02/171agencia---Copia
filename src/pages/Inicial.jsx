import { Container } from "react-bootstrap";
import CarrosselInicial from "../components/CarrosselInicial";

export default function Inicial() {
  return (
    <Container fluid>
      <Container>
        <CarrosselInicial />
        <h1>171 agencia</h1>
        <h2>A melhor Site para viagens</h2>
        Aqui e a sua melhor viagem
      </Container>
    </Container>
  );
}
