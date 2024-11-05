"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useThemeSwitchContext } from "@/context/ThemeSwitchContext";

export default function Experience() {
	const { ref, inView } = useSectionInView("Experience", 0.25);
	const { theme } = useThemeSwitchContext();

	return (
		<section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
			<SectionHeading>My experience</SectionHeading>
			<VerticalTimeline animate={true} lineColor="">
				{experiencesData.map((exp, index) => (
					<React.Fragment key={index}>
						<VerticalTimelineElement
							contentStyle={{
								background: theme === "light" ? "#f3f4f6" : "#27272a",
								boxShadow: "none",
								border:
									theme === "light"
										? "1px solid rgba(0,0,0, 0.05)"
										: "1px solid #e4e4e7",
								textAlign: "left",
								padding: "1.3rem 2rem",
							}}
							contentArrowStyle={{
								borderRight:
									theme === "light"
										? "0.4rem solid #9ca3af"
										: "0.4rem solid #e4e4e7",
							}}
							date={exp.date}
							iconStyle={{
								background: theme === "light" ? "#f3f4f6" : "#27272a",
								fontSize: "1.5rem",
							}}
							icon={exp.icon}
							visible={inView}
						>
							<h3 className="font-semibold capitalize">{exp.title}</h3>
							<h4 className="font-normal !mt-0">{exp.location}</h4>
							<p className="font-normal !mt-0 text-gray-700 dark:text-zinc-200">
								{exp.description}
							</p>
						</VerticalTimelineElement>
					</React.Fragment>
				))}
			</VerticalTimeline>
		</section>
	);
}
