import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import ThemeSwitchContextProvider from "@/context/ThemeSwitchContext";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Erick Watanabe | Portfolio",
	description:
		"Erick Watanabe is a full-stack developer with two years of experience",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="!scroll-smooth">
			<body
				className={`${inter.className} bg-stone-50 text-gray-900 relative pt-28 sm:pt-36 dark:bg-zinc-800 dark:text-zinc-200`}
			>
				<div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
				<div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
				<ThemeSwitchContextProvider>
					<ActiveSectionContextProvider>
						<Header />
						<ThemeSwitch />
						{children}
						<Toaster position="top-right" />
						<Footer />
					</ActiveSectionContextProvider>
				</ThemeSwitchContextProvider>
			</body>
		</html>
	);
}
