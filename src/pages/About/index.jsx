import AboutComponent from "../../components/AboutComponent";
import Aside from "../../components/Aside";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { Container, Context } from "./styles";

function About() {
  return (
    <Container>
      <Header className="header">
        <Aside />
        <h1>Sobre mim</h1>
      </Header>
      <Context>
        <AboutComponent />
      </Context>
      <Footer />
    </Container>
  );
}

export default About;
