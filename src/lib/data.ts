import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
			"Our stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
		icon: React.createElement(FaReact),
		date: "2024 - present",
	},
	{
		title: "Graduated Hack Reactor Bootcamp",
		location: "Los Angeles, CA",
		description:
			"After 4 months of intense study I have the tools to be a full stack developer",
		icon: React.createElement(LuGraduationCap),
		date: "2023",
	},
	{
		title: "Visiting Assistant Professor of Physics",
		location: "Los Angeles, CA",
		description:
			"Courses taught: Introduction to Mechanics, General Physics I & II, Qualitative Skills in the Modern World, College Algebra, Pre-Calculus.",
		icon: React.createElement(LuGraduationCap),
		date: "2017 - 2021",
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
] as const;
