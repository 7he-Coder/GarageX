import contactImage2 from "../assets/contact.jpg";
import styles from "./Contact.module.css";

const Contact = () => {
	return (
		<>
			<section
				id="contact"
				className="w-full py-32 border-t border-sky-50 border-opacity-5 bg-slate-950"
			>
				<div className="grid grid-cols-1 lg:grid-cols-2 ">
					<div className="md:shrink-0">
						<img
							src={contactImage2}
							className={`${styles.surfaceDuo} lg:aspect-[1/1.2] 2xl:aspect-[1/.8] aspect-video object-cover`}
							alt="Contact Image"
						/>
					</div>

					<div className="relative h-full w-full bg-slate-950">
						<div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
							<div className="formContainer p-10 bg-slate-950 lg:bg-inherit lg:border-t border-slate-900">
								<div className="max-w-xl m-auto lg:m-0">
									<div className="mb-10">
										<div>
											<h3 className="text-sm md:text-lg text-sky-500 tracking-tight font-semibold uppercase">
												book appointment
											</h3>
										</div>
										<div>
											<h2 className="mt-2 mb-3 text-slate-100 text-xl md:text-3xl font-bold tracking-wide capitalize">
												feel free to consult about your vehicle
											</h2>
										</div>
									</div>

									<form
										action="backend.php"
										className="flex items-stretch justify-between flex-col"
									>
										<div className="mb-6">
											<select
												className="rounded-md p-4 w-full text-lg capitalize outline-none"
												name="car"
												id="car"
											>
												<option value="services">select services</option>
												<option value="oil">Oil Chnage</option>
												<option value="battery">Battery Replace</option>
												<option value="engin">Engine Repaire</option>
												<option value="towTruck">Tow Truck</option>
											</select>
										</div>
										<div className="grid items-center grid-cols-1 md:grid-rows-2 gap-6 mb-6">
											<div className="block md:flex justify-between">
												<input
													className="rounded-md w-full md:w-[48%] mb-6 md:mb-0 p-4 text-lg capitalize outline-none"
													type="text"
													name="name"
													id="name"
													placeholder="Your Name"
												/>
												<input
													className="rounded-md w-full md:w-[48%] p-4 text-lg capitalize outline-none"
													type="number"
													name="vehicalNum"
													id="vehicleNum"
													placeholder="Vehicle Number"
												/>
											</div>
											<div className="block md:flex justify-between">
												<input
													className="rounded-md w-full md:w-[48%] mb-6 md:mb-0 p-4 text-lg capitalize outline-none"
													type="date"
													name="date"
													id="date"
													placeholder="Date"
												/>
												<input
													className="rounded-md w-full md:w-[48%] p-4 text-lg capitalize outline-none"
													type="time"
													name="time"
													id="time"
													placeholder="Time"
												/>
											</div>
										</div>
										<div className=" mb-6">
											<textarea
												className="rounded-md w-full p-3 text-slate-950 text-lg capitalize outline-none resize-none "
												name="message"
												id="message"
												cols="30"
												rows="6"
												placeholder="message..."
											></textarea>
										</div>
										<div className="rounded-md bg-sky-600 hover:bg-opacity-95 duration-100 ease-in">
											<input
												type="submit"
												value="SEND MESSAGE"
												className="w-full p-4 font-semibold text-slate-50 text-lg capitalize outline-none cursor-pointer"
											/>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
