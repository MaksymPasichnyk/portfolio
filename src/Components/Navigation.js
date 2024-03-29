import React, { useState, useEffect, useContext } from "react";
import {
  Events,
  scrollSpy,
} from "react-scroll";
import { ThemeContext } from "../context/Theme";
import NavigationList from "./NavigationList";
import NavigationItem from "./NavigationItem";

// import icons 
import { RiContactsLine, RiContactsFill } from "react-icons/ri";
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineInfoCircle,
  AiFillInfoCircle,
} from "react-icons/ai";
import { BsBricks } from "react-icons/bs";
import { GiBrickWall } from "react-icons/gi";

const navigationItems = [
  {
    name: "home",
    icons: {
      iconOutline: <AiOutlineHome />,
      iconFill: <AiFillHome />,
    },
  },
  {
    name: "about",
    icons: {
      iconOutline: <AiOutlineInfoCircle />,
      iconFill: <AiFillInfoCircle />,
    },
  },
  {
    name: "projects",
    icons: {
      iconOutline: <BsBricks />,
      iconFill: <GiBrickWall />,
    },
  },
  //{
  //  name: "contacts",
  //  icons: {
  //    iconOutline: <RiContactsLine />,
  //    iconFill: <RiContactsFill />,
  //  },
	
  //},
];

export default function Navigation() {
  const [hoveredLink, setHoveredLink] = useState("");
  const [currentLink, setCurrentLink] = useState("home");
  const { selectedTheme } = useContext(ThemeContext);

  const navStyles = {
    backgroundColor: selectedTheme.colors.text,
		color: selectedTheme.colors.linkColor,
  };

  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      setCurrentLink(to);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);

  function handleSetActive(to) {
    setCurrentLink(to);
  }

  return (
    <nav style={navStyles} className="navigation">
      <NavigationList>
        {navigationItems.map((navItem, index) => (
          <NavigationItem
            key={index}
            icons={navItem.icons}
            name={navItem.name}
            hoveredLink={hoveredLink}
            currentLink={currentLink}
            handleSetActive={handleSetActive}
            setHoveredLink={setHoveredLink}
          />
        ))}
      </NavigationList>
    </nav>
  );
}
