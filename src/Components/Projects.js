import { useContext } from "react";
import test from "../assets/web-nestflix.jpeg";
import snakeImg from "../assets/snake-img.png";
import awesomeChatImg from "../assets/awesome-chat.png";
import quizzImg from "../assets/quizz-app.png";
import css from "../assets/icons/css.png";
import gulp from "../assets/icons/gulp.png";
import javascript from "../assets/icons/javascript.png";
import phaser from "../assets/icons/phaser.png";
import react from "../assets/icons/react.png";
import sass from "../assets/icons/sass.png";
import html from "../assets/icons/html.png";
import tailwind from "../assets/icons/tailwind.svg";
import { AiOutlineGithub } from "react-icons/ai";

import { ThemeContext } from "../context/Theme";

const projects = [
  {
    title: "Awesome Chat",
    description: "Just chat application using Firebase integrataion",
    imgUrl: awesomeChatImg,
    stack: [react, sass],
    url: "https://awesome-chat-appl.netlify.app/",
    githubUrl: "https://github.com/MaksymPasichnyk/react-chat-app",
  },
  {
    title: "Quizzical",
    description: "Quiz app",
    imgUrl: quizzImg,
    stack: [react, sass, javascript],
    url: "https://quizzical-appli.netlify.app/",
    githubUrl: "https://github.com/MaksymPasichnyk/react-quizzical-app",
  },
  {
    title: "Snake Game",
    description: "Simple snake game",
    url: "https://maksympasichnyk.github.io/snake-game/",
    imgUrl: snakeImg,
    stack: [html, css, javascript],
    githubUrl: "https://github.com/MaksymPasichnyk",
  },
];

export default function Projects() {
  const { selectedTheme } = useContext(ThemeContext);

  const projectCardStyles = {
    borderColor: selectedTheme.colors.text,
  };

  const projectCardInfoStyles = {
    backgroundColor: selectedTheme.colors.text,
    opacity: 0.9,
    color: selectedTheme.colors.body,
  };

  const projectElements = projects.map((project, index) => (
    <div style={projectCardStyles} key={index} className="project-card">
      <div className="project-card__inner">
        <div className="project-card__img">
          <img src={project.imgUrl} width="100%" height="320px" />
        </div>
        <div style={projectCardInfoStyles} className="project-card__info">
          <a className="project-card__link" href={project.url}></a>
          <h5 className="project-card__title">{project.title}</h5>
          <p className="project-card__desc">{project.description}</p>
          <div className="project-card__stack">
            {project.stack.map((item, index) => {
              return <img key={index} src={item} width={33} height={33} />;
            })}
          </div>
          <a className="project-card__github-link" href={project.githubUrl}>
            <AiOutlineGithub />
          </a>
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
