import React from "react";
import { LangContextProps } from "../../types/context.type";
import { LangContext } from "../../contexts/lang.context";
import { NavbarValuesProps } from "../../types/props.type";
import "./navbar.component.scss";
import logo from "../../assets/images/logo.png";
import searchIcon from "../../assets/svg/search.svg";
import { ButtonLanguageSelect } from "../button/button.component";

export const Navbar = () => {
	const { lang } = React.useContext<LangContextProps>(LangContext);
	const [valuesNavbar, setValuesNavbar] =
		React.useState<NavbarValuesProps[]>();

	React.useEffect(() => {
		(async () => {
			if (lang) {
				const values = (await import(`../../datas/translation.${lang}`))
					.navbar;
				setValuesNavbar(values);
			}
		})();
	}, [lang]);

	return valuesNavbar ? (
		<div className="navbar-container">
			<img id="logo-image" src={logo} alt="...loading" />
			<div className="navbar-content">
				<nav>
					<ol>
						{valuesNavbar.map((value) => (
							<li key={value.index}>{value.label}</li>
						))}
						<li>
							<img src={searchIcon} alt="...loading" />
						</li>
					</ol>
				</nav>
			</div>
			<div className="button-container">
				<ButtonLanguageSelect />
			</div>
		</div>
	) : (
		<></>
	);
};
