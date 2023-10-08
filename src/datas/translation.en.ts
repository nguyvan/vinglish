import saltedCoffee from "../assets/images/menu/salted_coffee.png";
import saltedChocolat from "../assets/images/menu/salted_chocolat.png";
import saltedMatcha from "../assets/images/menu/salted_matcha.png";
import saltedWhiteCoffee from "../assets/images/menu/salted_white_coffee.png";
import eggCoffee from "../assets/images/menu/egg_coffee.jpeg";
import eggMatcha from "../assets/images/menu/matcha_egg.png";
import eggChocolat from "../assets/images/menu/egg_chocolat.jpeg";
import blackCoffee from "../assets/images/menu/black_coffee.jpeg";
import milkCoffee from "../assets/images/menu/milk_coffee.jpeg";
import whiteCoffee from "../assets/images/menu/iced_white_coffee.jpeg";
import coconutCoffee from "../assets/images/menu/coconut_coffee.jpeg";
import thaiMilkTea from "../assets/images/menu/thai_milk_tea.jpeg";
import bobbaThaiMilkTea from "../assets/images/menu/bobba_thai_milk_tea.jpeg";
import iceBlendedThaiMilkTea from "../assets/images/menu/thai_milk_tea_blended_ice.jpeg";
import coffeeMilkTea from "../assets/images/menu/coffee_milk_tea.jpeg";
import expresso from "../assets/images/menu/expresso.jpeg";
import cappucino from "../assets/images/menu/cappucino.jpeg";
import macchiato from "../assets/images/menu/macchiato.jpeg";
import mocha from "../assets/images/menu/mocha.jpeg";
import avatar1 from "../assets/images/avatar/avatar1.png";
import avatar2 from "../assets/images/avatar/avatar2.png";
import avatar3 from "../assets/images/avatar/avatar3.png";
import avatar4 from "../assets/images/avatar/avatar4.jpeg";
import avatar5 from "../assets/images/avatar/avatar5.jpeg";
import avatar6 from "../assets/images/avatar/avatar6.jpeg";

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

export const menu = {
	title: "Menu",
	content: [
		{
			category: "Salted Drink",
			product: [
				{
					name: "Hue-Style Salted Coffee",
					image: saltedCoffee,
					price: "40.000đ",
				},
				{
					name: "Hue-Style Salted White Coffee",
					image: saltedWhiteCoffee,
					price: "45.000đ",
				},
				{
					name: "Hue-Style Salted Chocolate",
					image: saltedChocolat,
					price: "45.000đ",
				},
				{
					name: "Matcha Latte & Salted Foam",
					image: saltedMatcha,
					price: "45.000đ",
				},
			],
		},
		{
			category: "Egg",
			product: [
				{
					name: "Hanoi-Style Egg Coffee",
					image: eggCoffee,
					price: "45.000đ",
				},
				{
					name: "Vietnamese Egg Matcha",
					image: eggMatcha,
					price: "45.000đ",
				},
				{
					name: "Vietnamese Egg Cacao",
					image: eggChocolat,
					price: "45.000đ",
				},
			],
		},
		{
			category: "Thai Milk Tea",
			product: [
				{
					name: "Thai Milk Tea",
					image: thaiMilkTea,
					price: "45.000đ",
				},
				{
					name: "Black Sugar Bubble Thai Milk tea",
					image: bobbaThaiMilkTea,
					price: "45.000đ",
				},
				{
					name: "Ice-blended Thai Milk Tea",
					image: iceBlendedThaiMilkTea,
					price: "45.000đ",
				},
				{
					name: "Coffee Jelly Milk Tea",
					image: coffeeMilkTea,
					price: "45.000đ",
				},
			],
		},
		{
			category: "Vietnamese Coffee",
			product: [
				{
					name: "Vietnamese Iced Black Coffee (/Hot)",
					image: blackCoffee,
					price: "29.000đ",
				},
				{
					name: "Vietnamese Iced Milk Coffee (/Hot)",
					image: milkCoffee,
					price: "35.000đ",
				},
				{
					name: "Vietnamese Iced White Coffee",
					image: whiteCoffee,
					price: "39.000đ",
				},
				{
					name: "Vietnamese Iced Coconut Coffee",
					image: coconutCoffee,
					price: "39.000đ",
				},
			],
		},
		{
			category: "Expresso",
			product: [
				{
					name: "Expresso/Americano",
					image: expresso,
					price: "45.000đ",
				},
				{
					name: "Latte/Cappucino",
					image: cappucino,
					price: "45.000đ",
				},
				{
					name: "Macchiato",
					image: macchiato,
					price: "45.000đ",
				},
				{
					name: "Mocha",
					image: mocha,
					price: "45.000đ",
				},
			],
		},
	],
};

export const bannerLabel = {
	label: "Path To English Proficiency",
	highlight: "Proficiency",
};

export const whyVinglish = {
	title: "Why Choose Vinglish",
	content: [
		{
			label: "Comprehensive Curriculum:",
			text: "The Vinglish curriculum is meticulously crafted by our expert instructors to cater to various proficiency levels and individual learning goals.",
		},
		{
			label: "100% Native Teachers:",
			text: "Our team of native-speaking instructors, equipped with specialized qualifications and years of experience, is always ready to guide you in mastering English.",
		},
		{
			label: "Small Class Sizes:",
			text: "Ensuring students receive dedicated and personalized attention throughout their learning journey.",
		},
		{
			label: "Modern Learning Environment:",
			text: "Study in a contemporary space designed for convenience, enhancing your overall learning experience.",
		},
	],
	button: "Learn More",
};

export const whatStudentsSay = {
	title: "What Our Students Say?",
	content: [
		{
			avatar: avatar1,
			name: "Trần Bảo Yến",
			feedback:
				"Mình đang tìm kiếm môi trường nói tiếng Anh để cải thiện phản xạ tiếng Anh, may mắn được bạn bè giới thiệu dịch vụ “Cà Phê Tiếng Anh” tại Vinglish. Mỗi cuối tuần mình lại đến quán, để được nói tiếng Anh và thư giãn thưởng thức cà phê. Các chủ đề nói ở đây rất đa dạng, mọi người ai cũng tự nhiên khiến mình cảm thấy việc học tiếng Anh dễ dàng hơn rất nhiều...",
		},
		{
			avatar: avatar2,
			name: "Phạm Văn Linh",
			feedback:
				"Mình vô tình biết đến dịch vụ “Cà Phê Tiếng Anh”. Sau khi trải nghiệm dịch vụ thì mình khẳng định sẽ ghé lại quán nhiều lần nữa. Không chỉ giao tiếp tiếng Anh đơn thuần, các bạn Huấn luyện viên tiếng Anh ở đây cũng giúp mình sửa những lỗi phát âm. Mọi người rất tự nhiên và thoải mái nên cũng làm mình tự tin hơn. Mình sẽ giới thiệu cho bạn bè đến đây để cải thiện tiếng Anh.",
		},
		{
			avatar: avatar3,
			name: "Lê Yến Nhi",
			feedback:
				"Mình đến quán để uống cà phê và vô tình biết đến dịch vụ “Cà Phê Tiếng Anh”. Ngoài sự kỳ vọng, mình đã có một buổi học tiếng Anh vô cùng thú vị. Bạn huấn luyện viên chia sẻ rất nhiều kiến thức bổ ích và cho mình rất nhiều tips để cải thiện tiếng Anh. Về không gian rất riêng tư, ở đây mọi người ai cũng học tập, làm việc làm mình rất có động lực.",
		},
		{
			avatar: avatar4,
			name: "Trần Quang Hiếu",
			feedback:
				"Quán đẹp, đồ uống ngon, nhân viên thân thiện. Quán mở 24/7 thích hợp cho cú đêm đến học bài. Có phòng họp, học nhóm cho nhóm từ 4-10 người. Nên đặt trước khi đến vì quán gần nhiều trường đại học nên phòng được sử dụng khá nhiều. Không đặt trước nhiều khi sẽ không có phòng. Có bảo vệ giữ xe an toàn yên tâm khi vào học bài làm việc. Giá nước hơi cao nhưng ổn so với chất lượng và chỗ ngồi. Không gian quán chill, đẹp tuy nhạc hơi to sẽ hơi ảnh hưởng đến những bạn cần yên tĩnh học bài, làm việc.",
		},
		{
			avatar: avatar5,
			name: "Nguyễn Thuỷ Tiên",
			feedback:
				"Quán rất thích hợp để học tập và làm việc. Nhạc nhẹ nhàng, bàn rất vừa tầm tiêu chuẩn, ghế êm ái, nhân viên nhẹ nhàng và rất nhanh nhẹn. Wifi cực mạnh nhen. Còn về trải nghiệm dịch vụ giao tiếp tiếng anh tuy chưa thử nhưng chắc chắn sẽ thử vào lần tới. Nên đến nha mọi người.",
		},
		{
			avatar: avatar6,
			name: "Huỳnh Ngọc Minh Thảo",
			feedback:
				"Mình có đi ngang qua chỗ này mấy lần, nay mới tò mò quyết định vào thử. Chia sẻ thật lòng cho mọi người có kinh nghiệm trước nha. Ghế ngồi rất êm, ngồi 3-4 tiếng liên tục mà không bị đau lưng. Bàn cà phê rộng, cái này mình nghĩ phù hợp với các bạn làm việc laptop, rất rộng và thoải mái. Ổ điện thì mình để ý bàn nào cũng có 1 cái riêng, rất tiện lợi. Các bạn nhân viên nhiệt tình, mình ngồi chưa được 30s đã có nước trà uống rồi, các bạn có thấy nóng hoặc hết chỗ cắm điện cứ bảo nhân viên, nhân viên sẽ lo cho  bạn từ a-z. Có một điểm trừ ở đây là quán chỉ mở cửa tới 10h thui, mà mình thì muốn cày đêm nên đã đề xuất quán mở 24h, nghe bảo là sắp mở trong tương lai...Tóm lại là không gian mát mẻ, bàn ghế êm, phục vụ nhiệt tình, nhưng vẫn cho 4 sao để quán cải thiện...good!!",
		},
	],
};
