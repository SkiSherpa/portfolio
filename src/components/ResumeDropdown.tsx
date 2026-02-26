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
				className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full border-2 focus:scale-100 hover:scale-110 hover:bg-sky-600 active:scale-105 transition"
				onClick={() => setResumeOpen(!resumeOpen)}
			>
				Download Resume <HiDownload />
			</button>

			{resumeOpen && (
				<div className="absolute top-full mt-1 -left-[5%] w-[110%] bg-gray-900 border-2 border-white rounded-3xl overflow-hidden shadow-lg z-10">
					<a
						href="/ErickWatanabeResume.pdf"
						download={true}
						className="flex items-center gap-2 px-7 py-3 text-white hover:bg-sky-600 hover:text-white dark:hover:text-white transition cursor-pointer"
						onClick={() => setResumeOpen(false)}
					>
						Software Engineering <HiDownload />
					</a>
					<hr className="border-zinc-700" />
					<a
						href="/ErickWatanabeResumeID.pdf"
						download={true}
						className="flex items-center gap-2 px-7 py-3 text-white hover:bg-sky-600 hover:text-white dark:hover:text-white transition cursor-pointer"
						onClick={() => setResumeOpen(false)}
					>
						Instructional Design <HiDownload />
					</a>
				</div>
			)}
		</div>
	);
}
