import { LANGUAGE } from "../constants/language.constant";

export interface LangContextProps {
	lang?: LANGUAGE;
	setLang?: React.Dispatch<React.SetStateAction<LANGUAGE | undefined>>;
}
