import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { pricingOptions } from "../constants";

const PricingItem = ({ pricing }) => {
	return (
		<div
			className={
				pricing.isActive
					? "bg-slate-950 text-white rounded-2xl shadow p-4 lg:p-12 h-full"
					: "bg-blue-50 text-zinc-900 dark:bg-slate-50 dark:text-slate-950 rounded-2xl shadow p-4 lg:p-12 h-full"
			}
		>
			<h3 className="text-3xl font-bold mb-2">{pricing.planTitle}</h3>
			<div className="mb-4">
				<span className="text-3xl font-bold">{pricing.price}</span>
				<span className="ml-2 opacity-50">{pricing.timeline}</span>
			</div>
			<p className="opacity-50 mb-6">{pricing.description}</p>
			<ul className="flex flex-col">
				{pricing.features.map((item, i) => (
					<li className="mb-4" key={i}>
						<FontAwesomeIcon
							icon={faCheck}
							className={`${item.isActive && "text-blue-600"} mr-2`}
						/>
						<span className="opacity-50">{item.label}</span>
					</li>
				))}
			</ul>

			<button className="border border-blue-600 text-blue-600 rounded-md px-7 py-3 w-full mt-6 hover:bg-blue-600 hover:text-white duration-300">
				Choose plan
			</button>
		</div>
	);
};

PricingItem.propTypes = {
	pricing: PropTypes.object.isRequired,
};

const Pricing = () => {
	const [activeTimeline, setActiveTimeline] = useState("monthly");

	let content = null;
	if (activeTimeline === "monthly") {
		content = pricingOptions.monthlyPricings.map((pricing, i) => {
			return (
				<div className="col-span-12 md:col-span-6 xl:col-span-3 mt-6" key={i}>
					<PricingItem pricing={pricing} />
				</div>
			);
		});
	}
	if (activeTimeline === "yearly") {
		content = pricingOptions.yearlyPricings.map((pricing, i) => (
			<div className="col-span-12 md:col-span-6 xl:col-span-3 mt-6" key={i}>
				<PricingItem pricing={pricing} />
			</div>
		));
	}

	return (
		<section
			id="pricing"
			className="relative md:top-[39.7rem] lg:top-0 top-[48.691rem] py-14 md:py-24 text-zinc-900 "
		>
			<div className="max-w-7xl mx-auto px-4">
				<div className="grid grid-cols-12 mb-12">
					<div className="col-span-12 lg:col-span-6 lg:col-start-4 xl:px-32 lg:text-center">
						<h3 className="text-md text-sky-500 tracking-tight font-semibold uppercase">
							Flexible Plan for you
						</h3>
						<h2 className="text-slate-950 text-3xl font-bold tracking-wide capitalize">
							Select the plan that's right for you.
						</h2>
					</div>
				</div>
				<div className="lg:text-center mb-6">
					<button
						className={`px-6 py-3 hover:bg-opacity-90 rounded duration-300  ${
							activeTimeline === "monthly" && "bg-sky-500 text-white"
						}`}
						onClick={() => setActiveTimeline("monthly")}
					>
						MONTHLY
					</button>
					<button
						className={`px-6 py-3 hover:bg-opacity-90 rounded duration-300  ${
							activeTimeline === "yearly" && "bg-blue-600 text-white"
						}`}
						onClick={() => setActiveTimeline("yearly")}
					>
						YEARLY
					</button>
				</div>
				<div className="grid grid-cols-12 gap-4 md:gap-6">{content}</div>
			</div>
		</section>
	);
};
export default Pricing;
