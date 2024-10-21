"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { SiGitlab } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
	const { ref, inView } = useInView({
		threshold: 0.25,
	});
	const { setActiveSection } = useActiveSectionContext();

	useEffect(() => {
		if (inView) {
			setActiveSection("Home");
		}
	}, [inView, setActiveSection]);
	return (
		<section
			ref={ref}
			id="home"
			className="mb-8 max-w-[50rem] scroll-mt-[100rem]"
		>
			<div className="flex items-center justify-center">
				<motion.div
					initial={{ opacity: 0, scale: 0 }} // initial conditions, completely transparent, size set to zero
					animate={{ opacity: 1, scale: 1 }} // end conditions, full opacity, full size
					transition={{ type: "tween", duration: 0.2 }} // tween make gradual transition for opacity and scale
				>
					<Image
						src="/ErickInCarmel.png"
						alt="Erick profile photo"
						width="192"
						height="192"
						quality="95"
						className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
					/>
				</motion.div>
			</div>
			<motion.h1
				className="mb-4 mt-4 px-4 text-2xl font-small !leading-[1.5] sm:text-4xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<span className="font-bold">Hello, I'm Erick Watanabe.</span> I'm a{" "}
				<span className="font-bold">full-stack developer</span> with{" "}
				<span className="font-bold">3 years</span> of experience. I enjoy
				building <span className="italic">sites & apps</span>. My focus is{" "}
				<span className="underline">React</span> and{" "}
				<span className="underline">Next.js</span>.
			</motion.h1>
			<motion.div
				className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }} // have the buttons come in 0.1 sec after intro. it looks cool
			>
				<Link
					href="#contact"
					className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full border-2 focus:scale-110 hover:scale-110 hover:bg-sky-600 active:scale-105 transition"
				>
					Contact me here
					<BsArrowRight className="opacticy-70 group:hover:translate-x-1 transition" />
				</Link>
				<a
					className="bg-white px-7 py-3 flex items-center gap-2 rounded-full border-2 border-zinc-800 focus:scale-110 hover:scale-110 hover:border-sky-600 hover:text-sky-600 active:scale-105 transition cursor-pointer"
					href="/ErickWatanabeResume.pdf"
					download={true}
				>
					Download CV <HiDownload />
				</a>
				<a
					href="https://www.linkedin.com/in/erick-watanabe/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<BsLinkedin className="text-gray-700 rounded-full text-[2rem] focus:scale-110 hover:scale-110 hover:bg-sky-600 active:scale-110 hover:border hover:border-sky-600 transition cursor-pointer" />
				</a>
				<a
					href="https://github.com/SkiSherpa"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithubSquare className="bg-white text-gray-700 rounded-md text-[2rem] focus:scale-110 hover:scale-110 hover:bg-sky-600 hover:border hover:border-sky-600 active:scale-110 transition cursor-pointer" />
				</a>
				<a
					href="https://gitlab.com/SkiSherpa"
					target="_blank"
					rel="noopener noreferrer"
				>
					<SiGitlab className="bg-white text-gray-700 rounded-md text-[2rem] focus:scale-110 hover:scale-110 hover:bg-sky-600 active:scale-110 transition cursor-pointer" />
				</a>
			</motion.div>
		</section>
	);
}
