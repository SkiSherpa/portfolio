"use client";
import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";

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

			<p className="text-gray-700 -mt-6 dark:text-zinc-200">
				Please contact me directly at{" "}
				<a className="underline" href="erickjwatanabe@gmail.com">
					erickjwatanabe@gmail.com
				</a>{" "}
				or through this form.
			</p>
			<form
				className="flex flex-col mt-10 ml-2 mr-2 sm:ml-0 sm:mr-0"
				action={async (formData) => {
					const { error } = await sendEmail(formData);

					if (error) {
						toast.error(error);
						return;
					}
					toast.success("Email sent!");
				}}
			>
				<input
					className="h-14 rounded-lg borderBlack px-4 dark:bg-zinc-100 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:text-zinc-900 placeholder-gray-400 dark:placeholder-slate-900"
					name="senderEmail"
					type="email"
					placeholder="Your email"
					required
					maxLength={500}
				></input>
				<textarea
					className="h-52 my-3 rounded-lg p-4 borderBlack dark:bg-zinc-100 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:text-zinc-900 placeholder-gray-400 dark:placeholder-slate-900"
					name="message"
					placeholder="Your message"
					required
					maxLength={5000}
				/>
				<SubmitButton />
			</form>
		</motion.section>
	);
}
