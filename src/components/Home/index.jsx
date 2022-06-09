import { Container, DivImg, Infos } from "./styles";
import { ReactTypical } from "@deadcoder0904/react-typical";
import AnimatedGirl from "../../assets/AnimatedGirl.png";

function Home() {
  return (
    <Container>
      <DivImg>
        <img
          src={AnimatedGirl}
          alt="Garota animada com um computador e um simbolo de sucesso"
        />
      </DivImg>
      <Infos>
        <span className="name">Olá, sou a Letícia Leal Moreira 🙋‍♀️</span>
        <p>
          <ReactTypical
            steps={[
              "Front End Developer ✔️",
              2000,
              "Back End Student 🚀",
              3000,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </p>
        <span className="info">
          Gosto de desafios e não desisto fácil das coisas!
        </span>
      </Infos>
    </Container>
  );
}

export default Home;
