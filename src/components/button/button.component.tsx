import React, { CSSProperties } from "react";
import ENGFlag from "../../assets/svg/eng-flag.svg";
import VNFlag from "../../assets/svg/vn-flag.svg";
import { LangContextProps } from "../../types/context.type";
import { LangContext } from "../../contexts/lang.context";
import { LANGUAGE } from "../../constants/language.constant";

import "./button.component.scss";

const languageButtons = [
	{
		label: "ENG",
		flag: ENGFlag,
		value: LANGUAGE.EN,
	},
	{
		label: "VN",
		flag: VNFlag,
		value: LANGUAGE.VN,
	},
];

interface ButtonLanguageSelectProps {
	styles?: {
		container: CSSProperties;
		selections: CSSProperties;
	};
}

export const ButtonLanguageSelect = ({ styles }: ButtonLanguageSelectProps) => {
	const { lang, setLang } = React.useContext<LangContextProps>(LangContext);
	const [isSelecting, setIsSelecting] = React.useState<boolean>(false);

	const selectedLang = React.useMemo(
		() => languageButtons.find((language) => language.value === lang),
		[lang]
	);

	const toogleSelectLang = React.useCallback(() => {
		setIsSelecting((isSelecting) => !isSelecting);
	}, []);

	return lang ? (
		<div className="button-lang-container" style={styles?.container}>
			<div className="button-lang-selected" onClick={toogleSelectLang}>
				<img src={selectedLang!.flag} alt="...loading" />
				<span>{selectedLang!.label}</span>
			</div>

			{isSelecting ? (
				<div
					className="button-lang-selection"
					style={styles?.selections}
				>
					{languageButtons.map((language) => (
						<div
							key={language.value}
							className="button-lang-option"
							onClick={() => {
								setLang!(language.value);
								toogleSelectLang();
							}}
						>
							<img src={language!.flag} alt="...loading" />
							<span>{language!.label}</span>
						</div>
					))}
				</div>
			) : (
				<></>
			)}
		</div>
	) : (
		<></>
	);
};
