import React from "react";
import "./offer.component.scss";
import { LangContextProps } from "../../../types/context.type";
import { LangContext } from "../../../contexts/lang.context";
import { OfferValuesProps } from "../../../types/props.type";
import offer1 from "../../../assets/images/offer/offer-1.jpg";
import offer2 from "../../../assets/images/offer/offer-2.jpg";
import offer3 from "../../../assets/images/offer/offer-3.jpg";
import sunIcon from "../../../assets/svg/sun.svg";
import wifiIcon from "../../../assets/svg/wifi.svg";
import peopleIcon from "../../../assets/svg/people.svg";
import arrow from "../../../assets/svg/right-arrow-orange.svg";

export const Offer = () => {
	const { lang } = React.useContext<LangContextProps>(LangContext);
	const [offerValues, setOfferValues] = React.useState<OfferValuesProps>();
	const datas = [
		{
			index: 1,
			imgSrc: offer1,
			icon: sunIcon,
		},
		{
			index: 2,
			imgSrc: offer2,
			icon: wifiIcon,
		},
		{
			index: 3,
			imgSrc: offer3,
			icon: peopleIcon,
		},
	];

	React.useEffect(() => {
		(async () => {
			if (lang) {
				const values = (
					await import(`../../../datas/translation.${lang}`)
				).whatWeOfferCompnent as OfferValuesProps;
				setOfferValues(values);
			}
		})();
	}, [lang]);

	return offerValues ? (
		<div className="offer-container">
			<h1>{offerValues.title}</h1>
			<div className="offer-flatlist">
				{offerValues.content.map((value) => {
					const imgSrc = datas.find(
						(data) => data.index === value.index
					)?.imgSrc;
					const icon = datas.find(
						(data) => data.index === value.index
					)?.icon;
					return (
						<div key={value.index} className="offer-item">
							<img
								src={imgSrc}
								alt="...loading"
								className="offer-image"
							/>
							<div className="offer-description">
								<img
									src={icon}
									alt="...loading"
									className="offer-icon"
								/>
								<div className="offer-label">{value.label}</div>
							</div>
							<button>
								<div>{offerValues.button}</div>
								<img src={arrow} alt="...loading" />
							</button>
						</div>
					);
				})}
			</div>
		</div>
	) : (
		<></>
	);
};
