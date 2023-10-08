import { Layout } from "../components/layout/layout.component";
import { About } from "./components/about/about.component";
import { Banner1, Banner2 } from "./components/banner/banner.component";
import { Banner3 } from "./components/banner3/banner3.component";
import { Intro } from "./components/intro/intro.component";
import { Menu } from "./components/menu/menu.component";
import { Offer } from "./components/offer/offer.component";

export const HomePage = () => {
	return (
		<Layout>
			<Intro />
			<About />
			<Banner1 />
			<Offer />
			<Banner2 />
			<Menu />
			<Banner3 />
		</Layout>
	);
};
