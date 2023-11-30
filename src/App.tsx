import React from "react";
import { useSearchParams, Route, Routes } from "react-router-dom";

import { LANGUAGE } from "./constants/language.constant";
import { LangContext } from "./contexts/lang.context";
import { HomePage } from "./pages/home.page";
import { News } from "./pages/news.page";

function App() {
	const [params, setParams] = useSearchParams();
	const [lang, setLang] = React.useState<LANGUAGE>();

	React.useEffect(() => {
		if (!params.get("lang")) {
			setParams((params) => {
				params.set("lang", LANGUAGE.EN);
				setLang(LANGUAGE.EN);
				return params;
			});
		} else {
			setLang(params.get("lang") as LANGUAGE);
		}
	}, [params, setParams]);

	return (
		<LangContext.Provider value={{ lang, setLang }}>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/news" element={<News />} />
			</Routes>
		</LangContext.Provider>
	);
}

export default App;
