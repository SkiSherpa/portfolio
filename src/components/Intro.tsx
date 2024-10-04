import React from "react";
import Image from "next/image";

export default function Intro() {
	return (
		<section>
			<div className="flex items-center justify-center">
				<Image
					src="/ErickInCarmel.png"
					alt="Erick profile photo"
					width="192"
					height="192"
					quality="95"
					className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
				/>
			</div>
		</section>
	);
}
