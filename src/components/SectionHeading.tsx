"use client";

import React from "react";

export default function SectionHeading({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<h2 className="text-3xl font-bold capitalize mb-8 text-center dark:text-zinc-200">
			{children}
		</h2>
	);
}
