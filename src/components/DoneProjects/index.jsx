import { Container, Context, Figure, Projects } from "./styles";
import Button from "../Button";
import { projects } from "./projects.db";
function DoneProjects() {
  console.log(projects);
  return (
    <Container>
      <Context>
        {projects.map((project, index) => (
          <Projects key={index}>
            <Figure>
              <figcaption>{project.title}</figcaption>
              <div id="efect">
                <img src={project.img} alt="BurguerKenzie" className="image" />
                <p id="comentario">{project.description}</p>
              </div>
              <div className="buttons">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="btn">Demo</Button>
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="btn">Repositório</Button>
                </a>
              </div>

              <div className="techsDiv">
                {project.react ? (
                  <img className="techs" src={project.react} alt="React JS" />
                ) : null}
                {project.js ? (
                  <img className="techs" src={project.js} alt="JavaScript" />
                ) : null}
                {project.html ? (
                  <img className="techs" src={project.html} alt="HTML 5" />
                ) : null}
                {project.css ? (
                  <img className="techs" src={project.css} alt="CSS 3" />
                ) : null}
              </div>
            </Figure>
          </Projects>
        ))}
      </Context>
    </Container>
  );
}

export default DoneProjects;
