"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
	return (
		<section className="mb-28 max-w-[50rem]">
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
				className="mb-10 mt-4 px-4 text-2xl font-small !leading-[1.5] sm:text-4xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<span className="font-bold">Hello, I'm Erick.</span> I'm a{" "}
				<span className="font-bold">full-stack developer</span> with{" "}
				<span className="font-bold">3 years</span> of experience. I enjoy
				building <span className="italic">sites & apps</span>. My focus is{" "}
				<span className="underline">React (Next.js)</span>.
			</motion.h1>
			<div className="flex flex-col sm:flex-grow items-center justify-center gap-2 px-4 text-lg font-medium">
				<Link
					href="#contact"
					className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full"
				>
					Contact me here <BsArrowRight />{" "}
				</Link>
				<a className="bg-white px-7 py-3 flex items-center gap-2 rounded-full">
					Download CV <HiDownload />{" "}
				</a>
				<a>
					<BsLinkedin className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full" />
				</a>
				<a>
					<FaGithubSquare className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full" />
				</a>
			</div>
		</section>
	);
}