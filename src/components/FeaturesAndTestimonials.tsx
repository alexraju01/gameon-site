const FeaturesAndTestimonials = () => {
	const features = [
		{
			title: "20+ Years Experience",
			desc: "Two decades of industry mastery and pure gaming passion.",
		},
		{
			title: "Fair & Transparent",
			desc: "Competitive market rates for buying, selling, and trading gear.",
		},
		{ title: "Expert PC Builders", desc: "High-performance rigs engineered for absolute victory." },
	];

	const reviews = [
		{
			name: "L Green",
			tag: "Local Customer",
			text: "Game Shop is my go-to for all things gaming! Their selection is fantastic, and the staff are incredibly knowledgeable and friendly. I always find what I'm looking for, and often discover new gems. Highly recommended!",
		},
		{
			name: "G Patrick",
			tag: "Ebay Buyer",
			text: "I recently bought a custom-built PC from Game Shop, and I couldn't be happier. The performance is amazing, and the price was unbeatable. Their expertise in PC building is truly impressive. Fantastic service from start to finish!",
		},
		{
			name: "Emma G",
			tag: "Local Customer",
			text: "They take in any kind of geek memboria not just games. Staff are very friendly and offer way better prices than cex. I take the bus down to here as it is worth. Got 65 quid for only a handful of games. Trade your stuff in here. Good for a bit of extra cash.",
		},
		{
			name: "Jon P",
			tag: "Local Customer",
			text: "Really enjoyed visiting this shop again after nearly 7 years. Still has great customer service, amazing product range and super prices. Well done fellas. Will be back again soon and already recommending that friends make the trip over to check the shop out.",
		},
	];

	return (
		<section className='py-24 bg-[#0a0a0a] text-white space-y-32'>
			{/* Features Section: Modern Grid */}
			<div>
				<h2 className='text-4xl md:text-6xl font-black italic uppercase tracking-tighter'>
					Why Choose{" "}
					<span className='text-transparent pr-2 bg-clip-text bg-gradient-to-b from-white to-white/20'>
						Game On?
					</span>
				</h2>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10'>
				{features.map((f, i) => (
					<div
						key={i}
						className='p-10 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.02] transition-colors group'>
						<span className='text-[10px] font-mono text-gray-500 mb-4 block'>0{i + 1}</span>
						<h3 className='text-xl font-black italic uppercase tracking-tighter mb-4 group-hover:text-gray-300'>
							{f.title}
						</h3>
						<p className='text-gray-400 text-sm leading-relaxed uppercase tracking-wider'>
							{f.desc}
						</p>
					</div>
				))}
			</div>

			{/* Testimonials Section: Bento Style */}
			{/* Testimonials Section: Grid Style for Equal Height */}
			<div className='max-w-7xl mx-auto px-6'>
				<div className='mb-12'>
					<h2 className='text-4xl font-black italic uppercase tracking-tighter'>
						Verified <span className='text-gray-500'>Intel</span>
					</h2>
					<p className='text-gray-500 text-xs uppercase tracking-[0.3em] mt-2'>
						What our community says
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{reviews.map((r, i) => (
						<div
							key={i}
							className='p-8 bg-[#111] border border-white/5 relative group hover:border-white/20 transition-all flex flex-col justify-between min-h-[250px]'>
							{/* Quote Icon Accent */}
							<div className='absolute top-4 right-4 text-white/5 font-serif text-6xl group-hover:text-white'>
								&quot;
							</div>

							<p className='text-gray-300 italic mb-6 leading-relaxed'>{r.text}</p>

							<div className='flex items-center justify-between border-t border-white/10 pt-4'>
								<div>
									<p className='text-sm font-bold uppercase tracking-widest'>{r.name}</p>
									<p className='text-[10px] text-gray-500 uppercase tracking-tighter font-mono'>
										{r.tag}
									</p>
								</div>
								<div className='h-2 w-2 bg-white/20 rounded-full group-hover:bg-white transition-colors' />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturesAndTestimonials;
