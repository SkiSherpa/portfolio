import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import DealerSysLandingPageImg from "/DealerSysLandingPageImg.png";
import AnimosHomePageImg from "/AnimosHomePageImg.png";
import ValterTennisImg from "/ValterTennis.png";

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
		title: "Visiting Assistant Professor of Physics",
		location: "Los Angeles, CA",
		description:
			"Courses taught: Introduction to Mechanics, General Physics I & II, Qualitative Skills in the Modern World, College Algebra, Pre-Calculus.",
		icon: React.createElement(LuGraduationCap),
		date: "2017 - 2021",
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
		title: "Full-Stack Engineer Contractor",
		location: "Long Beach, CA",
		description:
			"My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
		icon: React.createElement(FaReact),
		date: "2024 - present",
	},
] as const;

export const projectsData = [
	{
		title: "Valter Pavia Tennis Academy",
		description:
			"I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
		tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
		imageUrl: "/ValterTennisImg",
	},
	{
		title: "Animos",
		description:
			"Single-page application allowing users to create and attend pet-friendly events. I was the full-stack developer. It has features like creating and listing pet friendly events.",
		tags: ["React", "FastAPI", "JavaScript", "Python 3", "Redux", "MongoDB"],
		imageUrl: "/AnimosHomePageImg",
	},
	{
		title: "DealerSys",
		description:
			"A single-page application that keeps track of a car dealership’s inventory, sales, and services.",
		tags: ["React", "Django 4", "PostgreSQL", "Python 3"],
		imageUrl: "/DealerSysLandingPageImg",
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"Prisma",
	"MongoDB",
	"Redux",
	"GraphQL",
	"Apollo",
	"Express",
	"PostgreSQL",
	"Python",
	"Django",
	"Framer Motion",
	"FastAPI",
] as const;
