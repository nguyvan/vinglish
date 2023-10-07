import saltedCoffee from "../assets/images/menu/salted_coffee.png";
import saltedChocolat from "../assets/images/menu/salted_chocolat.png";
import saltedMatcha from "../assets/images/menu/salted_matcha.png";
import saltedWhiteCoffee from "../assets/images/menu/salted_white_coffee.png";

export const navbar = [
	{
		label: "Về Chúng Tôi",
		index: 1,
	},
	{
		label: "Thực đơn",
		index: 2,
	},
	{
		label: "Khóa Học Tiếng Anh",
		index: 3,
	},
	{
		label: "Tin Mới Nhất",
		index: 4,
	},
	{
		label: "Đặt Phòng Họp",
		index: 5,
	},
];

export const introBanner = {
	title: "Khi Cà Phê Kết Hợp Cùng Tiếng Anh",
	content:
		"Thưởng thức hương vị cà phê thơm ngon đồng thời nâng cao khả năng Tiếng Anh cùng người bản xứ",
	button: "Về chúng tôi",
};

export const contactComponent = {
	title: "Về chúng tôi",
	content:
		"Tọa lạc tại trung tâm quận Bình Thạnh, TP.HCM, Vinglish Coffee không chỉ mang đến một không gian tuyệt vời để học tập và thưởng thức cà phê thơm ngon, mà còn là điểm hẹn đầy thú vị của những người yêu thích Tiếng Anh. Ở đây, bạn không chỉ đắm chìm trong không gian yên tĩnh để làm việc và học tập hiệu quả, mà còn được nâng cao khả năng tiếng Anh thông qua các khóa học với người bản xứ.",
	button: "Xem Thêm",
};

export const whatWeOfferCompnent = {
	title: "Dịch vụ của chúng tôi",
	content: [
		{
			label: "Cà phê 24/7",
			index: 1,
		},
		{
			label: "Không gian phòng họp",
			index: 2,
		},
		{
			label: "Khoá học Tiếng Anh",
			index: 3,
		},
	],
	button: "Xem Thêm",
};

export const Menu = {
	title: "Menu",
	content: [
		{
			category: "Muối",
			product: [
				{
					name: "Cà Phê Muối",
					image: saltedCoffee,
				},
				{
					name: "Bạc Xỉu Muối",
					image: saltedWhiteCoffee,
				},
				{
					name: "Chocolate Muối",
					image: saltedChocolat,
				},
				{
					name: "Matcha Kem Muối",
					image: saltedMatcha,
				},
			],
		},
		{},
	],
};
