import { AiOutlineInstagram, AiFillInstagram, AiOutlineLinkedin, AiFillLinkedin, AiOutlineGithub} from "react-icons/ai"
import { SiGmail } from "react-icons/si"

export default function Footer() {
	const social = [<AiOutlineInstagram/>, <AiOutlineLinkedin/>, <AiOutlineGithub/>, <SiGmail/>];

	const elements = social.map((item, index) => (
		<li key={index} className="socials__item">
			<a className="socials__link">
				{item}
			</a>
		</li>
	))

	return (
		<footer name="contacts" className="footer">
				<nav id="contacts" className="socials">
					{elements}
				</nav>
		</footer>
	)
}