import ProjectType from "../types/Project";
import bellImg from "./images/bell.png";
import cuscuzBaneImg from "./images/CuscuzBane.png";
import newHomeImg from "./images/new-home.jpeg";
import notesAppImg from "./images/notes-app.png";
import pistoleiroPacoImg from "./images/pistoleiro-paco.png";
import snakesLaddersImg from "./images/snakes-ladders.png";

const projects: Record<string, ProjectType> = {
  snakesLadders: {
    name: "Snakes and Ladders",
    imgUrl: snakesLaddersImg,
    element: (
      <div>
        <p className="mb-2">
          <a href="https://github.com/gabrielmaia2/EscadasSerpentes">
            github.com/gabrielmaia2/EscadasSerpentes
          </a>
        </p>
        <p className="m-0">
          Snakes and Ladders game implementation using Java Swing and AWT.
        </p>
      </div>
    ),
  },
  bellApp: {
    name: "Bell",
    imgUrl: bellImg,
    element: (
      <div>
        <p className="mb-2">
          <a href="https://github.com/gabrielmaia2/Bell-ASP.NET">
            github.com/gabrielmaia2/Bell-ASP.NET
          </a>
        </p>
        <p className="m-0">
          E-Commerce web app implemented using ASP.NET Core and EF Core.
        </p>
      </div>
    ),
  },
  webProjects: {
    name: "Web projects",
    imgUrl: notesAppImg,
    element: (
      <div>
        <p className="mb-2">
          <a href="https://github.com/gabrielmaia2/disciplina_web">
            github.com/gabrielmaia2/disciplina_web
          </a>
        </p>
        <p>
          <a href="https://github.com/gabrielmaia2/notes-app">
            github.com/gabrielmaia2/notes-app
          </a>
        </p>
        <p className="m-0">
          A set of small projects for a web development course.
        </p>
      </div>
    ),
  },
  newHome: {
    name: "New Home",
    imgUrl: newHomeImg,
    element: (
      <div>
        <p className="mb-2">
          <a href="https://github.com/gabrielmaia2/NewHome">
            github.com/gabrielmaia2/NewHome
          </a>
        </p>
        <p className="m-0">
          Animal adoption app implemented using Google Android Platform and
          Kotlin.
        </p>
      </div>
    ),
  },
  pistoleiroPaco: {
    name: "Pistoleiro paco",
    imgUrl: pistoleiroPacoImg,
    element: (
      <div>
        <p className="mb-2">
          <a href="https://github.com/gabrielmaia2/trabalho-oficinas">
            github.com/gabrielmaia2/trabalho-oficinas
          </a>
        </p>
        <p className="m-0">
          A project that turns an arduino into a small game console with two
          games: Pistoleiro Paco and Snake.
        </p>
      </div>
    ),
  },
  cuscuzBane: {
    name: "Cuscuz Bane",
    imgUrl: cuscuzBaneImg,
    element: (
      <div>
        <p className="mb-2">
          <a href="https://github.com/gabrielmaia2/CuscuzBane">
            github.com/gabrielmaia2/CuscuzBane
          </a>
        </p>
        <p>
          <a href="https://gabrielmaia2.itch.io/cuscuz-bane">
            gabrielmaia2.itch.io/cuscuz-bane
          </a>
        </p>
        <p className="m-0">
          A simple Unity game about a bane that came from a wrong cuscuz recipe.
        </p>
      </div>
    ),
  },
};

export default projects;
