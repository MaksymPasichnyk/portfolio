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

export default function Projects() {
  const projects = [
    {
      title: "Snake Game",
      description: "Simple snake game",
			url: 'https://maksympasichnyk.github.io/snake-game/',
      imgUrl: snakeImg,
			stack: [html, css, javascript],
    },
    {
      title: "Startup2",
      description: "Development",
      imgUrl: test,
			stack: [react, sass, gulp],
    },
    {
      title: "Startup3",
      description: "Development",
      imgUrl: test,
			stack: [html, tailwind, javascript],
    },
    {
      title: "Startup4",
      description: "Development",
      imgUrl: test,
			stack: [phaser, javascript],
    },
    {
      title: "Startup5",
      description: "Development",
      imgUrl: test,
			stack: [tailwind, react],
    },
  ];

  const projectElements = projects.map((project, index) => (
    <div key={index} className="project-card">
			<div className="project-card__inner">
					<div className="project-card__img">
						<img src={project.imgUrl} width="100%" height="100%" />
					</div>
					<div className="project-card__info">
						<a className="project-card__link" href={project.url}></a>
						<h5 className="project-card__title">{project.title}</h5>
						<p className="project-card__desc">{project.description}</p>
						<div className="project-card__stack">
							{
								project.stack.map((item, index) => {
									return <img src={item} width={33} height={33} />
								})
							}
						</div>
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
