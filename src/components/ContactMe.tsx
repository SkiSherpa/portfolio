"use client";
import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactMe() {
	const { ref } = useSectionInView("About", 0.85);
	return (
		<section
			ref={ref}
			id="contact"
			className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
		>
			<SectionHeading>Contact me</SectionHeading>
			<p className="text-gray-700">
				Please contact me directly at{" "}
				<a className="underline" href="erickjwatanabe@gmail.com">
					erickjwatanabe@gmail.com
				</a>{" "}
				or through this form.
			</p>
			<form className="mt-10">
				<input className="h-14 rounded-lg borderBlack" type="email"></input>
				<textarea className="h-52 my-3 rounded-lg p-4 borderBlack" />
				<button type="submit">
					Submit <FaPaperPlane />
				</button>
			</form>
		</section>
	);
}
