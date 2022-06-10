import { Container, Context, Figure, Projects, Title } from "./styles";
import NuKenzie from "../../assets/NukenzieUm.png";
import KenzieHub from "../../assets/Kenziehub.png";
import BurguerKenzie from "../../assets/BurguerKenzie.png";
import KenzieShopContextApi from "../../assets/KenzieShopContextApi.png";
import KenzieShopRedux from "../../assets/KenzieShopRedux.png";
import Button from "../Button";

function DoneProjects() {
  const DemoKenzieHub = "https://kenzie-hub-letlm.vercel.app/";
  const RepoKenzieHub = "https://github.com/letlm/kenziehub-REACT";
  const DemoNuKenzie = "https://nu-kenzie-letlm.vercel.app/";
  const RepoNuKenzie = "https://github.com/letlm/nukenzie-REACT";
  const DemoBurguerKenzie = "https://kenzie-burguer-letlm.vercel.app/";
  const RepoBurguerKenzie = "https://github.com/letlm/kenzieBurguer-REACT";
  const DemoKenzieShopContextApi =
    "https://kenzieshop-contextapi-letlm.vercel.app/";
  const RepoKenzieShopContextApi =
    "https://github.com/letlm/kenzieshop-contextAPI";
  const DemoKenzieShopRedux = "https://kenzie-shop-redux-letlm.vercel.app/";
  const RepoKenzieShopRedux = "https://github.com/letlm/kenzieshop-REDUX";

  return (
    <Container>
      <Context>
        <Title>
          <span>React JS</span>
        </Title>
        <Projects>
          {/* KenzieHub */}
          <Figure>
            <figcaption>KenzieHub</figcaption>
            <div id="efect">
              <img src={KenzieHub} alt="KenzieHub" className="image" />
              <p id="comentario">
                Aplicação usando API. O usuário pode criar uma conta, fazer
                login e cadastrar tecnologias que estudou/está estudando, além
                de ser possível editar as tecnologias a partir do nível de
                estudos e excluí-las.
              </p>
            </div>

            <div className="buttons">
              <a href={DemoKenzieHub} target="_blank" rel="noopener noreferrer">
                <Button className="btn">Demo</Button>
              </a>
              <a href={RepoKenzieHub} target="_blank" rel="noopener noreferrer">
                <Button className="btn">Repositório</Button>
              </a>
            </div>
          </Figure>
          {/* NuKenzie */}
          <Figure>
            <figcaption>NuKenzie</figcaption>
            <div id="efect">
              <img src={NuKenzie} alt="NuKenzie" className="image" />
              <p id="comentario">
                Aplicação de gerenciamento de gastos na qual é possível
                cadastrar entradas e despesas, além de possuir a funcionalidade
                de filtrar os cadastros bem como excluí-los.
              </p>
            </div>

            <div className="buttons">
              <a href={DemoNuKenzie} target="_blank" rel="noopener noreferrer">
                <Button className="btn">Demo</Button>
              </a>
              <a href={RepoNuKenzie} target="_blank" rel="noopener noreferrer">
                <Button className="btn">Repositório</Button>
              </a>
            </div>
          </Figure>
          {/* BurguerKenzie */}
          <Figure>
            <figcaption>BurguerKenzie</figcaption>
            <div id="efect">
              <img src={BurguerKenzie} alt="BurguerKenzie" className="image" />
              <p id="comentario">
                Aplicação que simula uma hamburgueria, podendo adicionar apenas
                uma unicade de cada produto. Além disso, ainda apresenta o valor
                total do carrinho, sendo possível remover os produtos do
                carrinho.
              </p>
            </div>

            <div className="buttons">
              <a
                href={DemoBurguerKenzie}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn">Demo</Button>
              </a>
              <a
                href={RepoBurguerKenzie}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn">Repositório</Button>
              </a>
            </div>
          </Figure>

          {/* Formulário de Cadastro */}

          {/* KenzieShop - ContextAPI */}
          <Figure>
            <figcaption>KenzieShop - ContextAPI</figcaption>
            <div id="efect">
              <img
                src={KenzieShopContextApi}
                alt="KenzieShopContextApi"
                className="image"
              />
              <p id="comentario">
                Simulação de um carrinho de ecommerce feita com context Api. O
                usuário consegue adicionar produtos no carrinho e removê-los,
                além de simular uma compra.
              </p>
            </div>

            <div className="buttons">
              <a
                href={DemoKenzieShopContextApi}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn">Demo</Button>
              </a>
              <a
                href={RepoKenzieShopContextApi}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn">Repositório</Button>
              </a>
            </div>
          </Figure>
          {/* KenzieShop - redux */}
          <Figure>
            <figcaption>KenzieShop - Redux</figcaption>
            <div id="efect">
              <img
                src={KenzieShopRedux}
                alt="BurguerKenzie"
                className="image"
              />
              <p id="comentario">
                Simulação de um carrinho de ecommerce feita com redux,
                utilizando o redux-thunk para que os produtos adicionados
                permaneçam no carrinho e sejam removidos apenas pelo usuário.
              </p>
            </div>

            <div className="buttons">
              <a
                href={DemoKenzieShopRedux}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn">Demo</Button>
              </a>
              <a
                href={RepoKenzieShopRedux}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn">Repositório</Button>
              </a>
            </div>
          </Figure>
          {/* BeraTop */}

          {/* Portfólio */}
        </Projects>
      </Context>

      <Context>
        <Projects>
          <Figure>
            <img src={NuKenzie} alt="NuKenzie" href />
            <figcaption>NuKenzie</figcaption>
          </Figure>
        </Projects>

        <Title>
          <span>JavaScript</span>
        </Title>
      </Context>
    </Container>
  );
}

export default DoneProjects;
