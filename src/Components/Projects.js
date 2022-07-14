import test from '../assets/web-nestflix.jpeg'

export default function Projects() {
  const boxes = [1, 2, 3, 4, 5, 6].map((box, index) => (
    <div key={index} className="project">
			<div className="project__img">
				<img src={test} width='100%' height='100%' />
			</div>
    </div>
  ));

  return (
    <section name="projects" id="projects" className="projects">
			<div className="container">
				<h2 className="projects__title title">My Projects</h2>
				<div className="project-list">
					{boxes}
				</div>
			</div>
    </section>
  );
}
