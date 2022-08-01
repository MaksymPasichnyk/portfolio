import { useContext } from "react";
import { ThemeContext } from "../context/Theme";

// icons
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const socialContacts = [
  {
    icon: <AiOutlineGithub />,
    url: "https://github.com/MaksymPasichnyk",
  },
  {
    icon: <AiOutlineLinkedin />,
    url: "https://www.linkedin.com/in/maksym-pasichnyk-357802191/",
  },
  {
    icon: <SiGmail />,
    url: "mailto:maxpas2512@gmail.com",
  },
];

export default function Footer() {
  const { selectedTheme } = useContext(ThemeContext);

  const footerStyles = {
    backgroundColor: selectedTheme.colors.text,
  };

  const navStyles = {
    color: selectedTheme.colors.linkColor,
  };

  const elements = socialContacts.map((item, index) => (
    <li key={index} className="socials__item">
      <a
        href={item.url}
        target="_blank"
        className="socials__link"
      >
        {item.icon}
      </a>
    </li>
  ));

  return (
    <footer style={footerStyles} className="footer">
      <nav style={navStyles} name="contacts" id="contacts" className="socials">
        {elements}
      </nav>
    </footer>
  );
}
