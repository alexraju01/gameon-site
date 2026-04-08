import Image from "next/image";

const products = [
	{ id: 1, title: "Next-Gen Consoles", category: "Hardware", src: "/pc1.jpg" },
	{ id: 2, title: "Vintage Classics", category: "Retro", src: "/pc2.jpg" },
	{ id: 3, title: "Premium Peripherals", category: "Accessories", src: "/pc3.jpg" }, // Add more if you have them
];

const CardGrid = () => {
	return (
		<section id='products' className='py-20'>
			{/* Section Header */}
			<div className='flex items-end justify-between mb-12 border-b border-white/10 pb-6'>
				<div>
					<h2 className='text-3xl font-black italic uppercase tracking-tighter'>
						Featured <span className='text-gray-500'>Gear</span>
					</h2>
					<p className='text-gray-500 text-xs uppercase tracking-widest mt-2'>
						Curated selection of tech & gaming
					</p>
				</div>
				<div className='hidden sm:block text-right'></div>
			</div>

			{/* The Grid */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{products.map((item) => (
					<div
						key={item.id}
						className='group relative overflow-hidden bg-[#111] border border-white/5'>
						{/* Image Container */}
						<div className='relative aspect-[4/5] overflow-hidden'>
							<Image
								src={item.src}
								alt={item.title}
								fill
								className='object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1'
							/>
							{/* Dark Overlay */}
							<div className='absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80' />
						</div>

						{/* Content Overlay */}
						<div className='absolute bottom-0 left-0 w-full p-6'>
							<span className='text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase mb-2 block'>
								{item.category}
							</span>
							<h3 className='text-xl font-bold uppercase tracking-tight text-white group-hover:translate-x-2 transition-transform duration-300'>
								{item.title}
							</h3>

							{/* Decorative Line */}
							<div className='w-0 group-hover:w-full h-[1px] bg-white/30 mt-4 transition-all duration-500' />

							<button className='mt-4 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								View Details +
							</button>
						</div>

						{/* Corner Accent */}
						<div className='absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 group-hover:border-white/40 transition-colors' />
					</div>
				))}
			</div>
		</section>
	);
};

export default CardGrid;
