import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CardGrid from "@/components/CardGrid";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import FeaturesAndTestimonials from "@/components/FeaturesAndTestimonials";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function Home() {
	return (
		<div className='flex flex-col min-h-screen max-w-7xl mx-auto '>
			<Navbar />
			<Hero />
			<Main>
				<CardGrid />
				<FeaturesAndTestimonials />
			</Main>
			<Footer />
		</div>
	);
}
