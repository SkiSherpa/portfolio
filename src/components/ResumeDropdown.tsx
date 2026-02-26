"use client";
import React, { useState, useRef, useEffect } from "react";
import { HiDownload } from "react-icons/hi";

export default function ResumeDropdown() {
	const [resumeOpen, setResumeOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(e.target as Node)
			) {
				setResumeOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div ref={dropdownRef} className="relative w-fit">
			<button
				className="bg-white px-7 py-3 flex items-center gap-2 rounded-full border-2 border-zinc-800 focus:scale-110 hover:scale-110 active:scale-105 hover:border-sky-600 hover:text-sky-600 transition cursor-pointer dark:text-zinc-800 dark:hover:text-sky-600"
				onClick={() => setResumeOpen(!resumeOpen)}
			>
				Download Resume <HiDownload />
			</button>

			{resumeOpen && (
				<div className="absolute top-full mt-1 -left-[5%] w-[110%] bg-white border-2 border-zinc-800 rounded-3xl overflow-hidden shadow-lg z-10 hover:border-sky-600">
					<a
						href="/ErickWatanabeResume.pdf"
						download={true}
						className="flex items-center gap-2 px-7 py-3 hover:bg-sky-50 hover:text-sky-600 transition cursor-pointer dark:text-zinc-800 dark:hover:text-sky-600"
						onClick={() => setResumeOpen(false)}
					>
						Software Engineering <HiDownload />
					</a>
					<hr className="border-zinc-200" />
					<a
						href="/ErickWatanabeResumeID.pdf"
						download={true}
						className="flex items-center gap-2 px-7 py-3 hover:bg-sky-50 hover:text-sky-600 transition cursor-pointer dark:text-zinc-800 dark:hover:text-sky-600"
						onClick={() => setResumeOpen(false)}
					>
						Instructional Design <HiDownload />
					</a>
				</div>
			)}
		</div>
	);
}
