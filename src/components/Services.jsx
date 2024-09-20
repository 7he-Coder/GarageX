import { carServices } from "../constants";

const Services = () => {
	return (
		<>
			<section id="service" className="lg:py-6 mb-16 md:mb-0">
				<div>
					<div className="lg:py-20 py-20 lg:mt-10 grid place-items-center">
						<div>
							<h3 className="text-md text-sky-500 tracking-tight font-semibold uppercase">
								we offer services
							</h3>
						</div>
						<div>
							<h2 className="text-slate-950 text-3xl font-bold tracking-wide capitalize">
								our best services
							</h2>
						</div>
					</div>
					<div className="serviceCards">
						<div>
							<div className="">
								<div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-10 ">
									{carServices.map((item, index) => (
										<div
											className="last:hidden group hover:bg-slate-100 py-2 duration-150 ease-in cursor-pointer rounded-sm"
											key={index}
										>
											<div className="flex ">
												<div className="mx-4">
													<img
														src={`${item.icon}`}
														className="group-hover:border-sky-500 group-hover:border group-hover:rounded-full group-hover:p-2 duration-150 ease-in"
														width={120}
														alt="service image "
													/>
												</div>
												<div>
													<h3 className="text-xl text-slate-700 tracking-tight font-bold">
														{item.text}
													</h3>
													<p className="my-2 text-sm tracking-tight text-pretty text-slate-600">
														{item.description}
													</p>
													<div className="py-1 border-b group-hover:border-sky-500 group-hover:text-sky-500 max-w-max duration-150 ease-in cursor-pointer">
														<a href="" className="text-sm font-medium">
															{item.button}
														</a>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;
