const Counter = () => {
	return (
		<>
			<div className="w-full h-full bg-slate-950">
				<div className="max-w-7xl m-auto py-10 text-sky-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center text-center gap-4">
					<div className="mb-5">
						<h4 className="text-4xl font-bold mb-1">35</h4>
						<p className="uppercase">years of experienced</p>
					</div>
					<div className="mb-5">
						<h4 className="text-4xl font-bold mb-1"> 5,500</h4>
						<p className="uppercase">project completed</p>
					</div>
					<div className="mb-5">
						<h4 className="text-4xl font-bold mb-1">6,412</h4>
						<p className="uppercase">happy customers</p>
					</div>
					<div className="mb-5">
						<h4 className="text-4xl font-bold mb-1">25</h4>
						<p className="uppercase">award winning</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Counter;
