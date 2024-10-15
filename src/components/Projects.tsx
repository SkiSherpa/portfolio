import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

export default function Projects() {
	return (
		<section>
			<SectionHeading>My projects</SectionHeading>
			<div>
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}

function Project({ title, description, tags, imageUrl }: ProjectProps) {
	return (
		<section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
			<h3>{title}</h3>
			<p>{description}</p>
			<ul>
				{tags.map((tag, i) => (
					<li key={i}> - {tag}</li>
				))}
			</ul>
			<Image
				src={imageUrl}
				width={500}
				height={300}
				alt="Project I worked on"
				quality={95}
			/>
		</section>
	);
}
