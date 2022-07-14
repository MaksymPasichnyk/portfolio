import React, { useState, useEffect } from "react";
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineInfoCircle,
  AiFillInfoCircle,
} from "react-icons/ai";
import { BsBricks } from "react-icons/bs";
import { GiBrickWall } from "react-icons/gi";
import { RiContactsLine, RiContactsFill } from "react-icons/ri";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Scroll } from "react-scroll/modules/mixins/Helpers";

export default function Navigation() {
  const [hoveredLink, setHoveredLink] = useState("");
  const [currentLink, setCurrentLink] = useState("home");


	useEffect(() => {
		Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin', arguments[0]);
			setCurrentLink(to)
			
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log('end', arguments);
    });

		scrollSpy.update();

		return () => {
			Events.scrollEvent.remove('begin');
    	Events.scrollEvent.remove('end');
		}
	}, [])

	function scrollToTop() {
    scroll.scrollToTop();
  }

  function scrollToBottom() {
    scroll.scrollToBottom();
  }

  function scrollTo() {
    scroll.scrollTo(100);
  }

  function scrollMore() {
    scroll.scrollMore(100);
  }

  function handleSetActive(to) {
    setCurrentLink(to)
  }

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link
						offset={100}
						onSetActive={() => handleSetActive('home')}
						spy={true}
						activeClass="active"
						to="home"
            className="navigation__link"
          >
            {hoveredLink === "home" || currentLink === "home" ? (
              <AiFillHome />
            ) : (
              <AiOutlineHome />
            )}
          </Link>
        </li>
        <li className="navigation__item">
          <Link
						offset={100}
						onSetActive={() => handleSetActive('about')}
						spy={true}
						activeClass="active"
						to="about"
            className="navigation__link"
          >
            {hoveredLink === "about" || currentLink === "about" ? (
              <AiFillInfoCircle />
            ) : (
              <AiOutlineInfoCircle />
            )}
          </Link>
        </li>
        <li className="navigation__item">
          <Link
						offset={100}
						onSetActive={() => handleSetActive('projects')}
						spy={true}
						activeClass="active"
						to="projects"
            className="navigation__link"
          >
            {hoveredLink === "projects" || currentLink === "projects" ? (
              <GiBrickWall />
            ) : (
              <BsBricks />
            )}
          </Link>
        </li>
        <li className="navigation__item">
          <Link
						offset={0}
						onSetActive={() => handleSetActive('contacts')}
						spy={true}
						activeClass="active"
						to="contacts"
            className="navigation__link"
          >
            {hoveredLink === "contacts" || currentLink === "contacts" ? (
              <RiContactsFill />
            ) : (
              <RiContactsLine />
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
