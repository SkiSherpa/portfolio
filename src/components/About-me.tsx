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
			<p>
				I'm a Physics Professor turned Software Engineer. I have three years of
				programming experience.
			</p>
		</motion.section>
	);
}
