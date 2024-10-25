"use client";
import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactMe() {
	const { ref } = useSectionInView("Contact", 0.85);
	return (
		<motion.section
			ref={ref}
			id="contact"
			className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1,
			}}
		>
			<SectionHeading>Contact me</SectionHeading>

			<p className="text-gray-700 -mt-6">
				Please contact me directly at{" "}
				<a className="underline" href="erickjwatanabe@gmail.com">
					erickjwatanabe@gmail.com
				</a>{" "}
				or through this form.
			</p>
			<form className="flex flex-col mt-10">
				<input
					className="h-14 rounded-lg borderBlack px-4"
					type="email"
					placeholder="Your email"
				></input>
				<textarea
					className="h-52 my-3 rounded-lg p-4 borderBlack"
					placeholder="Your message"
				/>
				<button
					type="submit"
					className=" group flex items-center justify-center gap-2 h-[3rem] w-[8rem] p-2 border-2 rounded-full outline-none bg-gray-900 transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:text-sky-600"
				>
					Submit{" "}
					<FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
				</button>
			</form>
		</motion.section>
	);
}
