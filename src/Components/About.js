// images
import css from "../assets/icons/css.png";
import gulp from "../assets/icons/gulp.png";
import javascript from "../assets/icons/javascript.png";
import phaser from "../assets/icons/phaser.png";
import react from "../assets/icons/react.png";
import sass from "../assets/icons/sass.png";
import html from "../assets/icons/html.png";
import tailwind from "../assets/icons/tailwind.svg";

export default function About() {
  const icons = [html, css, javascript, react, phaser, sass, gulp, tailwind];

  const boxes = icons.map((icon, index) => (
    <div key={index} className="grid__box">
      <img src={icon} width={100} height={100} />
    </div>
  ));

  return (
    <section name="about" id="about" className="about">
			<div className="container">
				<h2 className="about__title title">About me</h2>
				<p className="about__desc text">
					I have got almost 1 year commercial experience as a markup developer.
					I'm highly motivated and ambitius, resultoriented, easy to learn and
					always ready to accept any advices from more experienced colleagues. I
					have been styding React, Redux, Typescript. I would like to receive more
					interesting projects in which I could not only implement already
					acquired skills but also learn something new. I do my best for
					development and work achievement.
				</p>
				<div className="stack flex">
					<h3>My Stack:</h3>
					<div className="stack__container grid">{boxes}</div>
				</div>
			</div>
    </section>
  );
}
