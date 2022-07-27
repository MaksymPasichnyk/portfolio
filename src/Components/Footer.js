import { useContext } from "react";
import { ThemeContext } from "../context/Theme";


// icons
import { AiOutlineInstagram, AiFillInstagram, AiOutlineLinkedin, AiFillLinkedin, AiOutlineGithub} from "react-icons/ai"
import { SiGmail } from "react-icons/si";

export default function Footer() {
	const social = [<AiOutlineInstagram/>, <AiOutlineLinkedin/>, <AiOutlineGithub/>, <SiGmail/>];
	const { selectedTheme } = useContext(ThemeContext);

	console.log(selectedTheme)

	const footerStyles = {
		backgroundColor: selectedTheme.colors.text,
	}

	const navStyles = {
		color: selectedTheme.colors.body,
	}

	const elements = social.map((item, index) => (
		<li key={index} className="socials__item">
			<a className="socials__link">
				{item}
			</a>
		</li>
	))

	return (
		<footer style={footerStyles} className="footer">
				<nav style={navStyles}  name="contacts" id="contacts" className="socials">
					{elements}
				</nav>
		</footer>
	)
}