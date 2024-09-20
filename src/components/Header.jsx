import { HiOutlineLocationMarker, HiPhoneOutgoing } from "react-icons/hi";
import {
	RiFacebookCircleFill,
	RiTwitterFill,
	RiInstagramFill,
	RiYoutubeFill,
} from "react-icons/ri";

const Header = () => {
	return (
		<>
			<header id="header" className="w-full bg-gray-950 text-neutral-50">
				<div className="max-w-7xl px-6 lg:px-0 py-2 m-auto lg:flex items-center justify-between">
					<div className="lg:text-3xl md:text-2xl text-lg font-bold tracking-tighter ">
						<p>
							GarageX <span className="text-blue-500 font-black">.</span>
						</p>
					</div>

					<div className="lg:flex items-center justify-center">
						<div className="my-3 lg:mr-12 grid grid-cols-2 lg:flex md:items-start items-center justify-center">
							<div className="flex justify-center items-start">
								<div className="mr-4 p-1 md:p-2 border-sky-500 border-2 rounded-full md:block hidden">
									<HiOutlineLocationMarker className="text-sky-500 md:text-md m-1 md:m-0 text-sm" />
								</div>
								<div>
									<p className="text-zinc-400 text-xs">ADDRESS</p>
									<address className="text-sm  md:text-md tracking-tight">
										Govind Nagar, Kanpur, UP, India.
									</address>
								</div>
							</div>
							<div className="flex justify-center items-start ml-6">
								<div className="mr-4 p-1 md:p-2 border-sky-500 border-2 rounded-full md:block hidden">
									<HiPhoneOutgoing className="text-sky-500 md:text-md m-1 md:m-0 text-sm" />
								</div>
								<div>
									<p className="text-zinc-400 text-xs">CALL US</p>
									<a
										href="tel: +91 7379289932"
										className="text-sm  md:text-md tracking-tight"
									>
										+91 7379289932
									</a>
								</div>
							</div>
						</div>

						<div>
							<div className="flex justify-end items-center ">
								<div className="bg-zinc-800 p-1 md:p-[.4rem] mx-1 rounded-full text-lg  cursor-pointer">
									<RiFacebookCircleFill className="text-gray-400 hover:text-gray-300 duration-75 md:text-xl text-sm" />
								</div>
								<div className="bg-zinc-800 p-1 md:p-[.4rem] mx-1 rounded-full text-lg  cursor-pointer">
									<RiInstagramFill className="text-gray-400 hover:text-gray-300 duration-75 md:text-xl text-sm" />
								</div>
								<div className="bg-zinc-800 p-1 md:p-[.4rem] mx-1 rounded-full text-lg  cursor-pointer">
									<RiTwitterFill className="text-gray-400 hover:text-gray-300 duration-75 md:text-xl text-sm" />
								</div>
								<div className="bg-zinc-800 p-1 md:p-[.4rem] ml-1 rounded-full text-lg  cursor-pointer">
									<RiYoutubeFill className="text-gray-400 hover:text-gray-300 duration-75 md:text-xl text-sm" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
