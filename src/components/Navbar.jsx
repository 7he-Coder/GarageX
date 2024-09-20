import { navItems } from "../constants";
import { RiSearchLine, RiMenu3Fill } from "react-icons/ri";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
	return (
		<div className="w-full backdrop-blur-md shadow-sm sticky top-0 left-0 z-20 items-center justify-center">
			<div>
				<AnchorLink href="#header">
					<span className="lg:hidden absolute right-6 border-t-0 rounded-b-md px-3 py-2 bg-sky-500  text-slate-200">
						<RiMenu3Fill className="text-2xl" />
					</span>
				</AnchorLink>
			</div>

			<nav className="hidden max-w-7xl m-auto lg:flex justify-between items-center">
				<ul className="flex flex-shrink-0">
					<AnchorLink href="#header">
						<li className="bg-sky-500 py-4 text-white tracking-tight font-semibold cursor-pointer">
							<span className="p-5" href="hero">
								HOME
							</span>
						</li>
					</AnchorLink>
					{navItems.map((item, index) => (
						<li
							key={index}
							className="hover:bg-sky-500 hover:text-white duration-75 ease-in py-4 text-slate-700 tracking-tight font-semibold cursor-pointer"
						>
							<a className="p-5" href={item.href}>
								{item.label}
							</a>
						</li>
					))}
				</ul>
				<div className="flex place-items-center">
					<input
						type="search"
						className="bg-transparent px-6 py-3 text-lg outline-none text-slate-700"
						name="search"
						id="seach"
						placeholder="search..."
					/>
					<span className="text-xl inline-flex cursor-pointer ml-2 p-[1.1rem] bg-slate-200 text-slate-700">
						<RiSearchLine />
					</span>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
