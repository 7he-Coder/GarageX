import React from "react";
import PropTypes from "prop-types";
import { Blogs } from "../constants";

const BlogItem = ({ blog }) => {
	const { title, description, author, date, month, year, image } = blog;
	return (
		<article className="rounded-lg bg-slate-50 overflow-hidden shadow-lg pb-3">
			<div className="flex flex-col justify-center">
				<div className="relative">
					<img src={image} alt={title} className="h-auto w-full" />
					<div className="absolute top-0 left-0 px-6 py-3 font-bold bg-transparent text-sky-50 backdrop-blur-sm text-xl leading-6 rounded-br-lg">
						{date}
						<br />
						{month}
						<br />
						{year}
					</div>
				</div>
				<div className="p-3 md:p-6">
					<p className="mb-3">
						By
						<a href="#!" className="text-blue-600 hover:text-opacity-90">
							{author}
						</a>
					</p>
					<h4 className="font-medium text-2xl leading-7 mb-4">{title}</h4>
					<p className="opacity-60 mb-8">{description}</p>
					<a
						href="#!"
						className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white py-2 px-5 rounded transition"
					>
						Read More
					</a>
				</div>
			</div>
		</article>
	);
};

BlogItem.propTypes = {
	blog: PropTypes.object.isRequired,
};

const Blog = () => {
	return (
		<section
			id="blog"
			className="relative md:top-[39.7rem] lg:top-0 top-[48.691rem] py-14 md:py-24 text-stone-800 bg-white overflow-hidden"
		>
			<div className="max-w-7xl mx-auto ">
				<div className="grid grid-cols-12 items-center">
					<div className="col-span-12 lg:col-span-5 mb-6 lg:mb-0">
						<div className="px-4">
							<h2 className="font-bold text-[32px] lg:text-[45px] leading-tight mb-3">
								About Automobiles Industry
							</h2>
							<p className="text-lg leading-normal text-justify opacity-80 font-medium mb-12">
								The automobile industry is a dynamic sector driving innovation
								in technology and sustainability. With electric vehicles and
								autonomous driving on the rise, it's reshaping how we think
								about transportation and the environment.
							</p>
							<a
								href="#!"
								className="bg-blue-600 hover:bg-opacity-90 text-white font-bold border border-blue-600 dark:border-blue-600 py-3 px-7 rounded transition"
							>
								All Posts
							</a>
						</div>
					</div>
					<div className="col-span-12 lg:col-span-7 mt-6 lg:mt-0 h-full">
						<div className="grid grid-cols-2">
							{Blogs.map((Blogs, i) => (
								<div className="col-span-2 md:col-span-1 mb-3 px-4" key={i}>
									<BlogItem blog={Blogs} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blog;
