"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function AboutMe() {
	const { ref } = useSectionInView("About", 0.85);
	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-60 scroll-mt-28 "
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.15 }}
			id="about"
		>
			<SectionHeading>About me</SectionHeading>
			<div>
				<p className="mb-3 p-2">
					Physics Lecturer turned Software Engineer. After my Master’s and three
					years as a Visiting Assistant Professor at LMU, I enrolled in and
					graduated from a coding bootcamp. In both my experimental physics
					research and teaching, I’ve always been passionate about solving
					complex problems, and I’ve grown to love the challenge and beauty in
					building software applications.
				</p>

				<p className="mb-3 p-2">
					Since graduating, I have spent the last year as a Full-Stack
					Engineering Contractor. I am currently working on a tennis coaching
					platform, Valter Pavia Tennis Academy, where I have improved site UX
					and flow, made SEO changes that have resulted in 85% growth in traffic
					from Google searches, and am currently implementing features to
					digitize various of the company’s business functions.
				</p>

				<p className="mb-3 p-2">
					I am most experienced in React, Next.js, JavaScript, TypeScript,
					Tailwind, Python, and MongoDB. I am also familiar with Framer Motion,
					PostgreSQL, Firebase, FastAPI, and Django.
				</p>

				<p className="mb-3 p-2">
					I am currently looking for a full-stack position as a Software
					Engineer.
				</p>
			</div>
		</motion.section>
	);
}
