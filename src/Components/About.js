import Slider from "./Carousel";

export default function About() {

  return (
    <section name="about" id="about" className="about">
			<div className="container">
				<h2 className="about__title title">About me</h2>
				<div className="about__row">
					<div className="about__column">
						<p className="about__desc text">
							I have got commercial experience as a markup developer.
							I'm highly motivated and ambitius, result oriented, easy to learn and
							always ready to accept any advices from more experienced colleagues. I would like to receive more
							interesting projects in which I could not only implement already
							acquired skills but also learn something new. I do my best for
							development and work achievement.
						</p>
					</div>
				</div>
				<div className="stack flex">
					<h3 className="about__subtitle">Skills & Tools:</h3>
					<Slider />
				</div>
			</div>
    </section>
  );
}
