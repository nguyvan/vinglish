import { Layout } from "../components/layout/layout.component";
import { About } from "./components/about/about.component";
import { Intro } from "./components/intro/intro.component";

export const HomePage = () => {
	return (
		<Layout>
			<Intro />
			<About />
		</Layout>
	);
};
