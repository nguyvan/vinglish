import React from "react";
import "./menu.component.scss";
import { LangContextProps } from "../../../types/context.type";
import { LangContext } from "../../../contexts/lang.context";
import { MenuValuesProps } from "../../../types/props.type";
import previousArrow from "../../../assets/svg/arrow-left.svg";
import nextArrow from "../../../assets/svg/arrow-right.svg";

export const Menu = () => {
	const { lang } = React.useContext<LangContextProps>(LangContext);
	const [menuValues, setMenuValues] = React.useState<MenuValuesProps>();
	const [categories, setCategories] = React.useState<string[]>();
	const [selectedCategory, selectCategory] = React.useState(0);
	React.useEffect(() => {
		(async () => {
			if (lang) {
				const values: MenuValuesProps = (
					await import(`../../../datas/translation.${lang}`)
				).Menu;
				setMenuValues(values);
				setCategories(values.content.map((v) => v.category));
			}
		})();
	}, [lang]);

	return menuValues && categories ? (
		<div id="menu">
			<div className="info-container">
				<h1>{menuValues.title}</h1>
			</div>
			<div className="menu-category-content">
				<nav>
					<ol>
						{categories.map((val, ind) => {
							if (selectedCategory === ind) {
								return (
									<li
										className="selected-category"
										key={ind}
										onClick={() => selectCategory(ind)}
									>
										{val}
									</li>
								);
							} else {
								return (
									<li
										key={ind}
										onClick={() => selectCategory(ind)}
									>
										{val}
									</li>
								);
							}
						})}
					</ol>
				</nav>
			</div>
		</div>
	) : (
		<></>
	);
};
