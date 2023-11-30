import React from "react";
import { LangContextProps } from "../../types/context.type";
import { LangContext } from "../../contexts/lang.context";
import { NavbarValuesProps } from "../../types/props.type";
import { ButtonLanguageSelect } from "../button/button.component";

import "./navbar.component.scss";
import logo from "../../assets/images/logo.png";
import menuIcon from "../../assets/svg/menu-icon.svg";
import { Sidebar } from "./sidebar/sidebar.component";

export const Navbar = () => {
	const { lang } = React.useContext<LangContextProps>(LangContext);
	const [valuesNavbar, setValuesNavbar] =
		React.useState<NavbarValuesProps[]>();
	const [isScroll, setIsScroll] = React.useState(false);
	const [selectedIndex, setSelectedIndex] = React.useState<number>();

	const scrollHandler = () => {
		const position = window.scrollY;
		setIsScroll(position > (window.innerWidth * 664) / 1440 - 60);
	};

	React.useEffect(() => {
		(async () => {
			if (lang) {
				const values = (await import(`../../datas/translation.${lang}`))
					.navbar;
				setValuesNavbar(values);
			}
		})();
	}, [lang]);

	const toogleSidebar = React.useCallback(() => {
		const element = document.getElementById("sidebar");
		const classList = element?.classList!;
		if (classList.contains("sidebar-container")) {
			classList.remove("sidebar-container");
		} else {
			classList.add("sidebar-container");
		}
	}, []);

	const navigateToHome = React.useCallback(() => {
		window.location.href = "/";
	}, []);

	React.useEffect(() => {
		window.addEventListener("scroll", scrollHandler);
	}, []);

	return valuesNavbar ? (
		<div
			className={
				isScroll ? "navbar-container scrolled" : "navbar-container"
			}
		>
			<div className="menu-icon-container" onClick={toogleSidebar}>
				<img src={menuIcon} alt="...loading" />
			</div>
			<img
				id="logo-image"
				src={logo}
				alt="...loading"
				onClick={navigateToHome}
			/>
			<div className="navbar-content">
				<nav>
					<ol>
						{valuesNavbar.map((value) => (
							<li
								key={value.index}
								onClick={() => {
									if (value.index === 1) {
										document
											.getElementById("about")
											?.scrollIntoView();
									} else if (value.index === 5) {
										window.location.replace(
											"https://booking.vinglishcoffee.com"
										);
									} else if (value.index === 2) {
										window.location.href = "#menu";
									} else if (value.index === 4) {
										window.location.href = "/news";
									}
									setSelectedIndex(value.index);
								}}
								className={
									selectedIndex === value.index
										? "li-active"
										: "li-not-active"
								}
							>
								{value.label}
							</li>
						))}
					</ol>
				</nav>
			</div>
			<div className="navbar-button-container">
				<ButtonLanguageSelect />
			</div>
			<Sidebar
				valuesNavbar={valuesNavbar}
				setSelectedIndex={setSelectedIndex}
				selectedIndex={selectedIndex}
				toogleSidebar={toogleSidebar}
			/>
		</div>
	) : (
		<></>
	);
};
