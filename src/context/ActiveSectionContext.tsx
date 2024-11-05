"use client";
import React, { useState, createContext, useContext, useEffect } from "react";
import type { SectionName, Theme } from "@/lib/types";

type ActiveSectionContextProviderProps = {
	children: React.ReactNode;
};

// need to add theme to this typing
type ActiveSectionContextType = {
	activeSection: SectionName;
	setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
	timeOfLastClick: number;
	setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
	theme: Theme; // Correct capitalization to use the type
	setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ActiveSectionContext =
	createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
	children,
}: ActiveSectionContextProviderProps) {
	const [activeSection, setActiveSection] = useState<SectionName>("Home");
	const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);
	const [theme, setTheme] = useState<Theme>("light"); //<Theme> specifically telling ts that theme is the type Theme and not any string.
	// Will give an error in value for theme with out it

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
			window.localStorage.setItem("theme", "dark");
			document.documentElement.classList.add("dark"); // add dark class to the dom
		} else {
			setTheme("light");
			window.localStorage.setItem("theme", "light");
			document.documentElement.classList.remove("dark");
		}
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem("theme") as Theme | null;
		if (localTheme) {
			setTheme(localTheme);
			if (localTheme === "dark") {
				document.documentElement.classList.add("dark");
			}
		} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
			document.documentElement.classList.add("dark");
		}
	}, []);

	return (
		<ActiveSectionContext.Provider
			// the const for what you do with theme added here.
			value={{
				activeSection,
				setActiveSection,
				timeOfLastClick,
				setTimeOfLastClick,
				theme,
				setTheme: toggleTheme, // expose toggleTheme as setTheme. Do not change toggleTheme to setTheme in fn def
			}}
		>
			{children}
		</ActiveSectionContext.Provider>
	);
}

export function useActiveSectionContext() {
	const context = useContext(ActiveSectionContext);

	if (context === null) {
		throw new Error(
			"useActiveSection must be used within an ActiveSectionContextProvider"
		);
	}
	return context;
}
