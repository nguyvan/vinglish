import bannerImage from "../../../assets/images/banner.png";
import "./banner.component.scss";
import logo from "../../../assets/images/logo-white.png";

export const Banner1 = () => {
	return (
		<div className="banner1-container">
			<img src={bannerImage} alt="...loading" />
		</div>
	);
};

export const Banner2 = () => {
	return (
		<div className="banner2-container">
			{[...Array(3)].map((_, index) => (
				<div className="banner2-animation" key={index}>
					{[...Array(3)].map((_, ind) => (
						<div className="banner2-width" key={ind}>
							<img
								src={logo}
								alt="...loading"
								className="logo-image"
							/>
							<div className="dot-container">
								<div className="dot" />
								<div className="coffee-and-more-container">
									<span className="coffee">
										Coffee English
									</span>
									<span className="and">&</span>
									<span className="more">more</span>
								</div>
							</div>
						</div>
					))}
				</div>
			))}
		</div>
	);
};
