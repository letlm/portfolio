import React from "react";
import Leticia from "../../assets/Leticia.png";
import { Container } from "./styles";

function AboutComponent() {
  return (
    <Container>
      <div>
        <div>
          <img src={Leticia} alt="" />
          <span>Olá, me chamo Letícia Leal Moreira!</span>
        </div>
        <span>Front End Developer e professora de Química</span>
        <span>
          Entusiata de tecnologia e apaixonada por esta area, decidi fazer minha
          transição de carreira e agora estou em busca da minha primeira
          oportunidade de emprego como Front End Developer.
        </span>
        <span>Penso que conhecimento nunca é demais, quanto mais melhor!</span>
      </div>
    </Container>
  );
}

export default AboutComponent;
