import ProjectType from "../types/Project";
import bellImg from "./images/bell.png";
import cuscuzBaneImg from "./images/CuscuzBane.png";
import newHomeImg from "./images/new-home.jpeg";
import notesAppImg from "./images/notes-app.png";
import pistoleiroPacoImg from "./images/pistoleiro-paco.png";
import snakesLaddersImg from "./images/snakes-ladders.png";

const projects: Record<string, ProjectType> = {
  bellApp: {
    name: "Bell",
    tags: [
      { name: "Clean", category: "Architecture" },
      { name: "ASP.NET Core", category: "Frameworks/Libraries" },
      { name: "EF Core", category: "Frameworks/Libraries" },
      { name: "SQLite", category: "Database" },
      { name: "Sql Server", category: "Database" },
      { name: "xUnit", category: "Testing" },
      { name: "C#", category: "Languages" },
      { name: "CSS", category: "Styling" },
      { name: "Figma", category: "Design" },
    ],
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
    tags: [
      { name: "React", category: "Frameworks/Libraries" },
      { name: "Express", category: "Frameworks/Libraries" },
      { name: "Firebase", category: "Database" },
      { name: "MongoDB", category: "Database" },
      { name: "JSX", category: "Languages" },
      { name: "CSS", category: "Styling" },
    ],
    imgUrl: notesAppImg,
    element: (
      <div>
        <p className="mb-2">
          <a href="https://github.com/gabrielmaia2/disciplina_web">
            github.com/gabrielmaia2/disciplina_web
          </a>
        </p>
        <p className="mb-2">
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
    tags: [
      { name: "Clean", category: "Architecture" },
      { name: "Android Native", category: "Frameworks/Libraries" },
      { name: "Firebase", category: "Frameworks/Libraries" },
      { name: "Jenkins", category: "CI/CD" },
      { name: "MockK", category: "Testing" },
      { name: "Kotlin", category: "Languages" },
      { name: "Android XML", category: "Languages" },
      { name: "Figma", category: "Design" },
    ],
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
    tags: [
      { name: "Arduino", category: "Other" },
      { name: "Allegro", category: "Frameworks/Libraries" },
      { name: "VGA", category: "Other" },
      { name: "C/C++", category: "Languages" },
    ],
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
    tags: [
      { name: "Unity", category: "Frameworks/Libraries" },
      { name: "C#", category: "Languages" },
    ],
    imgUrl: cuscuzBaneImg,
    element: (
      <div>
        <p className="mb-2">
          <a href="https://github.com/gabrielmaia2/CuscuzBane">
            github.com/gabrielmaia2/CuscuzBane
          </a>
        </p>
        <p className="mb-2">
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
  snakesLadders: {
    name: "Snakes and Ladders",
    tags: [
      { name: "Swing", category: "Frameworks/Libraries" },
      { name: "AWT", category: "Frameworks/Libraries" },
      { name: "Java", category: "Languages" },
    ],
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
};

export default projects;
