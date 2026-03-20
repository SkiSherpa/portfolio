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
					and user-centered applications at the intersection of{" "}
					<strong>software development</strong> and{" "}
					<strong>learning experience design</strong>. Most recently at Blue
					Marble Space Institute of Science, I created data curation tools for{" "}
					<strong>NASA</strong>, designing{" "}
					<strong>
						<em>intuitive interfaces</em>
					</strong>{" "}
					that make complex scientific systems accessible to researchers,
					integrating LLM models into workflows, and developing modern web
					applications with <em>React</em>, <em>Next.js</em>, and{" "}
					<em>FastAPI</em>.
				</p>

				<p className="mb-3 p-2">
					My path combines two powerful skill sets. I spent years as a{" "}
					<em>physicist</em> and <strong>university professor</strong>,
					designing STEM curricula and managing course delivery through learning
					management systems for 600+ students. This experience in instructional
					design, curriculum development, and learning analytics now informs how
					I approach software engineering. I build applications with the same
					principles I used in the classroom: <em>understanding user needs</em>,
					reducing cognitive load, <strong>ensuring accessibility</strong> (WCAG
					compliance), and creating{" "}
					<strong>
						<em>intuitive experiences</em>{" "}
					</strong>{" "}
					that require minimal training.
				</p>

				<p className="mb-3 p-2">
					Whether I&apos;m developing{" "}
					<em>
						<strong>accessible</strong> React components
					</em>
					, designing user-centered <em>learning platforms</em>, or{" "}
					<strong>implementing AI-powered tools</strong>, I focus on bridging
					complex technical systems with <em>human-centered design</em>. I
					specialize in full-stack development with expertise in instructional
					technology, building everything from{" "}
					<strong>responsive frontends</strong> to backend systems while
					applying ADDIE principles, learning assessment design, and adult
					learning theory.
				</p>

				<p className="mb-3 p-2">
					I am most experienced in{" "}
					<strong>
						<em>React</em>
					</strong>
					, <strong>Next.js</strong>, JavaScript, <strong>TypeScript</strong>,{" "}
					<strong>Tailwind CSS</strong>, Python and have 7 years managing course
					delivery in Brightspace and Blackboard. I&apos;m also familiar with
					Framer Motion, PostgreSQL, Firebase, FastAPI, Django, xAPI/SCORM
					standards, and learning analytics tools
				</p>

				<p className="mb-3 p-2">
					I am currently seeking opportunities as a{" "}
					<strong>Software Engineer</strong> or{" "}
					<strong>Instructional Designer</strong> where I can leverage both my
					technical development skills and educational expertise to create
					impactful learning experiences and accessible software solutions.
				</p>
			</div>
		</motion.section>
	);
}
