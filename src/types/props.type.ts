import { LANGUAGE } from "../constants/language.constant";

export interface TypeProps {
	lang: LANGUAGE;
}

export interface NavbarValuesProps {
	label: string;
	index: number;
}

export interface IntroValuesProps {
	title: string;
	content: string;
	button: string;
}

export interface AboutValuesProps {
	title: string;
	content: string;
	button: string;
}

export interface MenuValuesProps {
	title: string;
	content: {
		category: string;
		product: {
			name: string;
			image: string;
			price: string;
		}[];
	}[];
}
