import { carServices } from "../constants";

const CTA = () => {
	return (
		<div className="w-full">
			<div className="intro-wrapper">
				<div className="lg:h-[7.125rem] w-80 lg:w-96 xl:w-1/2 z-[-1] flex absolute left-0 bg-sky-800"></div>
				<div className="lg:block">
					<div className="max-w-7xl m-auto lg:flex px-6 lg:pl-0">
						<div className="py-7 px-6 md:px-8 lg:px-0 flex items-center justify-center md:justify-start bg-sky-800">
							<div>
								{carServices.map((item, index) => (
									<div className="mr-4" key={index}>
										<img
											className="invert"
											src={`${item.iconCTA}`}
											width={50}
											alt=""
										/>
									</div>
								))}
							</div>
							<p className="text-white text-lg lg:text-xl lg:pr-60 md:pr-4 font-medium text-balance">
								Are you ready?{" "}
								<span className="text-slate-300 md:ml-4">
									Let's repair it now!
								</span>
							</p>
						</div>

						<div className="py-[2.2rem] lg:py-[2.7rem] pl-8 md:pl-10 lg:px-16 bg-slate-200 hover:bg-sky-500 hover:text-white border border-t-0 lg:border-l-8 lg:border-0 border-sky-600 duration-200 ease-in capitalize cursor-pointer">
							<a href="#" className="text-lg">
								book an appointment
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CTA;
