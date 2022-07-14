import { AiOutlineHome, AiFillHome } from "react-icons/ai";

export default function NavigationItem(props) {
	return (
		<li className="navigation__item">
			<Link
				onMouseEnter={props.toggleHover}
				onMouseLeave={props.toggleHover}
				to="/home"
				className="navigation__link"
			>
				{isHovered ? <AiFillHome /> : <AiOutlineHome />}
			</Link>
		</li>
	)
}