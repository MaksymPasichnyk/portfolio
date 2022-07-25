import test from "../assets/web-nestflix.jpeg";
import snakeImg from "../assets/snake-img.png";
import css from "../assets/icons/css.png";
import gulp from "../assets/icons/gulp.png";
import javascript from "../assets/icons/javascript.png";
import phaser from "../assets/icons/phaser.png";
import react from "../assets/icons/react.png";
import sass from "../assets/icons/sass.png";
import html from "../assets/icons/html.png";
import tailwind from "../assets/icons/tailwind.svg";
import { AiOutlineGithub } from "react-icons/ai"

export default function Projects() {
  const projects = [
    {
      title: "Snake Game",
      description: "Simple snake game",
      url: "https://maksympasichnyk.github.io/snake-game/",
      imgUrl: snakeImg,
      stack: [html, css, javascript],
			githubUrl: 'https://github.com/MaksymPasichnyk'
    },
    {
      title: "Startup2",
      description:
        "Description thaat should be here so i need to write everything that i want so fsdasdasd",
      imgUrl: test,
      stack: [react, sass, gulp],
			githubUrl: 'https://github.com/MaksymPasichnyk'
    },
    {
      title: "Startup3",
      description: "Development",
      imgUrl: test,
      stack: [html, tailwind, javascript],
			githubUrl: 'https://github.com/MaksymPasichnyk'
    },
    {
      title: "Startup4",
      description: "Development",
      imgUrl: test,
      stack: [phaser, javascript],
			githubUrl: 'https://github.com/MaksymPasichnyk'
    },
    {
      title: "Startup5",
      description: "Development",
      imgUrl: test,
      stack: [tailwind, react],
			githubUrl: 'https://github.com/MaksymPasichnyk'
    },
  ];

  const projectElements = projects.map((project, index) => (
    <div key={index} className="project-card">
      <div className="project-card__inner">
        <div className="project-card__img">
          <img src={project.imgUrl} width="100%" height="320px" />
        </div>
        <div className="project-card__info">
          <a className="project-card__link" href={project.url}></a>
          <h5 className="project-card__title">{project.title}</h5>
          <p className="project-card__desc">{project.description}</p>
          <div className="project-card__stack">
            {project.stack.map((item, index) => {
              return <img key={index} src={item} width={33} height={33} />;
            })}
          </div>
					<a className="project-card__github-link" href={project.githubUrl} ><AiOutlineGithub /></a>
        </div>
      </div>
    </div>
  ));

  return (
    <section name="projects" id="projects" className="projects">
      <div className="container">
        <h2 className="projects__title title">My Projects</h2>
        <div className="project-list">{projectElements}</div>
      </div>
    </section>
  );
}
