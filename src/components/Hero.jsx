import styles from "./Hero.module.css";

const Hero = () => {
	return (
		<main id="hero" className="w-full h-[700px]">
			<div className={`${styles.heroBg} shrink-0`}>
				<div className="h-full">
					<div className="max-w-7xl px-6 lg:px-0 md:pt-96 pt-72 lg:py-60 m-auto uppercase">
						<p className="text-sky-500 text-lg font-bold tracking-[.25rem]">
							we care about your car
						</p>
						<h1 className="text-5xl my-6 lg:xl text-white font-bold max-w-3xl text-pretty">
							make your car last longer
						</h1>
						<div>
							<button className="bg-sky-500 hover:bg-transparent font-bold tracking-wide border-2 border-sky-500 duration-200 ease-in uppercase text-sm px-5 py-3 rounded-md text-white">
								book an appointment
							</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Hero;
