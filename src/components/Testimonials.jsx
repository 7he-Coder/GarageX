import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";
import { testimonialList } from "../constants";

const Rating = ({ rating, showLabel, className, ...rest }) => (
	<p className={classNames("mb-6", className)} {...rest}>
		<span>
			{[...Array(5)].map((_, i) => {
				const index = i + 1;
				let content = "";
				if (index <= Math.floor(rating))
					content = (
						<FontAwesomeIcon icon={faStar} className="text-yellow-500" />
					);
				else if (rating > i && rating < index + 1)
					content = (
						<FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />
					);
				else if (index > rating)
					content = (
						<FontAwesomeIcon
							icon={faStar}
							className="text-yellow-200 dark:text-opacity-20"
						/>
					);

				return <Fragment key={i}>{content}</Fragment>;
			})}
		</span>
		{showLabel && <span>{rating.toFixed(1)}</span>}
	</p>
);

Rating.propTypes = {
	rating: PropTypes.number.isRequired,
	showLabel: PropTypes.bool,
	className: PropTypes.string,
};

const TestimonialItem = ({ testimonial }) => (
	<div className="shadow-xl rounded-2xl transition duration-300 h-full p-6">
		<div className="mt-4">
			<Rating rating={testimonial.rating} showLabel={false} />
			<p className="opacity-50 mb-6">{testimonial.description}</p>
			<div className="flex items-center">
				<div className="mr-2">
					<img
						src={testimonial.author.picture}
						alt={testimonial.author.fullName}
						className="max-w-full h-auto rounded-full border"
						width="47"
					/>
				</div>
				<div>
					<h4 className="text-xl font-medium">{testimonial.author.fullName}</h4>
					<p className="text-sm">
						<i>{testimonial.author.designation}</i>
					</p>
				</div>
			</div>
		</div>
	</div>
);

TestimonialItem.propTypes = {
	testimonial: PropTypes.object.isRequired,
};

const Testimonials = () => {
	return (
		<section className=" relative md:top-[39.7rem] lg:top-0 top-[48.691rem] py-14 md:py-24 text-zinc-900 bg-slate-100">
			<div className="max-w-7xl mx-auto px-4 lg:px-0">
				<div className="flex justify-center md:mb-6">
					<div className="sm:max-w-lg text-center">
						<h3 className="text-md text-sky-500 tracking-tight font-semibold uppercase">
							Testimoniales
						</h3>
						<h2 className="text-slate-950 text-3xl font-bold tracking-wide capitalize">
							Happy Clients & Feedbacks
						</h2>
					</div>
				</div>
				<div className="grid grid-cols-6 gap-6 pt-8">
					{testimonialList.map((testimonial, i) => (
						<div className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
							<TestimonialItem testimonial={testimonial} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
