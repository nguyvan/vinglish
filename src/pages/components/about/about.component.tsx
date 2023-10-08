import React from "react";
import "./about.component.scss";
import { LangContextProps } from "../../../types/context.type";
import { LangContext } from "../../../contexts/lang.context";
import { AboutValuesProps } from "../../../types/props.type";
import arrow from "../../../assets/svg/right-arrow-orange.svg";
import image1 from "../../../assets/images/about-us/about-us-1.jpg";
import image2 from "../../../assets/images/about-us/about-us-2.jpg";
import image3 from "../../../assets/images/about-us/about-us-3.jpg";
import image4 from "../../../assets/images/about-us/about-us-4.jpg";

export const About = () => {
	const { lang } = React.useContext<LangContextProps>(LangContext);
	const [aboutValues, setAboutValues] = React.useState<AboutValuesProps>();
	const images = [image1, image2, image3, image4];

	React.useEffect(() => {
		(async () => {
			if (lang) {
				const values = (
					await import(`../../../datas/translation.${lang}`)
				).contactComponent;
				setAboutValues(values);
			}
		})();
	}, [lang]);

	return aboutValues ? (
		<div id="about">
			<div className="info-container">
				<h1>{aboutValues.title}</h1>
				<span>{aboutValues.content}</span>
				<button>
					<div>{aboutValues.button}</div>
					<img src={arrow} alt="...loading" />
				</button>
			</div>
			<div className="images-container">
				{images.map((value, index) => (
					<div key={index}>
						<img src={value} alt="...loading" />
					</div>
				))}
			</div>
		</div>
	) : (
		<></>
	);
};
