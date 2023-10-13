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
		label: "Tuyển dụng",
		index: 5,
	},
	{
		label: "Đặt Phòng Họp",
		index: 6,
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

export const menu = {
	title: "Menu",
	content: [
		{
			category: "Muối",
			product: [
				{
					name: "Cà Phê Muối",
					image: saltedCoffee,
					price: "40.000đ",
				},
				{
					name: "Bạc Xỉu Muối",
					image: saltedWhiteCoffee,
					price: "45.000đ",
				},
				{
					name: "Chocolate Muối",
					image: saltedChocolat,
					price: "45.000đ",
				},
				{
					name: "Matcha Kem Muối",
					image: saltedMatcha,
					price: "45.000đ",
				},
			],
		},
		{
			category: "Trứng",
			product: [
				{
					name: "Cà Phê Trứng",
					image: eggCoffee,
					price: "45.000đ",
				},
				{
					name: "Matcha Trứng",
					image: eggMatcha,
					price: "45.000đ",
				},
				{
					name: "Cacao Trứng",
					image: eggChocolat,
					price: "45.000đ",
				},
			],
		},
		{
			category: "Trà Sữa Thái",
			product: [
				{
					name: "Trà Sữa Thái",
					image: thaiMilkTea,
					price: "45.000đ",
				},
				{
					name: "Trà Sũa Thái Trân châu Đường đen",
					image: bobbaThaiMilkTea,
					price: "45.000đ",
				},
				{
					name: "Trà Sũa Thái Đá xay",
					image: iceBlendedThaiMilkTea,
					price: "45.000đ",
				},
				{
					name: "Trà Sũa Hạt Cà phê",
					image: coffeeMilkTea,
					price: "45.000đ",
				},
			],
		},
		{
			category: "Cà phê Việt Nam",
			product: [
				{
					name: "Phim Đen Đá (/Nóng)",
					image: blackCoffee,
					price: "29.000đ",
				},
				{
					name: "Phim Sũa Đá (/Nóng)",
					image: milkCoffee,
					price: "35.000đ",
				},
				{
					name: "Bạc Xỉu Đá",
					image: whiteCoffee,
					price: "39.000đ",
				},
				{
					name: "Cà Phê Dừa",
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
	label: "lộ trình thông thạo tiếng anh",
	highlight: "thông thạo",
};

export const whyVinglish = {
	title: "tại sao nên chọn vinglish",
	content: [
		{
			label: "Lộ Trình Cá Nhân Hóa:",
			text: "Được tư vấn và kiểm tra đầu vào miễn phí, phân tích kỹ lưỡng và đưa ra lộ trình học tập phù hợp với từng cá nhân.",
		},
		{
			label: "100% Giáo Viên Bản Xứ:",
			text: "Đội ngũ giáo viên bản xứ được trang bị các bằng cấp chuyên môn và nhiều năm kinh nghiệm, luôn sẵn sàng hướng dẫn bạn trong việc thông thạo tiếng Anh.",
		},
		{
			label: "Lớp Học Quy Mô Nhỏ:",
			text: "Lớp học quy mô nhỏ sẽ đảm bảo học viên được tương tác và theo sát tận tình trong suốt quá trình học.",
		},
		{
			label: "Lớp Học Hiện Đại:",
			text: "Lớp học được trang bị đầy đủ các trang thiết bị hiện đại, nâng cao trải nghiệm học tập.",
		},
	],
	button: "Xem Thêm",
};

export const whatStudentsSay = {
	title: "Học Viên Của Vinglish Nói Gì?",
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

export const footer = {
	adress: {
		label: "Địa chỉ",
		content:
			"Lầu 1, 60/7-9 Ung Văn Khiêm, Phường 25, Quận Bình Thạnh, TP. Hồ Chí Minh",
	},
	hotline: {
		label: "Điện thoại",
		content: "0902608498",
	},
	introduction: {
		label: "Giới thiệu",
		content: ["Thực đơn", "Tin tức", "Liên hệ"],
	},
	service: {
		label: "Dịch vụ khác",
		content: ["Cà phê 24/7", "Phòng họp tiện nghi", "Tiếng anh giao tiếp"],
	},
};
