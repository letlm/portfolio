import { Drawer } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { AsideComp, Box, Line } from "./styles";
import Button from "../Button";
import GithubIcon from "../../assets/Github.svg";
import LinkedinIcon from "../../assets/Linkedin.svg";
import GmailIcon from "../../assets/Gmail.svg";
import BtnClose from "../../assets/Close.png";
import MenuIcon from "../../assets/Menu.png";
import CVLeticia from "../../assets/CVLeticia.pdf";

function Aside() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
    <AsideComp>
      <Button className="btnOpen" onClick={() => setIsDrawerOpen(true)}>
        <img className="imgMenu" src={MenuIcon} alt="Menu" />
      </Button>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box>
          <div>
            <h1 onClick={() => handleNavigation("/")}>
              <Leticia />
            </h1>
          </div>
          <nav>
            <Button
              className="btnNav"
              onClick={() => handleNavigation("/about")}
            >
              Sobre
            </Button>
            <Line />
            <Button
              className="btnNav"
              onClick={() => handleNavigation("/projects")}
            >
              Projetos
            </Button>
            <Line />
            <Button className="btnNav">
              <a href={CVLeticia} download>
                Currículo
              </a>
            </Button>
            <Line />
            <Button className="btnNav">Contato</Button>
            <Line />
            <a href={Linkedin} target="_blank" rel="noopener noreferrer">
              <img src={LinkedinIcon} alt="Linkedin" />
            </a>
            <Line />
            <a href={Github} target="_blank" rel="noopener noreferrer">
              <img src={GithubIcon} alt="Github" />
            </a>
            <Line />
            <a href={Gmail} target="_blank" rel="noopener noreferrer">
              <img src={GmailIcon} alt="Gmail" />
            </a>
            <Line />
            <Button className="btnNav" onClick={() => setIsDrawerOpen(false)}>
              <img className="btnClose" src={BtnClose} alt="Botão de fechar" />
            </Button>
          </nav>
        </Box>
      </Drawer>
    </AsideComp>
  );
}

export default Aside;
