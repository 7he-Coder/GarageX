import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { projectsPortfolio } from "../constants";

const pagination = [
	{
		isActive: true,
		href: "#!",
		value: "1",
	},
	{
		isActive: false,
		href: "#!",
		value: "2",
	},
	{
		isActive: false,
		href: "#!",
		value: "3",
	},
	{
		isActive: false,
		href: "#!",
		value: "4",
	},
	{
		isActive: false,
		href: "#!",
		value: "5",
	},
	{
		isActive: false,
		href: "#!",
		value: "...",
	},
	{
		isActive: false,
		href: "#!",
		value: "11",
	},
];

const PortfolioItem = ({ item }) => (
	<div className="relative">
		<img className="w-full rounded-md" src={item.img} alt={item.title} />
		<div className="absolute backdrop-blur-md md:p-2 bottom-3 left-1/2 -translate-x-1/2 text-center">
			<h4 className="text-2xl text-white font-medium mb-2">{item.title}</h4>
			<h5 className="font-medium text-[22px] text-blue-600 my-3">
				{item.price}
			</h5>
			<a
				href="#!"
				className="border border-blue-600 px-7 py-3 rounded text-blue-600 hover:bg-blue-600 hover:text-white duration-300 mb-3 uppercase text-sm inline-flex"
			>
				Add To Cart
			</a>
			<p className="opacity-80 text-white">{item.format}</p>
		</div>
	</div>
);

PortfolioItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Pagination = () => (
	<nav>
		<ul className="flex flex-wrap gap-3 justify-center mt-12">
			<li>
				<a
					className="bg-blue-600 text-white hover:bg-opacity-90 w-12 h-12 flex justify-center items-center rounded text-lg cursor-pointer"
					href="#!"
				>
					<FontAwesomeIcon icon={faAngleLeft} />
				</a>
			</li>

			{pagination.map((page, j) => (
				<li
					className={`border border-gray-300 dark:border-gray-800 hover:bg-blue-600 hover:text-white w-12 h-12 flex justify-center items-center rounded text-lg cursor-pointer ${
						page.isActive && "bg-blue-600 text-white hover:bg-opacity-90"
					}`}
					key={j}
				>
					<a className="m-0" href={page.href}>
						{page.value}
					</a>
				</li>
			))}

			<li>
				<a
					className="bg-blue-600 text-white hover:bg-opacity-90 w-12 h-12 flex justify-center items-center rounded text-lg cursor-pointer"
					href="#!"
				>
					<FontAwesomeIcon icon={faAngleRight} />
				</a>
			</li>
		</ul>
	</nav>
);

const Projects = () => {
	return (
		<section
			id="project"
			className="relative md:top-[39.7rem] lg:top-0 top-[48.691rem] py-14 md:py-24 text-slate-950 "
		>
			<div className="max-w-7xl px-4 mx-auto">
				<div className="flex flex-col">
					<h2 className="text-slate-950 text-3xl font-bold tracking-wide capitalize lg:text-center">
						Quis enim enim, massa nunc etiam sem euest.
					</h2>
					<p className="max-w-2xl m-auto lg:text-center">
						Vitae bibendum egestas magna sit elit non. Netus volutpat dignissim
						pharetra felis. Orci commodo mauris adipiscing semper amet.
					</p>
				</div>
				<div className="grid grid-cols-6 gap-6 mt-12">
					{projectsPortfolio.map((item, i) => (
						<div className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
							<PortfolioItem item={item} />
						</div>
					))}

					<div className="col-span-6">
						<Pagination />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
