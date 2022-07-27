import GithubIcon from "../../assets/Github.svg";
import LinkedinIcon from "../../assets/Linkedin.svg";
import GmailIcon from "../../assets/Gmail.svg";
import CVLeticia from "../../assets/CurriculoLeticiaLealMoreira.pdf";
import { useHistory } from "react-router-dom";
import { Container, Infos } from "./styles";
import Button from "../Button";

function Nav() {
  const Linkedin = "https://www.linkedin.com/in/leticia-leal-moreira/";
  const Github = "https://github.com/letlm";
  const Gmail = "mailto:lealmleticia@gmail.com";

  const Leticia = () => {
    return "<Letícia />";
  };

  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <h1 onClick={() => handleNavigation("/")}>
        <Leticia />
      </h1>

      <Infos>
        <Button className="btnNav" onClick={() => handleNavigation("/about")}>
          Sobre
        </Button>

        <Button
          className="btnNav"
          onClick={() => handleNavigation("/projects")}
        >
          Projetos
        </Button>

        <Button className="btnNav">
          <a href={CVLeticia} download>
            Currículo
          </a>
        </Button>
        <a href={Linkedin} target="_blank" rel="noopener noreferrer">
          <img className="linkedin" src={LinkedinIcon} alt="Linkedin" />
        </a>

        <a href={Github} target="_blank" rel="noopener noreferrer">
          <img className="github" src={GithubIcon} alt="Github" />
        </a>

        <a href={Gmail} target="_blank" rel="noopener noreferrer">
          <img className="gmail" src={GmailIcon} alt="Gmail" />
        </a>
      </Infos>
    </Container>
  );
}

export default Nav;
