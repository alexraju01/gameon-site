import Link from "next/link";

const NotFoundPage = () => {
	return (
		<section className='min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white px-6'>
			<div className='max-w-xl w-full text-center'>
				{/* Visual Anchor */}
				<h1 className='text-8xl md:text-9xl font-black italic tracking-tighter opacity-20 mb-4'>
					404
				</h1>

				{/* Simplified Text */}
				<h2 className='text-3xl md:text-5xl font-black uppercase tracking-tight mb-6'>
					Page Not Found
				</h2>

				<p className='text-gray-400 text-lg mb-10 leading-relaxed'>
					The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back
					into the game.
				</p>

				{/* Clear Redirect Actions */}
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
					<Link
						href='/'
						className='flex items-center justify-center px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-all'>
						Go Home
					</Link>

					<Link
						href='/#products'
						className='flex items-center justify-center px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:border-white transition-all'>
						Browse Gear
					</Link>
				</div>

				{/* Subtle Help Link */}
				<p className='mt-12 text-sm text-gray-500'>
					Still lost?{" "}
					<Link
						href='/contact'
						className='text-white underline underline-offset-4 decoration-white/30 hover:decoration-white'>
						Contact Support
					</Link>
				</p>
			</div>
		</section>
	);
};

export default NotFoundPage;
