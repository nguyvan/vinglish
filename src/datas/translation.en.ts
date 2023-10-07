import saltedCoffee from "../assets/images/menu/salted_coffee.png";
import saltedChocolat from "../assets/images/menu/salted_chocolat.png";
import saltedMatcha from "../assets/images/menu/salted_matcha.png";
import saltedWhiteCoffee from "../assets/images/menu/salted_white_coffee.png";

export const navbar = [
	{
		label: "About us",
		index: 1,
	},
	{
		label: "Menu",
		index: 2,
	},
	{
		label: "English Courses",
		index: 3,
	},
	{
		label: "Latest News",
		index: 4,
	},
	{
		label: "Booking Meeting Room",
		index: 5,
	},
];

export const introBanner = {
	title: "Where English meets coffee",
	content:
		"Savor exquisite coffee while enhancing your English language skills with native speakers",
	button: "About Us",
};

export const contactComponent = {
	title: "About Us",
	content:
		"Located in the heart of Binh Thanh District, Ho Chi Minh City, Vinglish Coffee offers an excellent blend of studying and coffee enjoyment. Here, you not only have a tranquil space for work and study but also the opportunity to enhance your English skills through communication classes with native speakers.",
	button: "Learn More",
};

export const whatWeOfferCompnent = {
	title: "What We Offer",
	content: [
		{
			label: "Coffee 24/7",
			index: 1,
		},
		{
			label: "Meeting Room",
			index: 2,
		},
		{
			label: "English Courses",
			index: 3,
		},
	],
	button: "Learn More",
};

export const Menu = {
	title: "Menu",
	content: [
		{
			category: "Salted Drink",
			product: [
				{
					name: "Hue-Style Salted Coffee",
					image: saltedCoffee,
				},
				{
					name: "Hue-Style Salted White Coffee",
					image: saltedWhiteCoffee,
				},
				{
					name: "Hue-Style Salted Chocolate",
					image: saltedChocolat,
				},
				{
					name: "Matcha Latte & Salted Foam",
					image: saltedMatcha,
				},
			],
		},
		{},
	],
};
