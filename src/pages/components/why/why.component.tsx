import React from "react";
import { LangContextProps } from "../../../types/context.type";
import { LangContext } from "../../../contexts/lang.context";
import { WhyValuesProps } from "../../../types/props.type";
import whyImage from "../../../assets/images/why/why.jpg";
import arrow from "../../../assets/svg/right-arrow-orange.svg";
import "./why.component.scss";

export const Why = () => {
	const { lang } = React.useContext<LangContextProps>(LangContext);
	const [whyValues, setWhyValues] = React.useState<WhyValuesProps>();
	React.useEffect(() => {
		(async () => {
			if (lang) {
				const values = (
					await import(`../../../datas/translation.${lang}`)
				).whyVinglish as WhyValuesProps;
				setWhyValues(values);
			}
		})();
	}, [lang]);

	return whyValues ? (
		<div className="why-container">
			<h1 className="why-title">{whyValues.title}</h1>
			<img className="why-image" src={whyImage} alt="...loading" />
			<div className="why-flatlist">
				{whyValues.content.map((value, index) => (
					<div className="why-item" key={index}>
						<div className="why-item-label">{value.label}</div>
						<div className="why-item-text">{value.text}</div>
					</div>
				))}
			</div>
			<button>
				<div>{whyValues.button}</div>
				<img src={arrow} alt="...loading" />
			</button>
		</div>
	) : (
		<></>
	);
};
