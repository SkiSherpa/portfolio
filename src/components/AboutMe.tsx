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
					I&apos;m a <em>Full-Stack Engineer</em> who builds AI-powered tools
					and user-centered applications at the intersection of software
					development and <strong>learning experience design</strong>. Most
					recently at Blue Marble Space Institute of Science, I created data
					curation tools for NASA, designing{" "}
					<strong>
						<em>intuitive interfaces</em>
					</strong>{" "}
					that make complex scientific systems accessible to researchers,
					integrating LLM models into workflows, and developing modern web
					applications with React, Next.js, and FastAPI.
				</p>

				<p className="mb-3 p-2">
					My path combines two powerful skill sets. I spent years as a physicist
					and university professor, designing STEM curricula and managing course
					delivery through learning management systems for 200+ students
					annually. This experience in instructional design, curriculum
					development, and learning analytics now informs how I approach
					software engineering. I build applications with the same principles I
					used in the classroom: understanding user needs, reducing cognitive
					load, ensuring accessibility (WCAG compliance), and creating intuitive
					experiences that require minimal training.
				</p>

				<p className="mb-3 p-2">
					Whether I'm developing accessible React components, designing
					user-centered learning platforms, or implementing AI-powered tools, I
					focus on bridging complex technical systems with human-centered
					design. I specialize in full-stack development with expertise in
					instructional technology, building everything from responsive
					frontends to backend systems while applying ADDIE principles, learning
					assessment design, and adult learning theory.
				</p>

				<p className="mb-3 p-2">
					I am most experienced in React, Next.js, JavaScript, TypeScript,
					Tailwind CSS, Python and have 7 years managing course delivery in
					Brightspace and Blackboard. I'm also familiar with Framer Motion,
					PostgreSQL, Firebase, FastAPI, Django, xAPI/SCORM standards, and
					learning analytics tools
				</p>

				<p className="mb-3 p-2">
					I am currently seeking opportunities as a Software Engineer or
					Instructional Designer where I can leverage both my technical
					development skills and educational expertise to create impactful
					learning experiences and accessible software solutions.
				</p>
			</div>
		</motion.section>
	);
}
