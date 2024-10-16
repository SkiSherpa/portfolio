import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

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
		<html lang="en" className="scroll-smooth">
			<body
				className={`${inter.className} bg-slate-50 text-gray-900 relative h-[5000px] pt-28 sm:pt-36`}
			>
				<div
					className="bg-slate-300 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[32.25rem] rounded-full blur-[10rem] md:w-[68.75rem]
				"
				></div>
				<div
					className="bg-stone-400 absolute top-[-1rem] -z-10 left-[-35rem] w-[50rem] rounded-full blur-[10rem] md:w-[68.75rem] md:left-[33rem] lg:left-[-28rem]
				"
				></div>
				<Header />
				{children}
			</body>
		</html>
	);
}
