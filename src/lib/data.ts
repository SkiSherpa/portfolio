import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaRegSnowflake } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { PiExam } from "react-icons/pi";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Full-Stack Engineer Contractor",
		location: "Long Beach, CA",
		description:
			"Using Next.js, TypeScript, Tailwind, Firebase, and deployed with Vercel, we built a platform accessible on both desktop and mobile devices. This allows tennis coaches to increase client engagement on their site, manage lesson bookings for both kids and adults, oversee their employees, and handle payments from clients.",
		icon: React.createElement(FaReact),
		date: "2024 - present",
	},
	{
		title: "Graduated Hack Reactor Bootcamp",
		location: "Los Angeles, CA",
		description:
			"After 4 months of intense study, I acquired full-stack skills in creating web applications using the following technologies: React, Django 4, FastAPI, Docker Compose, PostgreSQL, and MongoDB.",
		icon: React.createElement(LuGraduationCap),
		date: "2023",
	},
	{
		title: "Visiting Assistant Professor of Physics",
		location: "Los Angeles, CA",
		description:
			"Created synchronous and asynchronous curriculums for Introduction to Mechanics, General Physics I & II, Qualitative Skills in the Modern World, College Algebra, and Pre-Calculus.",
		icon: React.createElement(PiExam),
		date: "2017 - 2021",
	},
	{
		title: "Graduate Teaching Assistant",
		location: "Los Angeles, CA",
		description:
			"Directed meetings for the Teaching Associates in the Introduction to the Physical Sciences course to instruct teaching assistants on how to conduct their lab sections.",
		icon: React.createElement(LuGraduationCap),
		date: "2013 - 2016",
	},
	{
		title: "Certified PSIA level I Ski Instructor",
		location: "South Lake Tahoe, CA",
		description:
			"Instructing people of all ages on the basics and advanced mechanics of skiing at Heavenly Ski Resort.",
		icon: React.createElement(FaRegSnowflake),
		date: "2011 - 2013",
	},
] as const;

export const projectsData = [
	{
		title: "Valter Pavia Tennis Academy",
		description:
			"As a full-stack engineer contractor I helped develop a platform allows coaches to design and manage their own websites, accessible on both desktop and mobile devices.",
		tags: ["React", "Next.js", "Tailwind", "Firebase"],
		imageUrl: "/ValterTennis.png",
	},
	{
		title: "Animos",
		description:
			"Developed a single-page application enabling users to create, browse, and attend pet-friendly events. As the full-stack developer, I implemented key features including event creation and listing functionality.",
		tags: ["React", "FastAPI", "JavaScript", "Python 3", "Redux", "MongoDB"],
		imageUrl: "/AnimosHomePage.png",
	},
	{
		title: "DealerSys",
		description:
			"A single-page application that keeps track of a car dealership’s inventory, sales, and services.",
		tags: ["React", "Django 4", "PostgreSQL", "Python 3"],
		imageUrl: "/DealerSysLight.png",
	},
] as const;

export const skillsData = [
	"JavaScript",
	"TypeScript",
	"Python",
	"React",
	"Next.js",
	"Django",
	"FastAPI",
	"Git",
	"Tailwind",
	"MongoDB",
	"Firebase",
	"HTML",
	"CSS",
	"Framer Motion",
	"Bootstrap",
	"Redux",
	"Node.js",
	"Express",
	"PostgreSQL",
	"RabbitMQ",
	"Agile",
	"Physics",
	"Teaching",
] as const;
