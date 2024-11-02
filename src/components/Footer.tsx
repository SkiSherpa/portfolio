import React from "react";

export default function Footer() {
	return (
		<footer className="text-center mb-10 px-4 text-gray-500">
			<small className="mb-2 block text-sm">
				&copy; 2024 Erick Watanabe. All rights reserved.
			</small>
			<p className="text-sm">
				<span className="semi-bold">About this webiste:</span> built with React&
				Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer
				Motion, React Email & Resend, Vercel hosting.
			</p>
		</footer>
	);
}
