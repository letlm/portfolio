import Aside from "../../components/Aside";
import DoneProjects from "../../components/DoneProjects";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container } from "./styles";

function Projects() {
  return (
    <Container>
      <Header className="header">
        <Aside className="aside" />
        <h1>Meus Projetos</h1>
      </Header>

      <DoneProjects />

      <Footer />
    </Container>
  );
}

export default Projects;
