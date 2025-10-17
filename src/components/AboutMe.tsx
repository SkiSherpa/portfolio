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
					I&apos;m a Full-Stack Engineer at Blue Marble Space Institute of
					Science, where I build AI-powered data curation tools for NASA. My
					work focuses on integrating LLM models into scientific workflows,
					developing RAG pipelines, and creating modern web applications with
					React, Next.js, and FastAPI.
				</p>

				<p className="mb-3 p-2">
					My path to software engineering is unconventional. I spent years as a
					physicist and university professor before discovering my passion for
					building software. This background gives me a unique perspective: I
					bring scientific rigor to problem-solving while creating intuitive,
					accessible applications that bridge complex technical systems with
					user needs
				</p>

				<p className="mb-3 p-2">
					I specialize in full-stack development with a focus on AI/ML
					integration, building everything from responsive React frontends to
					FastAPI backends that leverage vector databases and LLM APIs. I&apos;m
					particularly energized by projects that combine cutting-edge
					technology with meaningful impact, like making NASA&apos;s scientific
					data more discoverable and accessible.
				</p>

				<p className="mb-3 p-2">
					I am most experienced in React, Next.js, JavaScript, TypeScript,
					Tailwind, Python, and MongoDB. I am also familiar with Vite, Framer
					Motion, PostgreSQL, Firebase, FastAPI, and Django.
				</p>

				<p className="mb-3 p-2">
					I am currently looking for a full-stack position as a Software
					Engineer!
				</p>
			</div>
		</motion.section>
	);
}
