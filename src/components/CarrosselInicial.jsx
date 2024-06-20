import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CarrosselInicial.css";

function CarrosselInicial() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item
        style={{
          backgroundImage: "url('https://rockcontent.com/br/wp-content/uploads/sites/2/2020/03/como-abrir-uma-ag%C3%AAncia-de-viagens.jpg.webp')",
        }}
        className={"car-item"}
      >
        <Carousel.Caption>
          <h3>O Melhor Site Científico</h3>
          <p>Corra e leia os melhores artigos!!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarrosselInicial;
