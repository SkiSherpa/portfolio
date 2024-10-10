"use client";

import React from "react";

export default function SectionHeader({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<h2 className="text-3xl font-bold capitalize mb-8 text-center">
			{children}
		</h2>
	);
}
