import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

export default function Home() {
  const arrowRightIcon = <FontAwesomeIcon icon={faArrowRight} />;

  return (
    <section name="home" id="home" className="home flex">
      <div className="home__heading">
        <div className="home__heading flex">
          <h1 className="home__heading-text">
            Hello, I'm
            <span className="highlight"> Maksym Pasichnyk</span>
            <br />
            I'm frontend developer.
          </h1>
          <Link
						offset={-50}
						to="projects"
						className="page-btn">
            My Projects
            <i>{arrowRightIcon}</i>
          </Link>
        </div>
      </div>
    </section>
  );
}
