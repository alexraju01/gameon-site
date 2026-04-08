import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav className='sticky top-0 z-50 w-full  backdrop-blur-md'>
			<div className='max-w-7xl mx-auto flex justify-between items-center py-4 px-6'>
				{/* Logo Section */}
				<Link href='/' className='flex items-center group'>
					{/* If you have the logo image, use it here, otherwise styled text */}
					{/* <span className='text-xl md:text-2xl font-black italic tracking-tighter uppercase group-hover:text-gray-300 transition-colors'>
						GAME <span className='text-white border-b-2 border-white/20'>ON</span>
					</span> */}
					<div className='relative h-12 w-32'>
						{" "}
						{/* Container to control size */}
						<Image
							src='gameon-site/logo.png'
							alt='Game On Logo'
							fill
							className='object-contain'
							priority // Ensures the logo loads immediately
						/>
					</div>
				</Link>

				{/* Navigation Links */}
				<div className='hidden md:flex items-center gap-8'>
					<Link
						href='/'
						className='text-xs uppercase tracking-[0.2em] font-medium text-gray-400 hover:text-white transition-colors'>
						Home
					</Link>
					<Link
						href='/about'
						className='text-xs uppercase tracking-[0.2em] font-medium text-gray-400 hover:text-white transition-colors'>
						About
					</Link>
					<Link
						href='/contact'
						className='text-xs uppercase tracking-[0.2em] font-medium text-gray-400 hover:text-white transition-colors'>
						Contact
					</Link>
					<Link
						href='/blog'
						className='text-xs uppercase tracking-[0.2em] font-medium text-gray-400 hover:text-white transition-colors'>
						Blog
					</Link>
				</div>

				{/* CTA Button */}
				<div className='flex items-center'>
					<a
						href='https://www.ebay.co.uk/'
						target='_blank'
						className='px-5 py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest border border-white/20 hover:bg-white hover:text-black transition-all duration-300 rounded-sm'>
						Shop Now
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
