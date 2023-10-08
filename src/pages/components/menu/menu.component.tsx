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
	const [selectedCategory, setSelectedCategory] = React.useState(0);
	const selectedItems = React.useMemo(() => {
		if (menuValues && categories) {
			return menuValues.content.find(
				(value) => value.category === categories.at(selectedCategory!)
			)?.product;
		}
	}, [menuValues, categories, selectedCategory]);
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
				<ol>
					{categories.map((val, ind) => (
						<li
							className={
								selectedCategory === ind
									? "selected-category"
									: ""
							}
							key={ind}
							onClick={() => setSelectedCategory(ind)}
						>
							{val}
						</li>
					))}
				</ol>
			</div>
			<div className="carousel">
				<div className="prev-button">
					<img src={previousArrow} alt="...loading" />
				</div>
				<div className="next-button">
					<img src={nextArrow} alt="...loading" />
				</div>
				{selectedItems ? (
					selectedItems.map((item) => (
						<div className="carousel-item" key={item.name}>
							<img src={item.image} alt="...loading" />
							<span className="name-item">{item.name}</span>
							<span className="price-item">{item.price}</span>
						</div>
					))
				) : (
					<></>
				)}
			</div>
		</div>
	) : (
		<></>
	);
};
