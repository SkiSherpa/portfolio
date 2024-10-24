"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component"; // import statement from docs
import "react-vertical-timeline-component/style.min.css"; // import statement from docs
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
	const { ref } = useSectionInView("Experience", 0.85);
	return (
		<section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
			<SectionHeading>My experience</SectionHeading>
			<VerticalTimeline animate={true} lineColor="">
				{experiencesData.map((exp, index) => (
					<React.Fragment key={index}>
						<VerticalTimelineElement
							contentStyle={{
								background: "#f3f4f6",
								boxShadow: "none",
								border: "1px solid rgba(0,0,0, 0.05)",
								textAlign: "left",
								padding: "1.3rem 2rem",
							}}
							contentArrowStyle={{
								borderRight: "0.4rem solid #9ca3af",
							}}
							date={exp.date}
							iconStyle={{ background: "white", fontSize: "1.5rem" }}
							icon={exp.icon}
							visible={true}
						>
							<h3 className="font-semibold capitalize">{exp.title}</h3>
							<h4 className="font-normal !mt-0">{exp.location}</h4>
							<p className="font-normal !mt-0 text-gray-700">
								{exp.description}
							</p>
						</VerticalTimelineElement>
					</React.Fragment>
				))}
			</VerticalTimeline>
		</section>
	);
}
