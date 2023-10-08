import React from "react";
import "./footer.component.scss";
import { LangContextProps } from "../../../types/context.type";
import { LangContext } from "../../../contexts/lang.context";
import { FooterValuesProps } from "../../../types/props.type";
import logo from "../../../assets/images/logo.png";
import FBIcon from "../../../assets/svg/facebook-icon.svg";
import INSTAIcon from "../../../assets/svg/insta-icon.svg";
import TIKTOKIcon from "../../../assets/svg/tiktok-icon.svg";
import YOUTUBEIcon from "../../../assets/svg/youtube-icon.svg";
import { LANGUAGE } from "../../../constants/language.constant";

export const Footer = () => {
	const { lang } = React.useContext<LangContextProps>(LangContext);
	const [footerValues, setFooterValues] = React.useState<FooterValuesProps>();

	React.useEffect(() => {
		(async () => {
			if (lang) {
				const values = (
					await import(`../../../datas/translation.${lang}`)
				).footer as FooterValuesProps;
				setFooterValues(values);
			}
		})();
	}, [lang]);

	return footerValues ? (
		<div id="footer">
			<div className="left-part-container">
				<img src={logo} className="logo" alt="...loading" />
				<div className="info-container">
					<span className="label">{footerValues.adress.label}</span>
					<span className="content-label">
						{footerValues.adress.content}
					</span>
				</div>
				<div className="info-container">
					<span className="label">{footerValues.hotline.label}</span>
					<span className="content-label">
						{footerValues.hotline.content}
					</span>
				</div>
			</div>
			<div className="right-part-container">
				<div className="intro-service-container">
					<div className="intro-service-content-container">
						<span className="title">
							{footerValues.introduction.label}
						</span>
						{footerValues.introduction.content.map((val, ind) => (
							<span className="subtitle" key={ind}>
								{val}
							</span>
						))}
					</div>
					<div className="intro-service-content-container">
						<span className="title">
							{footerValues.service.label}
						</span>
						{footerValues.service.content.map((val, ind) => (
							<span className="subtitle" key={ind}>
								{val}
							</span>
						))}
					</div>
				</div>
				<div className="follow-us-container">
					<span className="follow-us-title">FOLLOW US</span>
					<img src={FBIcon} alt="...loading" />
					<img src={INSTAIcon} alt="...loading" />
					<img src={TIKTOKIcon} alt="...loading" />
					<img src={YOUTUBEIcon} alt="...loading" />
				</div>
			</div>
		</div>
	) : (
		<></>
	);
};

export const Copyright = () => {
	const { lang } = React.useContext<LangContextProps>(LangContext);
	const [copyrightValue, setCopyrightValue] = React.useState<string>("");
	const WEBNAME = "vinglishcoffee.vn";

	React.useEffect(() => {
		switch (lang) {
			case LANGUAGE.EN:
				setCopyrightValue("Copyright belong to ");
				break;
			case LANGUAGE.VN:
				setCopyrightValue("Bản quyền thuộc về ");
				break;
			default:
				setCopyrightValue("");
				break;
		}
	}, [lang]);

	return (
		<div id="copyright">
			<span className="label">{copyrightValue}</span>
			<span className="content">{WEBNAME}</span>
		</div>
	);
};