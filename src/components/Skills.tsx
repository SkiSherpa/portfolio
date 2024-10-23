"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
};

export default function Skills() {
	const { ref } = useSectionInView("Skills", 0.5);
	return (
		<section ref={ref} id="skills" className="max-w-[42rem] text-center mb-8">
			<SectionHeading>My skills</SectionHeading>
			<ul className="flex flex-wrap mt-4 gap-2 text-gray-900 sm:mt-auto justify-center">
				{skillsData.map((skill, index) => (
					<motion.li
						className="border-2 px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full dark:text-white/70"
						key={index}
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate"
						viewport={{
							once: true,
						}}
						custom={index}
					>
						{skill}
					</motion.li>
				))}
			</ul>
		</section>
	);
}
