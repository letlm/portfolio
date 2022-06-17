import React from "react";
import Leticia from "../../assets/Leticia.png";
import { Container, Context, Infos, Photo, Plus } from "./styles";

function AboutComponent() {
  return (
    <Container>
      <Photo>
        <img
          src={Leticia}
          alt="Imagem de busto de Letícia Leal Moreira sorrindo, olhando para o lado e de braços cruzados."
        />
        <h4>
          Desenvolvedora Front End, estudante de Desenvolvimento Web Full Stack
          da Kenzie Academy Brasil e professora de Química.
        </h4>
        <span>Conhecimento nunca é demais, quanto mais melhor!</span>
        <div>
          <img
            className="plus"
            src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
            alt=""
          />
          <img
            className="plus"
            src="https://img.shields.io/badge/Codewars-B1361E?style=for-the-badge&logo=Codewars&logoColor=white"
            alt=""
          />
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
              src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
              alt=""
            />
            <img
              src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"
              alt=""
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
          </div>
          <span>No momento estou aprendendo sobre Back End:</span>
          <div>
            <img
              src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"
              alt=""
            />
            <img
              src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"
              alt=""
            />
            <img
              src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
              alt=""
            />
          </div>
          <span>Contate-me:</span>
          <div>
            <img
              src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"
              alt=""
            />
            <img
              src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
              alt=""
            />
          </div>
        </Plus>
      </Infos>
    </Container>
  );
}

export default AboutComponent;
