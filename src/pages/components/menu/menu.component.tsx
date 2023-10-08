import React from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
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
	const [direction, setDirection] = React.useState<string>("");
	const selectedItems = React.useMemo(() => {
		if (menuValues && categories) {
			return menuValues.content.find(
				(value) => value.category === categories.at(selectedCategory!)
			)?.product;
		}
	}, [menuValues, categories, selectedCategory]);

	const slideVariants: Variants = {
		hiddenRight: {
			x: "100%",
			opacity: 0,
		},
		hiddenLeft: {
			x: "-100%",
			opacity: 0,
		},
		visible: {
			x: "0",
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
		exit: {
			display: "none",
			transition: {
				duration: 0.5,
			},
		},
	};

	React.useEffect(() => {
		(async () => {
			if (lang) {
				const values: MenuValuesProps = (
					await import(`../../../datas/translation.${lang}`)
				).menu;
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
				<div
					className="prev-button"
					onClick={() => {
						setDirection("left");
						let prevCat = selectedCategory - 1;
						prevCat = prevCat < 0 ? categories.length - 1 : prevCat;
						setSelectedCategory(prevCat);
					}}
				>
					<img src={previousArrow} alt="...loading" />
				</div>
				<div
					className="next-button"
					onClick={() => {
						setDirection("right");
						let nextCat = selectedCategory + 1;
						nextCat = nextCat === categories.length ? 0 : nextCat;
						setSelectedCategory(nextCat);
					}}
				>
					<img src={nextArrow} alt="...loading" />
				</div>
				<AnimatePresence>
					{selectedItems ? (
						selectedItems.map((item, index) => (
							<motion.div
								className="carousel-item"
								key={item.name}
								initial={
									direction === "right"
										? "hiddenRight"
										: "hiddenLeft"
								}
								animate="visible"
								exit="exit"
								variants={{
									...slideVariants,
									visible: {
										x: "0",
										opacity: 1,
										transition: {
											duration: 1 + 0.25 * index,
										},
									},
								}}
							>
								<img src={item.image} alt="...loading" />
								<span className="name-item">{item.name}</span>
								<span className="price-item">{item.price}</span>
							</motion.div>
						))
					) : (
						<></>
					)}
				</AnimatePresence>
			</div>
		</div>
	) : (
		<></>
	);
};
