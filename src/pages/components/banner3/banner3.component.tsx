import React from "react";
import "./banner3.component.scss";
import { LangContextProps } from "../../../types/context.type";
import { LangContext } from "../../../contexts/lang.context";
import { BannerValuesProps } from "../../../types/props.type";
import Highlighter from "react-highlight-words";

export const Banner3 = () => {
	const { lang } = React.useContext<LangContextProps>(LangContext);
	const [bannerValues, setBannerValues] = React.useState<BannerValuesProps>();

	React.useEffect(() => {
		(async () => {
			if (lang) {
				const values = (
					await import(`../../../datas/translation.${lang}`)
				).bannerLabel;
				setBannerValues(values);
			}
		})();
	}, [lang]);

	return bannerValues ? (
		<div className="banner-container">
			<div className="banner-overlay1" />
			<div className="banner-overlay2" />
			<Highlighter
				className="banner-label"
				searchWords={[bannerValues.highlight]}
				autoEscape={true}
				textToHighlight={bannerValues.label}
				highlightStyle={{
					color: "#FF7324",
					background: "transparent",
				}}
			/>
		</div>
	) : (
		<></>
	);
};
