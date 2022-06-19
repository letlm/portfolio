import React from "react";
import Leticia from "../../assets/Leticia.png";
import { Container, Context, Infos, Photo, Plus } from "./styles";
import GithubIcon from "../../assets/Github.svg";
import CodewarsIcon from "../../assets/Codewars.svg";
function AboutComponent() {
  const Github = "https://github.com/letlm";
  const Codewars = "https://www.codewars.com/users/letlm";
  const Linkedin = "https://www.linkedin.com/in/leticia-leal-moreira/";
  const Gmail = "mailto:lealmleticia@gmail.com";

  return (
    <Container>
      <Photo>
        <img
          src={Leticia}
          alt="Imagem de busto de Letícia Leal Moreira sorrindo, olhando para o lado e de braços cruzados."
        />
        <div className="text">
          <h4>
            Desenvolvedora Front End, estudante de Desenvolvimento Web Full
            Stack da Kenzie Academy Brasil e prof de Química.
          </h4>
          <span>Conhecimento nunca é demais, quanto mais melhor!</span>
          <div className="imgs">
            <a href={Github} target="_blank" rel="noopener noreferrer">
              <img className="github" src={GithubIcon} alt="Github" />
            </a>
            <a href={Codewars} target="_blank" rel="noopener noreferrer">
              <img className="codewars" src={CodewarsIcon} alt="Codewars" />
            </a>
          </div>
        </div>
      </Photo>
      <Infos>
        <Context>
          <h2>Olá, me chamo Letícia Leal Moreira!</h2>
          <p>
            Sempre gostei muito de desafios e de solucionar problemas, por isso
            acabei escolhendo a Licenciatura em Química como formação, porém não
            estava convencida de que aquilo era a minha paixão, por isso e por
            ser uma entusiasta da tecnologia comecei a fazer alguns cursos
            pequenos de HTML + CSS e fiquei completamente apaixonada e
            encantada, certa de que o desenvolvimento realmente era o que
            brilhava meus olhos. Por isso resolvi fazer minha transição de
            carreira para a área do desenvolvimento web e atualmente meu
            objetivo é conquistar minha primeira oportunidade como
            desenvolvedora Front End.
          </p>
        </Context>

        <Plus>
          <span>Algumas das tecnologias e ferramentas que utilizo:</span>
          <div>
            <img
              src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
              alt=""
            />
            <img
              src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
              alt=""
            />
            <img
              src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
              alt=""
            />
            <img
              src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
              alt=""
            />
            <img
              src="https://img.shields.io/badge/Axios-black?style=for-the-badge&logo=react&logoColor=white"
              alt="Axios"
            />

            <img
              src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
              alt=""
            />
            <img
              src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"
              alt=""
            />
            <img
              src="https://img.shields.io/badge/Context--Api-563Q6C?style=for-the-badge&logo=react&logoColor=black"
              alt="Context API"
            />
            <img
              src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"
              alt=""
            />
            <img
              src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
              alt=""
            />
            <img
              src="https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink"
              alt=""
            />
            <img
              src="https://img.shields.io/badge/React--Hooks-red?style=for-the-badge&logo=react&logoColor=white"
              alt="React Hooks"
            />
          </div>
          <span>No momento estou aprendendo sobre Back End:</span>
          <div>
            <img
              src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"
              alt="MySQL"
            />
            <img
              src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"
              alt="Express.js"
            />
            <img
              src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
              alt="PostgreSQL"
            />
            <img
              src="https://img.shields.io/badge/Bcrypt-%23323330.svg?style=for-the-badge&logo=nodedotjs&logoColor=%23F7DF1E"
              alt="Bcrypt"
            />
          </div>
          <span>Contate-me:</span>
          <div>
            <a href={Gmail} target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"
                alt="Gmail"
              />
            </a>

            <a href={Linkedin} target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                alt="Linkdein"
              />
            </a>
          </div>
        </Plus>
      </Infos>
    </Container>
  );
}

export default AboutComponent;
