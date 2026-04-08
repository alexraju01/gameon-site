import { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setShow(true), 0); // runs after current render
		return () => clearTimeout(timer); // cleanup
	}, []);

	return (
		<section className='relative min-h-[80vh] flex items-center justify-center px-6 py-20 overflow-hidden bg-[#0a0a0a]'>
			{/* Background Elements */}
			<div className='absolute inset-0 z-0'>
				<div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]' />
				<div className='absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-white/10 blur-[120px] rounded-full' />
			</div>

			<div
				className={`relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
					show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
				}`}>
				{/* Left Side: Content */}
				<div className='text-left'>
					<div className='inline-block px-3 py-1 mb-6 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm'>
						<p className='text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-300'>
							Trusted Tech Partners
						</p>
					</div>

					<h1 className='text-4xl md:text-7xl font-black italic tracking-tighter leading-tight uppercase'>
						Your Universe of <br />
						<span className='text-transparent bg-clip-text bg-linear-to-r from-white via-gray-400 to-white'>
							Gaming & Tech
						</span>
					</h1>

					<p className='mt-8 text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed font-light'>
						Discover games, consoles, and rare tech. We provide expert guidance for collectors and
						gamers alike.
					</p>

					<div className='mt-10 flex flex-wrap gap-5'>
						<a
							href='https://www.ebay.co.uk/'
							target='_blank'
							className='group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest transition-all hover:bg-gray-200'>
							Explore Store
							<span className='absolute -bottom-1 -right-1 w-full h-full border-b-2 border-r-2 border-white/30 group-hover:-bottom-2 group-hover:-right-2 transition-all'></span>
						</a>

						<a
							href='#products'
							className='px-8 py-4 border border-white/20 hover:border-white text-white font-bold uppercase tracking-widest backdrop-blur-md transition-all'>
							Browse Stock
						</a>
					</div>
				</div>

				{/* Right Side: Large Logo / Visual */}
				<div className='hidden lg:flex justify-center items-center'>
					<div className='relative p-12 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl rotate-3 hover:rotate-0 transition-transform duration-500'>
						<Image
							src='/logo.png'
							alt='Game On Logo'
							width={500}
							height={250}
							className='drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
