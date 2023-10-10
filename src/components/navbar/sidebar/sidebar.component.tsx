import React from "react";
import "./sidebar.component.scss";
import { NavbarValuesProps } from "../../../types/props.type";
import backIcon from "../../../assets/svg/button-prev-orange.svg";
import { ButtonLanguageSelect } from "../../button/button.component";

interface SidebarProps {
	selectedIndex?: number;
	setSelectedIndex?: React.Dispatch<React.SetStateAction<number | undefined>>;
	valuesNavbar?: NavbarValuesProps[];
	toogleSidebar: () => void;
}

export const Sidebar = ({
	selectedIndex,
	setSelectedIndex,
	valuesNavbar,
	toogleSidebar,
}: SidebarProps) => {
	return (
		<div id="sidebar" className="sidebar-not-display">
			<div className="button-back-container" onClick={toogleSidebar}>
				<img src={backIcon} alt="...loading" />
			</div>
			<div className="sidebar-content">
				<nav>
					<ol>
						{valuesNavbar!.map((value) => (
							<li
								key={value.index}
								onClick={() => {
									if (value.index === 1) {
										document
											.getElementById("about")
											?.scrollIntoView();
									}
									setSelectedIndex!(value.index);
								}}
								className={
									selectedIndex === value.index
										? "li-active"
										: "li-not-active"
								}
							>
								<span>{value.label}</span>
							</li>
						))}
					</ol>
				</nav>
			</div>
			<div className="sidebar-button-container">
				<ButtonLanguageSelect
					styles={{
						container: {
							backgroundColor: "#ff7324",
						},
						selections: {
							backgroundColor: "#ff7324",
						},
					}}
				/>
			</div>
		</div>
	);
};
