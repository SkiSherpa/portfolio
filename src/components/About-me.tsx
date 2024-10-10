"use client";

import React from "react";
import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";

export default function AboutMe() {
	// const { ref } = useSectionInView("About");
	return (
		<motion.section
			// ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.15 }}
			id="about"
		>
			<h2 className="text-2xl font-bold sm:text-3xl capitalize">About me</h2>
			<p className="mb-3">
				A <span className="font-medium">Physics Professor</span> turned{" "}
				<span className="font-medium">Software Engineer</span>. After 12 years
				of teaching I wanted a change. I enrolled in a coding bootcamp and
				learned <span className="font-medium">full-stack web development</span>.{" "}
				<span className="italic">My favorite part of programming</span> is the
				flow building applications and the problem-solving aspect. I{" "}
				<span className="underline">love</span> falling into the the{" "}
				<span className="font-medium">flow</span> of coding and revel in solving
				problems that come with creating applications. My core stack is{" "}
				<span className="font-medium">
					React, Next.js, JavaScript, Python 3
				</span>
				, and <span className="font-medium">MongoDB</span>. I am also familiar
				with TypeScript, Tailwind, PostgreSQL, and Firebase. I am always looking
				to learn new technologies. I am currently looking for a{" "}
				<span className="font-medium">full-time position</span> as a software
				Engineer.
			</p>
		</motion.section>
	);
}
