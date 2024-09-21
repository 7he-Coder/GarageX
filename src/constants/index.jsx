export const aboutText =
	"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.";

export const ourMission =
	"At our car repair center, our mission is to deliver exceptional service with integrity and expertise. We are committed to ensuring your vehicle is repaired to the highest standards, prioritizing your safety and satisfaction. ";

export const ourVision =
	"Our vision is to be the leading car repair center renowned for innovation, excellence, and customer satisfaction. We aim to set the standard in automotive care by continuously embracing cutting-edge technology and best practices.";

export const ourValue =
	"At our car repair center, our values are rooted in trust, quality, and transparency. We believe in delivering honest assessments and dependable repairs, ensuring that every service is performed with the highest level of craftsmanship.";

export const navItems = [
	{ label: "SERVICES", href: "#service" },
	{ label: "ABOUT", href: "#about" },
	{ label: "BLOG", href: "#blog" },
	{ label: "PRICING", href: "#pricing" },
	{ label: "PROJECT", href: "#project" },
	{ label: "CONTACT", href: "#contact" },
];

import service1 from "../assets/serviceImgs/s1.png";
import service2 from "../assets/serviceImgs/s2.png";
import service3 from "../assets/serviceImgs/s3.png";
import service4 from "../assets/serviceImgs/s4.png";
import service5 from "../assets/serviceImgs/s5.png";
import service6 from "../assets/serviceImgs/s6.png";

export const carServices = [
	{
		icon: service1,
		text: "Fuel Filter",
		description:
			"We ensure that your car runs smoothly by replacing worn-out parts and fluids, helping to prevent costly repairs down the road",
		button: "READ MORE",
	},
	{
		icon: service2,
		text: "Car Batteries",
		description:
			"Car batteries provide the essential power needed to start your engine and support electrical systems.",
		button: "READ MORE",
	},
	{
		icon: service3,
		text: "Tow Truck",
		description:
			"A tow truck service provides prompt assistance by transporting disabled or stranded vehicles to repair shops or safe locations",
		button: "READ MORE",
	},
	{
		icon: service4,
		text: "Tyer Change",
		description:
			"A tire change service quickly replaces worn or damaged tires to ensure your vehicle's safety and optimal performance.",
		button: "READ MORE",
	},
	{
		icon: service5,
		text: "Engine Repair",
		description:
			"Engine repair service addresses mechanical issues to restore your vehicle's performance and reliability.",
		button: "READ MORE",
	},
	{
		icon: service6,
		text: "Car Maintenance",
		description:
			"Engine repair service addresses mechanical issues to restore your vehicle's performance and reliability.",
		button: "READ MORE",
	},
	{
		iconCTA: service6,
	},
];

export const testimonialList = [
	{
		author: {
			fullName: "Smriti Gautam",
			picture: "https://cdn.easyfrontend.com/pictures/users/user2.jpg",
			designation: "Founder / CEO",
		},
		rating: 3.5,
		description:
			"The car engine service was excellent, with knowledgeable technicians who communicated clearly about the repairs needed. The turnaround time was quick, and I appreciate the transparency in pricing.",
	},
	{
		author: {
			fullName: "Raima Sen",
			picture: "https://cdn.easyfrontend.com/pictures/users/user3.jpg",
			designation: "Business Head",
		},
		rating: 3.8,
		description:
			"The car battery service was quick and efficient, with the technicians providing clear explanations about my options. I appreciated their honesty and the hassle-free installation process!",
	},
	{
		author: {
			fullName: "Abhay Gautam",
			picture: "https://cdn.easyfrontend.com/pictures/users/user27.jpg",
			designation: "UI Design",
		},
		rating: 4.5,
		description:
			"The car wash service was thorough and left my vehicle looking spotless. The staff was friendly and efficient, making the whole experience enjoyable.",
	},
];

import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";

export const Blogs = [
	{
		title: "Revving Up: The Future of the Automotive Industry",
		description:
			"The automotive industry is at a transformative crossroads, embracing electric and autonomous vehicles as the future of mobility.",
		author: " Abraham Leo",
		date: "26",
		month: "Oct",
		year: "2016",
		image: blog1,
	},
	{
		title: "Driving Change: The Evolution of the Automotive Industry",
		description:
			"This industry is rapidly transforming with advancements in electric vehicles and smart technologies, shaping the future of transportation.",
		author: " Mahws Georgia",
		date: "26",
		month: "Oct",
		year: "2016",
		image: blog2,
	},
];

export const pricingOptions = {
	monthlyPricings: [
		{
			planTitle: "Basic",
			price: "$20",
			timeline: "/month",
			description:
				"Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores.",
			features: [
				{ isActive: true, label: "Build Links" },
				{ isActive: true, label: "Over 66 complex" },
				{ isActive: true, label: "24/7 Contact support" },
				{ isActive: true, label: "Build Tools easily" },
				{ isActive: true, label: " 6TB storage" },
			],
			isActive: false,
		},
		{
			planTitle: "Standard",
			price: "$199",
			timeline: "/month",
			description:
				"It’s easier to reach your savings goals when you have the right savings account.",
			features: [
				{ isActive: true, label: "Build Links" },
				{ isActive: true, label: "Over 66 complex" },
				{ isActive: true, label: "24/7 Contact support" },
				{ isActive: true, label: "Build Tools easily" },
				{ isActive: true, label: " 6TB storage" },
			],
			isActive: false,
		},
		{
			planTitle: "Premium",
			price: "$399",
			timeline: "/month",
			description:
				"Urna molestie at eleme ntum eu facilisis sed odio Male suada fames circa hors.",
			features: [
				{ isActive: true, label: "Build Links" },
				{ isActive: true, label: "Over 66 complex" },
				{ isActive: true, label: "24/7 Contact support" },
				{ isActive: true, label: "Build Tools easily" },
				{ isActive: true, label: " 6TB storage" },
			],
			isActive: true,
		},
		{
			planTitle: "Lifetime",
			price: "$1999",
			timeline: "/month",
			description:
				"It’s easier to reach your savings goals when you have the right savings account.",
			features: [
				{ isActive: true, label: "Build Links" },
				{ isActive: true, label: "Over 66 complex" },
				{ isActive: true, label: "24/7 Contact support" },
				{ isActive: true, label: "Build Tools easily" },
				{ isActive: true, label: " 6TB storage" },
			],
			isActive: false,
		},
	],
	yearlyPricings: [
		{
			planTitle: "Basic",
			price: "$99",
			timeline: "/year",
			description:
				"It’s easier to reach your savings goals when you have the right savings account.",
			features: [
				{ isActive: true, label: "Build Links" },
				{ isActive: true, label: "Over 66 complex" },
				{ isActive: true, label: "24/7 Contact support" },
				{ isActive: true, label: "Build Tools easily" },
			],
			isActive: false,
		},
		{
			planTitle: "Standard",
			price: "$199",
			timeline: "/year",
			description:
				"It’s easier to reach your savings goals when you have the right savings account.",
			features: [
				{ isActive: true, label: "Build Links" },
				{ isActive: true, label: "Over 66 complex" },
				{ isActive: true, label: "24/7 Contact support" },
				{ isActive: true, label: "Build Tools easily" },
			],
			isActive: false,
		},
		{
			planTitle: "Premium",
			price: "$299",
			timeline: "/year",
			description:
				"It’s easier to reach your savings goals when you have the right savings account.",
			features: [
				{ isActive: true, label: "Build Links" },
				{ isActive: true, label: "Over 66 complex" },
				{ isActive: true, label: "24/7 Contact support" },
				{ isActive: true, label: "Build Tools easily" },
			],
			isActive: true,
		},
		{
			planTitle: "Lifetime",
			price: "$399",
			timeline: "/year",
			description:
				"It’s easier to reach your savings goals when you have the right savings account.",
			features: [
				{ isActive: true, label: "Build Links" },
				{ isActive: true, label: "Over 66 complex" },
				{ isActive: true, label: "24/7 Contact support" },
				{ isActive: true, label: "Build Tools easily" },
			],
			isActive: false,
		},
	],
};

import project1 from "../assets/projectImages/project-1.jpg";

export const projectsPortfolio = [
	{
		img: project1,
		title: "How to Improve Your Personal Skills",
		price: "$20",
		format: "PDF Format",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/courses/courses_3_2.png",
		title: "Not Your Regular Home Decoration?",
		price: "$09",
		format: "PDF Format",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/courses/courses17.jpg",
		title: "Become a master of model with Coursera",
		price: "$35",
		format: "Video Format",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/courses/courses_3_3.png",
		title: "Learn arcitect without having a degree!",
		price: "$29",
		format: "Udemy Course",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/courses/courses18.jpg",
		title: "The Complete Digital Marketing Guide Course",
		price: "$21",
		format: "PDF Format",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/courses/courses19.jpg",
		title: "A to Z of Branding with Filinzo Academy",
		price: "$20",
		format: "Hard Book",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/courses/courses21.jpg",
		title: "zomart is with Web Development",
		price: "$47",
		format: "Live Class",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/courses/courses20.jpg",
		title: "How to Improve Your Personal Skills",
		price: "$20",
		format: "PDF Format",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/courses/courses_3_1.png",
		title: "Digital Marketing and Web Development first time!",
		price: "$33",
		format: "PDF Format",
	},
];
