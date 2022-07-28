import { useContext } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../context/Theme";

export default function NavigationItem(props) {
  const {
    icons,
    name,
    hoveredLink,
    currentLink,
    handleSetActive,
    setHoveredLink,
  } = props;

	const { selectedTheme } = useContext(ThemeContext);

	//const themeStyles = {
	//	color: selectedTheme.colors.link.color,
	//}

  return (
    <li className="navigation__item">
      <Link
        onMouseOver={() => {
          setHoveredLink(name);
        }}
        onMouseOut={() => {
          setHoveredLink("");
        }}
        offset={-45}
        onSetActive={() => handleSetActive(name)}
        spy={true}
        to={name}
        className="navigation__link"
      >
        {hoveredLink === name || currentLink === name
          ? icons.iconFill
          : icons.iconOutline}
      </Link>
    </li>
  );
}
