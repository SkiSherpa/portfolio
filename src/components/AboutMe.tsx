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
			<p className="mb-3 p-2">
				A <span className="font-medium">Physics Professor</span> turned{" "}
				<span className="font-medium">Software Engineer</span>. After 12 years
				of teaching I wanted a change. I enrolled in a coding bootcamp and
				learned <span className="font-medium">full-stack web development</span>.{" "}
				I <span className="underline">love</span> falling into the the{" "}
				<span className="font-medium">flow</span> of coding and{" "}
				<span className="italic">revel</span> in{" "}
				<span className="italic">solving problems</span> that come with creating
				applications. My core stack is{" "}
				<span className="font-medium">
					React, Next.js, JavaScript, TypeScript, Tailwind, Python 3
				</span>
				, and <span className="font-medium">MongoDB</span>. I am also familiar
				with Framer Motion, PostgreSQL, Firebase, FastAPI, and Django. I am
				always looking to learn new technologies. I am currently looking for a{" "}
				<span className="font-medium">full-stack position</span> as a software
				Engineer.
			</p>
		</motion.section>
	);
}
