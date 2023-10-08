import React from "react";
import "./intro.component.scss";
import { LangContextProps } from "../../../types/context.type";
import { LangContext } from "../../../contexts/lang.context";
import { IntroValuesProps } from "../../../types/props.type";

export const Intro = () => {
	const { lang } = React.useContext<LangContextProps>(LangContext);
	const [introValues, setIntroValues] = React.useState<IntroValuesProps>();

	React.useEffect(() => {
		(async () => {
			if (lang) {
				const values = (
					await import(`../../../datas/translation.${lang}`)
				).introBanner as IntroValuesProps;
				setIntroValues(values);
			}
		})();
	}, [lang]);

	return introValues ? (
		<div className="intro-container">
			<div className="intro-background">
				<div className="intro-content">
					<h1>{introValues.title}</h1>
					<div className="intro-content-text">
						{introValues.content}
					</div>
					<button>
						<a href="#about">{introValues.button}</a>
					</button>
				</div>
			</div>
		</div>
	) : (
		<></>
	);
};
