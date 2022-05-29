import GithubIcon from "../../assets/Github.svg";
import LinkedinIcon from "../../assets/Linkedin.svg";
import GmailIcon from "../../assets/Gmail.svg";

import { Container, Info, Contact } from "./styles";

function Footer() {
  const Linkedin = "https://www.linkedin.com/in/leticia-leal-moreira/";
  const Github = "https://github.com/letlm";
  const Gmail = "mailto:lealmleticia@gmail.com";
  return (
    <Container>
      <Info>
        <h1>Feito por Letícia Leal Moreira </h1>
        <p>-</p>
        <h2>Front-End Developer</h2>
      </Info>
      <Contact>
        <a href={Linkedin} target="_blank" rel="noopener noreferrer">
          <img className="linkedin" src={LinkedinIcon} alt="Linkedin" />
        </a>

        <a href={Github} target="_blank" rel="noopener noreferrer">
          <img className="github" src={GithubIcon} alt="Github" />
        </a>

        <a href={Gmail} target="_blank" rel="noopener noreferrer">
          <img className="gmail" src={GmailIcon} alt="Gmail" />
        </a>
      </Contact>
    </Container>
  );
}

export default Footer;
