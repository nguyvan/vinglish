import React from "react";
import { LangContextProps } from "../../../types/context.type";
import { LangContext } from "../../../contexts/lang.context";
import { FeedbackValuesProps } from "../../../types/props.type";
import { motion, AnimatePresence, Variants } from "framer-motion";
import previousArrow from "../../../assets/svg/button-prev-orange.svg";
import nextArrow from "../../../assets/svg/button-next-orange.svg";
import "./feedback.component.scss";
import { feedbackLimit } from "../../../constants/limit.constant";

export const Feedback = () => {
	const { lang } = React.useContext<LangContextProps>(LangContext);
	const [direction, setDirection] = React.useState<string>("");
	const [offset, setOffset] = React.useState<number>(0);
	const [limit, setLimit] = React.useState<number>(feedbackLimit);

	const [feedbackValues, setFeedBackValues] =
		React.useState<FeedbackValuesProps>();

	const changeLimit = React.useCallback(() => {
		if (window.innerWidth > 768) {
			setLimit(feedbackLimit);
		} else {
			setLimit(2);
		}
		setOffset(0);
	}, []);

	const length = React.useMemo(() => {
		if (feedbackValues) {
			return feedbackValues.content.length;
		}
	}, [feedbackValues]);

	const selectedItems = React.useMemo(() => {
		if (feedbackValues) {
			return feedbackValues.content.slice(
				offset * limit,
				(offset + 1) * limit
			);
		}
	}, [limit, offset, feedbackValues]);

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
				const values = (
					await import(`../../../datas/translation.${lang}`)
				).whatStudentsSay as FeedbackValuesProps;
				setFeedBackValues(values);
			}
		})();
	}, [lang]);

	React.useEffect(() => {
		window.addEventListener("resize", changeLimit);
		return () => {
			window.removeEventListener("resize", changeLimit);
		};
	}, [changeLimit]);

	return feedbackValues ? (
		<div className="feedback-container">
			<div className="feedback-overlay" />
			<h1>{feedbackValues.title}</h1>
			<div className="carousel">
				<div
					className="prev-button"
					onClick={() => {
						setDirection("left");
						setOffset((offset) => {
							if (length) {
								if (offset - 1 < 0) {
									return Math.ceil(length / limit) - 1;
								} else {
									return offset - 1;
								}
							} else {
								return 0;
							}
						});
					}}
				>
					<img src={previousArrow} alt="...loading" />
				</div>
				<div
					className="next-button"
					onClick={() => {
						setDirection("right");
						setOffset((offset) => {
							if (length) {
								if (offset + 1 >= Math.floor(length / limit)) {
									return 0;
								} else {
									return offset + 1;
								}
							} else {
								return 0;
							}
						});
					}}
				>
					<img src={nextArrow} alt="...loading" />
				</div>
				<AnimatePresence>
					{selectedItems ? (
						selectedItems.map((item, index) => (
							<motion.div
								className="carousel-item"
								key={index + offset * limit}
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
											duration: 1 + 0.5 * index,
										},
									},
								}}
							>
								<div className="carousel-item-text-container">
									<span className="carousel-item-text">
										{item.feedback}
									</span>
								</div>
								<div className="carousel-item-info">
									<img
										className="carousel-item-avatar"
										src={item.avatar}
										alt="...loading"
									/>
									<span className="carousel-item-name">
										@{item.name}
									</span>
								</div>
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
